import { useContext } from "react";

import { dashboardRoutes } from "../../../../router/router";
import { SidebarMenuItem } from "./";
import { DashboardContext } from "../../context";

export const SidebarMenu = () => {
  const { isSidebarOpen, isSidebarHover } = useContext(DashboardContext);

  return (
    <ul
      className={`${
        isSidebarOpen || (!isSidebarOpen && isSidebarHover) ? "px-4" : ""
      } h-full`}
    >
      {dashboardRoutes.map((route) => (
        <SidebarMenuItem key={route.label} {...route} />
      ))}
    </ul>
  );
};
