import React, { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let redirect = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please login: Email and Password fields cannot be empty!");
    } else {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", email.split('@')[0]);
      redirect("/");
    }
  };

  return (
    <>
      <section className="min-h-[100svh] pt-28 bg-[#0F172A] flex items-center justify-center px-5 pb-10 overflow-hidden relative">
        {/* Background Blur */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-fuchsia-500/20 rounded-full blur-3xl"></div>

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              B
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
            <p className="text-gray-400 mt-3">
              Login to continue your blogging journey
            </p>
          </div>

          {/* Form - 6. handleLogin function ko onSubmit par lagaya */}
          <form onSubmit={handleLogin} className="mt-10 space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Email Address
              </label>

              <div className="flex items-center gap-3 px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus-within:border-violet-500 transition-all">
                <Mail size={20} className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email} // State se connect kiya
                  onChange={(e) => setEmail(e.target.value)} // Value update karne ke liye
                  className="bg-transparent outline-none text-white w-full placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Password
              </label>

              <div className="flex items-center gap-3 px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus-within:border-violet-500 transition-all">
                <Lock size={20} className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password} // State se connect kiya
                  onChange={(e) => setPassword(e.target.value)} // Value update karne ke liye
                  className="bg-transparent outline-none text-white w-full placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input type="checkbox" className="accent-violet-500" />
                Remember me
              </label>

              <button
                type="button"
                className="text-violet-400 hover:text-violet-300 transition"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-violet-500/20"
            >
              Login
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-white/10"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-4">
            <button className="w-full py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all">
              Continue with Google
            </button>
            <button className="w-full py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all">
              Continue with GitHub
            </button>
          </div>

          {/* Signup */}
          <p className="text-center text-gray-400 mt-8">
            Don’t have an account?{" "}
            <span className="text-violet-400 cursor-pointer hover:text-violet-300 transition">
              Sign Up
            </span>
          </p>
        </div>
      </section>
    </>
    
  );
};

export default Login;
