import Image from "next/image";
import LeftSvgmobile from "../../../public/image/button_left-mobile.svg";
import RigthSvgmobile from "../../../public/image/button-rigth-mobile.svg";
import svgLeft_mobile from "../../../public/image/svgLeft_mobile.svg";

import Link from "next/link";
import Leftsvg_mobile from "./svg/Leftsvg_mobile";
import RigthSvg_mobile from "./svg/RigthSvg_mobile";

const ButtonHome = () => {
  return (
    <div className="relative mt-[26px] md:mt-[42px] h-[53px]">
      <Link href="#contacts ">
        <Leftsvg_mobile className="cursor-pointer absolute top-0 left-0   " />

        <button className="w-full  uppercase py-[13px] px-16 bg-white bg-opacity-10 text-[18px] font-bold hover:bg-opacity-20 duration-200  ">
          Join NOW
        </button>
        <RigthSvg_mobile className="cursor-pointer absolute bottom-0 right-0 " />
      </Link>
    </div>
  );
};

export default ButtonHome;
