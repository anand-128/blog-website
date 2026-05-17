import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen bg-[#0F172A] overflow-hidden flex items-center">
        {/* Background Blur Effects */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-violet-600/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-fuchsia-500/20 rounded-full blur-3xl"></div>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>

              <p className="text-sm text-gray-300">Modern Blogging Platform</p>
            </div>

            {/* Heading */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Write Ideas <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                Share Stories
              </span>
              <br />
              Inspire People
            </h1>

            {/* Paragraph */}
            <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-xl">
              Create beautiful blogs, share your thoughts with the world, and
              grow your audience using a modern and powerful platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-xl shadow-violet-500/20">
                Get Started
                <ArrowRight size={20} />
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300">
                Explore Blogs
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-14">
              <div>
                <h2 className="text-3xl font-bold text-white">12K+</h2>
                <p className="text-gray-400 mt-1">Active Readers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">4.9</h2>
                <p className="text-gray-400 mt-1">User Rating</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">250+</h2>
                <p className="text-gray-400 mt-1">Blog Articles</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center">
            {/* Main Card */}
            <div className="relative w-full max-w-[500px] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
                alt="Blog"
                className="w-full h-[350px] object-cover rounded-3xl"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-[#1E293B] border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-xl">
                <p className="text-gray-400 text-sm">Weekly Growth</p>

                <h3 className="text-white text-3xl font-bold mt-2">+24%</h3>
              </div>

              {/* Floating Circle */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-2xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
