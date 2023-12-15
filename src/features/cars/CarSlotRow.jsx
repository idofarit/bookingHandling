import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCarSlotForm from "./CreateCarSlotForm";
import { useDeleteCarSlot } from "./useDeleteCarSlot";
import { FaRegCopy, FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { useCreateCarSlot } from "./useCreateCarSlot";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import { deleteCar } from "../../services/apiCars";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Car = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CarSlotRow = ({ car }) => {
  const { isCreating, createCarSlot } = useCreateCarSlot();

  const { isDeleting, deleteCarSlot } = useDeleteCarSlot();

  const {
    id: carId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = car;

  const handleDuplicate = () => {
    createCarSlot({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  };

  return (
    <Table.Row>
      <Img src={image} />
      <Car>{name}</Car>
      <div>Can tarvell upto {maxCapacity}</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={carId} />

            <Menus.List id={carId}>
              <Menus.Button icon={<FaRegCopy />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button icon={<FaPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<FaRegTrashCan />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCarSlotForm carSlotEdit={car} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cars"
                disabled={isDeleting}
                onConfirm={() => deleteCarSlot(carId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
};

export default CarSlotRow;
