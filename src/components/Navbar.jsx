import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Categories", link: "/categories" },
//   { name: "About", link: "/about" },
//   { name: "Contact", link: "/contact" },
// ];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-[#0F172A]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Navbar Container */}
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                B
              </div>

              <h1 className="text-white text-2xl font-bold tracking-wide">
                Blogger
              </h1>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative group">
              <Link to="/">Home</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              {/* {navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))} */}
            </nav>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/login"
                className="text-white text-sm font-medium hover:text-violet-400 transition"
              >
                Login
              </Link>

              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-violet-500/20">
                Subscribe
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-[500px] py-6" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-5">
              {/* {navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition text-base font-medium"
                >
                  {item.name}
                </Link>
              ))} */}

              <div className="flex flex-col gap-3 pt-4">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition text-center"
                >
                  Login
                </Link>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
