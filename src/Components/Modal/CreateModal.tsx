import React, { useState } from "react";
import {
  CloseModal,
  ContainerAbility,
  ContainerDescription,
  ContainerIcons,
  ContainerLeft,
  ContainerModal,
  ContainerRight,
  DescriptionAbility,
  DivDescription,
  DivIcons,
  ModalWindow,
  SpanAbout,
  TitleAbility,
  TitleAbouts,
  TitleAgente,
} from "../Agentes/Style";
import iconClose from "../../assets/close_FILL0_wght400_GRAD0_opsz48 (1).svg";
import ImageSkeleton from "../Helpers/Skeleton";

const Modal = ({ AgentesApi, modalValue, setMenuIsOpen }) => {
  if (AgentesApi !== undefined) {
    const [indexIcon, setIndexIcon] = useState(0);

    function handleIcon(index) {
      setIndexIcon(index);
    }

    function handleModal() {
      setMenuIsOpen(!modalValue);
    }
    return (
      <ContainerModal>
        <ModalWindow>
          <CloseModal src={iconClose} onClick={handleModal} />
          <ContainerLeft>
            <TitleAgente>{AgentesApi.displayName}</TitleAgente>
            <ImageSkeleton
              className="Img-modal"
              src={AgentesApi.fullPortrait}
            />
          </ContainerLeft>
          <ContainerRight>
            <ContainerDescription>
              <DivDescription>
                <TitleAbouts>Descrição:</TitleAbouts>
                <TitleAbouts>
                  Categoria: {AgentesApi.role.displayName}{" "}
                </TitleAbouts>
              </DivDescription>
              <SpanAbout>{AgentesApi.description}</SpanAbout>
            </ContainerDescription>
            <ContainerAbility>
              <TitleAbility className="active">
                Habilidades do agente
              </TitleAbility>
              <ContainerIcons>
                {AgentesApi.abilities.map((abilidade, index) =>
                  abilidade.displayIcon ? (
                    <ImageSkeleton
                      key={index}
                      src={abilidade.displayIcon}
                      id={index}
                      className="icon-ability"
                      onClick={() => handleIcon(index)}
                    />
                  ) : (
                    ""
                  )
                )}
              </ContainerIcons>
              <DivIcons>
                <TitleAbility>
                  {AgentesApi.abilities[indexIcon].displayName}
                </TitleAbility>
                <DescriptionAbility>
                  {AgentesApi.abilities[indexIcon].description}
                </DescriptionAbility>
              </DivIcons>
            </ContainerAbility>
          </ContainerRight>
        </ModalWindow>
      </ContainerModal>
    );
  }
};

export default Modal;
