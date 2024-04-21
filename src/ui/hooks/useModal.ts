import { useState } from "react";

export const useModal = () => {
  const [state, setState] = useState<boolean>(false);

  const onOpen = () => {
    setState(true);
  };
  const onClose = () => {
    setState(false);
  };

  return { state, onOpen, onClose };
};
