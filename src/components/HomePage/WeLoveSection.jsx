import { ArrowRight } from "lucide-react";

export default function WeLoveSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ff2b85] mb-6">
              We love what we do
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              foodpanda is the largest food and grocery delivery platform in
              Asia, outside of China. Operating in more than 400 cities across
              11 markets, we continue to expand and grow in our core food
              delivery business, as well as in new verticals like grocery
              deliveries, with a strong tech infrastructure at our core. From
              our restaurants-partners, cloud kitchens and cloud grocery stores
              — foodpanda is just one tap away, getting everything you need into
              your hands quickly and conveniently!
            </p>
            <img
              src="./images/pau-pau-button.png"
              alt=""
              className="h-14 -mb-1.5 ml-3 z-40"
            />
            <button className="bg-[#ff2b85] hover:bg-[#ff2b85]/90 text-white rounded-full px-8 py-3 text-lg font-semibold group">
              Find out more
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team working together"
                className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#E31C79] text-white p-6 rounded-2xl shadow-lg">
                <span className="text-2xl font-bold">💪</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
