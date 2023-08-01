import styled from "styled-components";
export const ContainerAgentes = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
export const TitleAgentes = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
`;
export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.div`
  text-align: center;
  box-shadow: rgb(170, 170, 170) 0px 3px 10px 0px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
`;
export const TitleCard = styled.h3`
  margin-bottom: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const BtnMore = styled.button`
  margin-top: 1rem;
  font-family: "Roboto", sans-serif;
  padding: 10px;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

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

export const ModalWindow = styled.section`
  display: flex;
  width: 1200px;
  max-width: 1170px;
  background: rgba(24, 26, 33, 0.6);
  padding: 25px 10px;
  border-radius: 3px;
  justify-content: center;
  width: 85%;
  position: relative;
  max-height: 514px;
  height: 514px;
  animation: menuDown 0.3s;
  @media (max-width: 1300px) {
    flex-direction: row-reverse;
  }
  @media (max-width: 948px) {
    flex-direction: column;
    justify-content: start;

    width: 80%;
    height: 90%;
    max-height: 90%;
  }
  @media (max-width: 630px) {
    flex-direction: column;
    max-height: 100%;
    height: 100%;
    width: 100%;
    justify-content: start;
    overflow: auto;
  }
  @keyframes menuDown {
    from {
      transform: translateY(-1500px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1080px) {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: 1250px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
export const TitleAgente = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #fff;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DivDescription = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  @media (max-width: 1250px) {
    width: 100%;
    align-items: start;
  }
`;

export const TitleAbouts = styled.h3`
  font-family: "Roboto", sans-serif;
  color: #fff;
`;
export const SpanAbout = styled.p`
  font-family: "Roboto", sans-serif;
  color: #cac7c7;
  font-size: 1.2rem;
`;

export const ContainerAbility = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleAbility = styled.h3`
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: #eeeeee;
  &.active {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 2rem;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 988px) {
    gap: 1rem;
  }
`;

export const DescriptionAbility = styled.p`
  font-family: "Roboto", sans-serif;
  color: #cac7c7;
  font-size: 1.2rem;
`;
export const DivIcons = styled.div``;
export const CloseModal = styled.img`
  position: absolute;
  width: 40px;
  right: 0;
  top: 0;
  cursor: pointer;
  @media (max-width: 768px) {
    top: 40px;
  }
`;
