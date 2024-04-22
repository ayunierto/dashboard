import { Outlet } from "react-router-dom";
import { Navbar, SidebarLogo, SidebarLogoName, SidebarMenu, SidebarMenuItem } from "../components/";
import { Sidebar } from "../components/sidebar/Sidebar";
import { useDashboardLayout } from "../hooks";
import { Provider } from "../context";
import { dashboardRoutes } from "../../../router/router";
import { BsApple, BsXLg } from "react-icons/bs";
import { Button } from "../../../ui";

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
      <div className="flex justify-between font-roboto text-gray-700 dark:text-gray-200">
        <Sidebar>
          <SidebarLogo>
            <BsApple className="text-indigo-800 text-xl" />

            <SidebarLogoName className={`${isSidebarOpen ? "" : isSidebarHover ? "" : "sm:hidden"}`} >
              BRANDNAME
            </SidebarLogoName>

            <Button onClick={closeSideBar} className="sm:hidden">
              <BsXLg />
            </Button>
          </SidebarLogo>
          <SidebarMenu>
            {dashboardRoutes.map((route) => (
              <SidebarMenuItem key={route.label} {...route} />
            ))}
          </SidebarMenu>
        </Sidebar>

        <main
          className={`${isSidebarOpen || (!isSidebarOpen && isSidebarHover)
            ? "ml-0 sm:ml-72"
            : "sm:ml-16"
            } w-full h-full transition-all duration-300 dark:bg-[#202020]`}
        >
          <Navbar />

          <div className="m-4">
            <Outlet />
          </div>
        </main>
      </div>
    </Provider >
  );
};
