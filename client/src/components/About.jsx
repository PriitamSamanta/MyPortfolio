import { motion } from "framer-motion";
import profileImage from "../assets/images/photo.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#050b18]/70 text-white px-6 sm:px-8 md:px-12 py-20 md:py-0 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left Content */}
        <div className="max-w-md mx-auto md:max-w-none md:mx-0 md:pl-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            About Me
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8 mb-5 max-w-xl">
            I am a fresh graduate and aspiring full stack developer with a strong interest in building modern, responsive and user-friendly web applications. I enjoy working with technologies like React, Node.js, Express, MongoDB, and Tailwind CSS.
          </p>

          <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8 mb-5 max-w-xl">
            I am focused on improving my MERN stack skills by building practical projects, writing clean code and learning better development practices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
            <p>
              <span className="font-bold text-white">Name:</span>{" "}
              <span className="text-gray-300">Pritam Samanta</span>
            </p>

            <p>
              <span className="font-bold text-white">Location:</span>{" "}
              <span className="text-gray-300">Gujarat, India</span>
            </p>

            <p>
              <span className="font-bold text-white">Role:</span>{" "}
              <span className="text-gray-300">Full Stack  Developer</span>
            </p>

            <p>
              <span className="font-bold text-white">Experience:</span>{" "}
              <span className="text-gray-300">Fresh Graduate</span>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.35)]">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
