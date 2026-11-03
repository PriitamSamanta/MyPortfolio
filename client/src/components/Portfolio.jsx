import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpeg";

const projects = [
  {
    title: "Res-Q",
    category: "Hackathon Project",
    description:
      "Res-Q is an AI-powered emergency response and resource coordination platform designed to help citizens and emergency authorities detect, understand, and respond to emergencies faster.",
    features: [
      "Automatically detects and classifies the incident.",
      "Identifies duplicate or related reports.",
      "Generates an AI-powered emergency action plan.",
    ],
    contribution:
      "contributed to whole backend development.",
    tech: ["Next.js", "NestJS", "TypeScript", "MongoDB", "Gemini AI API"],
    screenshots: [project4],
    github: "https://github.com/PriitamSamanta/BitNBuild_Hackathon_Project-Team-CODE-CREW-.git",
    linkedin:
      "https://lnkd.in/p/d6-b6Win",
  },
  {
    title: "Digital Signature Web Application",
    category: "Full-Stack Application",
    description:
      "A web application that helps users upload documents, add signatures, and manage the signing process digitally.",
    features: [
      "Upload and manage PDF documents",
      "Place signatures on document pages",
      "Track document status through a simple workflow",
    ],
    contribution:
      "Demo text: contributed to the frontend, backend APIs, and document workflow.",
    tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB"],
    screenshots: [project1],
    github: "https://github.com/PriitamSamanta/Digital-Signature-app.git",
    linkedin: "",
  },
  {
    title: "Web-Based Smart Sales Dashboard",
    category: "Data Visualization",
    description:
      "A dashboard concept for viewing sales data and understanding business performance through visual reports.",
    features: [
      "Display sales information in a dashboard",
      "Visualize business data using charts",
      "Organize key sales metrics in one place",
    ],
    contribution:
      "Demo text: worked on the dashboard interface and data visualization features.",
    tech: ["Python", "React", "MySQL"],
    screenshots: [project3],
    github:
      "https://github.com/PriitamSamanta/Web-Based-Smart-Sales-Dashboard.git",
    linkedin: "",
  },
  {
    title: "AI-Powered Cloud ERP Suite",
    category: "Enterprise Application",
    description:
      "A demo overview of an ERP system designed to bring business operations and management modules together.",
    features: [
      "Separate modules for business operations",
      "Role-based access to application features",
      "Centralized interface for managing business information",
    ],
    contribution:
      "Demo text: contributed to module development and the application interface.",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
    screenshots: [project2],
    github: "https://github.com/PriitamSamanta/MyPortfolio.git",
    linkedin:
      "https://www.linkedin.com/posts/pritam-s506_amdoxtechnologies-erp-nextjs-ugcPost-7467827569556389888-mQFf/",
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const viewportRef = useRef(null);
  const project = projects[activeProject];

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateWidth = () => setViewportWidth(viewport.clientWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setActiveScreenshot(0);
    setIsHovered(false);
  }, [activeProject]);

  useEffect(() => {
    if (isHovered || project.screenshots.length < 2) return;

    const interval = setInterval(() => {
      setActiveScreenshot(
        (current) => (current + 1) % project.screenshots.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, project]);

  const goToProject = (direction) => {
    setActiveProject(
      (current) => (current + direction + projects.length) % projects.length
    );
  };

  const goToScreenshot = (direction) => {
    setActiveScreenshot(
      (current) =>
        (current + direction + project.screenshots.length) %
        project.screenshots.length
    );
  };

  const cardWidth = viewportWidth * 0.50;
  const cardGap = 24;
  const trackOffset =
    viewportWidth === 0
      ? 0
      : (viewportWidth - cardWidth) / 2 -
      activeProject * (cardWidth + cardGap);

  return (
    <section
      id="portfolio"
      className="min-h-screen w-full bg-[#050b18]/70 px-4 py-20 text-white sm:px-6 md:px-12"
    >
      <div className="mx-auto w-full max-w-none">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold md:mb-10 md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="relative w-full">
          {/* Carousel viewport */}
          <div ref={viewportRef} className="relative w-full overflow-hidden">
            {/* Moving track */}
            <motion.div
              className="flex items-stretch gap-6"
              animate={{ x: trackOffset }}
              transition={{ type: "spring", stiffness: 90, damping: 22 }}
            >
              {projects.map((item, index) => {
                const isActive = index === activeProject;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 35, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onClick={() => {
                      if (!isActive) setActiveProject(index);
                    }}
                    onMouseEnter={() => {
                      if (isActive) setIsHovered(true);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`relative w-[50%] shrink-0 overflow-hidden rounded-3xl border bg-[#111827]/90 shadow-xl transition-opacity duration-300 ${isActive
                      ? "border-cyan-400 opacity-100"
                      : "cursor-pointer border-gray-700 opacity-50"
                      }`}
                  >
                    {/* Project image */}
                    <div className="relative h-56 bg-black sm:h-64 md:h-[320px]">
                      <img
                        src={
                          isActive
                            ? item.screenshots[activeScreenshot]
                            : item.screenshots[0]
                        }
                        alt={`${item.title} screenshot`}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                          {item.category}
                        </p>
                        <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                          {item.title}
                        </h3>
                      </div>

                      {isActive &&
                        item.screenshots.length > 1 &&
                        !isHovered && (
                          <>
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                goToScreenshot(-1);
                              }}
                              aria-label="Previous screenshot"
                              className="absolute bottom-5 right-16 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 hover:text-cyan-400"
                            >
                              <FaChevronLeft />
                            </button>

                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation();
                                goToScreenshot(1);
                              }}
                              aria-label="Next screenshot"
                              className="absolute bottom-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 hover:text-cyan-400"
                            >
                              <FaChevronRight />
                            </button>
                          </>
                        )}
                    </div>

                    {/* Card content */}
                    <div className="p-5 sm:p-7">
                      <div className="mb-5 flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200 sm:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {isActive && (
                        <div className="relative z-10 flex flex-wrap items-center gap-3">
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2.5 transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                              <FaGithub /> GitHub
                            </a>
                          )}

                          {item.linkedin && (
                            <a
                              href={item.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2.5 transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                              <FaLinkedin /> LinkedIn
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Hover details overlay; does not change card height */}
                    <AnimatePresence>
                      {isActive && isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 z-20 overflow-y-auto rounded-3xl bg-[#07111f]/95 p-6 backdrop-blur-sm sm:p-8"
                        >
                          <h4 className="mb-2 text-lg font-bold">
                            About this project
                          </h4>
                          <p className="mb-5 leading-relaxed text-gray-300">
                            {item.description}
                          </p>

                          <h4 className="mb-2 text-lg font-bold">
                            Key features
                          </h4>
                          <ul className="mb-5 list-disc space-y-1 pl-5 text-gray-300">
                            {item.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>

                          <h4 className="mb-2 text-lg font-bold">
                            My contribution
                          </h4>
                          <p className="leading-relaxed text-gray-300">
                            {item.contribution}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>

          {/* Previous / next controls */}
          <button
            type="button"
            onClick={() => goToProject(-1)}
            aria-label="Previous project"
            className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 bg-black/70 text-white transition hover:border-cyan-400 hover:text-cyan-400 sm:left-4"
          >
            <FaChevronLeft />
          </button>

          <button
            type="button"
            onClick={() => goToProject(1)}
            aria-label="Next project"
            className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 bg-black/70 text-white transition hover:border-cyan-400 hover:text-cyan-400 sm:right-4"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Project indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {projects.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveProject(index)}
              aria-label={`Show project ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${activeProject === index
                ? "w-8 bg-cyan-400"
                : "w-2.5 bg-gray-600 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;