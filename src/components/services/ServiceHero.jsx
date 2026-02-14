import { ChevronRight } from "lucide-react";

export const ServiceHero = ({ title, subtitle, badgeText, onBookCall }) => {
    return (
        <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
            {/* Background elements inherited from layout, but we can add specific ones here if needed */}
            <div className="max-w-4xl mx-auto text-center relative z-10">
                {badgeText && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-aethel-50 text-aethel-700 rounded-full text-sm font-semibold mb-8 border border-aethel-100">
                        {badgeText}
                    </div>
                )}

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-8 leading-tight tracking-tight">
                    {title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => window.open("https://cal.com/aethellabs/discovery", "_blank")}
                        className="group inline-flex items-center justify-center gap-2 bg-aethel-600 hover:bg-aethel-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                        Book a Discovery Call
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
