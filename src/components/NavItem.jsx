"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const NavItem = ({ title, param }) => {
  const searChParams = useSearchParams();
  const genre = searChParams.get("genre");
  return (
    <Link
      className={`font-semibold mx-4 p-2 hover:text-amber-600 ${
        genre &&
        genre == param &&
        "underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg"
      }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
};

export default NavItem;
