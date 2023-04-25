const closeSideBar = document.querySelector(".close-side");

const iconeMenuMobile = document.querySelector(".menu-mobile");
const sideBar = document.querySelector(".sidebar");

export function abrirMenuMobile() {
  // Open Menu Mobile

  iconeMenuMobile.addEventListener("click", () => {
    iconeMenuMobile.classList.add("active");
    sideBar.classList.toggle("active");
  });

  closeSideBar.addEventListener("click", fecharSideBar);
}

export function fecharSideBar() {
  sideBar.classList.toggle("active");
  iconeMenuMobile.classList.toggle("active");
}

//

//Open DropdownLi no menuMobile

const sideEvent = document.querySelector(".side-event");
const dropdownSide = document.querySelector(".dropdown-side");
const dropdownHref = document.querySelectorAll(".dropdown-a");
sideEvent.addEventListener("click", (event) => {
  event.preventDefault();
  dropdownSide.classList.toggle("active");
  dropdownHref.forEach((item) => {
    item.classList.toggle("active");
  });
});
