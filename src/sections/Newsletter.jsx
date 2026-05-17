import React from "react";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <>
      <section className="bg-[#0F172A] py-24 overflow-hidden relative">
        {/* Background Blur */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-violet-600/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-fuchsia-500/20 rounded-full blur-3xl"></div>

        {/* Container */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          {/* Newsletter Box */}
          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-14 overflow-hidden relative">
            {/* Small Gradient Circle */}
            <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-violet-500/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
                Newsletter
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Subscribe To Our Weekly Updates
              </h2>

              {/* Paragraph */}
              <p className="text-gray-400 text-lg leading-relaxed mt-6">
                Get the latest blogs, tutorials, design inspiration, and tech
                updates directly in your inbox every week.
              </p>

              {/* Input Box */}
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
                {/* Input */}
                <div className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/10 bg-white/5">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
                  />
                </div>

                {/* Button */}
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-xl shadow-violet-500/20">
                  Subscribe
                  <Send size={20} />
                </button>
              </div>

              {/* Bottom Text */}
              <p className="text-gray-500 text-sm mt-6">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
