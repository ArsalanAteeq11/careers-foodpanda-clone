import React from "react";

const jobs = [
  {
    title: "Associate, Account Management",
    location: "Yangon, Myanmar",
  },
  {
    title: "Specialist, Logistics Performance",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    title: "Specialist, Demand Control",
    location: "Taguig, Philippines",
  },
];

export default function JobRolesSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ color: "#ff2b85" }}
        >
          Some roles you might be interested in
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="relative bg-white rounded-2xl p-8 pt-12 border-2 hover:shadow-xl transition-all duration-300"
              style={{ borderColor: "#ff2b85" }}
            >
              {/* foodpanda Logo Circle */}
              <div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: "#ff2b85" }}
              >
                <div className="text-center">
                  <div
                    className="w-6 h-6 mx-auto -mb-2"
                    style={{ color: "#ff2b85" }}
                  >
                    <img src="./images/foodpanda.png" alt="" />
                  </div>
                  <span
                    className="text-[12px] font-bold"
                    style={{ color: "#ff2b85" }}
                  >
                    foodpanda
                  </span>
                </div>
              </div>

              {/* Star Icon */}
              <div className="absolute top-4 right-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#ff2b85" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>

              {/* Job Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-8 mt-4">
                {job.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-700 mb-8">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#ff2b85" }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-sm">{job.location}</span>
              </div>

              {/* Read More Button */}
              <button
                className="w-full text-white font-bold py-3 px-6 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#ff2b85" }}
              >
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
