import Image from "next/image";

const Instagram = () => {
  return (
    <div className="mt-16 md:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl md:text-[40px] font-black text-center text-[#272727]">
        Instagram
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-[18px] text-center text-[#27272799] max-w-2xl mx-auto mb-8 md:mb-12">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      {/* Image Grid */}
      <div className="mt-6 md:mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { src: "/Rectangle 4.png", alt: "Flower Image 1" },
          { src: "/Flower 01.png", alt: "Flower Image 2" },
          { src: "/Rectangle 5.png", alt: "Flower Image 3" },
          { src: "/Rectangle 6.png", alt: "Flower Image 4" },
        ].map((image, index) => (
          <div key={index} className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-sm object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;