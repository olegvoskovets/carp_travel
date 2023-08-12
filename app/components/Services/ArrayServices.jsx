const array = [
  "atvs traveling",
  "rock climbing",
  "hot air ballooning",
  "skydiving",
  "rafting",
];

const ArrayServices = ({ handleClickItem, activeNumber }) => {
  return (
    <ul className="uppercase flex flex-col gap-4 text-[20px] mb-[34px] bg:text-[22px] xl:text-[28px] xl:leading-6 leading-4 font-extralight cursor-pointer xl:gap-6">
      {array.map((item, index) => (
        <li
          className={
            index === activeNumber
              ? `font-fontWeight500 flex items-center `
              : "font-fontWeight100 text-color_text_servisec hover:ml-2 hover:text-white duration-200 transition-all"
          }
          key={item}
          onClick={() => handleClickItem(index)}
        >
          {index === activeNumber && (
            <div className=" inline-block w-[6px] h-[6px] bg-white rotate-45 mr-2 "></div>
          )}
          {index === 2 ? (
            <div className="inline-block ">
              hot air
              <br /> ballooning
            </div>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
};

export default ArrayServices;
