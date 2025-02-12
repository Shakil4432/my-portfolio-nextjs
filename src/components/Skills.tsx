"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { DiReact, DiCss3, DiDatabase, DiFirebase } from "react-icons/di";
import { FaKey } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

interface Skill {
  name: string;
  icon: ReactNode;
  bgColor: string;
}

const Skills = () => {
  const skills: Skill[] = [
    {
      name: "React.js",
      icon: <DiReact className="text-6xl text-blue-500" />,
      bgColor: "#61dafb",
    },
    {
      name: "Tailwind",
      icon: <DiCss3 className="text-6xl text-blue-200" />,
      bgColor: "#38bdf8",
    },
    {
      name: "MongoDB",
      icon: <DiDatabase className="text-6xl text-green-200" />,
      bgColor: "#47a248",
    },
    {
      name: "Firebase",
      icon: <DiFirebase className="text-6xl text-yellow-600" />,
      bgColor: "#ffca28",
    },
    {
      name: "JWT",
      icon: <FaKey className="text-6xl text-gray-700" />,
      bgColor: "#8b8b8b",
    },
    {
      name: "Next.js",
      icon: <TbBrandNextjs className="text-6xl text-black dark:text-white" />,
      bgColor: "#000000",
    },
    {
      name: "TypeScript",
      icon: <TbBrandTypescript className="text-6xl text-blue-700" />,
      bgColor: "#3178c6",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 mx-auto p-10 rounded-lg space-y-6"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-12 text-center text-black"
      >
        Professional & Technical Skills
      </motion.h2>
      <motion.ul
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-2 lg:flex items-center justify-center gap-10"
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="text-center transform transition duration-300 hover:scale-110 hover:rotate-6"
          >
            <div
              className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full shadow-lg"
              style={{
                backgroundColor: skill.bgColor,
                transform: "rotate(45deg)",
              }}
            >
              <div style={{ transform: "rotate(-45deg)" }}>{skill.icon}</div>
            </div>
            <p className="text-xl font-bold text-black">{skill.name}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Skills;
