interface Props {
  icon?: JSX.Element;
  text: string;
  /** Function to execute */
  fn?: () => void;
}

export const DropdownItem = ({ icon, text, fn }: Props) => {
  return (
    <li
      onClick={fn}
      role="menuitem"
      className="hover:bg-slate-300 transition-all duration-300 px-3 py-2 rounded-md min-w-max flex items-center gap-2 dark:hover:bg-opacity-15 select-none"
    >
      {icon && icon}
      {text}
    </li>
  );
};
