import { useEffect, useState } from "react";

export const useDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSidebarHover, setIsSidebarHover] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setIsSidebarOpen(true);
    }
  }, []);

  const openSideBar = () => {
    setIsSidebarOpen(true);
  };

  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMouseEnter = () => {
    setIsSidebarHover(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarHover(false);
  };

  return {
    openSideBar,
    closeSideBar,
    isSidebarOpen,
    toggleSidebarOpen,
    handleMouseEnter,
    handleMouseLeave,
    isSidebarHover,
  };
};
