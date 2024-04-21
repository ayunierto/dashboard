interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ModalHeader = ({ children }: Props) => {
  return (
    <div className="flex items-center gap-4 justify-between">{children}</div>
  );
};
