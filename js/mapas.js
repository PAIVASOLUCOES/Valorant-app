import { abrirMenuMobile } from "./menuMobile.js";
import { dropdownExport } from "./menuDropdown.js";
import { fazerFetchMapas } from "./fetchsValorant.js";
abrirMenuMobile();
dropdownExport();
let atualizarId;

// colocar mapas
async function pegarFetchMapa() {
  const mapasUl = document.getElementById("slide");
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

    mapasUl.append(li);
  });
}

// Fazer navegação por slides
pegarFetchMapa();

const scrollContent = document.querySelector("#slide");

let isDragging = false;
let startPosition = 0;
let previousScroll = 0;

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
