import { useContext, useEffect, useRef } from "react";
import { DashboardContext } from "../context";

export const useSidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const {
    closeSideBar,
    isSidebarOpen,
    handleMouseEnter,
    handleMouseLeave,
    isSidebarHover,
  } = useContext(DashboardContext);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      if (window.innerWidth < 640) {
        closeSideBar();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    sidebarRef,
    closeSideBar,
    isSidebarOpen,
    handleMouseEnter,
    handleMouseLeave,
    isSidebarHover,
  };
};
