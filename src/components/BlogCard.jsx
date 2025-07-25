import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <p className="text-blue-600 flex items-center text-sm mb-2">
          📅 {blog.date}
        </p>
        <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {blog.excerpt}
        </p>
        <Link
          to={`/blogs/${blog.slug}`}
          className="inline-flex items-center bg-[#002647] text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#002647] border border-[#002647] transition"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
