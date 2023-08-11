const array = [
  "atvs traveling",
  "rock climbing",
  "hot air ballooning",
  "skydiving",
  "rafting",
];

const ArrayServices = ({ handleClickItem }) => {
  return (
    <ul className="uppercase flex flex-col gap-4 text-[20px] mb-[34px] bg:text-[22px] xl:text-[28px] xl:leading-6 leading-4 font-extralight cursor-pointer xl:gap-6">
      {array.map((item, index) => (
        <li className="" key={item} onClick={() => handleClickItem(index)}>
          {index === 2 ? (
            <span>
              hot air
              <br /> ballooning
            </span>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
};

export default ArrayServices;
