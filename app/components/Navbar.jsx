"use client";
import { motion } from "framer-motion";

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
            <li>
              <Link href="#">About </Link>
            </li>

            <li>
              <Link href="#servisec">Services</Link>
            </li>

            <li>
              <Link href="#">Career</Link>
            </li>

            <li>
              <Link href="#">Gallery </Link>
            </li>

            <li>
              <Link href="#contacts">Contacts</Link>
            </li>
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
          <motion.div
            initial={{
              x: -1000,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.15,
            }}
            className={
              menuOpen
                ? "fixed left-0 top-0 w-full md:hidden  bg-[#010A05BF] z-10  ease-in duration-500  h-[642px] flex text-center justify-center backdrop-blur-xl min-h-screen  "
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
              <ul
                className=" flex flex-col gap-12 text-white text-[18px]  justify-center tracking-wider "
                onClick={handleClickMenu}
              >
                <li>
                  <Link href="#">About </Link>
                </li>

                <li>
                  <Link href="#servisec">Services</Link>
                </li>

                <li>
                  <Link href="#">Career</Link>
                </li>

                <li>
                  G<Link href="#">allery </Link>
                </li>

                <li>
                  <Link href="#contacts">Contacts </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
