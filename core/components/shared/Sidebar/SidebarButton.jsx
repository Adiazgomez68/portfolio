import MenuIcon from "../icons/MenuIcon";
import useSidebar from "../../../hooks/useSidebar";

const SidebarButton = () => {
  const { open } = useSidebar();

  return (
    <button onClick={open} className="duration-200 active:scale-75">
      <MenuIcon className="text-primary-dark dark:text-primary" size="1.7em" />
    </button>
  );
};

export default SidebarButton;
