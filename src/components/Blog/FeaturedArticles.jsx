import React from "react";
import ArticleCard from "./ArticleCard";

const featuredArticles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format",
    date: "Friday, 12 Jun 2023",
    category: "Company Update",
    title:
      "pandapurpose 2023: Delivering with purpose to local communities across Asia",
    description: "Delivering entrepreneurship",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format",
    date: "Tuesday, 20 June 2023",
    category: "Company Update",
    title: "Building a Better Workplace: foodpanda's Mental Health Initiatives",
    description: "Mental Wellness at foodpanda",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="py-8">
      <div className="grid md:grid-cols-2 gap-6">
        {featuredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} variant="large" />
        ))}
      </div>
    </section>
  );
}
