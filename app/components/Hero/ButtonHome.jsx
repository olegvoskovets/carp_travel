"use client";
// import Image from "next/image";
// import LeftSvgmobile from "../../../public/image/button_left-mobile.svg";
// import RigthSvgmobile from "../../../public/image/button-rigth-mobile.svg";
// import svgLeft_mobile from "../../../public/image/svgLeft_mobile.svg";
import { Link } from "react-scroll/modules";
import Leftsvg_mobile from "./svg/Leftsvg_mobile";
import RigthSvg_mobile from "./svg/RigthSvg_mobile";
import Leftsvg_desktop from "./svg/Leftsvg_desktop";
import Rigthsvg_desktop from "./svg/Rigthsvg_desktop";

import Leftsvg_tablet from "./svg/Leftsvg_tablet";
import Rigthsvg_tablet from "./svg/Rigthsvg_tablet";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const ButtonHome = () => {
  const [device, setDevice] = useState(null);

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

    return children;
  };
  const Example = ({ children }) => <Viewport>{children}</Viewport>;

  const returnLeftSvg = (text) => {
    if (device === "tablet") {
      return <Leftsvg_tablet className={text} />;
    }
    if (device === "desktop") {
      return <Leftsvg_desktop className={text} />;
    }
    return <Leftsvg_mobile className={text} />;
  };

  const returnRigthSvg = (text) => {
    if (device === "tablet") {
      return <Rigthsvg_tablet className={text} />;
    }
    if (device === "desktop") {
      return <Rigthsvg_desktop className={text} />;
    }
    return <RigthSvg_mobile className={text} />;
  };

  return (
    <div className="relative mt-[26px] md:mt-[42px] ">
      <Example>
        <Link to="contacts" spy={true} smooth={true} offset={50} duration={300}>
          {returnLeftSvg("cursor-pointer absolute top-0 left-0   ")}

          <button className="w-full  uppercase py-[13px] md:py-[11.5px] xl:py-[22px] px-16 bg-white bg-opacity-10 text-[18px] font-fontWeight700 hover:bg-opacity-20 duration-200  ">
            Join NOW
          </button>
          {returnRigthSvg("cursor-pointer absolute top-0 right-0 ")}
        </Link>
      </Example>
    </div>
  );
};

export default ButtonHome;
