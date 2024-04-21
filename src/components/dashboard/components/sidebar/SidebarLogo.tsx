import { useContext } from "react";
import { BsApple, BsXLg } from "react-icons/bs";
import { DashboardContext } from "../../context";

export const SidebarLogo = () => {
  const { isSidebarOpen, closeSideBar, isSidebarHover } =
    useContext(DashboardContext);

  return (
    <div className="flex items-center gap-4 h-16 justify-center p-2">
      <BsApple className="text-indigo-800 text-xl" />

      <div
        className={`${
          isSidebarOpen ? "" : isSidebarHover ? "" : "sm:hidden"
        } text-2xl font-bold dark:text-gray-200 overflow-hidden whitespace-nowrap text-ellipsis`}
      >
        BRAND<span className="text-indigo-800">NAME</span>
      </div>

      <button
        onClick={closeSideBar}
        className="hover:bg-indigo-800 p-2 rounded-full hover:bg-opacity-15 sm:hidden font-bold dark:text-gray-200"
      >
        <BsXLg />
      </button>
    </div>
  );
};
