import MenuIcon from "../icons/MenuIcon";
import useSidebar from "../../../hooks/useSidebar";

const SidebarButton = () => {
  const { open } = useSidebar();

  return (
    <div>
      <button onClick={open} className="duration-200 active:scale-75">
        <MenuIcon />
      </button>
    </div>
  );
};

export default SidebarButton;
