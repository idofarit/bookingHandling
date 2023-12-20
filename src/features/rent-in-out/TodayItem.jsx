import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CompleteReturnButton from "./CompleteReturnButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

const TodayItem = ({ activity }) => {
  const { id, status, customers, numberDays } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "rented" && <Tag type="blue">Departing</Tag>}

      <Flag src={customers.countryFlag} alt={`Flag of ${customers.country}`} />
      <Guest>{customers.fullName}</Guest>
      <div>{numberDays} days rent</div>

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
