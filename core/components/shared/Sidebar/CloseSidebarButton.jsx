import Close from "../icons/Close";
import useSidebar from "../../../hooks/useSidebar";

const CloseSidebarButton = () => {
  const { close } = useSidebar();

  return (
    <button onClick={close} className="duration-200 z-50 active:scale-75">
      <Close className="text-primary-dark dark:text-primary w-8 h-8" />
    </button>
  );
};

export default CloseSidebarButton;
