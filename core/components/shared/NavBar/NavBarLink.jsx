import Link from "next/link";
import DropDownMenu from "../DropDownMenu";

const NavBarLink = ({ link, index, onClick, className = "" }) => {
  return (
    <div>
      {link.name !== "DarkMode" ? (
        <Link key={index} href={link.url} onClick={onClick}>
          <li
            className={`p-1.5 dark:font-light tracking-wide text-secondary-dark dark:text-secondary duration-300 text-[14px] hover:text-primary dark:hover:text-primary ${className}`}
          >
            {link.name}
          </li>
        </Link>
      ) : (
        <DropDownMenu />
      )}
    </div>
  );
};

export default NavBarLink;
