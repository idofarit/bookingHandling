// import styled from 'styled-components';
import BookingRow from "./BookingRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";

import Menus from "../../ui/Menus";

import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings.js";
import Pagination from "../../ui/Pagination.jsx";

const BookingTable = () => {
  const { bookings, count, isLoading } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings?.length) return <Empty resource={"bookings"} />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Car</div>
          <div>Customer</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
};

export default BookingTable;
