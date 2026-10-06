import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "2026",
    link: "#",
  },
  {
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "2026",
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-[#050b18]/70 text-white px-6 sm:px-8 md:px-12 py-24 md:py-28"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((certificate, index) => (
            <motion.div
              key={index}
              className="border border-gray-700 rounded-2xl p-6 bg-[#111827]/70 backdrop-blur-sm hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="flex gap-4">
                <div className="text-cyan-400 text-3xl">
                  <FaCertificate />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    {certificate.title}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    {certificate.issuer}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {certificate.date}
                  </p>

                  {certificate.link !== "#" && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-white transition text-sm"
                    >
                      View Certificate
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;