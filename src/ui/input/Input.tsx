import { SetStateAction, useState } from "react";

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
  pattert?: string;
  title?: string;
  required?: boolean;
}

export const Input = ({ label, className, placeholder, type, pattert, title, required, ...props }: Props) => {
  // Generate a unique id for this input
  const inputId = "input_" + Math.random().toString(36).substring(7);

  // const [inputValue, setInputValue] = useState('');
  // const [isValid, setIsValid] = useState(true);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  // const handleBlur = () => {
  //   const pattern = /\d+(\.\d +)?/; // Patrón para letras, números y guiones bajos
  //   const isValidInput = pattern.test(inputValue);
  //   setIsValid(isValidInput);
  // };

  // console.log(isValid)

  return (
    <div className={`relative min-w-14 ${className}`}>
      <label
        htmlFor={inputId}
        className={`text-slate-500 font-roboto dark:text-slate-200 dark:font-light`}
      >
        {label}
      </label>
      <input
        {...props}
        // value={inputValue}
        // onChange={handleChange}
        // onBlur={handleBlur}
        required={required}
        id={inputId}
        type={type}
        className={`w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-transparent px-2 py-3 text-blue-gray-800 transition-all duration-300 focus:border-blue-500 focus:outline-0 text-slate-500 font-roboto dark:text-slate-200 dark:font-light`}
        placeholder={placeholder}
        pattern={pattert}
        title={title}

      />
    </div>
  );
};
