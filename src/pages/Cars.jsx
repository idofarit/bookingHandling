import { useState } from "react";
import CarSlotTable from "../features/cars/CarSlotTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCarSlotForm from "../features/cars/CreateCarSlotForm";
import Addcar from "../features/cars/AddCar";
import CarSlotTableOperation from "../features/cars/CarSlotTableOperation";

const Cars = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Available Cars</Heading>
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
