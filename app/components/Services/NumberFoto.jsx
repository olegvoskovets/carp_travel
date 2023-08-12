const NumberFoto = ({ number }) => {
  const returnNumber = (i) => {
    if (String(i).length < 2) {
      return `0${i}`;
    }
    return i;
  };
  return (
    <p className="text-[43px] font-thin md:text-[67px] xl:text-[98px]  text-right  ">
      <span>{returnNumber(number)}</span>

      <span>/</span>
      <span className="text-color_number">05</span>
    </p>
  );
};

export default NumberFoto;
