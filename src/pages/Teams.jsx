import React from "react";
import { ArrowRight } from "lucide-react";
import JobRolesSection from "../components/HomePage/JobRolesSection";

const teamsData = [
  {
    title: "Software Engineering",
    description:
      "We're the engineers behind Asia's largest food delivery platform, responsible for building the features, tools and infrastructure our customers, riders and partners love.",
    icon: "💻",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    title: "Product",
    description:
      "We're a team of product managers and specialists, product designers and product analysts, united by a common goal to make foodpanda's products functional, meaningful, enjoyable and easy to use.",
    icon: "📱",
    gradient: "from-blue-400 to-purple-400",
  },
  {
    title: "Data",
    description:
      "We uncover valuable insights and deliver data solutions to drive success in the ever-evolving gig economy.",
    icon: "📊",
    gradient: "from-pink-400 to-purple-400",
  },
  {
    title: "Sales, Operations and Logistics",
    description:
      "Be a part of us that drives sales opportunities, timely operations and efficient processes so as to deliver a great experience for our customers",
    icon: "🏪",
    gradient: "from-pink-400 to-red-400",
  },
  {
    title: "Marketing",
    description:
      "We are the creative minds behind the brand, strategic and campaigns that captivate customers to order food, groceries and more on our platform.",
    icon: "📢",
    gradient: "from-purple-400 to-blue-400",
  },
  {
    title: "Corporate Affairs",
    description:
      "Join us if you are passionate about telling our brand story, building reputation and communities through partnerships and programmes.",
    icon: "🏢",
    gradient: "from-yellow-400 to-pink-400",
  },
  {
    title: "Enterprise Technology Services",
    description:
      "We provide innovative, secure and reliable technology solutions to support foodpanda operations and employees",
    icon: "⚙️",
    gradient: "from-blue-400 to-purple-400",
  },
  {
    title: "People",
    description:
      "We create magical experiences for Pandas-to-be and our Pandas throughout their Pandamazing journey with us!",
    icon: "👥",
    gradient: "from-purple-400 to-blue-400",
  },
  {
    title: "Finance",
    description:
      "We are the financial advisors and gatekeepers to ensure foodpanda is able to have a successful and sustainable business.",
    icon: "💰",
    gradient: "from-orange-400 to-pink-400",
  },
  {
    title: "Legal",
    description:
      "We assess and mitigate risks, providing strategic legal advice and solutions to the business.",
    icon: "⚖️",
    gradient: "from-yellow-400 to-orange-400",
  },
];

export default function Teams() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&fit=crop')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Title */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold italic">
            Our teams
          </h1>
        </div>
      </div>

      {/* Teams Section */}
      <div className="bg-[#ff2b85] py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
            Be part of one
            <br />
            of our amazing teams
          </h2>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamsData.map((team, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                {/* Decorative gradient corner */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${team.gradient} opacity-10 rounded-bl-full`}
                ></div>

                <div className="relative z-10">
                  {/* Team Title */}
                  <h3 className="text-[#ff2b85] text-xl md:text-2xl font-bold mb-4">
                    {team.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[120px]">
                    {team.description}
                  </p>

                  {/* Icon */}
                  <div className="mb-6 flex justify-end">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${team.gradient} rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {team.icon}
                    </div>
                  </div>

                  {/* View Openings Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-[#ff2b85] font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all duration-300 group/link"
                  >
                    View Openings
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Can't find the right team?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Explore all our open positions and find your perfect match!
          </p>
          <button className="bg-[#ff2b85] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#ff2b85]/90 transition-colors duration-300 uppercase tracking-wide text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            View All Openings
          </button>
        </div>
      </div>
      <JobRolesSection />
    </div>
  );
}
