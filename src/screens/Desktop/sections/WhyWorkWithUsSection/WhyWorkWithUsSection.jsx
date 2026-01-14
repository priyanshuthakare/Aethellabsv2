import {
    ArrowRight,
    Crosshair,
    Layers,
    MessageSquareText,
    Rocket,
    ShieldCheck,
    Users
} from "lucide-react";

/**
 * @intent Why Work With Us section showcasing Aethel Labs' unique value propositions
 * Features: Consistent brand theming, premium icons, enhanced content, hover animations
 */
const benefits = [
    {
        icon: Rocket,
        title: "Lightning Fast",
        highlight: "2x faster delivery",
        description: "We don't believe in endless timelines. Our agile approach delivers working solutions in weeks, not months – so you see ROI faster."
    },
    {
        icon: Users,
        title: "Genuinely Friendly",
        highlight: "Human-first approach",
        description: "No corporate jargon or cold handoffs. You'll work directly with senior experts who genuinely care about your success."
    },
    {
        icon: Crosshair,
        title: "Laser Focused",
        highlight: "No scope creep",
        description: "We solve your actual problems, not imaginary ones. Every solution is precisely scoped to deliver maximum impact."
    },
    {
        icon: Layers,
        title: "Highly Flexible",
        highlight: "Adapts to you",
        description: "Your business changes – so should your technology. We build modular, scalable solutions that evolve with your needs."
    },
    {
        icon: MessageSquareText,
        title: "Crystal Clear",
        highlight: "Zero confusion",
        description: "Expect plain English, not tech-speak. We explain everything transparently so you're always in control."
    },
    {
        icon: ShieldCheck,
        title: "Fully Committed",
        highlight: "Long-term partner",
        description: "We're not a hit-and-run agency. We stay by your side to optimize, maintain, and scale your automation ecosystem."
    }
];

export const WhyWorkWithUsSection = () => {
    return (
        <section id="why-us" className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Subtle background accents matching site theme */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-aethel-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-aethel-50 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why work with <span className="text-aethel-500">Aethel Labs?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        It's not just what we build – it's how we work with you to make your
                        technology journey effortless and genuinely rewarding.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-gray-50 hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-aethel-200 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-aethel-500 group-hover:bg-aethel-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                                    <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>

                                {/* Highlight tag */}
                                <div className="inline-flex items-center px-3 py-1 bg-aethel-50 rounded-full mb-3">
                                    <span className="text-xs font-semibold text-aethel-600 uppercase tracking-wider">
                                        {benefit.highlight}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => {
                            const element = document.getElementById("contact");
                            if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-2 bg-aethel-500 hover:bg-aethel-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Start Your Journey
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUsSection;
