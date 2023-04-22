import React from "react";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between align-middle py-4 px-8 w-full bg-zinc-800 shadow z-10 fixed">
      <Image src={logo} alt="Logo" width={100} height={100} />
      <div className="flex align-middle">
        <button
          type="button"
          className="text-[#20E3A1] bg-[#0E1436] border-2 px-4 py-1 rounded-tr-lg border-[#20E3A1]"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
