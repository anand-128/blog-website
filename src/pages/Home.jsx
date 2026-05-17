import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Blogs from '../components/BlogCard'
import FeaturedBlogs from '../sections/FeaturedBlogs'

const Home = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen">
        <Navbar />
        <Hero />
        <FeaturedBlogs/>
    </div>
  )
}

export default Home