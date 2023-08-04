import { useState } from "react";
import {
  BtnModal,
  ContainerLinks,
  ContainerLogo,
  Head,
  ImgModal,
  LogoIcon,
  Nav,
  SpanAbout,
  StyledLink,
  TitleLogo,
} from "./Style";

import logoImg from "../../assets/riot.svg";
import logoMenu from "../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg";

import DropdownMenu from "./DropdownMenu";
import UseWidthHook from "../Hooks/Resize";
const Header = () => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false);

  function handleMenuMobile() {
    setMenuMobile(!menuMobile);
  }

<<<<<<< HEAD
=======
  // const currentURL = window.location.pathname;

  // const allLinks = [
  //   { path: "/", text: "home" },
  //   { path: "/agentes", text: "agentes" },
  //   { path: "/arsenal", text: "arsenal" },
  //   { path: "/mapas", text: "mapas" },
  // ];

>>>>>>> 6b5219f33754805b3d2169c0d59bff7036049c13
  const WidthScreen = UseWidthHook();

  return (
    <Head>
      <Nav>
        <ContainerLogo>
          <LogoIcon src={logoImg} />
          <TitleLogo>Riot Games</TitleLogo>
        </ContainerLogo>

        {WidthScreen >= 768 ? (
          <ContainerLinks>
<<<<<<< HEAD
            <StyledLink to={"/"}>
              <SpanAbout>Home</SpanAbout>
            </StyledLink>
            <StyledLink to={"/agentes"}>
              <SpanAbout>Agentes</SpanAbout>
            </StyledLink>
            <StyledLink to={"/arsenal"}>
              <SpanAbout>Armas</SpanAbout>
            </StyledLink>
            <StyledLink to={"/mapas"}>
              <SpanAbout>Armas</SpanAbout>
=======
            <StyledLink to='/'>
              <SpanAbout>Home</SpanAbout>
            </StyledLink>

            <StyledLink to='/agentes'>
              <SpanAbout>Agentes</SpanAbout>
            </StyledLink>

            <StyledLink to='/arsenal'>
              <SpanAbout>Arsenal</SpanAbout>
            </StyledLink>

            <StyledLink to='/mapas'>
              <SpanAbout>Mapas</SpanAbout>
>>>>>>> 6b5219f33754805b3d2169c0d59bff7036049c13
            </StyledLink>
          </ContainerLinks>
        ) : (
          <>
            <BtnModal>
              <ImgModal
                src={logoMenu}
                className={menuMobile ? "active" : ""}
                onClick={handleMenuMobile}
              />
              {menuMobile ? (
                <DropdownMenu
                  menuMobile={menuMobile}
                  setMenuMobile={setMenuMobile}
                />
              ) : (
                ""
              )}
            </BtnModal>
          </>
        )}
      </Nav>
    </Head>
  );
};

export default Header;
