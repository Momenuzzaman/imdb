import Link from "next/link";
import React from "react";

const MenuItems = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4  lg:mx-6  hover:text-amber-500">
        <Icon className="text-2xl mx-2 sm:hidden" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItems;
