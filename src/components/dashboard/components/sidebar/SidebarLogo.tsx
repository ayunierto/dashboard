
interface Props {
  children: JSX.Element | JSX.Element[]
}

export const SidebarLogo = ({ children }: Props) => {

  return (
    <div className="flex items-center gap-4 h-16 justify-center p-2">
      {children}
    </div>
  );
};
