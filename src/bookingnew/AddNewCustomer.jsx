import React from "react";

import Button from "../ui/Button";
import CreateNewCustomerForm from "./CreateNewCustomerForm";
import Modal from "../ui/Modal";

const AddNewCustomer = () => {
  return (
    <>
      <Modal>
        <Modal.Open opens="customer-form">
          <Button>Add new Customer</Button>
        </Modal.Open>
        <Modal.Window name="customer-form">
          <CreateNewCustomerForm />
        </Modal.Window>
      </Modal>
    </>
  );
};

export default AddNewCustomer;
