import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../public/assets/images/logo.png";

const NavBar = () => {
  type MenuItemsType = {
    name: string;
    link: string;
  };

  const menuItems: MenuItemsType[] = [
    { name: "About Us", link: "#" },
    { name: "Technology", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Community", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="flex justify-between top-0 align-middle h-16 lg:h-auto py-4 px-8 w-full bg-zinc-800 shadow z-20 fixed">
        <Link href="#">
          <Image
            className="select-none"
            src={logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="hidden lg:flex align-middle w-full justify-end">
          <ul className="flex items-center gap-4">
            {menuItems.map((item: MenuItemsType, index: number) => (
              <li
                key={index}
                className="uppercase active:scale-95 select-none focus:text-[#20E3A1] text-slate-50 hover:text-[#20E3A1] cursor-pointer"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center w-full justify-end lg:hidden">
          {isOpen ? (
            <AiOutlineClose
              onClick={handleClose}
              className="text-2xl select-none cursor-pointer text-slate-50 self-center"
            />
          ) : (
            <AiOutlineMenu
              onClick={handleOpen}
              className="text-2xl select-none cursor-pointer text-slate-50 self-center"
            />
          )}
        </div>
      </div>
      <ul
        className={`fixed bg-zinc-800 bg-opacity-5 left-0 ${
          isOpen ? "top-0" : "-top-[100%]"
        } w-full p-4 gap-4 h-screen place-items-center justify-center flex flex-col items-center transition-all backdrop-blur-3xl duration-300 z-10 lg:hidden`}
      >
        {menuItems.map((item: MenuItemsType, index: number) => (
          <li
            key={index}
            onClick={handleClose}
            className="uppercase active:scale-95 focus:text-[#20E3A1] select-none text-slate-50 hover:text-[#20E3A1] cursor-pointer"
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
