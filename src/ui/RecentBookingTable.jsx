import { format } from "date-fns";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 5rem;
  background-color: var(--color-grey-100);
  padding: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: var(--color-grey-300);
  padding: 10px;
  text-align: left;
  /* border-bottom: 1px solid #ddd; */
`;

const TableData = styled.td`
  padding: 10px;
  line-height: 3.5rem;
  color: var(--color-grey-500);
  /* border-bottom: 1px solid #b2adcb; */
`;

const RecentBookingTable = ({ headers, data }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {headers?.map((header, index) => (
              <TableHeader key={index}>{header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((booking, index) => {
            const {
              carId,
              customerId,
              startDate,
              endDate,
              isPaid,
              customers: { fullName },
            } = booking;
            return (
              <tr key={index}>
                <TableData>{fullName}</TableData>
                <TableData>{customerId}</TableData>
                <TableData>
                  {" "}
                  {format(new Date(startDate), "MMM dd yyyy")}
                </TableData>
                <TableData>
                  {" "}
                  {format(new Date(endDate), "MMM dd yyyy")}
                </TableData>
                <TableData>{isPaid.toString()}</TableData>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default RecentBookingTable;
