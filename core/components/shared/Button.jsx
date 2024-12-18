import Link from "next/link";

const Button = ({
  isRouter,
  type,
  title,
  link,
  onClick,
  disabled,
  target,
  className = "",
  children,
  classLink = "",
}) => {
  return (
    <>
      {isRouter ? (
        <Link href={link} target={target} className={`${classLink}`}>
          <button type={type} className={className}>
            {title}
          </button>
        </Link>
      ) : (
        <div className={classLink}>
          <button
            type={type}
            onClick={onClick}
            className={`flex items-center justify-center border rounded-md font-normal
              border-secondary text-secondary bg-transparent py-3 px-5 hover:bg-secondary/10
              duration-200 font-inconsolada ${className}`}
          >
            {title}
            <span className="relative left-2">{children}</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
