"use client";

import { useState } from "react";
import ArrayServices from "./ArrayServices";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";
import WiOffer from "../../../public/image/dataServisecImage/we_offer_mobile.svg";
import Image from "next/image";
import WeOffer from "./WeOffer";
import NumberFoto from "./NumberFoto";
import TitleSevise from "./TitleSevise";
import TextServise from "./TextServise";

const dataServisec = [
  {
    fotoImage: ["servisec1_mobile", "servisec1_tablet", "servisec1_desktop"],
  },
];

const Servisec = () => {
  const [indexServisec, setIndexServisec] = useState(0);
  const [device, setDevice] = useState(null);
  const [fotoimage_bacground, setFotoImage_bacground] = useState(null);

  const handleClickItem = (i) => {
    setIndexServisec(i);
  };

  let viewport = {
    mobile: false,
    tablet: false,
    desktop: false,
  };

  const myDevice = (v) => {
    if (v.mobile) {
      return setDevice("mobile");
    }
    if (v.tablet) {
      return setDevice("tablet");
    }
    if (v.desktop) {
      return setDevice("desktop");
    }
  };
  const Viewport = ({ children }) => {
    const desktop = useMediaQuery({ minWidth: 1280 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.9 });
    const mobile = useMediaQuery({ maxWidth: 767.9 });

    viewport = {
      mobile,
      tablet,
      desktop,
    };

    myDevice(viewport);
    setFotoImage_bacground(`bg-servisec${String(indexServisec + 1)}_${device}`);

    return children;
  };
  const Example = ({ children }) => <Viewport>{children}</Viewport>;

  const myUrlFoto = `bg-servisec${indexServisec + 1}_${device}`;
  const my_bg_foto = `bg-services_section${indexServisec + 1}_${device}`;

  const titleServise = [
    "Feel the adrenaline rush",
    "Destroy your limitations",
    "Get Inspired",
    "Overcome your fears",
    "Trust the flow",
  ];
  const textServise = [
    "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
    "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
    "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
    "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
    "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  ];

  //bg-servisec1_desktop bg-servisec1_mobile bg-servisec1_tablet
  //bg-services_section1_mobile bg-services_section1_tablet bg-services_section1_desktop

  //bg-servisec2_desktop bg-servisec2_mobile bg-servisec2_tablet
  //bg-services_section2_mobile bg-services_section2_tablet bg-services_section2_desktop

  //bg-servisec3_desktop bg-servisec3_mobile bg-servisec3_tablet
  //bg-services_section3_mobile bg-services_section3_tablet bg-services_section3_desktop

  //bg-servisec4_desktop bg-servisec4_mobile bg-servisec4_tablet
  //bg-services_section4_mobile bg-services_section4_tablet bg-services_section4_desktop

  //bg-servisec5_desktop bg-servisec5_mobile bg-servisec5_tablet
  //bg-services_section5_mobile bg-services_section5_tablet bg-services_section5_desktop
  return (
    <section
      id="servisec"
      className={`${my_bg_foto}   h-[851px] md:h-[621px] xl:h-[779px]  bg-no-repeat  bg-cover pb-14 pt-[54px] md:py-[65px] xl:py-[104px] `}
    >
      <div className="container-main ">
        <div className="md:flex md:justify-between xl:justify-normal">
          <WeOffer />
          <NumberFoto number={indexServisec + 1} />
        </div>

        <div className="md:flex md:justify-between md:gap-5">
          <div className="">
            <Example>
              <motion.div
                initial={{
                  x: -600,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                }}
                className={`${myUrlFoto} w-full h-[213px] bg-no-repeat object-cover md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]`}
              ></motion.div>
            </Example>
          </div>
          <div className=" md:relative md:flex md:flex-col md:justify-between xl:flex-row xl:w-full">
            <TitleSevise title={titleServise[indexServisec]} />
            <ArrayServices
              handleClickItem={handleClickItem}
              activeNumber={indexServisec}
            />
            <TextServise text={textServise[indexServisec]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servisec;
//
