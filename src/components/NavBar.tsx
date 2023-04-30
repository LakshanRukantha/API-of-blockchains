import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../public/assets/images/logo.png";

const NavBar = () => {
  const menuItems = [
    "Home",
    "Community",
    "Technology",
    "About Us",
    "Blog",
    "Careers",
    "About Us",
  ];

  const [open, isOpen] = useState(false);

  return (
    <nav className="flex justify-between align-middle py-4 px-8 w-full bg-zinc-800 shadow z-10 fixed">
      <Link href="#">
        <Image src={logo} alt="Logo" width={100} height={100} />
      </Link>
      <div className="hidden lg:flex align-middle w-full justify-end">
        <ul className="flex items-center gap-4">
          {menuItems.map((item: string, index: number) => (
            <li
              key={index}
              className="uppercase text-slate-50 hover:text-[#20E3A1] cursor-pointer"
            >
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center w-full justify-end lg:hidden">
        {open ? (
          <AiOutlineClose className="text-2xl text-slate-50 self-center" />
        ) : (
          <AiOutlineMenu className="text-2xl text-slate-50 self-center" />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
