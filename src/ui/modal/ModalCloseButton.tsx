import { BsX } from "react-icons/bs";
import { Button } from "../button/Button";
import { useContext } from "react";
import { ModalContext } from "./Modal";

export const ModalCloseButton = () => {
  const { close } = useContext(ModalContext);
  return (
    <Button
      onClick={close}
      // className="hover:bg-opacity-15 hover:text-gray-800"
    >
      <BsX className="text-xl" />
    </Button>
  );
};
