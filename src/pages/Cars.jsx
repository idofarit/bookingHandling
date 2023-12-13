import CarSlotTable from "../features/cars/CarSlotTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Cars = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Available Cars</Heading>
        <p>filter/sort</p>
      </Row>
      <Row>
        <CarSlotTable />
      </Row>
    </>
  );
};

export default Cars;
