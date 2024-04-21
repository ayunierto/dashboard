import { CSSProperties, useEffect, useRef, useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { Button } from "../button/Button";

interface Props {
  /** React icons package: https://react-icons.github.io/react-icons/icons/bs/ */
  icon?: JSX.Element;
  text?: string;
  noCaret?: boolean;
  menuRight?: boolean;
  className?: string;
  style?: CSSProperties;
  children: JSX.Element[] | JSX.Element;
}

export const Dropdown = ({
  icon,
  text,
  noCaret,
  menuRight,
  className,
  style,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      onClick={toggleDropdown}
      className={`relative`}
      role="menu"
      style={style}
    >
      <Button className={`${className}`}>
        {icon ? icon : ""}
        {text ? <span>{text}</span> : ""}
        {!noCaret ? <BsCaretDownFill className="text-xs" /> : <></>}
      </Button>

      <ul
        className={`${!isOpen
          ? "invisible opacity-0"
          : "visible opacity-100 translate-y-0 scale-100"
          } bg-[#fcfcfc] rounded-md absolute mt-1 p-2 border dark:border-[#1d1d1d] shadow-lg z-10 dark:bg-[#2b2b2b] transition-all duration-300 transform origin-top-right -translate-y-2 ${menuRight ? "right-0" : "left-0"
          }`}
      >
        {children}
      </ul>
    </div>
  );
};
