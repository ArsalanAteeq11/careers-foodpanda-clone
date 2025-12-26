import { ArrowRight } from "lucide-react";

export default function BeYourselfSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
                alt="Team celebration"
                className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-yellow-400 p-6 rounded-2xl shadow-lg">
                <span className="text-2xl font-bold">🎉</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl max-w-lg font-bold text-[#ff2b85] mb-6">
              You can be yourself at foodpanda
            </h2>
            <p className="text-black text-md mb-6">
              With over 50 nationalities and 20 languages spoken across our
              markets, we pride ourselves on our focus on diversity and
              inclusion. We are able to exchange and bring to the table the best
              practices (and food!) from each corner of the world.
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
        </div>
      </div>
    </section>
  );
}
