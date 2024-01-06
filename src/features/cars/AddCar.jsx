import React, { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

import CreateCarSlotForm from "./CreateCarSlotForm";

const Addcar = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="car-form">
          <Button>Add New Car Slot</Button>
        </Modal.Open>
        <Modal.Window name="car-form">
          <CreateCarSlotForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default Addcar;
