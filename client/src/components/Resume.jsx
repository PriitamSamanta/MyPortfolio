import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaHandshake,
} from "react-icons/fa";
import {
  SiFigma,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

const usingNow = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },

  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },

];

const learning = [
  { name: "Next.js", icon: <SiNextdotjs className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
];

const otherSkills = [
  { name: "English", icon: "EN" },
  { name: "Hindi", icon: "HI" },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  {name: "TeamWork", icon: <FaHandshake className="text-yellow-400" />},
];

const percentageSkills = [
  { name: "HTML", icon: <FaHtml5 />, percent: 90, color: "border-red-400" },
  { name: "CSS", icon: <FaCss3Alt />, percent: 85, color: "border-blue-400" },
  { name: "JavaScript", icon: <FaJs />, percent: 65, color: "border-yellow-400" },
  { name: "Node.js", icon: <FaNodeJs />, percent: 60, color: "border-green-400" },
  { name: "React", icon: <FaReact />, percent: 65, color: "border-cyan-400" },
];

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-[#050b18]/70 text-white px-6 md:px-12 flex items-center"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Skill Icon Box */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SkillGroup title="Using Now" skills={usingNow} />
          <SkillGroup title="Learning" skills={learning} />
          <SkillGroup title="Languages & Other Skills" skills={otherSkills} />
        </motion.div>

        {/* Percentage Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {percentageSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-[#111827]/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl text-gray-500 flex justify-center mb-4">
                {skill.icon}
              </div>

              <div
                className={`w-20 h-20 mx-auto rounded-full border-4 ${skill.color} flex items-center justify-center text-sm font-bold mb-4`}
              >
                {skill.percent}%
              </div>

              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">
                Practical knowledge with real project usage.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillGroup = ({ title, skills }) => {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 text-cyan-400">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="text-center">
            <div className="text-4xl flex justify-center mb-3">
              {skill.icon}
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;