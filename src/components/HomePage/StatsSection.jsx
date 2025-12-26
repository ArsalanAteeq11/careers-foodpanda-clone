import React from "react";

const stats = [
  { number: "7,000", suffix: "+", label: "EMPLOYEES" },
  { number: "400", suffix: "+", label: "CITIES" },
  { number: "50", suffix: "+", label: "NATIONALITIES" },
  { number: "20", suffix: "+", label: "LANGUAGES" },
];

export default function StatsSection() {
  return (
    <section className="py-6" style={{ backgroundColor: "#ffb2bb" }}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-right text-gray-900 ">
          A diverse and high-performing team
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Stats Cards - Cascading Layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 ">
            {/* Card 1 */}
            <div
              className="bg-white rounded-3xl p-8 md:p-10 border-4 border-white shadow-lg text-center min-w-[180px] md:mt-0"
              style={{ borderColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{ color: "#ff2b85" }}
              >
                {stats[0].number}
                <span className="text-4xl md:text-5xl">{stats[0].suffix}</span>
              </div>
              <div
                className="text-sm font-bold tracking-wider"
                style={{ color: "#ff2b85" }}
              >
                {stats[0].label}
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white rounded-3xl p-8 md:p-10 border-4 border-white shadow-lg text-center min-w-[180px] md:mt-12"
              style={{ borderColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{ color: "#ff2b85" }}
              >
                {stats[1].number}
                <span className="text-4xl md:text-5xl">{stats[1].suffix}</span>
              </div>
              <div
                className="text-sm font-bold tracking-wider"
                style={{ color: "#ff2b85" }}
              >
                {stats[1].label}
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white rounded-3xl p-8 md:p-10 border-4 border-white shadow-lg text-center min-w-[180px] md:mt-24"
              style={{ borderColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{ color: "#ff2b85" }}
              >
                {stats[2].number}
                <span className="text-4xl md:text-5xl">{stats[2].suffix}</span>
              </div>
              <div
                className="text-sm font-bold tracking-wider"
                style={{ color: "#ff2b85" }}
              >
                {stats[2].label}
              </div>
            </div>

            {/* Card 4 */}

            <div
              className="bg-white rounded-3xl p-8 md:p-10 border-4 border-white shadow-lg text-center min-w-[180px] md:mt-36"
              style={{ borderColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <div
                className="text-5xl bg-white md:text-6xl font-bold mb-2"
                style={{ color: "#ff2b85" }}
              >
                {stats[3].number}
                <span className="text-4xl md:text-5xl">{stats[3].suffix}</span>
              </div>
              <div
                className="text-sm font-bold tracking-wider"
                style={{ color: "#ff2b85" }}
              >
                {stats[3].label}
              </div>
            </div>
          </div>

          {/* Panda Mascot */}
          <div className="mt-6 md:mt-0 -ml-16">
            <img
              src="./images/stats-image.svg"
              alt="Panda Mascot"
              className="w-48 h-48 md:w-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
