import React, { useRef, useState } from "react";
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
  const { AllMaps, LoadingMapas } = fetchAllMaps();

  const slideRef = useRef<HTMLUListElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [previousScroll, setPreviousScroll] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setStartPosition(e.pageX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isDragging && slideRef.current) {
      const currentPosition = e.pageX;
      const distance = 2 * (currentPosition - startPosition);
      slideRef.current.scrollLeft = previousScroll - distance;
    }
  };

  const handleMouseUp = () => {
    if (slideRef.current) {
      setPreviousScroll(slideRef.current.scrollLeft);
    }
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  if (LoadingMapas) return <Loading />;
  if (AllMaps)
    return (
      <>
        <MapasMain
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <TitleMain>Mapas</TitleMain>
          <ContainerAllMaps ref={slideRef}>
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
      </>
    );

  return null;
};

export default Mapas;
