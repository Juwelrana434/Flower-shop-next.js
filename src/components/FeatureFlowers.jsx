import Image from "next/image";

const FeatureFlowers = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-[40px] font-black leading-tight md:leading-[48px]">
        Our Featured Flowers
      </h1>
      <p className="text-center mt-4 text-base sm:text-lg md:text-[18px] text-gray-600 max-w-2xl mx-auto">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      {/* Flower Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* Flower Card 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#A7216226] rounded-t-[300px] w-full h-[400px] sm:h-[500px] flex justify-center items-center pt-10">
            <Image
              src="/pngwing 6.png"
              alt="Pink Flower Tree"
              width={250}
              height={350}
              className="object-contain"
            />
          </div>
          <p className="text-center underline pt-6">Pink Flower Tree</p>
        </div>

        {/* Flower Card 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#0597A026] rounded-t-[300px] w-full h-[400px] sm:h-[500px] flex justify-center items-center pt-10">
            <Image
              src="/pngwing 5.png"
              alt="White Flower Tree"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <p className="text-center underline pt-6">White Flower Tree</p>
        </div>

        {/* Flower Card 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#477D1126] rounded-t-[300px] w-full h-[400px] sm:h-[500px] flex justify-center items-center pt-18">
            <Image
              src="/pngwing 7.png"
              alt="Yellow Flower Tree"
              width={250}
              height={350}
              className="object-contain"
            />
          </div>
          <p className="text-center underline pt-6">Yellow Flower Tree</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-24 md:mt-32 bg-[#2727270D] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-16 px-6">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Group 57.png"
            alt="Same Day Delivery Icon"
            width={77}
            height={82}
          />
          <p className="mt-4 text-gray-700">Same Day Delivery. Click & Collect.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Group 58.png"
            alt="Fresh Flowers Guaranteed Icon"
            width={77}
            height={82}
          />
          <p className="mt-4 text-gray-700">Fresh Flowers Guaranteed.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Group 59.png"
            alt="24/7 Customer Support Icon"
            width={77}
            height={82}
          />
          <p className="mt-4 text-gray-700">24/7 Customer Support.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureFlowers;