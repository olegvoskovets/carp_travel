import Image from "next/image";
import Days7 from "../../public/image/days7_yourney_mobile.svg";

const Image7Days = () => {
  return (
    <Image
      src={Days7}
      alt="7days"
      width="118"
      height="52"
      className="cursor-pointe ml-auto md:w-[230px] md:h-[88px] xl:w-[305px] xl:h-[123px]"
      priority
    />
  );
};

export default Image7Days;
