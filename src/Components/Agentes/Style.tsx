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
