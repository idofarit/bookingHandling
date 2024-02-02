import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import cs from "/cs.png";

const StyledLogo = styled.div`
  text-align: center;
  .small-logo {
    display: none;
    @media (max-width: 600px) {
      display: block;
      margin: auto;
      height: 7rem;
      width: 7rem;
    }

    @media (max-width: 480px) {
      display: block;
      margin: auto;
      height: 5rem;
      width: 5rem;
    }
  }
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  @media (max-width: 1050px) {
    display: block;
    margin: auto;
    height: 10rem;
    width: 10rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Logo = () => {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <StyledLogo>
      <Img src={src} alt="logo" />
      <Img src={cs} className="small-logo" />
    </StyledLogo>
  );
};

export default Logo;
