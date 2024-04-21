import { BsGear, BsList, BsPerson, BsUpload } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ChangeTheme } from "..";
import { useContext } from "react";
import { Button, Dropdown, DropdownItem } from "../../../../ui";
import { DashboardContext } from "../../context";

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props) => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/auth");
  };

  const { toggleSidebarOpen } = useContext(DashboardContext);

  return (
    <div
      className={`h-16 border-b border-[#e8e8e8] dark:border-[#1d1d1d] dark:bg-[#202020] dark:text-white flex items-center justify-between p-2 shadow-md ${className}`}
    >
      <div className="flex items-center gap-2">
        <Button onClick={toggleSidebarOpen}>
          <BsList className="text-2xl" />
        </Button>
        {/* <span>PageTitle</span> */}
      </div>
      <div className="flex items-center gap-2">
        <ChangeTheme />
        <Dropdown icon={<BsPerson />} text="John Doe" menuRight>
          <DropdownItem icon={<BsGear />} text="Settings" />
          <DropdownItem
            icon={<BsUpload className="rotate-90" />}
            text="Exit"
            fn={logout}
          />
        </Dropdown>
      </div>
    </div>
  );
};
