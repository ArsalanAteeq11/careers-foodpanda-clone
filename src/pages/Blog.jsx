import React, { useState } from "react";
import BlogHeader from "../components/Blog/BlogHeader";
import TabsFilter from "../components/Blog/TabsFilter";
import FeaturedArticles from "../components/Blog/FeaturedArticles";
import ArticleGrid from "../components/Blog/ArticleGrid";
import Pagination from "../components/Blog/Pagination";
import NewsletterSection from "../components/Blog/NewsletterSection";

export default function Blog() {
  const [activeTab, setActiveTab] = useState("Content types");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <BlogHeader />
        <TabsFilter activeTab={activeTab} setActiveTab={setActiveTab} />
        <FeaturedArticles />
        <ArticleGrid />
        <Pagination
          currentPage={currentPage}
          totalPages={4}
          onPageChange={setCurrentPage}
        />
      </div>
      <NewsletterSection />
    </div>
  );
}
