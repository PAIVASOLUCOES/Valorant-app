import styled from "styled-components";
import iconGithub from "../../assets/iconmonstr-github-1 (1).svg";
import iconLinkedin from "../../assets/linkedin-svgrepo-com (1).svg";
import { classesName } from "../../Types";
export const FooterContainer = styled.footer`
  background: #131313;
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  &.online {
    position: fixed;
    bottom: 0;
  }
  &.Active {
    bottom: 2rem;
  }
`;
export const FooterCenter = styled.div`
  display: flex;
  gap: 2rem;
  width: 80%;
  align-items: center;
  padding: 7px;
  justify-content: space-between;

  &.Active {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 1rem;
    flex-direction: column;
  }
`;
export const SpanFooter = styled.a`
  font-family: "Roboto", sans-serif;
  color: #808080;
  font-size: 1.1rem;
  display: flex;
  gap: 0.6rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
    gap: 0.5rem;
    flex-direction: column;
    text-align: center;
  }
`;
export const MyGitHub = styled.span`
  font-family: "Roboto", sans-serif;
  color: #e1e0e0;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    justify-content: space-between;
    width: 40%;
  }
`;
export const ImgIcons = styled.img`
  width: 30px;
  @media (max-width: 768px) {
    width: 40px;
  }
`;
export const LinkToAnother = styled.a``;
const Footer = (classname: classesName) => {
  return (
    <FooterContainer className={classname.className}>
      <FooterCenter className={classname.className}>
        <SpanFooter href="https://github.com/Faelkk" target="_blank">
          Todos os direitos reservado por <MyGitHub>Rafael</MyGitHub>
        </SpanFooter>
        <IconsContainer>
          <LinkToAnother href="https://github.com/Faelkk" target="_blank">
            <ImgIcons src={iconGithub} />
          </LinkToAnother>
          <LinkToAnother
            href="https://www.linkedin.com/in/rafael-achtenberg-7a4b12284/"
            target="_blank"
          >
            <ImgIcons src={iconLinkedin} />
          </LinkToAnother>
        </IconsContainer>
      </FooterCenter>
    </FooterContainer>
  );
};

export default Footer;
