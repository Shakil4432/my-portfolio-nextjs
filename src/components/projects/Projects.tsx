"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface Project {
  name: string;
  description: string;
  technologies: string;
  featured: boolean;
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
    featured: false,
    liveLink: "https://volunteer-auth-206ee.web.app/",
    GServer: "https://github.com/Shakil4432/UnityServe_Server",
    GClient: "https://github.com/Shakil4432/UnityServe",
  },
  {
    name: "Find It Again",
    description:
      "Simplifies stationery shopping with seamless product browsing, cart management, and secure checkout features.",
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    featured: false,
    liveLink: "https://secondhand-bs-client.vercel.app/",
    GServer: "https://github.com/Shakil4432/E_Commarce_SH_Backend",
    GClient: "https://github.com/Shakil4432/E-Commarce-SH-Frontend",
  },
  {
    name: "Medi Shop",
    description:
      "E-commerce platform for purchasing medicines and healthcare products with secure transactions and personalized shopping experiences.",
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    featured: false,
    liveLink: "https://medicine-shop-auth.web.app/",
    GServer: "https://github.com/Shakil4432/Medi_Shop_Server",
    GClient: "https://github.com/Shakil4432/Medi_Shop",
  },
  {
    name: "Car View Shop",
    description:
      "Car product platform with secure checkout and product browsing for auto enthusiasts.",
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    featured: false,
    liveLink: "https://medicine-shop-auth.web.app/",
    GServer: "https://github.com/Shakil4432/Medi_Shop_Server",
    GClient: "https://github.com/Shakil4432/Medi_Shop",
  },
];

const Projects = () => {
  return (
    <div className="mt-10 mx-auto px-6 py-10 bg-gray-900 max-w-7xl">
      <h2 className="text-4xl md:text-5xl lg:text-4xl text-white font-bold text-center mb-10 border-b-8 border-blue-400 shadow-2xl rounded-full w-80 mx-auto py-6">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-[#1f2937] rounded-lg shadow-lg p-6 flex flex-col"
          >
            <h3 className="mb-3 text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent tracking-wide">
              {project.name}
            </h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <p className="text-[#93c5fd] font-medium mb-4">
              {project.technologies}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <Link href={project.liveLink} target="_blank">
                <Button className="bg-black text-white px-4 py-2 shadow-md">
                  Live
                </Button>
              </Link>
              <Link href={project.GServer} target="_blank">
                <Button className="bg-black text-white px-4 py-2 shadow-md">
                  Server
                </Button>
              </Link>
              <Link href={project.GClient} target="_blank">
                <Button className="bg-black text-white px-4 py-2 shadow-md">
                  Client
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
