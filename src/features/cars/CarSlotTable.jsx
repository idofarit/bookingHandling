import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import CarSlotRow from "./CarSlotRow";
import { useCarSlots } from "./useCarSlots";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

const CarSlotTable = () => {
  const { isLoading, cars } = useCarSlots();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cars.length) return <Empty resource="cars" />;

  // filter
  const filterValue = searchParams.get("discount") || "all";

  let filteredCars;
  if (filterValue === "all") filteredCars = cars;

  if (filterValue === "No-discounts")
    filteredCars = cars.filter((car) => car.discount === 0);

  if (filterValue === "Discounts")
    filteredCars = cars.filter((car) => car.discount > 0);

  // sort

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = filteredCars.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Car</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(car) => <CarSlotRow car={car} key={car.id} />}
        />
      </Table>
    </Menus>
  );
};
export default CarSlotTable;
