import Link from "next/link";
import MenuItems from "./MenuItems";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItems title="Home" address="/" Icon={AiFillHome} />
        <MenuItems title="About" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div>
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg ">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline"> Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
