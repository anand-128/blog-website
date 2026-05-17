import React from 'react'
import BlogCard from "../components/BlogCard";

const blogs = [
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
];


const FeaturedBlogs = () => {
  return (
    <>
        <section className="py-24 bg-[#0F172A]">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <div className="inline-flex px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
            Featured Blogs
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Latest Articles & Resources
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Discover modern insights, tutorials, and trending topics from the
            world of technology and design.
          </p>

        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}

        </div>

      </div>
    </section>
    </>
  )
}

export default FeaturedBlogs