"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import { Button } from "./ui/button";

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
    featured: false,
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    liveLink: "https://medicine-shop-auth.web.app/",
    GServer: "https://github.com/Shakil4432/Medi_Shop_Server",
    GClient: "https://github.com/Shakil4432/Medi_Shop",
  },
  {
    name: "Car View Shop",
    description:
      "Car product platform with secure checkout and product browsing for auto enthusiasts.",
    featured: false,
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    liveLink: "https://medicine-shop-auth.web.app/",
    GServer: "https://github.com/Shakil4432/Medi_Shop_Server",
    GClient: "https://github.com/Shakil4432/Medi_Shop",
  },
];

const Projects = () => {
  return (
    <div className="mt-10 mx-auto px-16 py-16 bg-gray-900">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center mb-20">
        My Projects
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1f2937] rounded-lg shadow-lg p-6 h-full flex flex-col">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
