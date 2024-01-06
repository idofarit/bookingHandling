import styled from "styled-components";

const StyledStat = styled.div`
  /* Box */

  background-color: var(--color-grey-0);
  padding: 2.6rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: var(--shadow-box);

  @media (max-width: 1100px) {
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
`;

const Icon = styled.div`
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
    @media (max-width: 1100px) {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 850px) {
    width: 15%;
  }
`;

const Title = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
  @media (max-width: 1100px) {
    font-size: 1rem;
    margin: 7px;
  }
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
`;

const Stat = ({ icon, title, value, color }) => {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
};

export default Stat;
