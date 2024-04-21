import { BsDisplay, BsMoon, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "../../../../ui";

export const ChangeTheme = () => {
  const [{ icon }, setIcon] = useState<{
    icon: JSX.Element;
  }>({
    icon: <BsMoon />,
  });

  useEffect(() => {
    changeTheme(localStorage.theme);
  }, []);

  const changeTheme = (theme: "dark" | "light" | "system") => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setIcon({
        icon: <BsMoon />,
      });
      localStorage.theme = "dark";
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.theme = "light";
      setIcon({
        icon: <BsSun />,
      });
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("light");
      localStorage.removeItem("theme");
      setIcon({
        icon: <BsDisplay />,
      });
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
      }
    }
  };

  return (
    <Dropdown icon={icon} menuRight noCaret>
      <DropdownItem
        icon={<BsMoon />}
        text="Dark"
        fn={() => changeTheme("dark")}
      />
      <DropdownItem
        icon={<BsSun />}
        text="Light"
        fn={() => changeTheme("light")}
      />
      <DropdownItem
        icon={<BsDisplay />}
        text="System"
        fn={() => changeTheme("system")}
      />
    </Dropdown>
  );
};
