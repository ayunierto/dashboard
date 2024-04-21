interface Props {
  children: string;
}
export const ModalTitle = ({ children }: Props) => {
  return <span className="text-2xl">{children}</span>;
};
