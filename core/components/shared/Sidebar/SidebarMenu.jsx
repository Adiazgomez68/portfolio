import { links } from "../../../utils/routes";
import GlassContainer from "../GlassContainer";
import NavBarLink from "../NavBar/NavBarLink";
import AppLogo from "../AppLogo";
import useSidebar from "../../../hooks/useSidebar";

const SidebarMenu = () => {
  const { isOpen } = useSidebar();

  return (
    <GlassContainer
      className={`fixed top-0 z-40 w-full h-screen sm:hidden ${
        isOpen ? "bg-red-300" : "hidden"
      }`}
    >
      <nav className="fixed top-0 items-center w-3/4 h-screen ">
        <AppLogo className="my-5" />
        <ul className="divide-y ">
          {links.map((link, index) => (
            <NavBarLink key={index} link={link} index={index} />
          ))}
        </ul>
      </nav>
    </GlassContainer>
  );
};

export default SidebarMenu;
