import { motion } from "framer-motion";

const educationData = [
    {
        title: "Bachelor of Computer Application(BCA)",
        year: "2023 - 2026",
        institute: "GLS University, Ahmedabad",
        description:
            "Studying computer applications, programming, database management, and full stack web development.",
    },
    {
        title: "Senior Secondary Education(12th)(CBSE)",
        year: "2022 - 2023",
        institute: "Shri KG Dholakiya, Rajkot",
        description:
            "Completed senior secondary education with focus on computer and core academic subjects.",
    },
    {
        title: "Secondary Education(10th)(CBSE)",
        year: "2020 - 2021",
        institute: "Kendriya Vidyalaya, AFS Samana, Jamnagar",
        description:
            "Completed higher secondary education and built basic foundation in academics.",
    },
];

const Education = () => {
    return (
        <section id="education" className="min-h-screen  bg-[#050b18]/70 text-white px-6 md:px12 py-20">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-20"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    Education
                </motion.h2>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-5 top-0 h-full w-[2px] bg-gray-700">
                        <div className="w-full h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent"></div>
                    </div>

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative mb-20 flex justify-start"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Dot */}
                            <div className="absolute left-[12px] top-6 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] border-4 border-[#050b18] z-10"></div>

                            {/* Card */}
                            <div className="ml-12 sm:ml-16 md:ml-28 w-[calc(100%-3rem)] md:w-[75%] bg-[#111827]/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-5 sm:p-6 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300">
                                <span className="inline-block text-sm text-cyan-400 font-semibold mb-3">
                                    {item.year}
                                </span>

                                <h3 className="text-2xl font-bold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 font-medium mb-3">
                                    {item.institute}
                                </p>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;