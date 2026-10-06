import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaBriefcase,
    FaGithub,
    FaCertificate,
    FaTimes,
    FaLinkedinIn,
    FaExternalLinkAlt,
} from "react-icons/fa";

const internships = [
    {
        company: "Amdox Technologies",
        companyLink: "https://www.linkedin.com/company/amdox-technology/posts/",
        role: "Web Developer Intern",
        duration: "Apr 2026 - Jul 2026",
        description:
            [
                "Developed a full-stack Enterprise Resource Planning (ERP) system using Next.js, NestJS, Prisma ORM, and PostgreSQL.",
                "Built Human Resources, Finance, Business Intelligence, and Employee Management modules with secure role- based access control.",
                "Implemented REST APIs, JWT Authentication, employee onboarding, attendance tracking, leave management, payroll processing, and financial workflows",
            ],
        github: "https://github.com/PriitamSamanta/AI-Powered-Cloud-ERP-Suite-.git",
        linkedin: "https://lnkd.in/p/dtwYMKBc",
        certificate: "/internship_certificate.png",
    },
];

const Internship = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section
            id="internship"
            className="min-h-screen bg-[#050b18]/70 text-white px-6 sm:px-8 md:px-12 py-24 md:py-28"
        >
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">
                    Internship
                </h2>

                <div className="max-w-4xl mx-auto">
                    {internships.map((internship, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-700 rounded-2xl p-6 md:p-8 bg-[#111827]/70 backdrop-blur-sm hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex flex-col sm:flex-row gap-5">
                                <div className="text-cyan-400 text-3xl">
                                    <FaBriefcase />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold">
                                        {internship.role}
                                    </h3>

                                    <a
                                        href={internship.companyLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-cyan-400 mt-1 hover:text-white transition"
                                    >
                                        {internship.company}
                                        <FaExternalLinkAlt className="text-xs" />
                                    </a>

                                    <p className="text-gray-500 text-sm mt-1">
                                        {internship.duration}
                                    </p>

                                    <p className="text-gray-300 leading-relaxed mt-5">
                                        {internship.description}
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap gap-3 mt-6">
                                        <a
                                            href={internship.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                                        >
                                            <FaGithub />
                                            Code
                                        </a>

                                        <a
                                            href={internship.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                                        >
                                            <FaLinkedinIn />
                                            Demo Project
                                        </a>

                                        <button
                                            onClick={() =>
                                                setSelectedCertificate(internship.certificate)
                                            }
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-white transition"
                                        >
                                            <FaCertificate />
                                            View Certificate
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCertificate(null)}
                    >
                        <motion.div
                            className="relative bg-[#111827] border border-cyan-400 rounded-xl p-3 max-w-4xl w-full max-h-[90vh] shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                            initial={{ opacity: 0, scale: 0.85, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 30 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:bg-white transition z-10"
                                aria-label="Close certificate"
                            >
                                <FaTimes />
                            </button>

                            {/* Certificate */}
                            <div className="max-h-[85vh] overflow-auto rounded-lg">
                                <img
                                    src={selectedCertificate}
                                    alt="Internship Certificate"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Internship;