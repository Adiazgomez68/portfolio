const Input = ({ type, name, className = "", placeholder, onChange }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        onChange={onChange}
        required
        className={`w-full py-3 border pl-3 bg-[#F9F9F9] border-[#BBBBBB] rounded-md placeholder:text-primary focus:outline-0 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
