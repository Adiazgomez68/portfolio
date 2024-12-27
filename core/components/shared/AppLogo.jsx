import LightLogo from "../../../public/images/Light_Logo.svg";
import DarkLogo from "../../../public/images/Dark_Logo.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

const AppLogo = ({ className = "" }) => {
  const { theme } = useTheme();

  return (
    <picture className={`flex items-center ${className}`}>
      <Image
        // src={theme === "light" ? LightLogo : DarkLogo}
        src="/images/Logo.png"
        alt="Logo portfolio"
        width={100}
        height={100}
        className="w-[3rem]"
      />
    </picture>
  );
};

export default AppLogo;
