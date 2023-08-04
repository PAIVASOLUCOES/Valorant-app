import styled from "styled-components";

interface colorsmodal {
  colorsmodal: string[];
}
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

export const ModalWindow = styled.section<colorsmodal>`
  display: flex;
  width: 1200px;
  max-width: 1170px;
  background: linear-gradient(
    #${(props) => props.colorsmodal[1]},
    #${(props) => props.colorsmodal[2]}
  );
  padding: 25px;
  border-radius: 3px;
  justify-content: center;
  align-items: start;
  width: 85%;
  position: relative;
  max-height: 514px;
  height: 514px;
  animation: menuDown 0.3s;
  @media (max-width: 1300px) {
    flex-direction: row-reverse;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 90%;
    max-height: 90%;
  }
  @media (max-width: 630px) {
    flex-direction: column;
    max-height: 100%;
    height: 100vh;
    width: 100%;
    justify-content: start;
    overflow-y: auto;
  }
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
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
export const TitleAgente = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #fff;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
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
export const DivIcons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &.show {
    animation: iconAbilities 0.3s forwards;
  }
  @keyframes iconAbilities {
    from {
      transform: translateX(-60px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

export const CloseModal = styled.img`
  position: absolute;
  width: 40px;
  right: 4px;
  top: 0;
  z-index: 100;
  cursor: pointer;
  @media (max-width: 630px) {
    top: 40px;
  }
`;
