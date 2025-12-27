import React, { useState } from "react";
import {
  MapPin,
  Star,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const jobsData = [
  {
    title: "Associate, Account Management",
    location: "Yangon, Myanmar",
    type: "Full-time",
  },
  {
    title: "Specialist, Logistics Performance",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-time",
  },
  {
    title: "Specialist, Demand Control",
    location: "Yangon, Philippines",
    type: "Full-time",
  },
  {
    title: "Specialist, Geomatics",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-time",
  },
  {
    title: "Product Manager (Pickup)",
    location: "Singapore",
    type: "Full-time",
  },
  {
    title: "Specialist, Field Sales",
    location: "Makassu, Malaysia",
    type: "Full-time",
  },
  {
    title: "Specialist, Field Sales",
    location: "Johor Bahru, Malaysia",
    type: "Full-time",
  },
  {
    title: "Specialist, Field sales",
    location: "Ipoh, Malaysia",
    type: "Full-time",
  },
  {
    title: "Specialist, Field Sales",
    location: "Ipoh, Malaysia",
    type: "Full-time",
  },
  {
    title: "Manager, Retail Media & Partnerships",
    location: "Bangsar South, Malaysia",
    type: "Full-time",
  },
  {
    title: "Lead Vendor Operations",
    location: "Bangsar South, Malaysia",
    type: "Full-time",
  },
  {
    title: "Specialist, Category & Commercial",
    location: "Yangon, Philippines",
    type: "Full-time",
  },
];

const articles = [
  {
    title: "pandapurpose 2023: Delivering with purpose to local communities...",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
    date: "Mar 17, Aug 2023",
  },
  {
    title: "Building a Better Workplace: foodpanda's Mental Health Initiatives",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop",
    date: "Aug 10, Jun 2023",
  },
  {
    title: "Our Office Space",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
    date: "June 15, May 2023",
  },
];

export default function Jobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleSave = (index) => {
    setSavedJobs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-8 px-4 border-b">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            Job results
          </h1>
          <p className="text-gray-600">{jobsData.length} result(s)</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white py-4 px-4 border-b">
        <div className=" flex justify-center flex-wrap gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#ff2b85]">
            <option>Location</option>
            <option>Malaysia</option>
            <option>Singapore</option>
            <option>Philippines</option>
            <option>Myanmar</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#ff2b85]">
            <option>Job Category</option>
            <option>Technology</option>
            <option>Operations</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#ff2b85]">
            <option>Job type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#ff2b85]">
            <option>Years Type</option>
            <option>0-2 years</option>
            <option>3-5 years</option>
            <option>5+ years</option>
          </select>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobsData.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-pink-200 hover:border-[#ff2b85]/90 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Icons at top */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#ff2b85]" />
                  </div>
                  <button
                    onClick={() => toggleSave(index)}
                    className="text-pink-300 hover:text-[#ff2b85]/90 transition-colors"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        savedJobs.includes(index)
                          ? "fill-[#ff2b85] text-[#ff2b85]"
                          : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Job Title */}
                <h3 className="text-gray-900 font-bold text-lg mb-4 min-h-[3.5rem]">
                  {job.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-600 text-sm mb-6">
                  <MapPin className="w-4 h-4 mr-2 text-[#ff2b85]" />
                  {job.location}
                </div>

                {/* Read More Button */}
                <button className="w-full bg-[#ff2b85] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#ff2b85]/90 transition-colors duration-300 uppercase tracking-wide text-sm">
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <button className="w-8 h-8 rounded flex items-center justify-center text-gray-400 hover:text-[#ff2b85]/90">
              <ChevronLeft className="w-5 h-5" />
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <button
                key={num}
                className={`w-8 h-8 rounded flex items-center justify-center text-sm ${
                  num === 1
                    ? "bg-[#ff2b85] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}
            <button className="w-8 h-8 rounded flex items-center justify-center text-gray-400 hover:text-[#ff2b85]">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Results Info */}
          <p className="text-center text-gray-500 text-sm mb-8">
            RESULTS PER PAGE : 12-24-48
          </p>
        </div>
      </div>

      {/* Articles Section */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#ff2b85] text-2xl md:text-3xl font-bold mb-8">
            Articles you might like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#ff2b85] text-white px-3 py-1 rounded text-xs font-semibold">
                    {article.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 font-bold text-lg mb-4">
                    {article.title}
                  </h3>
                  <a
                    href="#"
                    className="text-[#ff2b85] font-semibold text-sm hover:underline uppercase tracking-wide"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#ff2b85] hover:text-[#ff2b85]">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="bg-white text-[#ff2b85] border-2 border-[#ff2b85] font-semibold px-6 py-2 rounded-full hover:bg-[#ff2b85] hover:text-white transition-colors duration-300 uppercase tracking-wide text-sm">
              View All
            </button>
            <button className="w-10 h-10 rounded-full border-2 border-[#ff2b85] flex items-center justify-center text-[#ff2b85] hover:bg-[#ff2b85] hover:text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
