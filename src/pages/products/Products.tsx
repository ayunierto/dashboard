import { useState } from "react";
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalTitle } from "../../ui";
import { Form } from "react-router-dom";

export const Products = () => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };
  return <>
    <div className="flex items-center justify-between">
      <h2 className="text-xl">Products</h2>
      <Button color="primary" onClick={openModal}>
        New Product
      </Button>
      <Modal close={closeModal} open={modalState}>
        <Form>
          <ModalHeader>
            <ModalTitle>New Product</ModalTitle>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody className="grid gap-2 grid-cols-2">
            <Input label="Name" type="text" />
            <Input label="Price" type="text" pattert="\d+(\.\d+)?" title="The price format is 99.99" />
            <Input label="Quantity" type="text" />
            <Input label="Description" type="text" className="col-span-2" />
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" color="primary" type="submit">
              Submit
            </Button>
            <Button onClick={closeModal} variant="solid" color="danger">
              Close
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div >
  </>;
};
