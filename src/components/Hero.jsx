"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-items-end items-center gap-6 bg-[#E554731A] px-4 md:px-8">
      <div className="flex flex-col justify-start items-start md:max-w-[60%] pb-2">
        <h1 className="text-4xl lg:text-[80px] font-black text-left leading-tight lg:leading-[96px]">
          Let's make <br /> 
          beautiful flowers a <br />
          part of your life.
        </h1>
        <p className="text-left text-base md:text-lg mt-4 md:mt-6 lg:mt-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <button className="mt-4 md:mt-6 lg:mt-8 bg-[#E55473] py-3 md:py-5 px-6 md:px-10 text-white text-lg md:text-[20px] font-extrabold leading-tight md:leading-[24px] rounded-lg hover:bg-[#D1435F] transition-colors duration-300">
            Sign Up
          </button>
      </div>

      <div className="w-full md:w-auto pt-7">
        <Image
          src="/pngwing 10.png"
          alt="Flower Image"
          width={635}
          height={800}
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;