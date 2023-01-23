import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-20 bg-gray-500">
      <nav className="flex justify-between">
        <Image alt="Logo Portfolio" />
        <ul className="flex justify-around w-1/2">
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
