import React from "react";
import TitleAbout from "./TitleAbout";
import TextAbout from "./TextAbout";
import TitleFrom from "./TitleFrom";
import TitleWeUse from "./TitleWeUse";

const About = () => {
  return (
    <section
      id="about"
      className=" h-[873px] md:h-[768px] xl:h-[697px]  bg-no-repeat py-[54px] md:py-16 xl:py-20  bg-cover bg-about_section_mobile md:bg-about_section_tablet xl:bg-about_section_desktop"
    >
      <div className="container-about xl:p-6 all:w-full md:h-full md:relative">
        <div className=" md:flex justify-between xl:gap-6 xl:justify-start">
          <TitleAbout />
          <TextAbout />
        </div>
        <div className="md:flex justify-between md:h-[250px] md:absolute md:bottom-0 md:gap-5 xl:static xl:h-[74px] xl:flex-row-reverse">
          <TitleFrom />
          <TitleWeUse />
        </div>
      </div>
    </section>
  );
};

export default About;
