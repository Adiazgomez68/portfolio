import Close from "../icons/Close";
import useSidebar from "../../../hooks/useSidebar";

const CloseSidebarButton = () => {
  const { close } = useSidebar();

  return (
    <button onClick={close} className="duration-200 active:scale-75">
      <Close className="text-primary dark:text-secondary" />
    </button>
  );
};

export default CloseSidebarButton;
