import { useSidebar } from "../../hooks/useSidebar";

interface Props {
  children: JSX.Element[]
}

export const Sidebar = ({ children }: Props) => {
  const {
    sidebarRef,
    handleMouseEnter,
    handleMouseLeave,
    isSidebarHover,
    isSidebarOpen,
  } = useSidebar();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={sidebarRef}
      className={`${isSidebarOpen ||
        (!isSidebarOpen && isSidebarHover && window.innerWidth > 640)
        ? "w-72 visible"
        : "-translate-x-72 sm:-translate-x-0 w-16 invisible"
        } fixed sm:visible top-0 left-0 h-screen bg-[#f3f3f3] border-r border-[#e8e8e8] dark:border-[#1d1d1d] dark:bg-[#202020] z-20 shadow-md transition-all duration-300`}
    >
      {children}
    </div>
  );
};
