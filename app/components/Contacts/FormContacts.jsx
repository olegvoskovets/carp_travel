"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SvgClose from "../../../public/image/contacts/openmoji_close.png";

const FormContacts = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const omSubmit = (data) => {
    console.log("submit", data);
    reset();
  };
  return (
    <div className="text-[12px] font-thin leading-loose">
      <form
        onSubmit={handleSubmit(omSubmit)}
        className="flex flex-col gap-6 md:flex-row md:gap-5 xl:flex-col"
      >
        <div className="flex flex-col md:w-[221px]  xl:flex-row xl:w-full xl:justify-between xl:gap-5">
          <label className="flex gap-1 flex-col xl:flex-1">
            <span>Full name</span>
            <div>
              <input
                className="bg-input_color w-full border-none h-6 xl:h-7 outline-none pl-2 text-[13px] xl:text-[20px] font-thin"
                type="text"
                {...register("fullName", {
                  required: "Введіть ім'я",
                  pattern: {
                    value:
                      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$/,
                    message: "Введіть тільки літери",
                  },
                  minLength: {
                    value: 5,
                    message: "Введіть більше 4 символів",
                  },
                })}
                aria-invalid={errors?.fullName ? "true" : "false"}
              />
              <div className="h-6 flex justify-end items-center">
                {errors?.fullName && (
                  <>
                    <Image
                      src={SvgClose}
                      alt="svg"
                      className="w-[18px] h-[18px]"
                    />
                    <p className="text-red text-[12px] font-thin leading-loose">
                      {errors?.fullName?.message}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* {errors?.fullName?.type === "pattern" && <p> RYTRytyr імя</p>} */}
          </label>

          <label className="flex gap-1 flex-col xl:flex-1">
            <span>E-mail</span>
            <div>
              <input
                className="bg-input_color w-full h-6 xl:h-7 outline-none pl-2 text-[13px] xl:text-[20px] font-thin"
                {...register("email", {
                  required: "Введіть email",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Введіть вірний email",
                  },
                })}
              />
              <div className="h-6 flex justify-end items-center">
                {errors?.email && (
                  <>
                    <Image
                      src={SvgClose}
                      alt="svg"
                      className="w-[18px] h-[18px]"
                    />
                    <p className="text-red text-[12px] font-thin leading-loose">
                      {errors?.email?.message}
                    </p>
                  </>
                )}
              </div>
            </div>
          </label>
        </div>
        <div className="flex flex-col gap-4 md:w-[463px] xl:w-full xl:justify-between ">
          <label className="flex gap-1 flex-col">
            <span>Message</span>
            <textarea className="w-full h-[193px] xl:h-[174px] bg-input_color resize-none outline-none text-[13px] xl:text-[20px] font-thin"></textarea>
          </label>

          <button
            className="uppercase w-20 h-9 text-[30px] font-medium bg-tran hover:bg-input_color ml-auto leading-normal flex justify-center items-center"
            type="submit"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContacts;
