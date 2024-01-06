import CarSlotTable from "../features/cars/CarSlotTable";

import Row from "../ui/Row";
import Addcar from "../features/cars/AddCar";
import CarSlotTableOperation from "../features/cars/CarSlotTableOperation";

const Cars = () => {
  return (
    <>
      <Row type="horizontal">
        <CarSlotTableOperation />
      </Row>
      <Row>
        <CarSlotTable />

        <Addcar />
      </Row>
    </>
  );
};

export default Cars;
