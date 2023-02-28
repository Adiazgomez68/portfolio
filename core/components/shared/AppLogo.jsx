import LightLogo from "../../../public/images/Light_Logo.png";
import DarkLogo from "../../../public/images/Dark_Logo.png";
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
        className="w-full"
      />
    </picture>
  );
};

export default AppLogo;
