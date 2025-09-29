import { forwardRef } from "react";

const Input = forwardRef(({ type, name, className = "", placeholder, onChange }, ref) => {
  return (
    <div className="w-full">
      <input
        ref={ref}
        type={type}
        name={name}
        onChange={onChange}
        required
        className={`w-full py-3 border dark:bg-[#12181d] dark:placeholder:text-secondary/50 pl-3 bg-[#F9F9F9] dark:border-gray-50/10 placeholder:text-sm rounded-md placeholder:text-primary focus:outline-0 text-sm ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
