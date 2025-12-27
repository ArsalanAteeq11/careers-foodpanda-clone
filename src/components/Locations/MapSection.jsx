const MapSection = () => {
  return (
    <>
      <div className="bg-[#FFD6E8] py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            All over APAC
          </h3>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Map Container */}
            <div className="flex-1 bg-gray-100 rounded-lg ">
              <img src="./images/8.png" alt="" />
            </div>

            {/* Location Card */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg ">
              <div className="p-6">
                <h4 className="text-[#ff2b85] text-2xl md:text-3xl font-bold mb-2">
                  Singapore
                </h4>
                <p className="text-gray-700 mb-4">
                  Welcome to foodpanda Singapore! Our Singapore office houses
                  both the APAC regional team as well as the Singapore local
                  team and we are always looking for enthusiastic problem
                  solvers to join us!
                </p>

                {/* Image with overlay */}
                <div className="relative rounded-xl overflow-hidden mb-6">
                  <img
                    src="./images/9.jpeg"
                    alt="Philippines"
                    className="w-full h-54 object-cover"
                  />
                </div>

                {/* Read More Button */}
                <button className="bg-[#ff2b85] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#ff2b85]/90 transition-colors duration-300 uppercase tracking-wide text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapSection;
