import {useAtom} from "jotai"
import {sidebarMenuAtom} from "../atoms/sidebar";

const useSidebar = () => {
    const [isOpen, setIsOpen] = useAtom(sidebarMenuAtom);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return {
        isOpen, open, close
    }
}

export default useSidebar;