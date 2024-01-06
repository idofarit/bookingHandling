import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";

import Button from "../../ui/Button";
import CompleteReturnButton from "./CompleteReturnButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 12rem 13rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
  @media (max-width: 850px) {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

const TodayItem = ({ activity }) => {
  const { id, status, customers } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Rent</Tag>}
      {status === "rented" && <Tag type="blue">Return</Tag>}

      <Guest>{customers.fullName}</Guest>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/completerent/${id}`}
        >
          Complete Rent
        </Button>
      )}
      {status === "rented" && <CompleteReturnButton bookingId={id} />}
    </StyledTodayItem>
  );
};

export default TodayItem;
