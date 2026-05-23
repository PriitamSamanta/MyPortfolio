import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import toast from "react-hot-toast";

const socialLinks = {
  github: "https://github.com/PriitamSamanta",
  linkedin: "https://www.linkedin.com/in/pritam-s506/",
  instagram: "https://www.instagram.com/pritam_s05/",
};

const Hero = () => {
  const handleResumeDownload = () => {
    toast.success("Resume downloading...");
  };

  return (
    <section id="home" className="min-h-screen w-full bg-[#050b18]/70 text-white flex items-center justify-center relative px-4 py-20 md:py-0">
      {/* Background Image */}


      {/* Content */}
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
          Full Stack Developer
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-6 leading-6 md:leading-8">
          I build modern web applications using React, Node.js, Express and MongoDB.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-6">
          <a
            href="/resume.pdf"
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

          <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
