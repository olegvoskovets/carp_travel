import { motion } from "framer-motion";

const NumberFoto = ({ number }) => {
  const returnNumber = (i) => {
    if (String(i).length < 2) {
      return (
        <motion.span
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
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
