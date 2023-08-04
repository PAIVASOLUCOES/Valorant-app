import React, { useEffect } from "react";
import {
  ContainerLeft,
  ContainerRight,
  ContainerModal,
  ModalWindow,
  BtnsGun,
  IconBtn,
  ContainerBtn,
  TitlesModal,
  ContainerDamage,
  RangeTitle,
  Description,
  InfoDiv,
  SpanDamage,
  SpanContainer,
} from "./Style";

import ImageSkeleton from "../Helpers/Skeleton";
import arrowForwards from "../../assets/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg";
import arrowBack from "../../assets/arrow_back_FILL0_wght400_GRAD0_opsz48.svg";
import iconClose from "../../assets/close_FILL0_wght400_GRAD0_opsz48 (1).svg";
import { CloseModal } from "./Style";
import { TypeModal, damageStats } from "../../Types";

const ModalGuns: React.FC<TypeModal> = ({ Arma, modalValue, setModal }) => {
  function handleModal() {
    setModal(!modalValue);
  }

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
  if (Arma !== undefined)
    return (
      <ContainerModal>
        <ModalWindow>
          <CloseModal src={iconClose} onClick={handleModal} />
          <ContainerLeft>
            <TitlesModal>{Arma.displayName}</TitlesModal>
            <ImageSkeleton src={Arma.displayIcon} className="armaGun" />
            <ContainerBtn>
              <BtnsGun>
                <IconBtn src={arrowBack} />
              </BtnsGun>
              <BtnsGun>
                <IconBtn src={arrowForwards} />
              </BtnsGun>
            </ContainerBtn>
          </ContainerLeft>
          <ContainerRight>
            <InfoDiv>
              <TitlesModal>Informações sobre o dano</TitlesModal>
              {Arma.weaponStats.damageRanges.map((arma: damageStats, index) => (
                <ContainerDamage key={index}>
                  {arma.rangeStartMeters === 0 ? (
                    <>
                      <RangeTitle>0 a 30 metros</RangeTitle>
                    </>
                  ) : (
                    <RangeTitle>30 a 50 metros</RangeTitle>
                  )}
                  <Description>
                    <SpanContainer>
                      <SpanDamage>Dano no corpo:</SpanDamage>
                      <SpanDamage>{arma.bodyDamage}</SpanDamage>
                    </SpanContainer>
                    <SpanContainer>
                      <SpanDamage>Dano na cabeça:</SpanDamage>
                      <SpanDamage>{arma.headDamage.toFixed(0)}</SpanDamage>
                    </SpanContainer>
                    <SpanContainer>
                      <SpanDamage>Dano na perna:</SpanDamage>
                      <SpanDamage>{arma.legDamage.toFixed(0)}</SpanDamage>
                    </SpanContainer>
                  </Description>
                </ContainerDamage>
              ))}
            </InfoDiv>
          </ContainerRight>
        </ModalWindow>
      </ContainerModal>
    );
};

export default ModalGuns;
