import { useContext, useState } from "react";
import { BsAmd, BsCaretDownFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { DashboardContext } from "../../context";

export const SidebarMenuDropdown = () => {
  const [state, setState] = useState<boolean>(false);

  const { isSidebarOpen } = useContext(DashboardContext);

  return (
    <li className="m-1">
      <div
        onClick={() => setState(!state)}
        className={`
              ${
                isSidebarOpen
                  ? "before:w-1 before:h-6 before:rounded-lg before:transition-all before:duration-200 before:ease-in-out gap-4"
                  : "sm:justify-center "
              } flex items-center py-2 h-11 transition-all text-gray-700 dark:text-gray-300 hover:bg-[#eaeaea]  dark:hover:bg-[#292929] rounded-md`}
      >
        <span className="md:text-xl">
          <BsAmd />
        </span>

        <span className={`${isSidebarOpen ? "" : "sm:hidden"}`}>Dropdown</span>

        <div className="w-full flex justify-end mr-2">
          <BsCaretDownFill />
        </div>
      </div>
      <ul className={`${state ? "" : "hidden"} transition-all`}>
        <li>
          <NavLink
            to={"/"}
            className={`flex items-center pl-5 h-11 transition-all text-gray-700 dark:text-gray-300 hover:bg-[#eaeaea] dark:hover:bg-[#292929] rounded-md before:w-[2px] before:h-11 before:mr-4 before:bg-gray-300 dark:before:bg-gray-800 hover:before:bg-blue-500 before:transition-all`}
          >
            Option 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            className={`flex items-center pl-5 h-11 transition-all text-gray-700 dark:text-gray-300 hover:bg-[#eaeaea] dark:hover:bg-[#292929] rounded-md before:w-[2px] before:h-11 before:mr-4 before:bg-gray-300 dark:before:bg-gray-800 hover:before:bg-blue-500 before:transition-all`}
          >
            Option 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            className={`flex items-center pl-5 h-11 transition-all text-gray-700 dark:text-gray-300 hover:bg-[#eaeaea] dark:hover:bg-[#292929] rounded-md before:w-[2px] before:h-11 before:mr-4 before:bg-gray-300 dark:before:bg-gray-800 hover:before:bg-blue-500 before:transition-all`}
          >
            Option 3
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            className={`flex items-center pl-5 h-11 transition-all text-gray-700 dark:text-gray-300 hover:bg-[#eaeaea] dark:hover:bg-[#292929] rounded-md before:w-[2px] before:h-11 before:mr-4 before:bg-gray-300 dark:before:bg-gray-800 hover:before:bg-blue-500 before:transition-all`}
          >
            Option 4
          </NavLink>
        </li>
      </ul>
    </li>
  );
};
