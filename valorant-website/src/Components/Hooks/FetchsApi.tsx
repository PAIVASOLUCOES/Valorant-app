import { useEffect, useState } from "react";

export const fetchAllAgents = () => {
  const url = `https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR`;

  const [AllAgents, setAgents] = useState();
  const [ErrorFetchAgents, setErrorAgents] = useState(false);
  const [LoadingAgents, setLoadingAgents] = useState(false);
  const fetchAgents = async () => {
    try {
      setLoadingAgents(true);
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setAgents(result);
      } else {
        throw new Error("Error ao trazer os agentes");
      }
    } catch {
      setErrorAgents(true);
    } finally {
      setLoadingAgents(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, [url]);
  return { AllAgents, LoadingAgents, ErrorFetchAgents };
};
export const fetchAllMaps = () => {
  const url = `https://valorant-api.com/v1/maps?language=pt-BR`;

  const [AllMaps, setMaps] = useState();
  const [ErrorFetchMapas, setErrorMapas] = useState(false);
  const [LoadingMapas, setLoadingMapas] = useState(false);
  const fetchAgents = async () => {
    try {
      setLoadingMapas(true);
      const response = await fetch(url);
      console.log(response);
      if (response.ok) {
        const result = await response.json();
        setMaps(result.data);
      } else {
        throw new Error("Error ao trazer os agentes");
      }
    } catch {
      setErrorMapas(true);
    } finally {
      setLoadingMapas(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, [url]);
  return { AllMaps, ErrorFetchMapas, LoadingMapas };
};
export const fetchAllGuns = () => {
  const url = `https://valorant-api.com/v1/weapons?language=pt-BR`;

  const [Arsenal, setArsenal] = useState();
  const [ArsenalLoading, setArsenalLoading] = useState(false);
  const [ErrorArsenal, setErrorArsenal] = useState(false);
  const fetchAgents = async () => {
    try {
      setArsenalLoading(true);
      const response = await fetch(url);

      if (response.ok) {
        const result = await response.json();
        setArsenal(result.data);
      } else {
        throw new Error("Error ao trazer os agentes");
      }
    } catch {
      setErrorArsenal(true);
    } finally {
      setArsenalLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, [url]);
  return { Arsenal, ArsenalLoading, ErrorArsenal };
};
