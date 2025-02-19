import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding the New Income Tax Regime in India',
            excerpt: 'The new tax regime introduced in Budget 2023 brings significant changes to the tax structure...',
            date: 'February 12, 2023',
            image: '/images/blog/tax-regime.jpg',
            category: 'Tax Advisory'
        },
        {
            id: 2,
            title: 'Start-Up Funding Options in Post-Pandemic India',
            excerpt: 'With changing market dynamics, startups need to explore diverse funding options beyond traditional VC funding...',
            date: 'January 28, 2023',
            image: '/images/blog/startup-funding.jpg',
            category: 'Start-Ups'
        },
        {
            id: 3,
            title: 'Navigating GST Compliance for E-Commerce Businesses',
            excerpt: 'E-commerce businesses face unique challenges in GST compliance. Heres a comprehensive guide...',
            date: 'January 15, 2023',
            image: '/images/blog/gst-compliance.jpg',
            category: 'GST'
        }
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-800">Latest Insights</h2>
                    <Link to="/blog" className="text-[#f57272] hover:underline">View All Articles →</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <span className="text-xs font-medium text-[#f57272] mb-2 block">{post.category}</span>
                                <h3 className="text-xl font-bold mb-2">
                                    <Link to={`/blog/${post.id}`} className="text-gray-800 hover:text-[#f57272]">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                    <Link to={`/blog/${post.id}`} className="text-sm font-medium text-[#f57272] hover:underline">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;