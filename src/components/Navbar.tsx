"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

type userProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export default async function Navbar({
  session,
}: {
  session: userProps | null;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md"
    >
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              My Portfolio
            </Link>
          </div>

          <div className="hidden sm:flex flex-grow justify-center space-x-8">
            {["Home", "Projects", "Blog", "Contact", "Dashboard"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <button
              // onClick={handleAuth}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              {session?.user ? "Logout" : "Login"}
            </button>

            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-blue-600 transition duration-300 sm:hidden"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5 }}
            className="sm:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Portfolio", "Blog", "Contact", "Resume"].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 transition duration-300"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            <div className="px-4 pb-4">
              <button
                // onClick={handleAuth}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
              >
                {session?.user ? "Logout" : "Login"}
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.div>
  );
}
