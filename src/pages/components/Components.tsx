import { BsAndroid, BsAndroid2 } from "react-icons/bs";
import {
  Dropdown,
  DropdownItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "../../ui";
import { Button, Card } from "../../ui";
import { useState } from "react";

export const Components = () => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl dark:text-white">Buttons</h2>
        <h3 className="text-sm dark:text-white">Variants and Colors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Card>
            <h4 className="dark:text-gray-200">Default</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="light">Light</Button>
              <Button variant="solid">Solid</Button>
              <Button variant="bordered">Bordered</Button>
            </div>
          </Card>
          <Card>
            <h4 className=" dark:text-gray-200">Primary</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button color="primary" variant="light">
                Light
              </Button>
              <Button color="primary" variant="solid">
                Solid
              </Button>
              <Button color="primary" variant="bordered">
                Bordered
              </Button>
            </div>
          </Card>
          <Card>
            <h4 className=" dark:text-gray-200">Secondary</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button color="secondary" variant="light">
                Light
              </Button>
              <Button color="secondary" variant="solid">
                Solid
              </Button>
              <Button color="secondary" variant="bordered">
                Bordered
              </Button>
            </div>
          </Card>
          <Card>
            <h4 className=" dark:text-gray-200">Success</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button color="success" variant="light">
                Light
              </Button>
              <Button color="success" variant="solid">
                Solid
              </Button>
              <Button color="success" variant="bordered">
                Bordered
              </Button>
            </div>
          </Card>
          <Card>
            <h4 className=" dark:text-gray-200">Warning</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button color="warning" variant="light">
                Light
              </Button>
              <Button color="warning" variant="solid">
                Solid
              </Button>
              <Button color="warning" variant="bordered">
                Bordered
              </Button>
            </div>
          </Card>
          <Card>
            <h4 className=" dark:text-gray-200">Danger</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button color="danger" variant="light">
                Light
              </Button>
              <Button color="danger" variant="solid">
                Solid
              </Button>
              <Button color="danger" variant="bordered">
                Bordered
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-xl dark:text-gray-200 ">Cards</h2>
        <div className="grid grid-cols-3 gap-2">
          <Card>Hello!!!</Card>
        </div>
      </div>

      <div>
        <h2 className="text-xl dark:text-gray-200">Dropdowns</h2>
        <div className="flex flex-wrap gap-2">
          <Dropdown text="With icon and text" icon={<BsAndroid />}>
            <DropdownItem text="Option 1" icon={<BsAndroid2 />} />
            <DropdownItem text="Option 2" icon={<BsAndroid2 />} />
            <DropdownItem text="Option 3" icon={<BsAndroid2 />} />
          </Dropdown>
          <Dropdown icon={<BsAndroid2 />}>
            <DropdownItem text="Option 1" />
            <DropdownItem text="Option 2" />
            <DropdownItem text="Option 3" />
          </Dropdown>
          <Dropdown text="Only text">
            <DropdownItem text="Option 1" />
            <DropdownItem text="Option 2" />
            <DropdownItem text="Option 3" />
          </Dropdown>
          <Dropdown text="No caret" noCaret>
            <DropdownItem text="Option 1" />
            <DropdownItem text="Option 2" />
            <DropdownItem text="Option 3" />
          </Dropdown>
          <Dropdown icon={<BsAndroid2 />} noCaret>
            <DropdownItem text="Option 1" />
            <DropdownItem text="Option 2" />
            <DropdownItem text="Option 3" />
          </Dropdown>
          <Dropdown icon={<BsAndroid2 />} text="With right menu" menuRight>
            <DropdownItem text="Option 1" />
            <DropdownItem text="Option 2" />
            <DropdownItem text="Option 3" />
          </Dropdown>
          <Dropdown
            icon={<BsAndroid2 />}
            text="Stylized"
            className="bg-white border border-indigo-600 hover:ring-2 dark:bg-transparent"
            style={{}}
          >
            <DropdownItem text="Option 1" />
            <DropdownItem text="Option 2" />
            <DropdownItem text="Option 3" />
          </Dropdown>
          <Dropdown text="With function">
            <DropdownItem
              text="Option 1"
              fn={() => {
                return alert("this is an alert");
              }}
            />
            <DropdownItem text="Option 2" />
            <DropdownItem text="Option 3" />
          </Dropdown>
        </div>
      </div>

      <div>
        <h2 className="text-xl dark:text-gray-200">Modal</h2>
        <Button onClick={openModal} variant="solid">
          Open Modal
        </Button>
        <Modal close={closeModal} open={modalState}>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>This is a modal body....</ModalBody>
          <ModalFooter>
            <Button variant="solid" color="primary">
              Submit
            </Button>
            <Button onClick={closeModal} variant="solid" color="danger">
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};
