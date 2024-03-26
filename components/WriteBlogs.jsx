"use client"

import { useState } from 'react';

export default function Editor() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-[800px] bg-white dark:bg-gray-900 shadow-lg rounded-lg text-black overflow-hidden">
      <div className="flex space-x-2 p-2 border-b border-gray-200 dark:border-gray-800">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400">
          <span className="sr-only">Bold</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M14 12a4 4 0 0 0 0-8H6v8"></path>
            <path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path>
          </svg>
        </button>
        {/* Add more buttons as needed */}
      </div>
      <textarea
        value={text}
        onChange={handleInputChange}
        className="w-full h-full p-4 text-gray-600 dark:text-gray-200 text-sm focus:outline-none"
        placeholder="Type your text here..."
      ></textarea>
    </div>
  );
}
