interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ModalFooter = ({ children }: Props) => {
  return <div className="flex gap-2 justify-end">{children}</div>;
};
