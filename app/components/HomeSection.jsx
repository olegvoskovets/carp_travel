import ArrayCity from "./ArreyCity";
import ButtonHome from "./ButtonHome";
import HomeContent from "./HomeContent";
import Navbar from "./Navbar";
import Weoffer from "./Weoffer";

const HomeSection = () => {
  return (
    <section className="bg-no-repeat bg-[#020F08] bg-center object-cover text-white  bg-[url('../public/image/background_desktop.png')] w-full  h-[642px] m-auto pt-9 pb-14 md:pt-6 md:pb-14 xl:pb-20  md:h-[530px] xl:h-[763px] md:bg-[url('../public/image/background_tablet.png') xl:bg-[url('../public/image/background_desktop.png') ">
      <div className="container-main">
        <Navbar />
        <HomeContent />
      </div>
    </section>
  );
};

export default HomeSection;
