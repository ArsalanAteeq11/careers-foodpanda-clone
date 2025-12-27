import React from "react";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Locations/Hero";

const initiatives = [
  {
    title: "Global D&I Board",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    description:
      "Established in 2021, the Delivery Hero Diversity and Inclusion Advisory Board ('DAB') acts as an internal and external body of expertise and represents the best interest of Delivery Hero's D&I work.",
  },
  {
    title: "Inclusive Offices",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
    description:
      "At foodpanda, inclusivity is embedded in all aspects of the workplace experience, and care is taken to ensure that the full employee journey accommodates any special needs required.",
  },
  {
    title: "Inclusive Benefits",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    description:
      "Our benefits are inclusive to all, and we regularly review and improve our benefits policies across all our locations, so they are on all taken care of.",
  },
  {
    title: "ERG Programme",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    description:
      "Our ERG programme aims to create a psychologically safe space and an environment where anyone can bring their whole selves to the table, by providing a platform to connect, learn, contribute to employee and community wellbeing and sustainability.",
  },
  {
    title: "Social Impact",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
    description:
      "Working together with merchants and riders, foodpanda serves millions of customers across 11 markets in Asia, 51 markets. We are proud of how we uplifted our communities and improved the livelihoods of the diverse merchants across Asia.",
  },
  {
    title: "Enabling Mark",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
    description:
      "foodpanda has been recognized as one of Singapore's most inclusive employers by the Enabling Mark Silver accreditation. Awarded by SG Enable, the Enabling Mark exemplification represents foodpanda's role and commitment in creating a disability-inclusive workplace.",
  },
];

export default function DiversityInclusion() {
  return (
    <div className="min-h-screen bg-white">
      <Hero title="Diversity, Equity and Inclusion" />
      {/* Hero Section */}
      <div className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h1 className="text-[#ff2b85] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Diversity empowers our problem solving, fuels innovation,
                emboldens our decision making, and is a key part of our success.
              </h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                At foodpanda, we are a potluck of cultures and personalities
                across 11 locations in Asia.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Diversity of thought, background and experience is a core part
                of our foodpanda values and is key to how we operate.
              </p>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="foodpanda team"
                className="rounded-2xl shadow-xl w-full h-64 lg:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What does D&I mean Section */}
      <div className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
                alt="Diversity event"
                className="rounded-2xl shadow-xl w-full h-64 lg:h-80 object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-[#ff2b85] text-2xl md:text-3xl font-bold mb-6">
                What does Diversity, Equity & Inclusion mean to foodpanda?
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                We are committed to cultivating an inclusive, equitable, and
                diverse community where everyone is valued, respected, connected
                and empowered to bring their unique voices to the table—we want
                you to be you!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* We don't just talk about it Section */}
      <div className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#ff2b85] text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
            We don't just talk about it, we live it...
          </h2>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {initiative.description}
                  </p>

                  {/* Learn More Button */}
                  <button className="bg-[#ff2b85] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#ff2b85]/90 transition-colors duration-300 uppercase tracking-wide text-xs flex items-center gap-2 group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#ff2b85] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              "As a local company, we signify believe in the power of diversity
              and inclusion. By bringing together people with different cultural
              and perspectives, not only do we unlock greater innovation, we
              also pave the way towards a more inclusive and prosperous future.
              Our commitment to diversity drives amongst all foodpanda
              employees, with strong support of our senior management, as we sit
              squarely at the heart of all that we do for a more inclusive
              Asia!"
            </p>
            <p className="text-white font-bold">
              Ingo Gattenlöhner, Chief People Officer, foodpanda
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join our diverse team
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Be part of a workplace where everyone belongs
          </p>
          <button className="bg-[#ff2b85] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#ff2b85]/90 transition-colors duration-300 uppercase tracking-wide text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
}
