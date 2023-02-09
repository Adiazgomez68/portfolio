import Link from "next/link";

const Button = ({ isRouter, title, link, onClick, target, className = "" }) => {
  return (
    <>
      {isRouter ? (
        <Link href={link} target={target} className="w-full">
          <button className={className}> {title} </button>
        </Link>
      ) : (
        <button onClick={onClick} className={className}>
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
