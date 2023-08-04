import styled from "styled-components";

const ButtonTop = styled.button`
  position: fixed;
  bottom: 4px;
  right: 4px;
  border-radius: 3px;
  z-index: 10;
  background: #fff;
  cursor: pointer;
`;
const ImgBtn = styled.img`
  width: 40px;
`;
import iconBtn from "../../assets/arrow-sm-up-svgrepo-com.svg";
const BtnTop = () => {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <ButtonTop onClick={handleClick}>
      <ImgBtn src={iconBtn} />
    </ButtonTop>
  );
};

export default BtnTop;
