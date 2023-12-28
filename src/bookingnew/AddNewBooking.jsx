import React from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import FormLayout from "./FormLayout";

const AddNewBooking = () => {
  return (
    <>
      <Modal>
        <Modal.Open opens="booking-form">
          <Button>Add new Booking</Button>
        </Modal.Open>
        <Modal.Window name="booking-form">
          <FormLayout />
        </Modal.Window>
      </Modal>
    </>
  );
};

export default AddNewBooking;
