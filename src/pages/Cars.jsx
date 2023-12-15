import { useState } from "react";
import CarSlotTable from "../features/cars/CarSlotTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCarSlotForm from "../features/cars/CreateCarSlotForm";
import Addcar from "../features/cars/AddCar";

const Cars = () => {
  // const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Available Cars</Heading>
        <p>filter/sort</p>
      </Row>
      <Row>
        <CarSlotTable />

        <Addcar />
        {/* <Button onClick={() => setShowForm(!showForm)}>Add New CarSlot</Button>
        {showForm && <CreateCarSlotForm />} */}
      </Row>
    </>
  );
};

export default Cars;
