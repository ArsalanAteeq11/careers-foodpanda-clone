import React from "react";

export default function TabsFilter({ activeTab, setActiveTab }) {
  const tabs = ["Content types", "Categories", "Tags"];

  return (
    <div className="flex justify-center gap-8 py-6 border-b border-gray-100">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm font-medium transition-all duration-200 pb-2 border-b-2 ${
            activeTab === tab
              ? "text-pink-600 border-pink-600"
              : "text-gray-500 border-transparent hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
