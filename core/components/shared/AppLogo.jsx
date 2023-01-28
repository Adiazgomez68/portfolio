import Logo from "../../../public/images/Logo.svg";
import Image from "next/image";

const AppLogo = ({ className = "" }) => {
  return (
    <picture className={`flex items-center ${className}`}>
      <Image
        src={Logo}
        alt="Logo portfolio"
        width={100}
        height={100}
        className="w-full"
      />
    </picture>
  );
};

export default AppLogo;
