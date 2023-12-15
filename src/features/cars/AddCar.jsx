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

// const Addcar = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//         Add New CarSlot
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCarSlotForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default Addcar;
