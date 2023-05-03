import { dropdownExport } from "./menuDropdown.js";
import { abrirMenuMobile } from "./menuMobile.js";
import { modalLogin } from "./modal-login.js";

document.addEventListener("DOMContentLoaded", () => {
  const containerTitle = document.querySelector(".container-title");
  const nav = document.querySelector(".nav");
  const footer = document.querySelector(".footer");
  window.addEventListener("load", () => {
    containerTitle.classList.add("active");
    nav.classList.add("active");
    footer.classList.add("active");
    dropdownExport();
    abrirMenuMobile();
    modalLogin();
  });
});
