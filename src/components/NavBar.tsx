import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between align-middle py-4 px-8 w-full bg-zinc-800 shadow z-10 fixed">
      <Link href="#">
        <Image src={logo} alt="Logo" width={100} height={100} />
      </Link>
      <div className="flex align-middle">
        <button
          type="button"
          className="text-[#20E3A1] bg-[#0E1436] border-2 px-4 py-1 rounded-tr-lg border-[#20E3A1] active:scale-95 hover:brightness-125 transition-all ease-in-out"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
