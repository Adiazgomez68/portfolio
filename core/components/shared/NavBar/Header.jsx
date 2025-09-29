import { links } from "../../../utils/routes";
import GlassContainer from "../GlassContainer";
import NavBarLink from "./NavBarLink";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Header = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex w-full items-center justify-center rounded-full ${className}`}>
      <GlassContainer
        className={twMerge(
          "fixed border !w-auto border-transparent top-3 z-[60] !rounded-full px-3 duration-200 left-1/2 -translate-x-1/2 min-w-fit",
          isScrolled ? "dark:border-gray-50/10 dark:bg-[#13192c]/60 bg-white shadow-sm" : ""
        )}
      >
        <nav className="items-center flex">
          <ul className="flex flex-shrink-0">
            {links.map((link, index) => (
              <NavBarLink key={index} link={link} index={index} />
            ))}
          </ul>
        </nav>
      </GlassContainer>

      {/* <div className="flex items-center justify-end w-full pr-5 sm:hidden">
          <SidebarButton />
        </div> */}
    </header>
  );
};

export default Header;
