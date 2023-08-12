import Image from "next/image";
import LeftSvgmobile from "../../../public/image/button_left-mobile.svg";
import RigthSvgmobile from "../../../public/image/button-rigth-mobile.svg";
import svgLeft_mobile from "../../../public/image/svgLeft_mobile.svg";
svgLeft_mobile;
import Link from "next/link";

const ButtonHome = () => {
  return (
    <div className="relative mt-[26px] md:mt-[42px] h-[53px]">
      <Link href="#contacts">
        <svg
          className="cursor-pointer absolute top-0 left-0   "
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="53"
          viewBox="0 0 42 53"
          fill="none"
        >
          <rect width="0.954545" height="11" fill="white" />
          <rect width="42" height="1" fill="white" />
          <rect
            width="0.954545"
            height="11"
            transform="matrix(1 0 0 -1 0 53)"
            fill="white"
          />
          <rect
            width="42"
            height="1"
            transform="matrix(1 0 0 -1 0 53)"
            fill="white"
          />
        </svg>
        <button className="w-full  uppercase py-[13px] px-16 bg-white bg-opacity-10 hover:bg-opacity-20 text-[18px] font-bold ">
          Join NOW
        </button>
        <svg
          className="cursor-pointer absolute bottom-0 right-0 "
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="53"
          viewBox="0 0 42 53"
          fill="none"
        >
          <rect
            width="0.954545"
            height="11"
            transform="matrix(-1 0 0 1 42 0)"
            fill="white"
          />
          <rect
            width="42"
            height="1"
            transform="matrix(-1 0 0 1 42 0)"
            fill="white"
          />
          <rect
            x="42"
            y="53"
            width="0.954545"
            height="11"
            transform="rotate(180 42 53)"
            fill="white"
          />
          <rect
            x="42"
            y="53"
            width="42"
            height="1"
            transform="rotate(180 42 53)"
            fill="white"
          />
        </svg>
        {/* <Image
          src={RigthSvgmobile}
          alt="LeftSvg"
          width="35"
          height="53"
          className="cursor-pointer absolute bottom-0 right-0 "
          priority
        /> */}
      </Link>
    </div>
  );
};

export default ButtonHome;
