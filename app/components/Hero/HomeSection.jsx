
import HomeContent from "./HomeContent";
import Navbar from "./Navbar";


const HomeSection = () => {
  return (
    <section className="bg-no-repeat  bg-center bg-cover  bg-home_section_mobile md:bg-home_section_tablet w-full  h-[642px] m-auto pt-9 pb-14 md:pt-6 md:pb-14 xl:pb-20  md:h-[530px] xl:h-[763px]  xl:bg-home_section_desktop ">
      <div className="container-main">
        <Navbar />
        <HomeContent />
      </div>
    </section>
  );
};

export default HomeSection;
