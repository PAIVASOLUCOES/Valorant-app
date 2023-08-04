<<<<<<< HEAD
=======


>>>>>>> 6b5219f33754805b3d2169c0d59bff7036049c13
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
import { fetchAllGuns } from "../Hooks/FetchsApi";
import { useState } from "react";
import ModalGuns from "../ModalGuns/ModalGuns";

import { Arsenal } from "../../Types";

const Armas = () => {
  const { Arsenal, ArsenalLoading } = fetchAllGuns();
  const [modalValue, setModal] = useState(false);
  const [Arma, SetArma] = useState<Arsenal>();
  function handleClick(agente: Arsenal) {
    setModal(true);
    SetArma(agente);
  }

  if (ArsenalLoading) return <Loading />;
  return (
    <>
      <BtnTop />
<<<<<<< HEAD
=======
      {/* <Header /> */}
>>>>>>> 6b5219f33754805b3d2169c0d59bff7036049c13
      <ArsenalMain>
        <TitleArsenal>Arsenal</TitleArsenal>
        <GunsContainer>
          {Arsenal
            ? Arsenal.map((arma) => {
                return (
                  <CardGun
                    key={arma.uuid}
                    id={arma.uuid}
                    onClick={() => handleClick(arma)}
                  >
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
                      <BtnSaibaMais>Saiba mais</BtnSaibaMais>
                    </ContainerInfo>
                  </CardGun>
                );
              })
            : ""}
        </GunsContainer>
        {modalValue ? (
          <ModalGuns Arma={Arma} modalValue={modalValue} setModal={setModal} />
        ) : (
          ""
        )}
      </ArsenalMain>
<<<<<<< HEAD
=======
      {/* <Footer /> */}
>>>>>>> 6b5219f33754805b3d2169c0d59bff7036049c13
    </>
  );
};

export default Armas;
