import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
      @media (max-width: 550px) {
        font-size: 1.5rem;
        margin: auto;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      @media (max-width: 550px) {
        font-size: 1.2rem;
        margin: auto;
      }
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      padding: 0.5rem;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 500;
      @media (max-width: 550px) {
        font-size: 1rem;
        margin: auto;
      }
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      @media (max-width: 550px) {
        font-size: 1.5rem;
        margin: auto;
      }
    `}
    
  line-height: 1.4;
`;

export default Heading;
