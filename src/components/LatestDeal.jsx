export default function LatestDeal() {
  return (
    <div
      className=" mt-16 md:mt-24 lg:mt-32 flex items-center justify-center bg-cover bg-center py-16 md:py-[122px] px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/Rectangle 9.png')" }}
    >
      <div className="bg-opacity-80 p-6 md:p-8 w-full max-w-4xl text-center">
        {/* Section Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Get The Latest Deals
        </h1>
        <p className="text-gray-600 mt-2 md:mt-4 mb-6 md:mb-12">
          $30 coupon for first shopping
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full">
          <input
            type="email"
            placeholder="Enter your email here..."
            className="w-full md:w-[400px] lg:w-[500px] h-12 md:h-16 p-3 md:p-5 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E55473]"
            aria-label="Email input"
          />
          <button
            type="submit"
            className="w-full md:w-auto h-12 md:h-16 px-6 md:px-8 bg-[#E55473] rounded-md text-white text-lg md:text-xl font-bold hover:bg-[#D1435F] transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}