import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DashboardContext } from "../../context";

interface Props {
  /** Title to show */
  label: string;
  /** Address to go */
  to: string;
  /** https://react-icons.github.io/react-icons/ */
  icon: JSX.Element;
}

export const SidebarMenuItem = ({ icon, label, to }: Props) => {
  const { isSidebarOpen, closeSideBar, isSidebarHover } =
    useContext(DashboardContext);

  const closeSidebarIfSmallScreen = () => {
    if (window.innerWidth < 768) {
      closeSideBar();
    }
  };

  return (
    <li className="m-1">
      <NavLink
        onClick={closeSidebarIfSmallScreen}
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? "before:bg-blue-600 bg-[#eaeaea] dark:bg-[#292929]" : ""
          } ${
            isSidebarOpen || (!isSidebarOpen && isSidebarHover)
              ? "before:w-1 before:h-6 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out gap-4"
              : "sm:justify-center "
          } flex items-center py-2 h-11 transition-all text-gray-700 dark:text-gray-300 hover:bg-[#eaeaea]  dark:hover:bg-[#292929] rounded-md`
        }
      >
        <span className="md:text-xl">{icon}</span>
        <span
          className={`${
            !isSidebarOpen && !isSidebarHover ? "sm:hidden" : ""
          } transition-all`}
        >
          {label}
        </span>
      </NavLink>
    </li>
  );
};
