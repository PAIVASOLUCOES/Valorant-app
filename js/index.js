import { dropdownExport } from "./menuDropdown.js";
import { abrirMenuMobile } from "./menuMobile.js";
import { modalLogin } from "./modal-login.js";
import { loadAnimations } from "./animations.js";

const containerTitle = document.querySelector(".container-title");

window.addEventListener("load", () => {
  containerTitle.classList.add("active");
});

loadAnimations();
dropdownExport();
abrirMenuMobile();
modalLogin();
