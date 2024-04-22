interface Props {
  /** Modal Body */
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}
export const ModalBody = ({ children, className }: Props) => {
  return <div className={`my-2 ${className}`}>{children}</div>;
};