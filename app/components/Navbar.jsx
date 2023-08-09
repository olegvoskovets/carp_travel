"use client";

import Image from "next/image";
import Logo2 from "../../public/logo.svg";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full h-8 ">
      <div className="flex justify-between items-center h-full w-full ">
        <Link href="/">
          <Image
            src={Logo2}
            alt="logo"
            width="61"
            height="32"
            className="cursor-pointe w-full  "
            priority
          />
        </Link>

        <div>
          <ul className="hidden md:flex gap-6 text-white text-[14px] tracking-[.11em]">
            <Link href="#">
              <li className="  ">About</li>
            </Link>
            <Link href="#">
              <li className="  ">Services</li>
            </Link>
            <Link href="#">
              <li className="  ">Career</li>
            </Link>
            <Link href="#">
              <li className="  ">Gallery</li>
            </Link>
            <Link href="#">
              <li className="   ">Contacts</li>
            </Link>
          </ul>
        </div>
        {!menuOpen && (
          <span
            onClick={handleClickMenu}
            className="text-white uppercase text-[14px] md:hidden cursor-pointer tracking-[.11em]"
          >
            Menu
          </span>
        )}

        {menuOpen && (
          <div
            className={
              menuOpen
                ? "fixed left-0 top-0 w-full md:hidden  bg-[#010A05BF] z-10  ease-in duration-500  h-[642px] flex text-center justify-center  "
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div className="container-main">
              <span
                onClick={handleClickMenu}
                className="uppercase text-[14px] text-white absolute right-5 top-11 cursor-pointer"
              >
                close
              </span>
              <ul className=" flex flex-col gap-12 text-white text-[18px]  justify-center tracking-wider ">
                <Link href="#">
                  <li className="  ">About</li>
                </Link>
                <Link href="#">
                  <li className="   ">Services</li>
                </Link>
                <Link href="#">
                  <li className="  ">Career</li>
                </Link>
                <Link href="#">
                  <li className="  ">Gallery</li>
                </Link>
                <Link href="#">
                  <li className="   ">Contacts</li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
