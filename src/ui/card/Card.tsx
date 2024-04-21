interface Props {
  children: JSX.Element | string | JSX.Element[];
  className?: string;
}

export const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`p-4 shadow rounded-md bg-[#fcfcfc] border border-[#e8e8e8] dark:bg-[#2b2b2b] dark:border-[#1d1d1d] dark:text-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};
