import React from "react";
import { Send, Globe, User, Mail } from "lucide-react";

import { Link } from "react-router-dom";

const quickLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Blogs",
    path: "/blogs",
  },

  {
    name: "Categories",
    path: "/categories",
  },

  {
    name: "About",
    path: "/about",
  },
];

const resources = [
  {
    name: "Privacy Policy",
    path: "/",
  },

  {
    name: "Terms & Conditions",
    path: "/",
  },

  {
    name: "Help Center",
    path: "/",
  },

  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0F172A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20">
          {/* Top Footer */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand */}
            <div>
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white text-2xl font-bold">
                  B
                </div>

                <h1 className="text-3xl font-bold text-white">Blogger</h1>
              </Link>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mt-6">
                Discover modern blogs, inspiring stories, and creative ideas
                from developers and writers around the world.
              </p>

              {/* Social Icons */}
              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-8">
                {/* Website */}
                <button className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-violet-500 hover:text-white transition-all duration-300">
                  <Globe size={20} />
                </button>

                {/* User */}
                <button className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-violet-500 hover:text-white transition-all duration-300">
                  <User size={20} />
                </button>

                {/* Mail */}
                <button className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-violet-500 hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-6">
                Quick Links
              </h2>

              <div className="flex flex-col gap-4">
                {quickLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-400 hover:text-violet-400 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-6">
                Resources
              </h2>

              <div className="flex flex-col gap-4">
                {resources.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-400 hover:text-violet-400 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-6">
                Newsletter
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                Subscribe to get latest blogs, news, and updates directly in
                your inbox.
              </p>

              {/* Input */}
              <div className="flex items-center gap-3 p-2 rounded-2xl border border-white/10 bg-white/5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none text-white placeholder:text-gray-500 px-3 w-full"
                />

                <button className="min-w-[50px] h-[50px] rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white hover:scale-105 transition-all duration-300">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Blogger. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-gray-500 hover:text-violet-400 text-sm transition-all duration-300"
              >
                Privacy
              </Link>

              <Link
                to="/"
                className="text-gray-500 hover:text-violet-400 text-sm transition-all duration-300"
              >
                Terms
              </Link>

              <Link
                to="/"
                className="text-gray-500 hover:text-violet-400 text-sm transition-all duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
