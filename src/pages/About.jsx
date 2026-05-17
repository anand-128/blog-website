import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0F172A] text-white overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-5 md:px-8">
          {/* Background Blur */}
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-violet-600/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-fuchsia-500/20 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
                  About Us
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Empowering Modern <br />
                  <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                    Blogging Experience
                  </span>
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed mt-8">
                  We help creators, developers, and writers share ideas with the
                  world through beautiful and modern blogging experiences.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed mt-5">
                  Our mission is to create a platform where creativity,
                  technology, and storytelling come together in a simple and
                  elegant way.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-10 mt-12">
                  <div>
                    <h2 className="text-4xl font-bold text-white">12K+</h2>

                    <p className="text-gray-400 mt-2">Active Readers</p>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-white">350+</h2>

                    <p className="text-gray-400 mt-2">Published Blogs</p>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-white">4.9</h2>

                    <p className="text-gray-400 mt-2">User Rating</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="About"
                    className="w-full h-[550px] object-cover rounded-[28px]"
                  />

                  {/* Floating Card */}
                  <div className="absolute bottom-8 left-8 bg-[#1E293B]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
                    <p className="text-gray-400 text-sm">Community Growth</p>

                    <h3 className="text-white text-3xl font-bold mt-2">+28%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="pb-24 px-5 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
                Our Team
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                Meet The Creative Minds
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mt-6">
                Passionate creators and developers building modern digital
                experiences for the future.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {/* Card 1 */}
              <div className="rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                  alt="Team"
                  className="w-full h-[350px] object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">Alex Johnson</h3>

                  <p className="text-violet-400 mt-2">UI/UX Designer</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                  alt="Team"
                  className="w-full h-[350px] object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">Sarah Williams</h3>

                  <p className="text-violet-400 mt-2">Content Writer</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
                  alt="Team"
                  className="w-full h-[350px] object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">Michael Brown</h3>

                  <p className="text-violet-400 mt-2">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
