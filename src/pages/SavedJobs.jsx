import React from "react";
import { Briefcase, Search } from "lucide-react";
import Hero from "../components/Locations/Hero";

export default function SavedJobs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero title="My saved roles" />
      {/* Empty State Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-50 rounded-full mb-4">
              <Briefcase className="w-10 h-10 text-[#ff2b85]" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              It looks like you have no saved jobs.
            </h1>
          </div>
          <button className="bg-[#ff2b85] hover:bg-[#ff2b85]/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-pink-200 active:scale-[0.98] uppercase text-sm tracking-wide">
            View All Jobs
          </button>
        </div>
      </div>

      {/* Search Help Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#ff2b85] mb-6 leading-tight">
                Can't find what
                <br />
                you're looking for?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                foodpanda is the largest food and grocery delivery platform in
                Asia, outside of China. Operating in more than 400 cities across
                11 markets, we continue to expand and grow in our core food
                delivery business, as well as in new verticals like grocery,
                shops, pharmacies and more. And we do this on our own momentum,
                cloud-kitchen and cloud-grocery stores – we have built it
                ourselves from the ground up, running everything you need from
                your favorite brands.
              </p>
              <button className="bg-[#ff2b85] hover:bg-[#ff2b85]/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-pink-200 active:scale-[0.98] inline-flex items-center gap-2 uppercase text-sm tracking-wide">
                <Search className="w-4 h-4" />
                Start Your Search
              </button>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="relative h-80 flex items-end justify-center gap-4 px-8">
                {/* Building 1 */}
                <div
                  className="relative w-24 bg-pink-100 rounded-t-lg animate-float"
                  style={{ height: "65%", animationDelay: "0s" }}
                >
                  <div className="absolute inset-x-0 top-6 space-y-3 px-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="grid grid-cols-3 gap-1.5">
                        {[...Array(3)].map((_, j) => (
                          <div key={j} className="h-2 bg-pink-200 rounded-sm" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Building 2 - Tallest */}
                <div
                  className="relative w-28 bg-pink-200 rounded-t-lg animate-float"
                  style={{ height: "85%", animationDelay: "0.2s" }}
                >
                  <div className="absolute inset-x-0 top-6 space-y-3 px-3">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="grid grid-cols-3 gap-1.5">
                        {[...Array(3)].map((_, j) => (
                          <div key={j} className="h-2 bg-pink-300 rounded-sm" />
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* Rooftop antenna */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-pink-300 rounded-full" />
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full" />
                </div>

                {/* Building 3 */}
                <div
                  className="relative w-24 bg-pink-100 rounded-t-lg animate-float"
                  style={{ height: "70%", animationDelay: "0.4s" }}
                >
                  <div className="absolute inset-x-0 top-6 space-y-3 px-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="grid grid-cols-3 gap-1.5">
                        {[...Array(3)].map((_, j) => (
                          <div key={j} className="h-2 bg-pink-200 rounded-sm" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Building 4 */}
                <div
                  className="relative w-20 bg-pink-50 rounded-t-lg animate-float"
                  style={{ height: "55%", animationDelay: "0.6s" }}
                >
                  <div className="absolute inset-x-0 top-6 space-y-3 px-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="grid grid-cols-2 gap-1.5">
                        {[...Array(2)].map((_, j) => (
                          <div key={j} className="h-2 bg-pink-100 rounded-sm" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clouds */}
                <div className="absolute top-10 left-10 w-16 h-8 bg-white rounded-full opacity-60 animate-float-slow" />
                <div
                  className="absolute top-16 right-16 w-20 h-10 bg-white rounded-full opacity-50 animate-float-slow"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
