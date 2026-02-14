import React from "react";
import { CardsStack } from "@/components/ui/cards-stack";
import { cn } from "@/lib/utils";
import { Lightbulb, Pencil, Code, Rocket, HeadphonesIcon } from "lucide-react";

/**
 * Process phases data based on user request.
 */
const PROCESS_PHASES = [
    {
        id: 1,
        title: "Discovery",
        subtitle: "WE FIGURE OUT HOW WORK ACTUALLY HAPPENS",
        description:
            "We start by understanding your reality, not your org chart. We dig into the workflows that eat up time, the handoffs that create bottlenecks, and the repetitive tasks that shouldn't require human attention.",
        icon: Lightbulb,
        color: "bg-aethel-500", // Using brand color token
    },
    {
        id: 2,
        title: "Design",
        subtitle: "WE MAP OUT WHAT SHOULD RUN ON AUTOPILOT",
        description:
            "With a clear picture of the problem, we architect the solution. We're ruthless about what gets automated and what stays human because not everything should be. The result is a system that amplifies your team, not one that gets in their way.",
        icon: Pencil,
        color: "bg-aethel-600",
    },
    {
        id: 3,
        title: "Build",
        subtitle: "WE SHIP THE AUTOMATION",
        description:
            "We wire everything together and stress-test it in real-world scenarios. No theoretical frameworks, just working systems that handle the messy edge cases your business actually encounters.",
        icon: Code,
        color: "bg-aethel-700",
    },
    {
        id: 4,
        title: "Launch",
        subtitle: "WE GET YOUR TEAM UP TO SPEED, FAST",
        description:
            "Go-live isn't the finish line. We onboard your team with clear documentation and hands-on guidance so they're confident from day one. The best automation is the kind people actually use.",
        icon: Rocket,
        color: "bg-aethel-800",
    },
    {
        id: 5,
        title: "Evolve",
        subtitle: "WE KEEP IT RUNNING AS YOU SCALE",
        description:
            "Your business changes. Your automation should too. We continuously refine and optimize so your systems grow with you, no manual overhead required.",
        icon: HeadphonesIcon,
        color: "bg-aethel-900",
    },
];

export const ProcessSection = () => {
    return (
        <section className="bg-white text-gray-900 relative w-full">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row gap-10">

                {/* Left Side: Sticky Header */}
                <div className="lg:w-1/3 flex-shrink-0">
                    <div className="sticky top-32">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Planning your <br />
                            <span className="text-aethel-500">project development</span> <br />
                            journey
                        </h2>
                        <p className="text-lg text-gray-600 max-w-sm">
                            A straightforward process that makes automation work for you, not the other way around.
                        </p>
                    </div>
                </div>

                {/* Right Side: Stacking Cards */}
                <div className="lg:w-2/3">
                    <CardsStack items={PROCESS_PHASES.map((phase, index) => ({
                        id: phase.id,
                        content: (
                            <div className="flex flex-col md:flex-row h-full w-full p-8 md:p-12 gap-8 items-start">
                                {/* Number & Icon */}
                                <div className="flex-shrink-0 flex flex-col items-center gap-4">
                                    <div className="text-8xl md:text-9xl font-black text-gray-100 leading-none select-none">
                                        {phase.id}
                                    </div>
                                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg", phase.color)}>
                                        <phase.icon className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 space-y-4 pt-4">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        {phase.title}
                                    </h3>
                                    <h4 className="text-sm font-bold text-aethel-600 uppercase tracking-widest">
                                        {phase.subtitle}
                                    </h4>
                                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                        {phase.description}
                                    </p>
                                </div>
                            </div>
                        )
                    }))} />
                </div>

            </div>
        </section>
    );
};
