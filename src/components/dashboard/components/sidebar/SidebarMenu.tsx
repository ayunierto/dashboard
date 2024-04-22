import { useContext } from "react";

import { DashboardContext } from "../../context";
interface Props {
  children: JSX.Element[]
}
export const SidebarMenu = ({ children }: Props) => {
  const { isSidebarOpen, isSidebarHover } = useContext(DashboardContext);

  return (
    <ul
      className={`${isSidebarOpen || (!isSidebarOpen && isSidebarHover) ? "px-4" : ""
        } h-full`}
    >
      {children}
    </ul>
  );
};
