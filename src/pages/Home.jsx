import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Blogs from '../components/BlogCard'
import FeaturedBlogs from '../sections/FeaturedBlogs'
import Footer from '../components/Footer'
import Newsletter from '../sections/Newsletter'

const Home = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen">
        <Navbar />
        <Hero />
        <FeaturedBlogs/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home