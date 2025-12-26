import React from "react";

export default function MissionSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <blockquote className="text-xl md:text-2xl lg:text-3xl text-center font-medium text-gray-800 leading-relaxed">
          <span className="text-black font-bold">
            "To be the most loved everyday food and groceries destination"
          </span>
        </blockquote>

        <p className="mt-6 text-black text-lg leading-relaxed max-w-6xl ">
          ..that’s our mission at foodpanda. Whether it’s by delivering food on
          our signature pink bikes, providing insights into the newest food
          trends, or showcasing local favorite restaurants, we’re on a mission
          to redefine how food, people, culture and tech are connected.
        </p>

        <p className="mt-6 text-black text-lg leading-relaxed max-w-5xl">
          Our parent company, Delivery Hero, is a global leader in the food
          delivery industry processing over 3 million orders every day and
          operating in 40+ markets in the world, with 18,000 employees and
          approximately 500,000+ restaurant partners.
        </p>
      </div>
    </section>
  );
}
