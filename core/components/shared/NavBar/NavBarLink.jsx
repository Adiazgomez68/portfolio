import Link from "next/link";
import DropDownMenu from "../DropDownMenu";
import { twMerge } from "tailwind-merge";

const NavBarLink = ({ link, index, onClick, className = "" }) => {
  return (
    <div>
      {link.name !== "DarkMode" ? (
        <Link key={index} href={link.url} onClick={onClick}>
          <li
            className={twMerge(
              "px-2 py-1.5 sm:px-3 sm:py-1.5 dark:font-light tracking-wide text-secondary-dark dark:text-secondary duration-300 text-[13px] sm:text-[14px] hover:text-primary-light dark:hover:text-primary whitespace-nowrap flex-shrink-0",
              className
            )}
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
