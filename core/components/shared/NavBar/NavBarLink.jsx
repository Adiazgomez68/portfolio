import Link from "next/link";
import SwitchToggle from "../SwitchToggle";

const NavBarLink = ({ link, index, onClick, className = "" }) => {
  return (
    <div>
      {link.name !== "DarkMode" ? (
        <Link key={index} href={link.url} onClick={onClick}>
          <li
            className={`p-5 font-medium text-gray-800 dark:text-white duration-300 text-md hover:text-green-400 dark:hover:text-green-400 ${className}`}
          >
            {link.name}
          </li>
        </Link>
      ) : (
        <SwitchToggle />
      )}
    </div>
  );
};

export default NavBarLink;
