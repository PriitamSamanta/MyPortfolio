import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill all fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (formData.message.length < 10) {
            toast.error("Message must be at least 10 characters.");
            return;
        }

        const loadingToast = toast.loading("Sending message...");

        try {
            setLoading(true);

            const res = await axios.post(
                "https://pritamsamanta.onrender.com/api/contact",
                formData
            );

            if (res.data.success) {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );

                toast.dismiss(loadingToast);
                toast.success("Message sent successfully!");

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error(
                error.response?.data?.message || "Something went wrong. Try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen bg-[#050b18]/70 text-white px-4 sm:px-6 md:px-12 py-20 md:py-0 flex items-center"
        >
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
                    Contact Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {/* Contact Info */}
                    <motion.div
                        className="border border-gray-700 rounded-2xl p-5 md:p-8 bg-[#111827]/70 backdrop-blur-sm hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300"
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Have a project idea or want to work together? Send me a message
                            and I will get back to you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-cyan-400 text-xl" />
                                <span className="text-gray-300">pritamsamanta506@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                                <span className="text-gray-300">Gujarat, India</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="border border-gray-700 rounded-2xl p-5 md:p-8 bg-[#111827]/70 backdrop-blur-sm hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300"
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-5">
                            <label className="block mb-2 text-sm">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full bg-[#050b18] border border-gray-700 rounded-lg px-4 py-2.5 md:py-3 outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full bg-[#050b18] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 text-sm">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Write your message"
                                className="w-full bg-[#050b18] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-white transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;