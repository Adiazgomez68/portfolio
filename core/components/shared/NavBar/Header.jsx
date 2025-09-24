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
    <GlassContainer
      className={twMerge(
        "fixed !w-auto border border-transparent top-3 z-[60] !rounded-full px-3 left-1/2 duration-200 -translate-x-1/2",
        isScrolled ? "dark:border-gray-50/10 dark:bg-[#13192c]/60 bg-white shadow-sm" : ""
      )}
    >
      <header className={`flex w-full items-center rounded-full ${className}`}>
        <nav className="items-center flex">
          <ul className="flex gap-x-1">
            {links.map((link, index) => (
              <NavBarLink key={index} link={link} index={index} />
            ))}
          </ul>
        </nav>

        {/* <div className="flex items-center justify-end w-full pr-5 sm:hidden">
          <SidebarButton />
        </div> */}
      </header>
    </GlassContainer>
  );
};

export default Header;
