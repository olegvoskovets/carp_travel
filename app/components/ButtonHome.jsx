import Image from "next/image";
import LeftSvgmobile from "../../public/image/button_left-mobile.svg";
import RigthSvgmobile from "../../public/image/button-rigth-mobile.svg";

const ButtonHome = () => {
  return (
    <div className="relative mt-[26px] md:mt-[42px] ">
      <Image
        src={LeftSvgmobile}
        alt="LeftSvg"
        width="35"
        height="53"
        className="cursor-pointe absolute top-0 left-0   "
        priority
      />

      <button className="w-full  uppercase py-[9px] px-16 bg-white bg-opacity-10 hover:bg-opacity-20 text-[18px] font-bold ">
        Join NOW
      </button>
      <Image
        src={RigthSvgmobile}
        alt="LeftSvg"
        width="35"
        height="53"
        className="cursor-pointe absolute bottom-0 right-0 "
        priority
      />
    </div>
  );
};

export default ButtonHome;
