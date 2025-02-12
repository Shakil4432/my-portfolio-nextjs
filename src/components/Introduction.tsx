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
      className="h-[90vh] text-center py-10 lg:flex border-b flex-row-reverse items-center justify-evenly"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-full overflow-hidden inline-block"
      >
        <Image
          src="/profile.jpg"
          alt="Md: Shakil Hossain"
          width={300}
          height={300}
          className="rounded-full h-96 w-96 object-cover mx-auto"
        />
      </motion.div>

      <div className="space-y-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl lg:text-5xl font-bold mt-4 text-blue-600"
        >
          Md: Shakil Hossain
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl mt-2 text-secondary text-black font-bold"
        >
          Frontend Web Developer
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-2  max-w-lg text-gray-500"
        >
          I'm a Frontend Developer focused on crafting responsive and
          user-friendly web applications using modern technologies like React.js
          and Tailwind CSS.
        </motion.p>
        <motion.button
          onClick={handleDownloadResume}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none"
        >
          Download Resume
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Introduction;
