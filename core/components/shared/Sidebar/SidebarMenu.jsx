import { links } from "../../../utils/routes";
import GlassContainer from "../GlassContainer";
import NavBarLink from "../NavBar/NavBarLink";
import AppLogo from "../AppLogo";
import useSidebar from "../../../hooks/useSidebar";
import CloseSidebarButton from "./CloseSidebarButton";

const SidebarMenu = () => {
  const { isOpen, close } = useSidebar();

  return (
    <GlassContainer
      className={`fixed top-0 z-40 backdrop-blur-2xl w-full h-screen sm:hidden duration-300 ${
        isOpen ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="fixed top-0 items-center w-full h-screen ">
        <div className="flex items-center justify-between px-5 my-5">
          <AppLogo className="w-40" />
          <CloseSidebarButton />
        </div>
        <ul className="px-5">
          {links.map((link, index) => (
            <NavBarLink
              className="px-1 py-3 border-b border-primary border-opacity-10"
              onClick={close}
              key={index}
              link={link}
              index={index}
            />
          ))}
        </ul>
      </nav>
    </GlassContainer>
  );
};

export default SidebarMenu;
