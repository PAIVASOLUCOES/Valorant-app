import styled from "styled-components";

export const ContainerModal = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: hsla(0, 0%, 0%, 0.3);
`;
export const ModalWindow = styled.div`
  display: flex;
  width: 1200px;
  max-width: 1170px;
  padding: 25px;
  animation: menuDown 0.3s forwards;
  background: linear-gradient(#557f8cff, #2b4e7cff);
  width: 85%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @keyframes menuDown {
    from {
      transform: translateY(-550px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (max-width: 1220px) {
    flex-direction: column;
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 520px) {
    max-height: 100%;
    height: 100%;
    width: 100%;
    padding: 0px;

    justify-content: start;
    overflow: auto;
  }
`;
export const ContainerLeft = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  @media (max-width: 500px) {
    align-items: center;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  @media (max-width: 1220px) {
    width: 100%;
  }
`;
export const TitlesModal = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #fff;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-align: center;
`;
export const ContainerBtn = styled.button`
  display: flex;
  background: transparent;
  justify-content: space-between;
  @media (max-width: 520px) {
    width: 80%;
  }
`;
export const BtnsGun = styled.button`
  border-radius: 9px;
  cursor: pointer;
`;
export const SpanInformation = styled.span``;
export const IconBtn = styled.img`
  width: 40px;
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerDamage = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    align-items: center;
  }
`;
export const ContainerDamageRange = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
`;
export const RangeTitle = styled.h3`
  font-family: "Inter", sans-serif;
  color: #cac7c7;
  margin-bottom: 1.2rem;
  @media (max-width: 800px) {
    font-size: 1.7rem;
  }
`;
export const SpanDamage = styled.span``;
export const SpanContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  font-family: "Inter", sans-serif;
  color: #aaaaaa;
`;
export const Description = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1220px) {
    gap: 1rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    font-size: 1.5rem;
  }
`;
export const CloseModal = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
`;
