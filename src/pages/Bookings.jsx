import AddNewBooking from "../bookingnew/AddNewBooking";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

import Row from "../ui/Row";

const Bookings = () => {
  return (
    <>
      <Row type="horizontal">
        <BookingTableOperations />
      </Row>

      <AddNewBooking />
      <BookingTable />
    </>
  );
};

export default Bookings;
