import { motion } from "framer-motion";

const NumberFoto = ({ number }) => {
  const returnNumber = (i) => {
    if (String(i).length < 2) {
      return (
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >{`0${i}`}</motion.span>
      );
    }
    return <span>{i}</span>;
  };

  return (
    <p className="text-[43px] font-thin md:text-[67px] xl:text-[98px]  text-right  ">
      {returnNumber(number)}

      <span>/</span>
      <span className="text-color_number">05</span>
    </p>
  );
};

export default NumberFoto;
