import ArrayCity from "./ArreyCity";
import Weoffer from "./Weoffer";
import ButtonHome from "./ButtonHome";
import Image7Days from "./Image7Days";
import LabelHomeContent from "./LabelHomeContent";

const HomeContent = () => {
  return (
    <div className="mt-9 text-white h:full md:relative md:mt-16 xl:mt-[72px] xl:h-[577px] xl:py-6">
      <div className="md:w-[230px] ml-auto h-full xl:w-[295px]">
        <Image7Days />
        <div className="  mt-6 mb-6  flex flex-col gap-6 md:mt-0 md:mb-0 md:top-0 md:left-0 md:absolute md:h-full  md:justify-between xl:h-[553px]">
          <LabelHomeContent />
          <ArrayCity />
        </div>

        <Weoffer />
        <ButtonHome />
      </div>
    </div>
  );
};

export default HomeContent;
