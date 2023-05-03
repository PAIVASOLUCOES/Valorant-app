import { fazerFetchAgentes } from "./fetchsValorant.js";
import { dropdownExport } from "./menuDropdown.js";
import { abrirMenuMobile } from "./menuMobile.js";

const scrollContent = document.querySelector("#slide");
const nav = document.querySelector(".nav");
const footer = document.querySelector(".footer");

let isDragging = false;
let startPosition = 0;
let previousScroll = 0;
let ativo;

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
    link.href = "/infoAgentes.html";
    link.innerHTML = "Ver mais";
    link.id = agente.uuid;
    link.addEventListener("click", () => {
      localStorage.setItem("idPersonagem", link.id);
    });

    buttonAgentes.appendChild(link);
    buttonAgentes.setAttribute.id = agente.id;

    divAbout.append(name, buttonAgentes);
    li.append(divImagem, divAbout);
    divAbout.classList.add("info-agentes");
    containerCards.appendChild(li);
  });
  footer.style.opacity = 1;
}

scrollContent.addEventListener("mousedown", (e) => {
  e.preventDefault();
  startPosition = e.pageX;
  isDragging = true;
  scrollContent.style.transition = "none";
});

scrollContent.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (isDragging) {
    const currentPosition = e.pageX;
    const distance = 2 * (currentPosition - startPosition);
    scrollContent.scrollLeft = previousScroll - distance;
  }
});

scrollContent.addEventListener("mouseup", () => {
  previousScroll = scrollContent.scrollLeft;
  isDragging = false;
  scrollContent.style.transition = "";
});

scrollContent.addEventListener("mouseleave", () => {
  isDragging = false;
  scrollContent.style.transition = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const slideCards = document.querySelector(".slideCards");

  window.addEventListener("load", () => {
    slideCards.classList.add("active");
    nav.classList.add("active");
    footer.classList.add("active");
    dropdownExport();
    abrirMenuMobile();
    criarcards();
  });
});
