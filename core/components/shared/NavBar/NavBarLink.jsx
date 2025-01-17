import Link from "next/link";
import SwitchToggle from "../SwitchToggle";

const NavBarLink = ({ link, index, onClick, className = "" }) => {
  return (
    <div>
      {link.name !== "DarkMode" ? (
        <Link key={index} href={link.url} onClick={onClick}>
          <li
            className={`p-5 dark:font-normal font-inconsolada tracking-wide text-primary-dark dark:text-primary duration-300 md:text-sm text-lg hover:text-secondary dark:hover:text-secondary ${className}`}
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
