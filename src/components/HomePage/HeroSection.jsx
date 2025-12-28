import React from "react";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#ffb2bb] to-[#ffb2bb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hungry to make an impact?
            </h1>
            <p className="text-xl md:text-3xl text-gray-700 mb-8">
              There's always room at our table.
            </p>

            {/* Search Bar */}
            <div className="p-1 flex items-center justify-between bg-white shadow rounded-full ">
              <input
                placeholder="Search jobs, job location..."
                className="pl-4 pr-4 py-2 text-lg flex-1 outline-none"
              />
              <button className="bg-[#ff2b85] hover:bg-[#ff2b85]/90 text-white rounded-full px-4 py-3 text-lg font-semibold">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right - Panda Mascot */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=400&fit=crop"
                alt="Panda Mascot"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <span className="text-4xl">🐼</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#E31C79] opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#E31C79] opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}
