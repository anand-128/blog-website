import React from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  if (!blog) {
    return null;
  }
  return (
    <>
      <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[260px] object-cover group-hover:scale-110 transition-all duration-700"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="inline-flex px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-5">
            {blog.category}
          </div>

          {/* Title */}
          <h2 className="text-white text-2xl font-bold leading-snug group-hover:text-violet-400 transition-all duration-300">
            {blog.title}
          </h2>

          {/* Description */}
          <p className="text-gray-400 mt-4 leading-relaxed">
            {blog.description}
          </p>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-8">
            {/* Date */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <CalendarDays size={18} />
              <span>{blog.date}</span>
            </div>

            {/* Read More */}
            <Link
              to="/"
              className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-all duration-300 font-medium"
            >
              Read More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
