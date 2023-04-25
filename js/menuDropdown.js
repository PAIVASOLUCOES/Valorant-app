// Dropdownmenu  navbar
export function dropdownExport() {
  const dropdownLink = document.querySelector("#dropdown-menu");
  const dropdownMenu = document.querySelector(".dropdown-info");

  dropdownLink.addEventListener("mouseover", openDropdown);

  function openDropdown() {
    dropdownMenu.classList.add("active");
  }

  dropdownLink.addEventListener("mouseout", mouseOut);
  function mouseOut() {
    dropdownMenu.classList.remove("active");
  }
  dropdownLink.addEventListener("click", (event) => {
    event.preventDefault();
    if ((dropdownMenu.classList.contains = "active")) {
      dropdownLink.removeEventListener("mouseout", mouseOut);
    } else {
      dropdownMenu.classList.add("active");
    }
    document.addEventListener("click", outSideClick);
  });
  function outSideClick(event) {
    const posiçãoDoBtn = dropdownLink.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    if (
      x >= posiçãoDoBtn.left &&
      x <= posiçãoDoBtn.right &&
      y >= posiçãoDoBtn.top &&
      y <= posiçãoDoBtn.bottom
    ) {
    } else {
      dropdownLink.addEventListener("mouseout", mouseOut);
      mouseOut();
    }
  }
}
