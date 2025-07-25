import React from 'react';
import { useParams, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ParticlesBackground from '../components/ParticlesBackground';
import WaveDivider from '../WaveDivider';
import blogData from "./StaticBlogContent";
import Footer from "../Footer";
import QuoteSection from "../QuoteSection";


const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-20 text-center text-red-600 font-bold">
        Blog not found.
      </div>
    );
  }

  const categories = Array.from(new Set(blogData.map(b => b.category)));

  const recentPosts = blogData
    .filter((b) => b.slug !== slug)
    .slice(0, 6); // latest 6 excluding current

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#002647] text-white text-center py-20 md:py-28 relative overflow-hidden">
        <h1 className="text-3xl md:text-4xl mt-10 mb-10 font-bold">{blog.title}</h1>
        <p className="text-lg mt-20 mb-10 sm:lg">
          Home &gt; Blog &gt; <span className="font-semibold">{blog.title}</span>
        </p>

        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] -mb-[1px] z-10">
          <WaveDivider />
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="px-4 sm:px-6 lg:px-10 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Blog Content */}
          <div className="lg:col-span-2">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full rounded-xl shadow-lg mb-6"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-[#1380ab] mb-4">{blog.title}</h1>
            <p className="text-gray-700 whitespace-pre-line text-base sm:text-lg leading-relaxed">
              {blog.content}
            </p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Categories */}
            <div className="bg-[#e8e9ea] p-5 rounded-xl shadow-lg">
              <h3 className="bg-[#002647] text-white text-xl font-semibold px-4 py-3 rounded-t-xl">
                Category
              </h3>
              <ul className="space-y-2 mt-3">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center bg-white px-4 py-2 rounded hover:bg-gray-100 transition cursor-pointer text-m font-medium text-[#002647]"
                  >
                    {cat}
                    <FaArrowRight className="text-s" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-[#e8e9ea] p-5 rounded-xl shadow-lg">
              <h3 className="bg-[#002647] text-white text-xl font-semibold px-4 py-3 rounded-t-xl">
                Recent Post
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {recentPosts.map((post) => (
                  <Link
                    to={`/blogs/${post.slug}`}
                    key={post.slug}
                    className="hover:opacity-90 transition text-center"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-30 object-cover rounded-md mb-1"
                    />
                    <p className="text-[15px] text-[#002647] font-medium leading-tight">
                      {post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default BlogDetails;
