import React from "react";
import ArticleCard from "./ArticleCard";

const articles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format",
    date: "Friday, 10 May 2024",
    category: "Company Story",
    title: "Our Office Space",
    description:
      "Take a step into our APAC Headquarters! Ever wondered what it is like to be a panda? Let us show you! Here at foodpanda, we're...",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format",
    date: "Saturday, 29 July 2023",
    category: "A Day in the Life of",
    title: "A Peek inside our Employee Resource Groups",
    description:
      "At foodpanda, our panda communities, aka Employee Resource Groups) aim to create a psychologically safe space and...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format",
    date: "Thursday, 18 July 2023",
    category: "A Day in the Life of",
    title: "A Day in the Life of a Creative at foodpanda",
    description:
      "Ever wondered what a Creative does? Follow Amelia, our Associate Head of Creatives as she takes you through a day in her life! What do...",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format",
    date: "Friday, 04 August 2023",
    category: "A Day in the Life of",
    title: "foodpanda's Workplace Team",
    description:
      "Ever wondered what the Workplace team does? Follow the Workplace pandas as they bring you through their different roles and...",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format",
    date: "Thursday, 20 July 2023",
    category: "A Day in the Life of",
    title: "Meet Marven, our Senior Product Analyst",
    description:
      "From managing data collection, enabling data-driven decision-making, to influencing product strategy, the responsibilities of a...",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format",
    date: "Thursday, 18 July 2023",
    category: "A Day in the Life of",
    title: "Life as a Software Engineer",
    description:
      "As one of Asia's top technological hubs, the demand for Software Engineers is always high in Singapore, but what exactly does it...",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format",
    date: "Tuesday, 11 July 2023",
    category: "A Day in the Life of",
    title: "A day in the life of Alvin Oo, a Corporate Sales Account Executive",
    description:
      "Follow Alvin as he takes you through the life of a Corporate Sales Account Executive at foodpanda! Q1. A day in the life as a Corporate Sales...",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format",
    date: "Tuesday, 27 June 2023",
    category: "A Day in the Life of",
    title: "What's it like to be a product manager?",
    description:
      "Product managers are good at creating a vision and strategy. They look at the best product integrating market research and...",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format",
    date: "Thursday, 01 June 2023",
    category: "Company Story",
    title: "foodpanda 正式宣布加入 iTALENT in Taiwan. 台灣人才永續行動聯盟",
    description:
      "人力培育部門會時常發現自台灣公司對人才的渴求，而我們也將會進一步的推動有關「DEI多元共融」...",
  },
];

export default function ArticleGrid() {
  return (
    <section className="py-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
