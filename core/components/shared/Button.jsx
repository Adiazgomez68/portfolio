import Link from "next/link";

const Button = ({
  isRouter,
  type,
  link,
  onClick,
  disabled = false,
  target,
  className = "",
  children,
  classLink = "",
}) => {
  return (
    <>
      {isRouter ? (
        <Link href={link} target={target} className={`${classLink}`}>
          <button type={type} className={`w-48 ${className}`}>
            {children}
          </button>
        </Link>
      ) : (
        <div className={classLink}>
          <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center border rounded-md font-normal
              border-secondary text-secondary bg-transparent py-[0.6rem] w-48 hover:bg-secondary/10
              duration-200 font-inconsolada ${className}`}
          >
            {children}
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
