import styled from "styled-components";

export const Backgrounds = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ContainerBackGrounds = styled.section`
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  position: fixed;
`;
export const MediaContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;
export const ContainerItens = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const ContainerLeft = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ContainerAbout = styled.div``;
export const LogoValorant = styled.img`
  width: 400px;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
export const DescriptionGame = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  width: 45ch;
  color: #d5d5d5;
  @media (max-width: 1000px) {
    width: 25ch;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    width: 25ch;
    font-size: 1.5rem;
  }
`;
export const BtnMain = styled.button`
  padding: 15px;
  width: 200px;
  border-radius: 4px;

  font-weight: bold;
  max-height: 80px;
  height: 60px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-position: -100% 0;
  }
`;
export const LinkVal = styled.a`
  font-family: "Roboto", sans-serif;
  color: #fff;
`;
