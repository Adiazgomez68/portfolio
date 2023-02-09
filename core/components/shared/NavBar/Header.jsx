import { links } from "../../../utils/routes";
import Wrapper from "../Wrapper";
import GlassContainer from "../GlassContainer";
import NavBarLink from "./NavBarLink";
import AppLogo from "../AppLogo";
import SidebarButton from "../Sidebar/SidebarButton";

const Header = ({ className }) => {
  return (
    <GlassContainer className="fixed top-0 z-10 bg-light">
      <header
        className={`flex items-center w-full sm:py-0 py-2 bg-light ${className}`}
      >
        <Wrapper>
          <AppLogo className="pl-5 w-52 sm:w-48" />

          <nav className="items-center justify-end hidden w-full pr-5 sm:flex">
            <ul className="flex justify-evenly">
              {links.map((link, index) => (
                <NavBarLink key={index} link={link} index={index} />
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end w-full pr-5 sm:hidden">
            <SidebarButton />
          </div>
        </Wrapper>
      </header>
    </GlassContainer>
  );
};

export default Header;
