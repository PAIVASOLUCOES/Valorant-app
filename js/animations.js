const nav = document.querySelector(".nav");
export function loadAnimations() {
  const footer = document.querySelector(".footer");
  window.addEventListener("load", () => {
    nav.classList.add("active");
    footer.classList.add("active");
  });
}
loadAnimations();
