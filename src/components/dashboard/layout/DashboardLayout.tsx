import { Outlet } from "react-router-dom";
import { Navbar } from "../components/";
import { Sidebar } from "../components/sidebar/Sidebar";
import { useDashboardLayout } from "../hooks";
import { Provider } from "../context";

export const DashboardLayout = () => {
  const {
    closeSideBar,
    handleMouseEnter,
    handleMouseLeave,
    isSidebarHover,
    isSidebarOpen,
    openSideBar,
    toggleSidebarOpen,
  } = useDashboardLayout();

  return (
    <Provider
      value={{
        openSideBar,
        closeSideBar,
        isSidebarOpen,
        toggleSidebarOpen,
        handleMouseEnter,
        handleMouseLeave,
        isSidebarHover,
      }}
    >
      <div className="flex justify-between font-poppins text-gray-700 dark:text-gray-200">
        <Sidebar />

        <main
          className={`${
            isSidebarOpen || (!isSidebarOpen && isSidebarHover)
              ? "ml-0 sm:ml-72"
              : "sm:ml-16"
          } w-full h-full transition-all dark:bg-[#202020]`}
        >
          <Navbar />

          <div className="m-4">
            <Outlet />
          </div>
        </main>
      </div>
    </Provider>
  );
};
