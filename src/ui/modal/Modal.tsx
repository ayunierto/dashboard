import { createContext, useEffect, useState } from "react";

interface Props {
  open: boolean;
  close: () => void;
  children: JSX.Element | JSX.Element[];
  className?: string;
}

interface ModalContextProps {
  close: () => void;
}

export const ModalContext = createContext({} as ModalContextProps);
const { Provider } = ModalContext;

export const Modal = ({ open, close, children, className }: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Provider value={{ close }}>
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 z-50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      // onClick={() => setIsOpen(false)}
      // todo: hacer condicional para que cuando e click fuera dl modal se cierre
      >
        <div
          className={`bg-[#fcfcfc] dark:bg-[#2b2b2b] p-5 max-w-full min-w-60 shadow-lg rounded-lg grid gap-4 border border-[#e8e8e8] dark:border-[#1d1d1d] transition-all duration-300 m-2 overflow-hidden ${isOpen ? "scale-100" : "scale-0"
            } ${className}`}
        >
          {children}
        </div>
      </div>
    </Provider>
  );
};
