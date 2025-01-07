import LightLogo from "../../../public/images/Logo-light.png";
import DarkLogo from "../../../public/images/Logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const AppLogo = ({ className = "" }) => {
  const { theme } = useTheme();

  return (
    <picture className={`flex items-center ${className}`}>
      <Image
        src={theme === "light" ? LightLogo : DarkLogo}
        alt="Logo portfolio"
        width={100}
        height={100}
        className="w-[3rem]"
      />
    </picture>
  );
};

export default AppLogo;
