import React, { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <>
      <section className="relative min-h-screen bg-[#0F172A] overflow-hidden flex items-center py-24 px-5 md:px-8">
        {/* Background Blur Effects (Matching Hero Section) */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-fuchsia-500/15 rounded-full blur-3xl"></div>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span>
              <p className="text-sm text-gray-300">Get In Touch</p>
            </div>

            {/* Heading */}
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Let's Start a <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Have a question, feedback, or a brilliant story idea? Drop us a
              line. Our team will get back to you as soon as possible.
            </p>

            {/* Quick Contact Info Cards */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md max-w-sm">
                <div className="p-3 rounded-lg bg-violet-600/20 text-violet-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="text-white font-medium text-sm">
                    support@blogweb.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md max-w-sm">
                <div className="p-3 rounded-lg bg-fuchsia-600/20 text-fuchsia-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-white font-medium text-sm">
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form Card */}
          <div className="lg:col-span-7 relative w-full flex justify-center">
            <div className="relative w-full max-w-[600px] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1E293B]/60 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500
                      focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1E293B]/60 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500
                      focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1E293B]/60 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500
                    focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1E293B]/60 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500
                    focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-violet-500/20"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </div>
              </form>

              {/* Glowing Element behind the card corner */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-2xl opacity-40 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
