const Footer = () => {
  return (
    <div className="bg-[#111010] py-16 md:py-[128px] text-center text-white px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 lg:mt-32">
      {/* Logo and Title */}
      <h1 className="text-[#E55473] text-4xl sm:text-5xl md:text-[50px] font-black">
        Flower <span className="text-white">Shop</span>
      </h1>

      {/* Description */}
      <p className="mt-4 md:mt-6 mb-6 md:mb-8 text-base md:text-lg max-w-2xl mx-auto">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      {/* Copyright */}
      <p className="text-sm md:text-base text-[#FFFFFF66]">
        @2020-2023, FlowerShop.com. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;