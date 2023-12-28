import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      text-align: center;
      font-size: 2rem;
      font-weight: 500;
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
    
  line-height: 1.4;
`;

export default Heading;
