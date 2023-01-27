import { links } from "../../../utils/routes";
import GlassContainer from "../GlassContainer";
import NavBarLink from "../NavBar/NavBarLink";
import AppLogo from "../AppLogo";
import useSidebar from "../../../hooks/useSidebar";
import Close from "../icons/Close";
import CloseSidebarButton from "./CloseSidebarButton";

const SidebarMenu = () => {
  const { isOpen, close } = useSidebar();

  return (
    <GlassContainer
      className={`fixed top-0 z-40 w-full h-screen sm:hidden duration-300 ${
        isOpen ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="fixed top-0 items-center w-full h-screen ">
        <div className="flex items-center justify-between px-5 my-5">
          <AppLogo />
          <CloseSidebarButton />
        </div>
        <ul className="divide-y ">
          {links.map((link, index) => (
            <NavBarLink onClick={close} key={index} link={link} index={index} />
          ))}
        </ul>
      </nav>
    </GlassContainer>
  );
};

export default SidebarMenu;
