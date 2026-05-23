import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const navLinks = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "EDUCATION", id: "education" },
  { name: "SKILLS", id: "resume" },
  { name: "PROJECTS", id: "portfolio" },
  { name: "CONTACT", id: "contact" },
];

const socialLinks = {
  github: "https://github.com/PriitamSamanta",
  linkedin: "https://www.linkedin.com/in/pritam-s506/",
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      const sectionTop = section.offsetTop;

      const scrollPosition = sectionTop - navbarHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
      setMenuOpen(false);
    }
  };



  return (
    <nav className="fixed w-full z-50 bg-[#050b18]/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.45)]"
          />

          <h1 className="text-2xl font-bold tracking-wide">
            Pritam
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`transition ${activeSection === link.id
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
                  }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-4 text-lg">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <FaGithub className="cursor-pointer hover:text-cyan-400" />
          </a>

          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="cursor-pointer hover:text-cyan-400" />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050b18] border-t border-gray-700">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`transition ${activeSection === link.id
                    ? "text-cyan-400"
                    : "hover:text-cyan-400"
                    }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;