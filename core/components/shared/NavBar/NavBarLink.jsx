import Link from "next/link";

const NavBarLink = ({ link, index, onClick, className = "" }) => {
  return (
    <div>
      <Link key={index} href={link.url} onClick={onClick}>
        <li
          className={`p-5 font-medium text-gray-800 duration-300 text-md hover:text-green-400 ${className}`}
        >
          {link.name}
        </li>
      </Link>
    </div>
  );
};

export default NavBarLink;
