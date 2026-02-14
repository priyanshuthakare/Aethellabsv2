import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ServiceFAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 px-6 md:px-12 bg-white border-t border-gray-100">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 ${openIndex === index
                                    ? "bg-white border-aethel-200 shadow-md"
                                    : "bg-gray-50 border-transparent hover:bg-white hover:border-gray-200"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className={`font-semibold text-lg ${openIndex === index ? "text-aethel-700" : "text-gray-700"}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? "bg-aethel-100 text-aethel-600" : "bg-gray-200 text-gray-500"
                                    }`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
