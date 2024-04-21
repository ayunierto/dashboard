interface Props {
  className?: string;
  children: (string | JSX.Element | JSX.Element)[] | string | JSX.Element;
  color?:
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
  variant?: "solid" | "bordered" | "light";
  onClick?: () => void;
}

export const Button = ({
  onClick,
  className,
  children,
  variant,
  color,
}: Props) => {
  return (
    <button
      className={`px-3 py-2 rounded-md transition-all duration-300 flex justify-center items-center gap-3 select-none ${className} ${variant === "solid"
        ? `${color === "primary"
          ? "text-white bg-blue-600 hover:bg-blue-700"
          : color === "secondary"
            ? "text-white bg-blue-500 hover:bg-blue-600"
            : color === "success"
              ? "text-white bg-green-600 hover:bg-green-700"
              : color === "warning"
                ? "text-white bg-amber-600 hover:bg-amber-700"
                : color === "danger"
                  ? "text-white bg-red-600 hover:bg-red-700"
                  : "text-gray-600 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-[#3d3d3d] dark:hover:bg-[#323232]"
        }`
        : variant === "bordered"
          ? `${color === "primary"
            ? "text-gray-800 border  border-blue-500 hover:bg-blue-600 hover:bg-opacity-50 hover:text-white dark:text-white"
            : color === "secondary"
              ? "text-gray-800 border  border-blue-400 hover:bg-blue-500 hover:bg-opacity-50 hover:text-white dark:text-white"
              : color === "success"
                ? "text-gray-800 border  border-green-500 hover:bg-green-600 hover:bg-opacity-50 hover:text-white dark:text-white"
                : color === "warning"
                  ? "text-gray-800 border  border-amber-500 hover:bg-amber-600 hover:bg-opacity-50 hover:text-white dark:text-white"
                  : color === "danger"
                    ? "text-gray-800 border  border-red-500 hover:bg-red-600 hover:bg-opacity-50 hover:text-white dark:text-white"
                    : "text-gray-600 border  border-gray-300 hover:bg-gray-300 hover:bg-opacity-50 dark:text-white"
          }`
          : `${color === "primary"
            ? "text-blue-800  hover:text-white hover:bg-blue-400  dark:hover:text-white hover:opacity-80"
            : color === "secondary"
              ? "text-blue-800  hover:text-white hover:bg-blue-300  dark:hover:text-white hover:opacity-80"
              : color === "success"
                ? "text-green-800 hover:text-white hover:bg-green-400 dark:hover:text-white hover:opacity-80"
                : color === "warning"
                  ? "text-amber-800 hover:text-white hover:bg-amber-400 dark:hover:text-white hover:opacity-80"
                  : color === "danger"
                    ? "text-red-800   hover:text-white hover:bg-red-400   dark:hover:text-white hover:opacity-80"
                    : "text-gray-600  hover:bg-gray-200  dark:text-white dark:hover:bg-[#3d3d3d]"
          }`
        }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
