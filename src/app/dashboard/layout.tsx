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

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-white shadow-lg transition-transform duration-300 sm:relative sm:translate-x-0 sm:w-64`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
          <button className="sm:hidden" onClick={toggleSidebar}>
            <FaTimes size={24} className="text-gray-600" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          {[
            { name: "Home", path: "/", icon: <FaHome /> },
            {
              name: "Projects",
              path: "/dashboard/projects",
              icon: <FaProjectDiagram />,
            },
            { name: "Blogs", path: "/dashboard/blogs", icon: <FaBlogger /> },
            {
              name: "Messages",
              path: "/dashboard/messages",
              icon: <FaEnvelope />,
            },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-100 rounded-md">
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-md p-4 flex justify-between items-center sm:hidden">
          <button onClick={toggleSidebar}>
            <FaBars size={24} className="text-gray-600" />
          </button>
          <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
        </div>

        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
