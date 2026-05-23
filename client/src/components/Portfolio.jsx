import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const getTechIcon = (tech) => {
  const icons = {
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-400" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    React: <FaReact className="text-cyan-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    PHP: <FaPhp className="text-indigo-400" />,
    MySQL: <SiMysql className="text-blue-300" />,
    Bootstrap: <FaBootstrap className="text-purple-500" />,
    Python: <FaPython className="text-yellow-400" />,
  };

  return icons[tech];
};


const projects = [
  {
    title: "AI Job Portal",
    tech: ["React", "Node.js", "MongoDB"],
    image: project1,
    github: "https://github.com/PriitamSamanta/ai-job-portal.git",

  },
  {
    title: "Web-Based Smart Sales Dashboard",
    tech: ["Python", "React", "MySQL"],
    image: project3,
    github: "https://github.com/PriitamSamanta/Web-Based-Smart-Sales-Dashboard.git",
  },
  {
    title: "Day Finder Web Application",
    tech: ["HTML", "CSS", "JavaScript"],
    image: project2,
    github: "https://github.com/PriitamSamanta/dayFinder.git",
    demo: "https://www.linkedin.com/posts/pritam-s506_mini-javascript-project-completed-day-ugcPost-7412129842525097984-OI0s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFYQWS4Bcn_uwodS-sjZc4uY8rPJnXsXH0c",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-[#050b18]/70 text-white px-4 sm:px-6 md:px-12 py-20 md:py-0 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-[#111827]/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-44 sm:h-52 md:h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-black px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-cyan-400 transition"
                    >
                      <FaGithub /> Code
                    </a>

                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-white transition"
                    >
                      <FaLinkedin /> Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-bold mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      title={tech}
                      className="w-10 h-10 bg-[#050b18] border border-gray-700 rounded-full flex items-center justify-center text-xl hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.35)] transition"
                    >
                      {getTechIcon(tech)}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;