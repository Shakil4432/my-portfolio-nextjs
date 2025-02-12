"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  technologies: string;
  liveLink: string;
  GServer: string;
  GClient: string;
}

const projects: Project[] = [
  {
    name: "UnityServe",
    description:
      "Streamlines volunteer coordination with intuitive registration and task management features.",
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    liveLink: "https://volunteer-auth-206ee.web.app/",
    GServer: "https://github.com/Shakil4432/UnityServe_Server",
    GClient: "https://github.com/Shakil4432/UnityServe",
  },
  {
    name: "Medi Shop",
    description:
      "E-commerce platform for purchasing medicines and healthcare products with secure transactions and personalized shopping experiences.",
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    liveLink: "https://medicine-shop-auth.web.app/",
    GServer: "https://github.com/Shakil4432/Medi_Shop_Server",
    GClient: "https://github.com/Shakil4432/Medi_Shop",
  },
  {
    name: "Car View Shop",
    description:
      "E-commerce platform for purchasing medicines and healthcare products with secure transactions and personalized shopping experiences.",
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    liveLink: "https://medicine-shop-auth.web.app/",
    GServer: "https://github.com/Shakil4432/Medi_Shop_Server",
    GClient: "https://github.com/Shakil4432/Medi_Shop",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 lg:max-w-6xl mx-auto p-10 rounded-lg"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-8 text-center text-black"
      >
        My Projects
      </motion.h2>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg overflow-hidden bg-white shadow-lg p-6 flex flex-col h-full"
          >
            <div className="flex-grow">
              <motion.h3 className="text-2xl font-bold mb-3 text-[#1a73e8]">
                {project.name}
              </motion.h3>

              <motion.p className="text-gray-700 mb-3">
                {project.description}
              </motion.p>

              <motion.p className="mb-3 text-blue-500">
                {project.technologies}
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              <Link
                href={project.liveLink}
                target="_blank"
                className="inline-block bg-blue-500 py-2 px-4 text-white text-sm rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Live Link
              </Link>
              <Link
                href={project.GServer}
                target="_blank"
                className="inline-block bg-blue-500 py-2 px-4 text-white text-sm rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                G Server
              </Link>
              <Link
                href={project.GClient}
                target="_blank"
                className="inline-block bg-blue-500 py-2 px-4 text-white text-sm rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                G Client
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
