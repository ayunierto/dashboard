interface Props {
  label: string;
  className?: string;
  placeholder?: string;
  type:
    | "text"
    | "password"
    | "number"
    | "radio"
    | "email"
    | "checkbox"
    | "color"
    | "date"
    | "week"
    | "file"
    | "image"
    | "month"
    | "range"
    | "tel"
    | "time"
    | "url";
}

export const Input = ({ label, className, placeholder, type }: Props) => {
  // Generate a unique id for this input
  const inputId = "input_" + Math.random().toString(36).substring(7);

  return (
    <div className={`relative min-w-60  ${className}`}>
      <label
        htmlFor={inputId}
        className={`text-slate-500 font-roboto dark:text-slate-200 dark:font-light`}
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        className={`w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-transparent px-2 py-3 text-blue-gray-800 transition-all duration-300 focus:border-blue-500 focus:outline-0 text-slate-500 font-roboto dark:text-slate-200 dark:font-light`}
        placeholder={placeholder}
      />
    </div>
  );
};
