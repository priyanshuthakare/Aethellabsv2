import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ServiceProcess = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-navy-900 mb-6"
                    >
                        It's Easy to Get Started
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        From discovery call to implementation in days, not months.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10 origin-left"
                    />

                    {[
                        {
                            num: 1,
                            title: "Book a Discovery Call",
                            desc: "We discuss your challenges and identify high-impact opportunities."
                        },
                        {
                            num: 2,
                            title: "Custom Proposal",
                            desc: "We design a solution tailored to your specific workflows and goals."
                        },
                        {
                            num: 3,
                            title: "Implementation",
                            desc: "We build, test, and deploy your automation, ensuring smooth adoption."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-aethel-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-aethel-500 transition-colors relative z-10">
                                <span className="text-3xl font-bold text-aethel-600">{item.num}</span>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <button
                        onClick={() => window.open("https://cal.com/aethellabs/discovery", "_blank")}
                        className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Start Your Journey
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
