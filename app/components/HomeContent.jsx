import Image from "next/image";
import Days7 from "../../public/image/days7_yourney_mobile.svg";
import ArrayCity from "./ArreyCity";
import Weoffer from "./Weoffer";
import ButtonHome from "./ButtonHome";

const HomeContent = () => {
  return (
    <div className="mt-9 text-white md:relative ">
      <Image
        src={Days7}
        alt="7days"
        width="118"
        height="52"
        className="cursor-pointe ml-auto md:w-[230px] md:h-[88px] xl:w-[305px] xl:h-[123px]"
        priority
      />
      <div className="w-[280px] h-[168px] md:w-[426px] md:h-[243px] md:leading-none md:tracking-tighter md:absolute  mt-6 mb-6 md:mt-0 md:mb-0 md:top-0 md:left-0 uppercase text-[40px] md:text-[62px] xl:text-[98px] tracking-[-1.6px] ">
        <span className="font-medium">Uncover </span>
        <span className="font-thin">Carpathian’s </span>
        <span className="font-thin">Secrets</span>
      </div>
      <ArrayCity />
      <Weoffer />
      <ButtonHome />
    </div>
  );
};

export default HomeContent;
