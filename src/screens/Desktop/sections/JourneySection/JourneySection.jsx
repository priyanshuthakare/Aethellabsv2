import { ChevronRight, Code, HeadphonesIcon, Lightbulb, Pencil, Rocket } from "lucide-react";
import { useState } from "react";

/**
 * @intent Enhanced Journey/How We Work section inspired by Goodspeed.studio
 * Features: Ghost numbers, timeline badges, deliverables lists, hover animations
 */
const journeySteps = [
    {
        icon: Lightbulb,
        number: "01",
        timeline: "1-2 Weeks",
        title: "Discovery",
        subtitle: "Understanding your workflows",
        description: "We begin by understanding how your business actually operates, not how it’s assumed to work. We study your existing processes, systems, and goals to identify where automation can create real leverage without disrupting day-to-day operations.",
        deliverables: [
            "Workflow and process assessment",
            "Identification of repetitive and high-impact tasks",
            "Clear problem definition and scope",
            "Alignment on automation opportunities"
        ]
    },
    {
        icon: Pencil,
        number: "02",
        timeline: "1-2 Weeks",
        title: "Design",
        subtitle: "Architecting the right solution",
        description: "Once the problem is clear, we design automation around outcomes, not tools. This phase focuses on creating a solution blueprint that fits seamlessly into your current setup while remaining scalable as your business grows.",
        deliverables: [
            "Solution architecture",
            "Workflow diagrams",
            "Integration planning",
            "Clear milestones and delivery roadmap"
        ]
    },
    {
        icon: Code,
        number: "03",
        timeline: "2-4 Weeks",
        title: "Develop",
        subtitle: "Building with precision",
        description: "We build and configure the automation with a focus on reliability, performance, and maintainability. Every component is tested thoroughly to ensure it works as expected across real-world scenarios.",
        deliverables: [
            "Custom automation development",
            "System integrations",
            "Quality assurance and testing",
            "Performance tuning"
        ]
    },
    {
        icon: Rocket,
        number: "04",
        timeline: "1 Week",
        title: "Deploy",
        subtitle: "Launch & enable adoption",
        description: "Deployment is not just about going live, it’s about making sure your team can use the system confidently. We ensure a smooth transition with clear documentation and guidance so automation becomes part of everyday operations.",
        deliverables: [
            "Production deployment",
            "Team walkthroughs and onboarding",
            "Documentation & usage guides",
            "Handover support"
        ]
    },
    {
        icon: HeadphonesIcon,
        number: "05",
        timeline: "Ongoing",
        title: "Support",
        subtitle: "Continuous improvement",
        description: "Automation is not static. As your workflows evolve, systems need to adapt. We stay involved to monitor performance, optimize workflows, and ensure automation continues to deliver value over time.",
        deliverables: [
            "Ongoing monitoring",
            "Continuous optimization",
            "Issue resolution and improvements",
            "Long-term automation support"
        ]
    }
];

export const JourneySection = () => {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <section id="journey" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-aethel-100 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-aethel-50 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-aethel-100 rounded-full mb-6">
                        <span className="text-lg">🚀</span>
                        <span className="text-sm font-semibold text-aethel-600">Our Process</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        How We <span className="text-aethel-500">Work</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From initial discovery to ongoing support, we follow a structured, outcome-driven approach to ensure automation delivers clarity, reliability, and long-term value.
                    </p>
                </div>

                {/* Process Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {journeySteps.map((step, index) => {
                        const IconComponent = step.icon;
                        const isActive = activeCard === index;

                        return (
                            <div
                                key={index}
                                className={`relative bg-white rounded-3xl p-6 border border-gray-100 transition-all duration-300 cursor-pointer group
                                    ${isActive ? 'shadow-2xl scale-[1.02] border-aethel-200' : 'shadow-sm hover:shadow-xl hover:scale-[1.01]'}
                                `}
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Ghost Number */}
                                <div className="absolute top-4 right-4 text-6xl font-black text-gray-100 select-none transition-colors duration-300 group-hover:text-aethel-100">
                                    {step.number}
                                </div>

                                {/* Timeline Badge */}
                                <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full mb-4 transition-colors duration-300 group-hover:bg-aethel-100">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider group-hover:text-aethel-600">
                                        {step.timeline}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 bg-aethel-500 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-aethel-500 font-medium mb-3">
                                    {step.subtitle}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    {step.description}
                                </p>

                                {/* Deliverables List */}
                                <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 lg:max-h-48 lg:opacity-100'}`}>
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            You get:
                                        </p>
                                        <ul className="space-y-1.5">
                                            {step.deliverables.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-aethel-500 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-6">
                        Ready to start your automation journey?
                    </p>
                    <button
                        onClick={() => window.open("https://cal.com/aethellabs/discovery", "_blank")}
                        className="inline-flex items-center gap-2 bg-aethel-500 hover:bg-aethel-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Book a Discovery Call
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
