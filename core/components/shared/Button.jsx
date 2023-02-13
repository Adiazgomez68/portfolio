import Link from "next/link";

const Button = ({
  isRouter,
  title,
  link,
  onClick,
  target,
  className = "",
  children,
  classLink = "",
}) => {
  return (
    <>
      {isRouter ? (
        <Link href={link} target={target} className={`w-full ${classLink}`}>
          <button className={className}> {title} </button>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex items-center justify-center ${className}`}
        >
          {title}
          <span className="relative left-2">{children}</span>
        </button>
      )}
    </>
  );
};

export default Button;
