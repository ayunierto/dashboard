import { createContext } from "react";

interface DashboardContextProps {
  openSideBar: () => void;
  closeSideBar: () => void;
  isSidebarOpen: boolean;
  toggleSidebarOpen: () => void;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  isSidebarHover?: boolean;
}

export const DashboardContext = createContext({} as DashboardContextProps);
export const { Provider } = DashboardContext;
