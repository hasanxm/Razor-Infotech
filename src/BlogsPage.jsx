import React, { useState } from 'react';
import BlogCard from './components/BlogCard';
import ParticlesBackground from './components/ParticlesBackground';
import WaveDivider from './WaveDivider';
import blogData from './components/StaticBlogContent';

const categories = ['All Blogs', 'IT', 'BPO', 'Customer Support', 'Customer Experience', 'Back Office', 'Content Management', 'Others'];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All Blogs');

  const filteredBlogs = activeCategory === 'All Blogs'
    ? blogData
    : blogData.filter(blog => blog.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#002647] text-white text-center py-32 md:py-40 relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Blogs</h1>
        <p className="text-sm md:text-base">Home &gt; <span className="font-semibold">Blog</span></p>
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] -mb-[1px]">
          <WaveDivider />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mt-10">Blogs</h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 py-6 px-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeCategory === cat ? 'bg-[#002647] text-white' : 'bg-gray-300 hover:bg-[#002647] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 pb-16">
        {filteredBlogs.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
