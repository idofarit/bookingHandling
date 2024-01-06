import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      @media (max-width: 850px) {
        padding: 2rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
  @media (max-width: 850px) {
    font-size: 1.4rem;
    width: 70vw;
  }
  @media (max-width: 750px) {
    font-size: 1.2rem;
    width: 60vw;
  }
  @media (max-width: 550px) {
    font-size: 1rem;
    width: auto;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
