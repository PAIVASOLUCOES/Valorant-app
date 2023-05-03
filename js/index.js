import { dropdownExport } from "./menuDropdown.js";
import { abrirMenuMobile } from "./menuMobile.js";
import { modalLogin } from "./modal-login.js";

document.addEventListener("DOMContentLoaded", () => {
  const containerTitle = document.querySelector(".container-title");

  window.addEventListener("load", () => {
    containerTitle.classList.add("active");
    dropdownExport();
    abrirMenuMobile();
    modalLogin();
  });
});
