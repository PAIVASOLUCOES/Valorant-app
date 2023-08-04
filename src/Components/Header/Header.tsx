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
