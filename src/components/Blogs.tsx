// BlogPage.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  summary: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Understanding Closures in JavaScript",
    summary:
      "Learn how closures work in JavaScript with real-world examples and use cases.",
    category: "JavaScript",
  },
  {
    title: "A Beginner's Guide to TypeScript",
    summary:
      "Explore the basics of TypeScript, a strongly typed superset of JavaScript.",
    category: "TypeScript",
  },
  {
    title: "How React Works Under the Hood",
    summary:
      "Dive deep into the inner workings of the React library and its virtual DOM.",
    category: "React",
  },
  {
    title: "What is the DOM? A Visual Explanation",
    summary:
      "Discover how the Document Object Model works and how browsers render pages.",
    category: "Web Development",
  },
  {
    title: "Exploring Node.js Event Loop",
    summary:
      "Understand how asynchronous programming and the event loop work in Node.js.",
    category: "Node.js",
  },
  {
    title: "Top 5 Git Commands Every Developer Should Know",
    summary: "Boost your Git workflow with these essential commands and tips.",
    category: "Version Control",
  },
  {
    title: "State Management in React: useState vs Redux",
    summary: "Compare different ways to manage state in your React apps.",
    category: "React",
  },
  {
    title: "A Guide to MongoDB Aggregation Framework",
    summary:
      "Learn powerful data transformation techniques using MongoDB aggregations.",
    category: "Database",
  },
  {
    title: "REST vs GraphQL: What Should You Use?",
    summary:
      "Compare the two major API approaches with pros, cons, and when to use which.",
    category: "API",
  },
  {
    title: "Why Learn Algorithms and Data Structures?",
    summary:
      "See how understanding core CS concepts helps you become a better problem solver.",
    category: "Computer Science",
  },
  {
    title: "Mastering Tailwind CSS Layouts",
    summary:
      "Create stunning layouts quickly with Tailwind’s utility-first approach.",
    category: "CSS",
  },
];

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-900 text-white px-4 py-12"
    >
      <motion.h1
        className="text-4xl md:text-4xl font-bold text-center mb-12 border-b-8 border-green-400 shadow-2xl rounded-full w-44 mx-auto py-6"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Blogs
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-[1380px] mx-auto">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-xl w-80 p-6 shadow-md"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ y: -6, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)" }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
          >
            <p className="text-sm text-green-400 font-semibold mb-2">
              {post.category}
            </p>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-300">{post.summary}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPage;
