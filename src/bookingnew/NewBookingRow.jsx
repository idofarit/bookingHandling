import React from "react";

const NewBookingRow = ({ booking }) => {
  const [showForm, setShowForm] = useState(false);

  const { id } = booking;

  return (
    <>
      <Table.Row>
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
                <CreateCarForm carToEdit={car} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="cars"
                  disabled="isDeleting"
                  onConfirm={() => deletecar(carId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
};

export default NewBookingRow;
