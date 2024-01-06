import styled from "styled-components";
import { format } from "date-fns";

import Table from "./Table";

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const RecentBookingRow = ({ booking }) => {
  const {
    id: bookingId,
    customerId,
    startDate,
    endDate,
    isPaid,
    customers: { fullName: customerName, email },
  } = booking;

  return (
    <Table.Row>
      <span>{customerName}</span>

      <span>{customerId}</span>

      <span>{format(new Date(startDate), "MMM dd yyyy")}</span>

      <span>{format(new Date(endDate), "MMM dd yyyy")}</span>

      <Amount>{isPaid.toString()}</Amount>
    </Table.Row>
  );
};

export default RecentBookingRow;
