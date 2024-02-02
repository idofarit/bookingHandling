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
        padding: 0.8rem;
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
  }
  @media (max-width: 750px) {
    font-size: 1.2rem;
    width: 70vw;
    margin: auto;
    padding: 1rem;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
