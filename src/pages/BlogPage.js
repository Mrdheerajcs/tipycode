import React, { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaSkype } from 'react-icons/fa';
import blogs1 from "../assets/blogs/blogs1.jpg"
import blogs2 from "../assets/blogs/blogs2.jpg"
import blogs3 from "../assets/blogs/blogs3.jpg"
import blogs4 from "../assets/blogs/blogs4.jpg"

const BlogPage = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "India-Canada Trade Relations Moving Towards Stability",
            category: "Global Trade",
            date: "February 15, 2025",
            image: blogs1,
            excerpt: "The trade relationship between India and Canada, once strained, is now showing signs of stability and progress...",
            author: "Coinmen Consultants",
            readingTime: "5 min read"
        },
        {
            id: 2,
            title: "New Foreign Investment Framework in India",
            category: "Foreign Investment",
            date: "February 10, 2025",
            image: blogs2,
            excerpt: "India has introduced a comprehensive framework to streamline foreign investments and boost economic growth...",
            author: "Coinmen Consultants",
            readingTime: "7 min read"
        },
        {
            id: 3,
            title: "Impact of Budget 2025 on Business in India",
            category: "Budget Analysis",
            date: "February 5, 2025",
            image: blogs3,
            excerpt: "An analysis of how the Union Budget 2025 affects businesses across various sectors in India...",
            author: "Coinmen Consultants",
            readingTime: "8 min read"
        },
        {
            id: 4,
            title: "Navigating Tax Compliance for Startups",
            category: "Tax",
            date: "January 28, 2025",
            image: blogs4,
            excerpt: "A comprehensive guide for startups to understand and comply with the tax regulations in India...",
            author: "Coinmen Consultants",
            readingTime: "6 min read"
        },
        {
            id: 5,
            title: "ESG Reporting: New Standards for Indian Companies",
            category: "ESG",
            date: "January 20, 2025",
            image: blogs1,
            excerpt: "Understanding the new Environmental, Social, and Governance reporting requirements for companies in India...",
            author: "Coinmen Consultants",
            readingTime: "4 min read"
        },
        {
            id: 6,
            title: "Digital Transformation Strategies for SMEs",
            category: "Digital",
            date: "January 15, 2025",
            image: blogs2,
            excerpt: "How small and medium enterprises can leverage digital technologies to scale their operations...",
            author: "Coinmen Consultants",
            readingTime: "5 min read"
        },
        {
            id: 7,
            title: "India-Canada Trade Relations Moving Towards Stability",
            category: "Global Trade",
            date: "February 15, 2025",
            image: blogs1,
            excerpt: "The trade relationship between India and Canada, once strained, is now showing signs of stability and progress...",
            author: "Coinmen Consultants",
            readingTime: "5 min read"
        },
        {
            id: 8,
            title: "New Foreign Investment Framework in India",
            category: "Foreign Investment",
            date: "February 10, 2025",
            image: blogs2,
            excerpt: "India has introduced a comprehensive framework to streamline foreign investments and boost economic growth...",
            author: "Coinmen Consultants",
            readingTime: "7 min read"
        },
        {
            id: 9,
            title: "Impact of Budget 2025 on Business in India",
            category: "Budget Analysis",
            date: "February 5, 2025",
            image: blogs3,
            excerpt: "An analysis of how the Union Budget 2025 affects businesses across various sectors in India...",
            author: "Coinmen Consultants",
            readingTime: "8 min read"
        },
    ]);

    const socialLinks = [
        { icon: <FaTwitter />, path: 'https://twitter.com/tipycode' },
        { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/company/tipycode' },
        { icon: <FaFacebookF />, path: 'https://www.facebook.com/tipycode' },
        { icon: <FaInstagram />, path: 'https://www.instagram.com/tipycode' },
        { icon: <FaYoutube />, path: 'https://www.youtube.com/tipycode' },
        { icon: <FaSkype />, path: 'skype:tipycode?call' },
    ];

    const categories = ["All", "Global Trade", "Foreign Investment", "Budget Analysis", "Tax", "ESG", "Digital"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(6);

    const filteredBlogs = blogs.filter(blog => {
        const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchQuery]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getVisiblePageNumbers = () => {
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        
        if (endPage === totalPages) {
            startPage = Math.max(1, endPage - 4);
        }
        
        const visiblePages = [];
        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(i);
        }
        
        return visiblePages;
    };

    return (
        <>
            <section className="pt-24 pb-16 bg-[#f57272] text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-700">
                            Blog
                        </h1>

                        <div className="flex space-x-4 pb-5 ml-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#f57272] transition duration-200"
                                    aria-label={`Visit our ${social.path.split('/').pop()} page`}
                                >
                                    {React.cloneElement(social.icon, { size: 30, className: "md:size-45" })}
                                </a>
                            ))}
                        </div>

                        <div className="mb-12">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="w-full md:w-1/3">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search blogs..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <span className="absolute left-3 top-3 text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 text-sm rounded-full transition-colors ${
                                                selectedCategory === category
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentBlogs.length > 0 ? (
                            currentBlogs.map((blog) => (
                                <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative">
                                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                                        <div className="flex justify-between items-center text-sm text-gray-500">
                                            <span>{blog.date}</span>
                                            <span>{blog.readingTime}</span>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                            <span className="text-sm text-gray-600">{blog.author}</span>
                                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-xl text-gray-600">No blogs found matching your criteria.</p>
                                <button
                                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>

                    {filteredBlogs.length > 0 && totalPages > 1 && (
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center space-x-2">
                                <button 
                                    onClick={goToPreviousPage} 
                                    disabled={currentPage === 1}
                                    className={`px-3 py-2 rounded-md border ${
                                        currentPage === 1 
                                            ? "border-gray-200 text-gray-400 cursor-not-allowed" 
                                            : "border-gray-300 text-gray-500 hover:bg-gray-100"
                                    }`}
                                >
                                    Previous
                                </button>
                                
                                {getVisiblePageNumbers()[0] > 1 && (
                                    <>
                                        <button 
                                            onClick={() => paginate(1)} 
                                            className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                                        >
                                            1
                                        </button>
                                        {getVisiblePageNumbers()[0] > 2 && (
                                            <span className="px-2 text-gray-500">...</span>
                                        )}
                                    </>
                                )}
                                
                                {getVisiblePageNumbers().map(number => (
                                    <button
                                        key={number}
                                        onClick={() => paginate(number)}
                                        className={`px-3 py-2 rounded-md ${
                                            currentPage === number
                                                ? "bg-blue-600 text-white"
                                                : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        {number}
                                    </button>
                                ))}
                                
                                {getVisiblePageNumbers()[getVisiblePageNumbers().length - 1] < totalPages && (
                                    <>
                                        {getVisiblePageNumbers()[getVisiblePageNumbers().length - 1] < totalPages - 1 && (
                                            <span className="px-2 text-gray-500">...</span>
                                        )}
                                        <button 
                                            onClick={() => paginate(totalPages)} 
                                            className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                                        >
                                            {totalPages}
                                        </button>
                                    </>
                                )}
                                
                                <button 
                                    onClick={goToNextPage} 
                                    disabled={currentPage === totalPages}
                                    className={`px-3 py-2 rounded-md border ${
                                        currentPage === totalPages 
                                            ? "border-gray-200 text-gray-400 cursor-not-allowed" 
                                            : "border-gray-300 text-gray-500 hover:bg-gray-100"
                                    }`}
                                >
                                    Next
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogPage;