import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

const blogsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    category: "Technology",
    title: "Future of AI in Modern Web Development",
    description:
      "Explore how artificial intelligence is transforming the way developers build modern websites and applications.",
    date: "20 July 2026",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "Design",
    title: "Creating Clean UI/UX For Better User Experience",
    description:
      "Learn important UI/UX principles that make websites modern, responsive, and visually attractive.",
    date: "18 July 2026",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    category: "Programming",
    title: "Best React Practices Every Developer Should Know",
    description:
      "Improve your React skills using reusable components, clean folder structure, and performance optimization.",
    date: "15 July 2026",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    category: "Startup",
    title: "How Startups Build Successful Digital Products",
    description:
      "Understand how modern startups create scalable digital products using innovative technologies.",
    date: "12 July 2026",
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    category: "Productivity",
    title: "Boost Your Productivity As A Developer",
    description:
      "Discover practical habits and tools that help developers improve focus and productivity.",
    date: "10 July 2026",
  },

  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    category: "Business",
    title: "Modern Business Trends In The Tech Industry",
    description:
      "Explore the latest business and technology trends shaping the future of digital innovation.",
    date: "08 July 2026",
  },
];

const Blog = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0F172A] text-white">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-5 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
              Blogs Collection
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Explore Latest <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                Articles & Insights
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              Read modern blogs about technology, design, development,
              productivity, startups, and digital trends.
            </p>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="pb-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogsData.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
