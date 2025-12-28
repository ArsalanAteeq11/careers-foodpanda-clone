import React from "react";
import { ArrowRight } from "lucide-react";

export default function ArticleCard({ article, variant = "default" }) {
  const isLarge = variant === "large";

  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
        isLarge ? "h-full" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          isLarge ? "h-48 md:h-56" : "h-40"
        }`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {article.date && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
            <span className="text-xs font-medium text-gray-600">
              {article.date}
            </span>
          </div>
        )}
      </div>

      <div className={`p-5 ${isLarge ? "p-6" : ""}`}>
        {article.category && (
          <span className="inline-block text-xs font-semibold text-pink-600 uppercase tracking-wider mb-2">
            {article.category}
          </span>
        )}

        <h3
          className={`font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2 ${
            isLarge ? "text-xl md:text-2xl" : "text-base"
          }`}
        >
          {article.title}
        </h3>

        {article.description && (
          <p className="text-sm text-gray-500 mb-4 line-clamp-3">
            {article.description}
          </p>
        )}

        <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
          READ MORE
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}
