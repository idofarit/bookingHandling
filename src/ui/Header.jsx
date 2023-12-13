import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.3rem 4.6rem;
  border-bottom: 1px solid var(--color-grey-200);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;
