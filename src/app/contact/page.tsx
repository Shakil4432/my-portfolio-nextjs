"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1f1f1f] p-10 rounded-2xl shadow-lg max-w-lg w-full border border-gray-700"
      >
        <h1 className="text-3xl font-bold text-green-400 mb-6 text-center">
          Contact Details
        </h1>

        <div className="space-y-4 text-lg">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-green-400" />
            <span>youremail@example.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-green-400" />
            <span>+880 1234 567890</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-green-400" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaFacebook className="text-green-400" />
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              facebook.com/yourprofile
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-green-400" />
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
