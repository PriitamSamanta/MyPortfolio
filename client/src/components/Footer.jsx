import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const socialLinks = {
    github: "https://github.com/PriitamSamanta",
    linkedin: "https://www.linkedin.com/in/pritam-s506/",
    instagram: "https://www.instagram.com/pritam_s05/",
};

const Footer = () => {
    return (
        <footer className="bg-[#030712] text-white py-10 px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-10 h-10 rounded-full object-cover border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.45)]"
                        />

                        <h2 className="text-2xl font-bold tracking-wide">
                            Pritam
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">
                        Building modern web applications with MERN stack.
                    </p>
                </div>

                <div className="flex gap-6 text-sm font-semibold">
                    <a href="#home" className="hover:text-cyan-400">Home</a>
                    <a href="#about" className="hover:text-cyan-400">About</a>
                    <a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
                    <a href="#contact" className="hover:text-cyan-400">Contact</a>
                </div>

                <div className="flex gap-5 text-xl">
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

            <p className="text-center text-gray-500 text-sm mt-8">
                © {new Date().getFullYear()} Pritam. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;