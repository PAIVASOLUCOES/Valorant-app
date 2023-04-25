export async function fazerFetchAgentes() {
  const url = `https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR`;
  const fetchAgentes = await fetch(url);
  if (fetchAgentes.status === 200) {
    const result = await fetchAgentes.json();
    return result;
  } else {
    console.log("Não foi possível obter os dados da API.");
  }
}
export async function fazerFetchArmas() {
  const url = `https://valorant-api.com/v1/weapons?language=pt-BR`;
  const fetchGuns = await fetch(url);
  if (fetchGuns.status === 200) {
    const result = await fetchGuns.json();
    return result;
  } else {
    console.log("Não foi possível obter os dados da API.");
  }
}

export async function fazerFetchMapas() {
  const url = `https://valorant-api.com/v1/maps?language=pt-BR`;
  const fetchMapas = await fetch(url);
  if (fetchMapas.status === 200) {
    const result = await fetchMapas.json();
    return result;
  } else {
    console.log("Não foi possível obter os dados da API.");
  }
}
