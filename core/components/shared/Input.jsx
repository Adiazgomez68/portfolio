const Input = ({ type, className = "", placeholder }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        required
        className={`w-full py-3 border pl-3 border-[#BBBBBB] rounded-md placeholder:text-primary focus:outline-0 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
