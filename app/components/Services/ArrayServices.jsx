import { motion } from "framer-motion";

const array = [
  "Atvs traveling",
  "Rock climbing",
  "Hot air ballooning",
  "Skydiving",
  "Rafting",
];

const returnTitle = (title) => {
  return (
    <motion.span
      initial={{
        x: 300,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="text-[12px] font-fontWeight200 lowercase absolute left-[310px]  leading-loose tracking-widest text-right text-color_text_servisec70"
    >
      {title}
    </motion.span>
  );
};

const ArrayServices = ({ handleClickItem, activeNumber, title }) => {
  return (
    <ul className=" flex flex-col  uppercase gap-4 text-[20px] mb-[34px] bg:text-[22px] xl:text-[28px] xl:leading-6 leading-4 font-extralight cursor-pointer xl:gap-6">
      {array.map((item, index) => (
        <li
          className={
            index === activeNumber
              ? `font-fontWeight500 flex items-center   `
              : "font-fontWeight100 text-color_text_servisec40 hover:ml-2 hover:text-white duration-200 transition-all "
          }
          key={item}
          onClick={() => handleClickItem(index)}
        >
          {index === activeNumber && (
            <div className=" inline-block w-[6px] h-[6px] bg-white rotate-45 mr-2 "></div>
          )}
          {index === 2 ? (
            <>
              <div className="inline-block ">
                hot air
                <br /> ballooning
              </div>
              {index === activeNumber && returnTitle(title)}
            </>
          ) : (
            <>
              {item} {index === activeNumber && returnTitle(title)}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ArrayServices;
