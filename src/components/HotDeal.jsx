import Image from 'next/image';

const HotDeal = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-32 bg-[#E554730D] py-12 md:py-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[186px] px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center text-center max-w-[600px]">
          <h1 className="text-3xl sm:text-4xl md:text-[40px] font-black leading-tight md:leading-[48px]">
            Hot Deal ! Sale Up To 25%{' '}
            <span className="text-[#E55473]">Off</span>
          </h1>
          <p className="mt-4 md:mt-6 mb-6 md:mb-8 text-base md:text-lg text-gray-600">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <button className="bg-[#E55473] py-3 md:py-5 px-6 md:px-10 text-white text-lg md:text-[20px] font-extrabold leading-tight md:leading-[24px] rounded-lg hover:bg-[#D1435F] transition-colors duration-300">
            Sign Up
          </button>
        </div>

        {/* Image */}
        <div className="relative w-[250px] h-[330px] sm:w-[300px] sm:h-[400px] md:w-[318px] md:h-[420px]">
          <Image
            src="/pngwing 8.png"
            alt="Hot Deal Flower"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
