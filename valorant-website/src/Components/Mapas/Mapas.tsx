import { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Helpers/Loading";
import ImageSkeleton from "../Helpers/Skeleton";
import {
  ContainerAllMaps,
  MapaCard,
  MapasMain,
  TitleMain,
  TitleMapas,
} from "./Style";
import { fetchAllMaps } from "../Hooks/FetchsApi";

const Mapas = () => {
  const { AllMaps, ErrorFetchMapas, LoadingMapas } = fetchAllMaps();

  const slideRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [previousScroll, setPreviousScroll] = useState(0);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setStartPosition(e.pageX);
    setIsDragging(true);
  };
  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isDragging) {
      const currentPosition = e.pageX;
      const distance = 2 * (currentPosition - startPosition);
      slideRef.current.scrollLeft = previousScroll - distance;
    }
  };

  const handleMouseUp = () => {
    setPreviousScroll(slideRef.current.scrollLeft);
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  if (LoadingMapas) return <Loading />;
  if (AllMaps)
    return (
      <>
        <Header />
        <MapasMain>
          <TitleMain>Mapas</TitleMain>
          <ContainerAllMaps
            ref={slideRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {AllMaps.map((mapa) => {
              return (
                <MapaCard key={mapa.uuid}>
                  <TitleMapas>{mapa.displayName}</TitleMapas>
                  <ImageSkeleton src={mapa.splash} className="Maps" />
                </MapaCard>
              );
            })}
          </ContainerAllMaps>
        </MapasMain>
        <Footer className="online" />
      </>
    );
};

export default Mapas;
