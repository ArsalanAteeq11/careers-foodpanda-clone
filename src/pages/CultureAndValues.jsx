import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Hero from "../components/Locations/Hero";
import JobRolesSection from "../components/HomePage/JobRolesSection";

const valuesData = [
  {
    title: "Own it",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    points: ["Call it straight.", "Have backbone.", "Own outcomes (not just)"],
  },
  {
    title: "Raise the Bar",
    image:
      "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=400&h=250&fit=crop",
    points: ["Set a high bar.", "Do it, or refine it.", "Provide feedback."],
  },
  {
    title: "Dive Deep",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
    points: ["Challenge the 4x.", "Think end to end.", "Be hands-on."],
  },
  {
    title: "Bring Good Vibes",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
    points: [
      "Our good habits spread.",
      "Preserve what's possible.",
      "Enable a creative workforce.",
    ],
  },
  {
    title: "Deliver Value Fast",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
    points: [
      "Focus on what matters.",
      "Execute immediately.",
      "Continuously self-correct.",
    ],
  },
  {
    title: "Stay Humble",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop",
    points: ["Keep an open mind.", "Get inspired.", "Improve continuously."],
  },
];

const jobsData = [
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
    location: "Yangon, Myanmar",
  },
];

const testimonials = [
  {
    name: "Joni Tjokrolo",
    position: "Director of Marketing - Grocery (APAC)",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    quote:
      "My experience at foodpanda is phenomenal. The leadership team is outstanding, fostering a culture of collaboration, innovation and trust. I've been valued for my abilities, talents and ideas while collaborating with dedicated teams and creating a positive impact. I am grateful for the opportunity to work with such a diverse, talented team.",
  },
  {
    name: "Sarah Chen",
    position: "Product Manager - Technology",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    quote:
      "Working at foodpanda has been an incredible journey. The fast-paced environment pushes me to grow every day, and the collaborative culture makes it easy to innovate and make an impact across the region.",
  },
  {
    name: "Michael Rodriguez",
    position: "Operations Lead - Southeast Asia",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    quote:
      "The diversity at foodpanda is what makes us special. Every day I work with talented people from different backgrounds, and together we're building something that truly makes a difference in people's lives.",
  },
];

export default function CultureValues() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero title="Our Values" />

      {/* Together We Win Section */}
      <div className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#E60577] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Together we win
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            It was by embracing our past and honoring the learnings that we
            integrate into our ongoing journey that led us to know where we're
            from. Our values were born.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We're unified by values that shape the culture at foodpanda. Whether
            you're in food, or qcommerce, or financial services, values serve.
            And these values create a constant, unified strength.
          </p>
        </div>
      </div>

      {/* Values Cards Grid */}
      <div className="py-8 md:py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {valuesData.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image with overlay text */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E60577]/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold italic transform -rotate-2">
                    {value.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {value.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#E60577] mr-2 font-bold">•</span>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Section */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Follow us & see how players on the panda team live and breathe
              these values.
              <a
                href="#"
                className="text-[#E60577] font-semibold hover:underline ml-1"
              >
                See here
              </a>
            </p>
            <button className="bg-[#E60577] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#c70465] transition-colors duration-300 uppercase tracking-wide text-sm">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image */}
            <div className="relative lg:w-1/3">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#E60577] rounded-2xl transform rotate-3"></div>
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="relative rounded-2xl w-full h-64 lg:h-80 object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3 relative">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div>
                  <p className="text-[#E60577] font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>

              {/* Navigation Dots and Arrows */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#E60577] hover:bg-[#E60577] hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentTestimonial
                          ? "bg-[#E60577] w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#E60577] hover:bg-[#E60577] hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Panda Illustration */}
              <div className="absolute -bottom-8 -right-4 w-24 h-24 hidden lg:block">
                <div className="w-full h-full bg-pink-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🐼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <JobRolesSection />
    </div>
  );
}
