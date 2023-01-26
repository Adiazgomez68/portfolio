import MenuIcon from "../icons/MenuIcon";
import useSidebar from "../../../hooks/useSidebar";

const SidebarButton = () => {
  const { isOpen, open } = useSidebar();

  console.log(isOpen);

  return (
    <div>
      <button onClick={open}>
        <MenuIcon />
      </button>
    </div>
  );
};

export default SidebarButton;
