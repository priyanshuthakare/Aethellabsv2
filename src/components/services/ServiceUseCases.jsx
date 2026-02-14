import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const ServiceUseCases = ({ title, description, useCases }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-16 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-navy-900 mb-6"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-aethel-200 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-aethel-50 flex items-center justify-center mb-4 group-hover:bg-aethel-100 transition-colors text-aethel-600">
                                {useCase.icon}
                            </div>
                            <h3 className="text-lg font-bold text-navy-900 mb-2">{useCase.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{useCase.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
