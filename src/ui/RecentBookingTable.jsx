import React from "react";
import styled from "styled-components";
import Table from "./Table";
import RecentBookingRow from "./RecentBookingRow";

const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 5rem;
  background-color: var(--color-grey-100);
  padding: 1rem;
  @media (max-width: 550px) {
    width: 100%;
    font-size: 1rem;
    overflow: scroll;
  }
`;

const TableData = styled.td`
  padding: 10px;
  line-height: 3.5rem;
  color: var(--color-grey-500);
`;

const RecentBookingTable = ({ headers, data }) => {
  return (
    <Container>
      <Table columns="1.5fr 1.5fr 1.5fr 1.5fr 0.5fr">
        <Table.Header>
          <div>Customer Name</div>
          <div>CustomerID</div>
          <div>Booking Date</div>
          <div>Return Date</div>
          <div>Paid</div>
        </Table.Header>

        <Table.Body
          data={data}
          render={(booking) => (
            <RecentBookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Container>
  );
};

export default RecentBookingTable;
