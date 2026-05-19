import React, { useEffect, useState, useRef } from "react";
import { LogOut, User, Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [showDropdown, setShowDropdown] = useState(false); // User profile dropdown toggle
  const [isSubscribed, setIsSubscribed] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // To track URL changes

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // 1. Core State Sync: Yeh hook har render/route change par storage check karega
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    const name = localStorage.getItem("userName");
    const subscriptionStatus = localStorage.getItem("isSubscribed");

    if (status === "true") {
      setIsLoggedIn(true);
      setUserName(name || "User");
      
      // Sync subscription state with local storage
      if (subscriptionStatus === "true") {
        setIsSubscribed(true);
      } else {
        setIsSubscribed(false);
      }
    } else {
      // CLEAR AUTO-RESET: Agar storage me login status nahi hai, to state clear karega instantly
      setIsLoggedIn(false);
      setUserName("");
      setIsSubscribed(false);
    }
  }, [location.pathname]); // Triggered automatically on route changes or direct changes

  // 2. Dropdown Close Handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Subscribe & Unsubscribe Toggle Function
  const handleSubscribe = () => {
    if (isSubscribed) {
      localStorage.removeItem("isSubscribed"); 
      setIsSubscribed(false); // State updates instantly
      alert("Unsubscribed successfully. ❌");
    } else {
      localStorage.setItem("isSubscribed", "true");
      setIsSubscribed(true); // State updates instantly
      alert("Thank you for subscribing! 🎉");
    }
  };

  // Logout Function - Instantly resets everything
  const handleLogout = () => {
    // 1. Clear LocalStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("isSubscribed"); 

    // 2. Reset React States Immediately (No Refresh Needed)
    setIsSubscribed(false); // Changes back to "Subscribe" immediately
    setIsLoggedIn(false);
    setUserName("");
    setShowDropdown(false);
    setIsOpen(false);
    
    // 3. Redirect to login
    navigate("/login");
  };

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
                Blog-web
              </h1>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10 text-gray-300 text-sm font-medium">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/blogs" className="hover:text-white transition">Blogs</Link>
              <Link to="/categories" className="hover:text-white transition">Categories</Link>
              <Link to="/about" className="hover:text-white transition">About</Link>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </nav>

            {/* Right Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  className="text-white text-sm font-medium hover:text-violet-400 transition"
                >
                  Login
                </Link>
              ) : (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm uppercase shadow-md">
                      {userName.charAt(0)}
                    </div>
                    <span className="text-gray-300 text-sm font-medium capitalize">
                      {userName}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-gray-400 transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown Box */}
                  {showDropdown && (
                    <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-white/10 bg-[#1E293B]/90 backdrop-blur-xl p-2 shadow-2xl z-50">
                      <div className="px-4 py-2 border-b border-white/5 mb-1">
                        <p className="text-xs text-gray-400">Signed in as</p>
                        <p className="text-sm font-medium text-white truncate capitalize">
                          {userName}
                        </p>
                      </div>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-200 text-left"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Desktop Subscribe Button */}
              <button
                onClick={handleSubscribe}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg ${
                  isSubscribed
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 shadow-emerald-500/5"
                    : "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:scale-105 shadow-violet-500/20"
                }`}
              >
                {isSubscribed ? "Subscribed ✓" : "Subscribe"}
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
            className={`lg:hidden overflow-hidden transition-all duration-500 text-white ${
              isOpen ? "max-h-[500px] py-6" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-5">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
              <Link to="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition text-center"
                  >
                    Login
                  </Link>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm uppercase">
                        {userName.charAt(0)}
                      </div>
                      <span className="text-gray-200 text-sm font-medium capitalize">
                        {userName}
                      </span>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-medium flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}

                {/* Mobile Subscribe Button */}
                <button
                  onClick={handleSubscribe}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isSubscribed
                      ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                      : "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white"
                  }`}
                >
                  {isSubscribed ? "Subscribed ✓" : "Subscribe"}
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