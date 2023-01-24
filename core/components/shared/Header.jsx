import Image from "next/image";
import { links } from "@/core/utils/routes";
import Wrapper from "./Wrapper";
import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";
import SideBarMenu from "./SideBarMenu";

const Header = ({ className }) => {
  return (
    <header
      className={`flex items-center w-full  bg-slate-900 sm:py-0 ${className}`}
    >
      <Wrapper>
        <div className="flex items-center w-full pl-5">
          <Image
            src="/public/vercel.svg"
            width="100"
            height="100"
            alt="Logo portfolio"
          />
        </div>

        <div className="flex items-center justify-end w-full pr-5 sm:hidden">
          <MenuIcon />
          <SideBarMenu />
        </div>

        <nav className="items-center justify-end hidden w-full pr-5 sm:flex">
          <ul className="flex justify-evenly">
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                <li className="p-5 duration-300 hover:text-green-400">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;
