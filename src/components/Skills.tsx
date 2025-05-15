"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type TSkill = {
  id: number;
  skillName: string;
  image: string;
};

const skills: TSkill[] = [
  { id: 1, skillName: "JavaScript", image: "/js.jpg" },
  { id: 2, skillName: "TypeScript", image: "/Ts.jpg" },
  { id: 3, skillName: "React", image: "/react.png" },
  { id: 4, skillName: "Next.js", image: "/nextjs.jpg" },
  { id: 5, skillName: "Node.js", image: "/nodejs.png" },
  { id: 6, skillName: "Tailwind CSS", image: "/tailwind.jpg" },
  { id: 7, skillName: "MongoDB", image: "/mongodb.jpg" },
  { id: 8, skillName: "Express.js", image: "/ex.jpg" },
  { id: 9, skillName: "Redux", image: "/redux.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
      className="md:w-[90%] w-[95%] mx-auto pt-32 py-16"
    >
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl flex items-center justify-center p-8 font-bold text-white mb-20"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100 },
          },
        }}
      >
        My Skills
      </motion.h2>

      <Swiper
        loop
        speed={600}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 8 },
          480: { slidesPerView: 3, spaceBetween: 8 },
          640: { slidesPerView: 4, spaceBetween: 10 },
          768: { slidesPerView: 5, spaceBetween: 10 },
          1024: { slidesPerView: 6, spaceBetween: 12 },
          1400: { slidesPerView: 7, spaceBetween: 14 },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={skill.id}>
            <motion.div
              variants={slideVariants}
              custom={index}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <motion.div
                className="relative"
                whileHover="hover"
                initial="visible"
              >
                <motion.div
                  variants={imageVariants}
                  className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-blue-400 shadow-lg bg-[#181a2a] transition-shadow duration-300 hover:shadow-blue-400/80 flex items-center justify-center"
                >
                  <Image
                    src={skill.image}
                    alt={skill.skillName}
                    width={200}
                    height={200}
                    className="rounded-full object-cover w-full h-full"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={textVariants}
                className="mt-4 text-white font-bold text-sm text-center tracking-wide"
              >
                {skill.skillName}
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Skills;
