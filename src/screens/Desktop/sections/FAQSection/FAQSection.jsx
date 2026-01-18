import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqData = [
    {
        question: "What makes Aethel Labs different from other agencies?",
        answer: "We help you build the right thing, fast. At Aethel Labs, we use no-code, AI, and a winning process to launch high-quality products in weeks, not months. Founded by experienced engineers, we're a team that cares about getting real results – without the bloated timelines or vague costs."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes! We provide comprehensive post-launch support including monitoring, maintenance, updates, and ongoing optimization to ensure your automation continues to deliver value."
    },
    {
        question: "How long does it take to launch?",
        answer: "Most custom SaaS and tools are live in 8-12 weeks. Speed depends on complexity, but we move fast and build the right thing."
    },
    {
        question: "How much does it cost?",
        answer: "Our pricing is transparent and tailored to your project scope. We offer flexible engagement models including fixed-price projects and ongoing partnerships. Contact us for a detailed quote."
    },
    {
        question: "What kinds of projects do you work on?",
        answer: "We specialize in AI integration, workflow automation, custom internal tools, document automation, and custom dashboards. From startups to enterprises, we build automation-first solutions that scale."
    },
    {
        question: "Do I need any technical knowledge to work with you?",
        answer: "Not at all! We handle all the technical complexity. You bring your business goals and challenges, and we translate them into powerful automation solutions."
    },
    {
        question: "What tools or platforms do you use?",
        answer: "We leverage best-in-class platforms including n8n for workflow automation, modern AI frameworks, and no-code/low-code tools to deliver solutions faster without compromising quality."
    },
    {
        question: "How do we get started?",
        answer: "Simply book a discovery call with us. We'll discuss your challenges, explore potential solutions, and create a clear roadmap to get you from where you are to where you want to be."
    },
    {
        question: "I've already built something. Can you improve or rebuild it?",
        answer: "Absolutely! We can audit your existing systems, identify bottlenecks, and either optimize what you have or rebuild it with modern, scalable architecture."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md hover:bg-navy-900 hover:border-navy-900 transition-all duration-300 group">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
            >
                <span className="text-lg font-semibold text-gray-900 group-hover:text-white pr-8 transition-colors">
                    {question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-aethel-500 group-hover:bg-white transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? (
                        <Minus className="w-5 h-5 text-white group-hover:text-aethel-500 transition-colors" />
                    ) : (
                        <Plus className="w-5 h-5 text-white group-hover:text-aethel-500 transition-colors" />
                    )}
                </span>
            </button>
            {/* Smooth height animation using grid-rows */}
            <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
                <div className="overflow-hidden">
                    <div className={`px-6 pb-6 text-gray-600 group-hover:text-gray-300 leading-relaxed transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-4 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                <div className="absolute -left-1/4 top-[20%] w-1/2 h-1/2 bg-aethel-500 rounded-full blur-3xl" />
                <div className="absolute -right-1/4 bottom-[20%] w-1/2 h-1/2 bg-aethel-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-[900px] mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Questions
                    </h2>
                    <div className="w-20 h-1 bg-aethel-500 mx-auto"></div>
                </div>

                {/* FAQ Grid - Two columns on larger screens */}
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, index) => {
                            const actualIndex = index + Math.ceil(faqData.length / 2);
                            return (
                                <FAQItem
                                    key={actualIndex}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === actualIndex}
                                    onClick={() => toggleFAQ(actualIndex)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
