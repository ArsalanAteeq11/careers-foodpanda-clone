import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&auto=format')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Receive articles like this
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Enter your email address and you will be registered to receive the
            latest content and insights produced by Company name, direct to your
            inbox. If you have selected a category or content type, you will
            receive the latest insights from that area.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select</option>
                    <option value="company">Company Update</option>
                    <option value="life">A Day in the Life</option>
                    <option value="story">Company Story</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Tags
                </label>
                <div className="relative">
                  <select
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select</option>
                    <option value="engineering">Engineering</option>
                    <option value="product">Product</option>
                    <option value="design">Design</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-pink-200 active:scale-[0.98]">
              SEND
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            Enter your email address and you will be registered to receive the
            latest content and insights produced by Company name, direct to your
            inbox. If you have selected a category or content type, you will
            receive the latest insights from that area.
          </p>
        </div>
      </div>
    </section>
  );
}
