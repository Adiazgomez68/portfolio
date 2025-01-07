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
      className={`fixed top-0 z-[60] backdrop-blur-2xl w-full h-screen sm:hidden duration-300 ${
        isOpen ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-5 my-5 z-50">
        <AppLogo className="w-40" />
        <CloseSidebarButton />
      </div>
      <nav className="fixed top-0 items-center w-full">
        <ul className="px-5 flex flex-col gap-10 justify-center items-center h-screen">
          {links.map((link, index) => (
            <NavBarLink
              className="px-1 py-3"
              onClick={close}
              key={index}
              link={link}
              index={index}
            />
          ))}
        </ul>
      </nav>

      <p className="absolute bottom-10 w-full text-center font-inconsolada text-primary text-xs md:text-sm">
        Diseñado y construido por Andrés Díaz
      </p>
    </GlassContainer>
  );
};

export default SidebarMenu;
