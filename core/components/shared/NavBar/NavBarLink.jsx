import Link from "next/link";

const NavBarLink = ({ link, index, onClick }) => {
  return (
    <div>
      <Link key={index} href={link.url} onClick={onClick}>
        <li className="p-5 font-light text-gray-800 duration-300 text-md hover:text-green-400">
          {link.name}
        </li>
      </Link>
    </div>
  );
};

export default NavBarLink;
