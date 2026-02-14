import { Settings, Zap, Shield, Search } from "lucide-react";
import { motion } from "framer-motion";

export const ServiceApproach = () => {
    const steps = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Discovery & Analysis",
            description: "We deep dive into your current workflows to identify bottlenecks and high-impact opportunities."
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Custom Strategy",
            description: "We design a tailored roadmap that fits your specific business goals and technical environment."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Rapid Implementation",
            description: "We build and deploy iteratively, ensuring you get value quickly without long wait times."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Ongoing Optimization",
            description: "We don't just build and leave. We monitor, maintain, and improve your systems as you scale."
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 px-6 md:px-12 bg-navy-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-aethel-500/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Our Approach
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-300"
                    >
                        We don't just automate tasks; we reimagine workflows. Our proven methodology ensures successful outcomes for every project.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-aethel-500 flex items-center justify-center mb-6 text-white shadow-lg shadow-aethel-500/25">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
