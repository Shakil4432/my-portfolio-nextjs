"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Introduction = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[90vh] text-center py-10 lg:flex border-b border-gray-700 flex-row-reverse items-center justify-evenly"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-400 to-green-400 p-2 rounded-full overflow-hidden inline-block"
      >
        <Image
          src="/profile.jpg"
          alt="Md: Shakil Hossain"
          width={300}
          height={300}
          className="rounded-full h-96 w-96 object-cover mx-auto"
        />
      </motion.div>

      <div className="space-y-4 max-w-lg">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
        >
          Md: Shakil Hossain
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl text-white font-semibold"
        >
          Frontend Web Developer
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-400"
        >
          I am a Frontend Developer focused on crafting responsive and
          user-friendly web applications using modern technologies like React.js
          and Tailwind CSS.
        </motion.p>

        <motion.button
          onClick={handleDownloadResume}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-lg shadow-lg transition-all duration-300"
        >
          Download Resume
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Introduction;
