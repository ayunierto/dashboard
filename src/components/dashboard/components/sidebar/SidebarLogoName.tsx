

interface Props {
  children: string;
  className: string;
}

export const SidebarLogoName = ({ children, className }: Props) => {

  return (
    <div
      className={`text-2xl font-bold dark:text-gray-200 overflow-hidden whitespace-nowrap text-ellipsis ${className}`}
    >
      {children}
    </div>
  );
};