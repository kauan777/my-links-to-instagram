import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="w-full flex items justify-center pt-8">
      <Image src={logo} width={40} height={40} alt="Logo Kauan Costa" />
    </header>
  );
}

export default Header;
