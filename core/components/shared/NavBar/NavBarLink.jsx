import Link from "next/link";
import SwitchToggle from "../SwitchToggle";

const NavBarLink = ({ link, index, onClick, className = "" }) => {
  return (
    <div>
      {link.name !== "DarkMode" ? (
        <Link key={index} href={link.url} onClick={onClick}>
          <li
            className={`p-5 dark:font-normal font-semibold tracking-wide text-gray-800 dark:text-white duration-300 text-sm hover:text-green-500 dark:hover:text-green-400 ${className}`}
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
