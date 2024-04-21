interface Props {
  /** Modal Body */
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}
export const ModalBody = ({ children, className }: Props) => {
  return <p className={`my-2 ${className}`}>{children}</p>;
};
