import Spinner from "../../ui/Spinner";
import CarRow from "./CarRow";
import { useCars } from "./useCars";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import { useBooking } from "../features/bookings/useBooking";

const NewBookingTable = () => {
  const { isLoading, booking } = useBooking();
  const [searchParams] = useSearchParams();

  if (isLoading) {
    return <Spinner />;
  }
  if (!booking.length) return <Empty resource="booking" />;

  return (
    <Menus>
      <Table columns=" 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Car</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedcars}
          render={(cars) => <CarRow cars={cars} key={car.id} />}
        />
      </Table>
    </Menus>
  );
};
export default NewBookingTable;
