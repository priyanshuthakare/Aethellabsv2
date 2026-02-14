import { motion } from "framer-motion";

export const ServiceTools = ({ tools = [] }) => {
    // Default tools if none provided, but typically we'll pass specific ones
    const displayTools = tools.length > 0 ? tools : [
        { name: "n8n", category: "Automation" },
        { name: "Zapier", category: "Integration" },
        { name: "Make", category: "Integration" },
        { name: "OpenAI", category: "AI Models" },
        { name: "Anthropic", category: "AI Models" },
        { name: "Supabase", category: "Database" },
        { name: "React", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
    ];

    return (
        <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-navy-900 mb-6"
                    >
                        Tools We Master
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We use best-in-class tools to build robust, scalable, and secure solutions for your business.
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {displayTools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center min-w-[140px] hover:border-aethel-200 hover:shadow-md transition-shadow cursor-default"
                        >
                            <span className="font-bold text-navy-900 text-lg">{tool.name}</span>
                            <span className="text-xs text-gray-500 mt-1">{tool.category}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
