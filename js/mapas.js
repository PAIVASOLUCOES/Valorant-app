import { abrirMenuMobile } from "./menuMobile.js";
import { dropdownExport } from "./menuDropdown.js";
import { fazerFetchMapas } from "./fetchsValorant.js";

let atualizarId;

// colocar mapas
async function pegarFetchMapa() {
  const fetchInicial = await fazerFetchMapas();
  const result = fetchInicial.data;
  result.map((item) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");
    span.innerHTML = item.displayName;
    img.src = item.splash;

    li.append(span, img);
    li.id = item.uuid;

    slide.append(li);
  });
}

// Fazer navegação por slides

const slide = document.querySelector(".slide");

let isDragging = false;
let startPosition = 0;
let previousScroll = 0;

slide.addEventListener("mousedown", (e) => {
  e.preventDefault();
  startPosition = e.pageX;
  isDragging = true;
  slide.style.transition = "none";
});

slide.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (isDragging) {
    const currentPosition = e.pageX;
    const distance = 2 * (currentPosition - startPosition);
    slide.scrollLeft = previousScroll - distance;
  }
});

slide.addEventListener("mouseup", () => {
  previousScroll = slide.scrollLeft;
  isDragging = false;
  slide.style.transition = "";
});

slide.addEventListener("mouseleave", () => {
  isDragging = false;
  slide.style.transition = "";
});

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    const nav = document.querySelector(".nav");
    const footer = document.querySelector(".footer");
    slide.classList.add("active");
    nav.classList.add("active");
    footer.classList.add("active");
    pegarFetchMapa();
    abrirMenuMobile();
    dropdownExport();
  });
});
