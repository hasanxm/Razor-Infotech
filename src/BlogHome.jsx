import React from "react";
import blogData from "./components/StaticBlogContent";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const BlogSection = () => {
  const featured = blogData.slice(3, 5); 
  const latest = blogData.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm uppercase text-sky-600 font-semibold tracking-widest">
              What we do
            </p>
            <h2 className="text-4xl font-bold text-gray-800">
              Lastest Post and Articles
            </h2>
          </div>
          <button className="bg-blue-950 text-white px-8 py-4 rounded shadow hover:bg-sky-800  flex items-center gap-2">
            See All Blogs <FaArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-8">
            {latest.map((post, idx) => (
              <div key={idx} className="flex gap-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-40 h-28 object-cover shadow-md"
                />
                <div>
                  <div className="text-sky-600 text-sm font-medium flex items-center gap-2">
                    <FaCalendarAlt /> {post.date}
                  </div>
                  <h3 className="text-md font-semibold text-gray-800">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Blog */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {featured.map((post, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-6 items-start shadow-md p-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full lg:w-2/3 h-64 object-cover shadow"
                />
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="text-sky-600 text-sm font-medium flex items-center gap-2 mb-1">
                      <FaCalendarAlt /> {post.date}
                    </div>
                    <h3 className="text-lg font-bold text-sky-900">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {post.excerpt}
                    </p>
                  </div>
                  <button className="mt-4 w-fit bg-blue-950 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-sky-800">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
