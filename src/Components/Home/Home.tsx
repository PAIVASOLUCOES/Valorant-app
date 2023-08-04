<<<<<<< HEAD
=======

>>>>>>> 6b5219f33754805b3d2169c0d59bff7036049c13
import {
  Backgrounds,
  BtnMain,
  ContainerAbout,
  ContainerBackGrounds,
  ContainerItens,
  ContainerLeft,
  ContainerRight,
  DescriptionGame,
  LinkVal,
  LogoValorant,
  MediaContainer,
} from "./Style";
import ImgBack from "../../assets/Ep7_Act_Overview_Art_3440x1020_v3.jpg";
import iconValorant from "../../assets/logo.svg";
const Home = () => {
  return (
    <>
<<<<<<< HEAD
=======
      {/* <Header /> */}
>>>>>>> 6b5219f33754805b3d2169c0d59bff7036049c13
      <ContainerBackGrounds>
        <Backgrounds src={ImgBack} />
      </ContainerBackGrounds>
      <MediaContainer>
        <ContainerItens>
          <ContainerRight>
            <LogoValorant src={iconValorant} />
            <ContainerAbout>
              <DescriptionGame>
                Valorant é um jogo de tiro em primeira pessoa desenvolvido pela
                Riot Games. Lançado em 2020, ele conta com diversos modos de
                jogo, sendo o mais famoso o Competitivo, um intenso 5x5 em que
                cada jogador escolhe um agente com habilidades únicas.
              </DescriptionGame>
            </ContainerAbout>
          </ContainerRight>
          <ContainerLeft>
            <BtnMain className="btn-play">
              <LinkVal
                href="https://playvalorant.com/pt-br/download/"
                target="_blank"
              >
                Jogue agora
              </LinkVal>
            </BtnMain>
            <BtnMain className="btn-watch">
              <LinkVal
                href="https://www.youtube.com/watch?v=txb2EmMGDfY"
                target="_blank"
              >
                {" "}
                Assista o trailer
              </LinkVal>
            </BtnMain>
          </ContainerLeft>
        </ContainerItens>
      </MediaContainer>
    </>
  );
};
export default Home;
