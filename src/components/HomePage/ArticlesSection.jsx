import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title:
      "pinkpurpose 2025: Delivering our promise to help communities thrive",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
    tag: "panda purpose",
    tagColor: "bg-pink-500",
    date: "Dec 2024",
  },
  {
    title: "Building a better future: foodpanda's sustainable initiatives",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
    tag: "2025",
    tagColor: "bg-purple-500",
    date: "Jan 2025",
  },
  {
    title: "Our DNA: How our culture drives innovation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    tag: "Inside foodpanda",
    tagColor: "bg-blue-500",
    date: "Nov 2024",
  },
];

export default function ArticlesSection() {
  return (
    <section className="pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ color: "#ff2b85" }}
        >
          Read more about foodpanda
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4 ${article.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {article.tag}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#ff2b85]/90 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <button className="text-[#ff2b85] hover:bg-pink-50 p-0 group/btn">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="rounded-full bg-[#ff2b85] text-white hover:text-white px-8 py-3 cursor-pointer text-lg font-semibold">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}
