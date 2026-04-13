import React from "react";
import Link from "next/link";
export const metadata ={
  title: "Blog",
  description:"Browse our collection of all products"
}

const BlogPage = () => {
  // Mock data - eventually you can move this to a JSON file like toys.json
  const posts = [
    {
      id: 1,
      title: "Choosing the Right Educational Toys",
      excerpt: "Learn how to pick toys that stimulate brain development in toddlers...",
      date: "Oct 24, 2023",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500",
    },
    {
      id: 2,
      title: "The Benefits of Wooden Toys",
      excerpt: "Why eco-friendly wooden toys are making a massive comeback in 2024...",
      date: "Nov 12, 2023",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500",
    },
    {
      id: 3,
      title: "Safe Playtime: Safety Standards",
      excerpt: "A guide for parents to understand safety markings and age ratings...",
      date: "Dec 05, 2023",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Our Blog</h1>
        <p className="text-gray-500">Insights, tips, and stories for modern parents.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl border border-base-200">
            <figure>
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body p-5">
              <span className="text-sm text-primary font-semibold">{post.date}</span>
              <h2 className="card-title text-xl">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm btn-outline">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;