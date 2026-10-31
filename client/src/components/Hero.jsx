import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const socialLinks = {
  github: "https://github.com/PriitamSamanta",
  linkedin: "https://www.linkedin.com/in/pritam-s506/",
};

const Hero = () => {
  const handleResumeDownload = () => {
    toast.success("Resume downloading...");
  };

  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && typedRole === currentRole) {
      delay = 1400; // pause when the full title is shown
    } else if (isDeleting && typedRole === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && typedRole === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && typedRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedRole(
          isDeleting
            ? currentRole.slice(0, typedRole.length - 1)
            : currentRole.slice(0, typedRole.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen w-full bg-[#050b18]/70 text-white flex items-center justify-center relative px-4 py-20 md:py-0">

      <div className="relative text-center px-6">
        <div className="mb-6">
          <p className="text-xl sm:text-2xl md:text-4xl font-medium mb-2">
            Hi, I'm
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-cyan-400">Pritam</span>{" "}
            <span className="text-white">Samanta</span>
          </h1>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-300">
          {typedRole}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-6 leading-6 md:leading-8">
          I build modern web applications using React, Node.js, Express and MongoDB.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-6">
          <a
            href="/PritamSamanta_Resume.pdf"
            download="Pritam-Samanta-Resume.pdf"
            onClick={handleResumeDownload}
            className="px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base border border-white hover:bg-white hover:text-black transition"
          >
            <FaDownload className="inline-block mr-2" />
            Resume
          </a>

          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition text-center"
          >
            Portfolio
          </a>
        </div>

        <div className="flex justify-center gap-6 text-xl">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaGithub />
          </a>

          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
