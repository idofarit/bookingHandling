import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  @media (max-width: 1050px) {
    width: 80%;
    height: 6rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 4.8rem;
  }
`;

const Logo = () => {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <StyledLogo>
      <Img src={src} alt="logo" />
    </StyledLogo>
  );
};

export default Logo;
