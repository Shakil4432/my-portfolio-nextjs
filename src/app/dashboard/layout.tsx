"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaProjectDiagram,
  FaBlogger,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    {
      name: "Projects",
      path: "/dashboard/projects",
      icon: <FaProjectDiagram />,
    },
    { name: "Blogs", path: "/dashboard/blogs", icon: <FaBlogger /> },
    { name: "Messages", path: "/dashboard/messages", icon: <FaEnvelope /> },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || typeof window !== "undefined") && (
          <motion.div
            key="sidebar"
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#121212]/90 backdrop-blur-md border-r border-gray-700 sm:relative sm:translate-x-0 sm:w-64 ${
              !isOpen ? "hidden sm:block" : ""
            }`}
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-700">
              <h2 className="text-xl font-bold text-green-400">Dashboard</h2>
              <button
                className="sm:hidden text-gray-400"
                onClick={toggleSidebar}
              >
                <FaTimes size={24} />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              {navItems.map((item) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  key={item.name}
                >
                  <Link
                    href={item.path}
                    className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md transition"
                  >
                    <span className="text-lg text-green-400">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center space-x-3 px-4 py-2 text-red-400 hover:bg-red-800/30 rounded-md"
              >
                <FaSignOutAlt className="text-lg" />
                <span>Logout</span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Top Bar */}
        <div className="bg-[#1a1a1a] shadow-md p-4 flex justify-between items-center sm:hidden border-b border-gray-700">
          <button onClick={toggleSidebar} className="text-gray-400">
            <FaBars size={24} />
          </button>
          <h2 className="text-xl font-bold text-blue-400">Dashboard</h2>
        </div>

        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 flex-1"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;
