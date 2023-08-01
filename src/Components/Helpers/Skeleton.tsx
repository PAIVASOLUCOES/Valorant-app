import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
`;

const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;

const ImgCard = styled.img`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &.icon-ability {
    width: 52px;
    cursor: pointer;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 2px;
  }
  &.Img-modal {
    width: 400px;
    @media (max-width: 1300px) {
      height: 400px;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      width: 350px;
      height: 100%;
    }
  }
  &.img-icon {
    width: 200px;
    border-radius: 3px;
  }
  &.Arsenal {
    width: 450px;
    max-width: 450px;
    max-height: 130px;
    height: 130px;
    object-fit: contain;
    @media (max-width: 1080px) {
      width: 400px;
      max-width: 400px;
    }
    @media (max-width: 500px) {
      max-height: 100px;
      height: 100px;
      width: 300px;
      max-width: 300px;
    }
  }
  &.Maps {
    flex-shrink: 0;
    width: 60vw;
    max-width: 600px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    transform: scale(0.9);
    transition: 0.4s;
    position: relative;

    @media (max-width: 768px) {
      width: 80vw;
      max-width: 800px;
    }
  }
`;

export interface TypeAlt {
  src: string;
  id?: string;
  key?: string;
  onClick?: () => void;
  className?: string;
}

const ImageSkeleton: React.FC<TypeAlt> = ({ src, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  function handleLoad(event: React.ChangeEvent<HTMLImageElement>) {
    setIsLoading(false);
    event.target.style.opacity = "1";
  }

  return (
    <Wrapper>
      {isLoading && <Skeleton></Skeleton>}
      <ImgCard onLoad={handleLoad} src={src} alt="" {...props} />
    </Wrapper>
  );
};

export default ImageSkeleton;
