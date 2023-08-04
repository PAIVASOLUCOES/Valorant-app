import styled from "styled-components";
import iconClose from "../../assets/close_FILL0_wght400_GRAD0_opsz48 (1).svg";
import logoImg from "../../assets/riot.svg";
import { Link } from "react-router-dom";
import { LogoIcon, TitleLogo } from "./Style";
import { TypeMenu } from "../../Types";

export const StyledLink = styled(Link)`
  color: #cacaca;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  :hover {
    color: #eee;
  }
`;
export const SpanAbout = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  cursor: pointer;
  border-radius: 1px;
  font-size: 2rem;
  width: 150px;
  display: flex;
`;
const DropdownContainer = styled.aside`
  position: fixed;
  top: 0;
  height: 100%;
  background: #131313;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
  animation: animationModal 0.3s;

  @keyframes animationModal {
    from {
      transform: translateX(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const ImgClose = styled.img`
  width: 50px;
`;
export const ContainerLogo = styled.div`
  position: absolute;
  top: 2rem;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const LogoCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  justify-content: space-between;
  width: 90%;
`;

// const currentURL = window.location.pathname;
// const allLinks = [
//   { path: "/", text: "home" },
//   { path: "/agentes", text: "agentes" },
//   { path: "/arsenal", text: "arsenal" },
//   { path: "/mapas", text: "mapas" },
// ];
const DropdownMenu = ({ menuMobile, setMenuMobile }: TypeMenu) => {
  function handleMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  return (
    <DropdownContainer>
      <ContainerLogo>
        <LogoCenter>
          <LogoIcon src={logoImg} />
          <TitleLogo>Riot Games</TitleLogo>
          <ImgClose src={iconClose} onClick={handleMenuMobile} />
        </LogoCenter>
      </ContainerLogo>
      <Dropdown>
        <StyledLink to='/'>
          <SpanAbout>Home</SpanAbout>
        </StyledLink>

        <StyledLink to='/agentes' onClick={handleMenuMobile}>
          <SpanAbout>Agentes</SpanAbout>
        </StyledLink>

        <StyledLink to='/arsenal' onClick={handleMenuMobile}>
          <SpanAbout>Arsenal</SpanAbout>
        </StyledLink>

        <StyledLink to='/mapas' onClick={handleMenuMobile}>
          <SpanAbout>Mapas</SpanAbout>
        </StyledLink>
      </Dropdown>
      {/* <Footer className={menuMobile ? "Active" : ""} /> */}
    </DropdownContainer>
  );
};

export default DropdownMenu;
