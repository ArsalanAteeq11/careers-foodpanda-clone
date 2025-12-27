import React from "react";
import {
  Heart,
  Calendar,
  Users,
  DollarSign,
  BookOpen,
  UsersRound,
} from "lucide-react";
import Hero from "../components/Locations/Hero";

const benefitsCategories = [
  {
    icon: Heart,
    title: "Health and wellness",
    subtitle: "Helping you be in the best of health",
    color: "text-[#ff2b85]",
    bgColor: "bg-[#ff2b85]",
    benefits: [
      "Medical and dental coverage",
      "Health screening",
      "Flexible benefits",
      "Access to mental health apps and employee assistance program",
    ],
  },
  {
    icon: Calendar,
    title: "Time off and flexibility",
    subtitle: "Time off when you need it",
    color: "text-[#ff2b85]",
    bgColor: "bg-[#ff2b85]",
    benefits: [
      "Annual leave",
      "Sick leave",
      "Marriage leave",
      "Birthday leave",
      "Compassionate leave",
      "Hybrid working arrangement",
    ],
  },
  {
    icon: Users,
    title: "Family care and support",
    subtitle: "Caring for your loved ones",
    color: "text-[#ff2b85]",
    bgColor: "bg-[#ff2b85]",
    benefits: [
      "Family care leave / casual leave",
      "Maternity leave",
      "Paternity leave",
      "Life and accident insurance for employees",
    ],
  },
  {
    icon: DollarSign,
    title: "Financial wellbeing and savings",
    subtitle: "Supporting your financial readiness",
    color: "text-[#ff2b85]",
    bgColor: "bg-[#ff2b85]",
    benefits: [
      "foodpanda platform credits and perks",
      "Retirement benefits",
      "Employee discount programs",
    ],
  },
  {
    icon: BookOpen,
    title: "Learning and growth",
    subtitle: "Encouraging you to be life-long learners",
    color: "text-[#ff2b85]",
    bgColor: "bg-[#ff2b85]",
    benefits: [
      "LinkedIn Learning",
      "Course subsidies",
      "Skill enhancement support",
    ],
  },
  {
    icon: UsersRound,
    title: "Social connections",
    subtitle:
      "Enabling networking and promoting a culture of diversity, inclusion and collaboration",
    color: "text-[#ff2b85]",
    bgColor: "bg-[#ff2b85]",
    benefits: [
      "Team bonding activities",
      "Office celebrations",
      "Employee interests communities",
    ],
  },
];

export default function Benefits() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero title="Benefits" />
      {/* Hero Section */}
      <div className="bg-white py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="foodpanda office"
                className="rounded-2xl shadow-xl w-full h-64 lg:h-80 object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2">
              <h1 className="text-[#ff2b85] text-3xl md:text-4xl font-bold mb-6">
                Benefits at
                <br />
                foodpanda
              </h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Within our diverse community, we know that each of us has
                different lifestyles and preferences.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our people team is dedicated to bringing our full-time pandas a
                suite of inclusive and flexible benefits that support a
                fulfilling experience at foodpanda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Categories */}
      <div className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {benefitsCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
                  {/* Icon and Title Section */}
                  <div className="md:w-1/3">
                    <div className="flex items-start gap-4">
                      <div
                        className={`${category.bgColor} p-3 rounded-xl flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-8 h-8 ${category.color}`}
                        />
                      </div>
                      <div>
                        <h3 className="text-gray-900 text-xl md:text-2xl font-bold mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="md:w-2/3">
                    <ul className="space-y-3">
                      {category.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#ff2b85] mr-3 mt-1 flex-shrink-0">
                            ●
                          </span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500 text-sm text-center italic">
            Please note that while our philosophy is the same in every market
            where foodpanda is present, benefits may vary by market.
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#ff2b85] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              "I am appreciative that we have access to an Employee Assistance
              Program - often these wellness and mental and well-being is
              neglected."
            </p>
            <p className="text-white font-bold mb-2">
              Claudia Haddouche, Finance (APAC)
            </p>
            <p className="text-white text-sm">
              More Employee Benefits: Comprehensive healthcare, parental care
              support & employee rewards for challenges, stress and other issues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
