import { fazerFetchArmas } from "./fetchsValorant.js";
import { dropdownExport } from "./menuDropdown.js";
import { abrirMenuMobile } from "./menuMobile.js";

const nav = document.querySelector(".nav");
const footer = document.querySelector(".footer");
const containerGuns = document.getElementById("container-armas");
const containerArma = document.querySelector(".container-guns");
const containerSection = document.querySelector(".container-gunsSections");
const btnDropdown = document.getElementById("dropdown-inicial");
const dropdown = document.querySelector(".dropdown");
const setinhaImg = document.querySelector("#dropdown-inicial img");
const liGunsList = document.querySelectorAll(".li-guns");

let armazenarArmas = null;

async function fetchInicial() {
  if (armazenarArmas === null) {
    const response = await fazerFetchArmas();
    armazenarArmas = response.data;
  }

  armazenarArmas.forEach((item) => {
    const div = createCard(item);
    containerGuns.appendChild(div);

    const btnAleatorio = div.querySelector("button");
    btnAleatorio.addEventListener("click", async () => {
      const cardElement = btnAleatorio.closest(".card-gun");
      const imgElement = cardElement.querySelector("img");
      const armaId = btnAleatorio.id;
      const url = `https://valorant-api.com/v1/weapons/${armaId}?language=pt-BR`;
      const response = await fetch(url);
      const final = await response.json();
      const fetchGun = final.data;
      const numSkins = fetchGun.skins.length;
      const numberRandom = Math.floor(Math.random() * numSkins);
      const selectedSkin = fetchGun.skins[numberRandom];

      if (selectedSkin.displayIcon !== null) {
        imgElement.src = selectedSkin.displayIcon;
      }
    });
  });
  footer.style.display = " flex";
}

function createCard(item) {
  const div = document.createElement("div");
  div.classList.add("card-gun");
  div.dataset.type = item.shopData?.category ?? null;

  const category = document.createElement("span");
  category.innerHTML = "Categoria:";

  const InsertnameGun = document.createElement("h2");
  InsertnameGun.innerHTML = item.displayName;

  const divImg = document.createElement("div");
  divImg.classList.add("container-img");

  const img = document.createElement("img");
  img.src = item.displayIcon;

  const spanPrice = document.createElement("span");
  spanPrice.innerHTML = "Preço:";

  const InsertspanPrice = document.createElement("span");
  InsertspanPrice.innerHTML = item.shopData?.cost ?? "Sem preço";

  const insertTypeGun = document.createElement("span");
  insertTypeGun.innerHTML = item.shopData?.category ?? "Categoria desconhecida";

  const divTypesGuns = document.createElement("div");
  divTypesGuns.innerHTML = category.outerHTML + insertTypeGun.outerHTML;

  const divInserirSpanPrice = document.createElement("span");
  divInserirSpanPrice.innerHTML =
    spanPrice.outerHTML + InsertspanPrice.outerHTML;

  const divInsertsTypePrice = document.createElement("div");
  divInsertsTypePrice.classList.add("information-guns");
  divInsertsTypePrice.append(divInserirSpanPrice, divTypesGuns);

  const btnRandom = document.createElement("button");
  btnRandom.innerHTML = "Skin aleatória";
  btnRandom.id = item.uuid;

  const divRandomBtn = document.createElement("div");
  divRandomBtn.classList.add("container-btnRandom");
  divRandomBtn.innerHTML = btnRandom.outerHTML;

  const divInformacao = document.createElement("div");
  divInformacao.classList.add("container-informacao");
  divInformacao.append(divInsertsTypePrice, divRandomBtn);

  divImg.appendChild(img);
  div.append(InsertnameGun, divImg, divInformacao);

  return div;
}

btnDropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  setinhaImg.classList.toggle("active");
});

liGunsList.forEach((li) => {
  li.addEventListener("click", (event) => {
    const constsDivCards = document.querySelectorAll(".card-gun");
    const categoriaDoClick = event.target.textContent.toLowerCase();

    dropdown.classList.remove("active");
    setinhaImg.classList.remove("active");

    constsDivCards.forEach((card) => {
      if (categoriaDoClick === "todas as armas") {
        card.classList.remove("disapeareCard");
      } else {
        const cardType = card.getAttribute("data-type");

        if (cardType !== null && cardType.toLowerCase() !== categoriaDoClick) {
          card.classList.add("disapeareCard");
        } else {
          card.classList.remove("disapeareCard");
        }
      }

      containerArma.classList.add("active");

      setTimeout(() => {
        containerArma.classList.remove("active");
      }, 500);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    containerSection.classList.add("active");
    nav.classList.add("active");
    fetchInicial();
    dropdownExport();
    abrirMenuMobile();
  });
});
