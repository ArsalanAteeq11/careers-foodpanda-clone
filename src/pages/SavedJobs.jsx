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
            <div className="">
              <img src="./images/10.png" alt="" />
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
