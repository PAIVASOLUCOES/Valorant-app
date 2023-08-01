import styled from "styled-components";

export const ArsenalMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
export const TitleArsenal = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
`;
export const GunsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const CardGun = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(170, 170, 170) 0px 3px 10px 0px;
  padding: 15px;
  border-radius: 3px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 80%;
  }
`;
export const TitleArma = styled.h3`
  font-family: "Inter", sans-serif;
  margin-bottom: 1rem;
`;
export const ContainerInfo = styled.div`
  display: flex;
  &.Spans {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    @media (max-width: 500px) {
      gap: 0;
    }
  }

  &.Container {
    margin-top: 1.5rem;
    justify-content: space-between;
    width: 90%;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
`;
export const SpanAboutGuns = styled.span`
  font-family: "Inter", sans-serif;
`;
export const BtnSaibaMais = styled.button`
  border-radius: 3px;
  padding: 10px;
  font-family: "Inter", sans-serif;
  background: #f25e5e;
  color: #fff;
  width: 40%;
  transition: 0.2s ease;
  cursor: pointer;
  @media (max-width: 500px) {
    margin-top: 1rem;
    width: 100%;
  }
  &:hover {
    color: #a49898;
  }
`;
