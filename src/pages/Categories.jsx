import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const categoriesData = [
  {
    id: 1,
    title: "Technology",
    blogs: "120+ Articles",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Programming",
    blogs: "95+ Articles",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "UI / UX Design",
    blogs: "80+ Articles",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Startups",
    blogs: "60+ Articles",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Productivity",
    blogs: "45+ Articles",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Business",
    blogs: "70+ Articles",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
];

const Categories = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0F172A] text-white">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-5 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
              Blog Categories
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Explore Popular <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                Categories
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              Discover trending topics and explore modern categories from
              technology, design, startups, business, and development.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="pb-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoriesData.map((category) => (
                <div
                  key={category.id}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-[300px] object-cover group-hover:scale-110 transition-all duration-700"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="inline-flex px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/20 text-violet-300 text-sm font-medium mb-4">
                      {category.blogs}
                    </div>

                    <h2 className="text-3xl font-bold text-white group-hover:text-violet-400 transition-all duration-300">
                      {category.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Categories;
