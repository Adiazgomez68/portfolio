import MenuIcon from "../icons/MenuIcon";
import useSidebar from "../../../hooks/useSidebar";

const SidebarButton = () => {
  const { open } = useSidebar();

  return (
    <button onClick={open} className="duration-200 active:scale-75">
      <MenuIcon className="text-primary dark:text-secondary" />
    </button>
  );
};

export default SidebarButton;
