const idPersonagem = localStorage.getItem("idPersonagem");
let habilidadeAtual = 0;
async function fetchAgente() {
  const url = `https://valorant-api.com/v1/agents/${idPersonagem}?language=pt-BR`;
  const fetchInicial = await fetch(url);
  const { data } = await fetchInicial.json();
  if (data) {
    const imagemInsert = document.getElementById("imagem-left");
    imagemInsert.src = data.fullPortraitV2;
    const nameInsert = document.getElementById("name-agente");
    nameInsert.innerHTML = data.displayName;
    const insertRole = document.getElementById("role");
    insertRole.innerHTML = data.role.displayName;
    const insertBiografy = document.getElementById("biografia");
    insertBiografy.innerHTML = data.description;
    const ulAgentes = document.getElementById("icons-abilities");

    data.abilities
      .filter((item) => item.slot !== "Passive") // adiciona filtro aqui
      .map((item) => {
        const img = document.createElement("img");
        const li = document.createElement("li");
        img.src = item.displayIcon;
        img.classList.add("img-agentes");
        li.appendChild(img);
        ulAgentes.appendChild(li);

        img.addEventListener("click", () => {
          habilidadeAtual = data.abilities.indexOf(item);

          const insertAbilityTitle = document.querySelector(".abilities-title");
          insertAbilityTitle.innerHTML =
            data.abilities[habilidadeAtual].displayName;
          const insertAboutAgente = document.getElementById("p-aboutAbilitie");
          insertAboutAgente.innerHTML =
            data.abilities[habilidadeAtual].description;
        });
      });

    const containerTitle = document.querySelector(".container-title");
    const insertAbilityTitle = document.createElement("h2");
    insertAbilityTitle.classList.add("abilities-title");
    insertAbilityTitle.innerHTML = data.abilities[habilidadeAtual].displayName;
    containerTitle.innerHTML = insertAbilityTitle.outerHTML;
    const insertAboutAgente = document.getElementById("p-aboutAbilitie");
    insertAboutAgente.innerHTML = data.abilities[habilidadeAtual].description;
  }
}

window.addEventListener("load", () => {
  fetchAgente();
});
