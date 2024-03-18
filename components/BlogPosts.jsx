"use client"

import { useState } from 'react';

const BlogPage = () => {
    const [posts, setPosts] = useState([]); // Array to hold blog posts
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const [postsPerPage] = useState(5); // Number of posts per page

    // Dummy data for blog posts
    const dummyPosts = [
        { id: 1, title: 'First Post', content: 'Content of the first post...' },
        { id: 2, title: 'Second Post', content: 'Content of the second post...' },
        { id: 3, title: 'Third Post', content: 'Content of the third post...' },
        // more posts here
    ];

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = dummyPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Blog Post Cards */}
            {currentPosts.map(post => (
                <div key={post.id} className="bg-white shadow-md p-4 mb-4">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p className="mt-2">{post.content}</p>
                    {/* more details like thumbnail,author */}
                    <hr className="my-4" />
                </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center">
                {Array.from({ length: Math.ceil(dummyPosts.length / postsPerPage) }, (_, i) => i + 1).map(page => (
                    <button key={page} onClick={() => paginate(page)} className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-md">{page}</button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="mt-8">
                <input type="text" placeholder="Search..." className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            </div>

            {/* Comments Section */}
            <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Comments</h3>
                {/* commentsComponent section here */}
            </div>
        </div>
    );
};

export default BlogPage;
