import { fazerFetchAgentes } from "./fetchsValorant.js";
import { dropdownExport } from "./menuDropdown.js";
import { abrirMenuMobile } from "./menuMobile.js";

async function dadosFetch() {
  const fetchInicial = await fazerFetchAgentes();
  const result = fetchInicial.data;
  return result;
}

async function criarcards() {
  localStorage.removeItem("idPersonagem");
  const result = await dadosFetch();

  const containerCards = document.getElementById("slide");
  result.map((agente) => {
    const li = document.createElement("li");
    li.classList.add("card-agentes");
    const divImagem = document.createElement("div");
    divImagem.classList.add("container-imagemAgente");
    const imgAgente = document.createElement("img");
    imgAgente.src = agente.fullPortraitV2;
    divImagem.appendChild(imgAgente);
    const name = document.createElement("span");
    name.innerHTML = agente.displayName;
    name.classList.add("span-name");
    const divAbout = document.createElement("div");
    const buttonAgentes = document.createElement("button");
    buttonAgentes.classList.add("btn-information");
    const link = document.createElement("a");
    link.href = "http://127.0.0.1:5500/infoAgentes.html";
    link.innerHTML = "Ver mais";
    link.id = agente.uuid;
    link.addEventListener("click", () =>
      localStorage.setItem("idPersonagem", link.id)
    );
    buttonAgentes.appendChild(link);
    buttonAgentes.setAttribute.id = agente.id;
    divAbout.append(name, buttonAgentes);
    li.append(divImagem, divAbout);
    divAbout.classList.add("info-agentes");
    containerCards.appendChild(li);
  });
}
abrirMenuMobile();
dropdownExport();

let atualizarId;
class SlideMapas {
  constructor(slide, wrapper) {
    this.slide = slide;
    this.wrapper = wrapper;
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activeClass = "active";
    this.onResize = debounce(this.onResize.bind(this), 200);
  }
  transition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
  }
  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    let movetype;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.dist.startX = event.clientX;
      movetype = "mousemove";
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      movetype = "touchmove";
    }
    this.wrapper.addEventListener(movetype, this.onMove, { passive: true });
    this.transition(false);
  }

  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const movetype = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.changeslideOnEnd();
  }
  changeslideOnEnd() {
    if (this.dist.movement > 122 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -122 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }
  onResize() {
    setTimeout(() => {
      this.saveSlideChildren();
      this.changeSlide(this.index.active);
    }, 1000);
  }
  addResizeEvents() {
    window.addEventListener("resize", this.onResize);
  }
  changeActiveClass() {
    this.slideArray.forEach((item) =>
      item.element.classList.remove(this.activeClass)
    );
    this.slideArray[this.index.active].element.classList.add(this.activeClass);
    atualizarId = this.slideArray[this.index.active].element.id;
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart, {
      passive: true,
    });
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
    btnNext.addEventListener("click", this.activeNextSlide.bind(this));
    btnPrev.addEventListener("click", this.activePrevSlide.bind(this));
  }
  slidePositon(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }
  async saveSlideChildren() {
    await criarcards();
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePositon(element);
      return {
        position,
        element,
      };
    });
  }
  slideIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }
  activePrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
  }
  activeNextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next);
  }
  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(this.slideArray[index].position);
    this.slideIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
  }
  async init() {
    this.addSlideEvents();
    await this.saveSlideChildren();
    this.addResizeEvents();
    this.transition(this.transition(true));
    return this;
  }
}

const slide = document.getElementById("slide");
const wrapper = document.getElementById("slide-wrapper");
const slideMapas = new SlideMapas(slide, wrapper);

document.addEventListener("DOMContentLoaded", async () => {
  await slideMapas.init();
  slideMapas.changeSlide(3);
});

function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
