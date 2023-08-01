import { Link } from "react-router-dom";

import styled from "styled-components";

export const Head = styled.header`
  background: #131313;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  padding: 7px 0;
`;
export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`;
export const LogoIcon = styled.img`
  width: 35px;
`;
export const TitleLogo = styled.h2`
  font-family: "Inter", sans-serif;
  color: #fff;
  font-size: 1.4rem;
`;
export const ContainerLinks = styled.ul`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SpanAbout = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  border-radius: 1px;
`;
export const StyledLink = styled(Link)`
  color: #cacaca;
  transition: 0.3s ease-in-out;
  :hover {
    color: #eee;
  }
`;
export const BtnModal = styled.button`
  transition: 0.3s ease-in-out;
  position: relative;
  background: none;
  display: flex;
  flex-direction: column;
`;

export const ImgModal = styled.img`
  transition: 0.3s ease-in-out;
  width: 30px;
  &.active {
    transform: rotate(90deg);
  }
`;
