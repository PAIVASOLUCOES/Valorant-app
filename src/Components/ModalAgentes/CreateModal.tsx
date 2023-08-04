import React, { useEffect, useState } from "react";
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
} from "./Style";
import iconClose from "../../assets/close_FILL0_wght400_GRAD0_opsz48 (1).svg";
import ImageSkeleton from "../Helpers/Skeleton";
import { ModaisTypes } from "../../Types";

const Modal: React.FC<ModaisTypes> = ({
  AgentesApi,
  modalValue,
  setMenuIsOpen,
}) => {
  if (AgentesApi !== undefined) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [indexIcon, setIndexIcon] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showIconDescription, setShowIconDescription] = useState(true);

    // eslint-disable-next-line no-inner-declarations
    function handleIcon(index: number) {
      setIndexIcon(index);
      setShowIconDescription(false);
      setTimeout(() => {
        setShowIconDescription(true);
      }, 0);
    }

    // eslint-disable-next-line no-inner-declarations
    function handleModal() {
      setMenuIsOpen(!modalValue);
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (modalValue) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      return () => {
        document.body.style.overflow = "auto";
      };
    }, [modalValue]);

    return (
      <ContainerModal>
        <ModalWindow colorsmodal={AgentesApi.backgroundGradientColors}>
          <CloseModal src={iconClose} onClick={handleModal} />
          <ContainerLeft>
            <TitleAgente>{AgentesApi.displayName}</TitleAgente>
            <ImageSkeleton
              className="Img-modal"
              src={AgentesApi.fullPortrait}
            />
            <ImageSkeleton
              className="NameAgente Top"
              src={AgentesApi.background}
            />
            <ImageSkeleton
              className="NameAgente Bot"
              src={AgentesApi.background}
            />
          </ContainerLeft>
          <ContainerRight>
            <ContainerDescription>
              <DivDescription>
                <TitleAbouts>Descrição:</TitleAbouts>
                <TitleAbouts>
                  Categoria:
                  {AgentesApi.role !== undefined
                    ? AgentesApi.role.displayName
                    : ""}
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
                      className="icon-ability"
                      onClick={() => handleIcon(index)}
                    />
                  ) : (
                    ""
                  )
                )}
              </ContainerIcons>
              <DivIcons className={showIconDescription ? "show" : ""}>
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
