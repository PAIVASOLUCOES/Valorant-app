

import {
  BtnMore,
  Card,
  ContainerAgentes,
  ContainerCards,
  TitleAgentes,
  TitleCard,
} from "./Style";
import { useState } from "react";
import Modal from "../ModalAgentes/CreateModal";
import ImageSkeleton from "../Helpers/Skeleton";
import Loading from "../Helpers/Loading";
import BtnTop from "../Helpers/BtnTop";
import { fetchAllAgents } from "../Hooks/FetchsApi";
import { DataApi } from "../../Types";

const Agentes = () => {
  const { AllAgents, ErrorFetchAgents, LoadingAgents } = fetchAllAgents();
  const [agentesApi, setAgentesApi] = useState<DataApi | undefined>();

  const [modalValue, setModal] = useState(false);
  function handleModal(agente: DataApi | undefined) {
    if (agente) {
      setAgentesApi(agente);
      setModal(!modalValue);
    }
  }

  if (LoadingAgents) return <Loading />;
  if (ErrorFetchAgents) return <h2>Erro</h2>;
  if (AllAgents !== undefined) {
    return (
      <>
        {/* <Header /> */}
        <BtnTop />
        <ContainerAgentes>
          <TitleAgentes>Agentes</TitleAgentes>
          <ContainerCards>
            {AllAgents.map((agente) => {
              return (
                <Card key={agente.uuid} onClick={() => handleModal(agente)}>
                  <TitleCard>{agente.displayName}</TitleCard>
                  <ImageSkeleton
                    src={agente.displayIcon}
                    className="img-icon"
                  />
                  <BtnMore>Mais informações</BtnMore>
                </Card>
              );
            })}
          </ContainerCards>
          {modalValue ? (
            <Modal
              AgentesApi={agentesApi}
              modalValue={modalValue}
              setMenuIsOpen={setModal}
            />
          ) : (
            ""
          )}
        </ContainerAgentes>
      </>
    );
  }
};

export default Agentes;
