import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ServiceProblemSolution = ({ problems, solutions, title, subtitle }) => {
    return (
        <section className="py-24 px-6 md:px-12 bg-gray-50/50 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl mix-blend-multiply filter opacity-30 animate-blob" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl mix-blend-multiply filter opacity-30 animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Central Divider (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2" />

                    {/* Problem Side - Manual & Slow */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="p-3 bg-red-100 rounded-2xl">
                                <XCircle className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Manual & Slow</h3>
                        </motion.div>

                        <div className="space-y-6">
                            {problems.map((item, i) => (
                                <motion.div
                                    key={`problem-${i}`}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-400 group-hover:w-2 transition-all" />
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500 font-bold text-sm border border-red-100">
                                            {i + 1}
                                        </div>
                                        <p className="text-gray-600 leading-relaxed font-medium">{item}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Solution Side - Automated & Scalable */}
                    <div className="space-y-8 lg:mt-24">
                        {/* lg:mt-24 creates a staggered visual effect/parallax feel between columns */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="p-3 bg-emerald-100 rounded-2xl">
                                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Automated & Scalable</h3>
                        </motion.div>

                        <div className="space-y-6">
                            {solutions.map((item, i) => (
                                <motion.div
                                    key={`solution-${i}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                                    whileHover={{ scale: 1.02, x: -5 }}
                                    className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-md hover:shadow-xl transition-all group relative overflow-hidden bg-gradient-to-r from-white to-emerald-50/30"
                                >
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 group-hover:w-2 transition-all" />
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 font-bold text-sm border border-emerald-200">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <p className="text-gray-800 leading-relaxed font-semibold">{item}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
