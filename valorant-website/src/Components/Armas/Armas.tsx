import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
  ArsenalMain,
  BtnSaibaMais,
  CardGun,
  ContainerInfo,
  GunsContainer,
  SpanAboutGuns,
  TitleArma,
  TitleArsenal,
} from "./Style";

import ImageSkeleton from "../Helpers/Skeleton";
import BtnTop from "../Helpers/BtnTop";
import Loading from "../Helpers/Loading";
import { useEffect, useState } from "react";
import { fetchAllGuns } from "../Hooks/FetchsApi";

const Armas = () => {
  const { Arsenal, ArsenalLoading } = fetchAllGuns();
  const [id, setId] = useState("");

  function handleClick({ currentTarget }) {
    setId(currentTarget.id);
    console.log(id);
  }

  if (ArsenalLoading) return <Loading />;
  return (
    <>
      <BtnTop />
      <Header />
      <ArsenalMain>
        <TitleArsenal>Arsenal</TitleArsenal>
        <GunsContainer>
          {Arsenal
            ? Arsenal.map((arma) => {
                return (
                  <CardGun key={arma.uuid} id={arma.uuid} onClick={handleClick}>
                    <TitleArma>{arma.displayName}</TitleArma>
                    <ImageSkeleton src={arma.displayIcon} className="Arsenal" />
                    <ContainerInfo className="Container">
                      <ContainerInfo className="Spans">
                        <SpanAboutGuns>
                          {`Categoria:  ${
                            arma.shopData ? arma.shopData.categoryText : "Faca"
                          }`}
                        </SpanAboutGuns>
                        <SpanAboutGuns>
                          {`Preço:  ${
                            arma.shopData ? arma.shopData.cost : "Gratis"
                          }`}
                        </SpanAboutGuns>
                      </ContainerInfo>
                      <BtnSaibaMais>Skins</BtnSaibaMais>
                    </ContainerInfo>
                  </CardGun>
                );
              })
            : ""}
        </GunsContainer>
      </ArsenalMain>
      <Footer />
    </>
  );
};

export default Armas;
