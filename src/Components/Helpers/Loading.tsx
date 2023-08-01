import styled from "styled-components";

export const LoadingContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  padding: 0 6rem;
  background: transparent;
  opacity: 0;
  transform: translateX(-20px);
  animation: fade 0.3s forwards;

  @keyframes fade {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const LoadingTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #8d8c8c;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  font-weight: 500;
  text-align: center;
`;

export const ProgressBar = styled.div`
  height: 8px;
  width: 30rem;
  max-width: 100%;
`;

export const Bar = styled.div`
  height: 3px;
  width: 0;
  background: #2d97de;
  animation: load 0.3s forwards;

  @keyframes load {
    to {
      width: 100%;
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingTitle>Carregando..</LoadingTitle>
      <ProgressBar>
        <Bar></Bar>
      </ProgressBar>
    </LoadingContainer>
  );
};
export default Loading;
