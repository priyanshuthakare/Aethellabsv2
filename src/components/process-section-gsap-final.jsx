"use client";

import React from "react";
import { CardsStack } from "@/components/ui/cards-stack-gsap-final";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = [
    {
        id: "01",
        title: "Research and Analysis",
        description: "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
    },
    {
        id: "02",
        title: "Wireframing and Prototyping",
        description: "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual blueprints allow us to test and refine the user experience before diving into design.",
    },
    {
        id: "03",
        title: "Design Creation",
        description: "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
    },
    {
        id: "04",
        title: "Development and Testing",
        description: "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
    },
    {
        id: "05",
        title: "Launch and Support",
        description: "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
    },
];

export const ProcessSection = () => {
    return (
        <section className="bg-[#fafafa] text-gray-900 w-full relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-20 relative">

                {/* Left Side: Sticky Header */}
                <div className="lg:w-5/12 flex-shrink-0 sticky top-32 self-start z-40 h-fit">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
                        OUR PROCESS
                    </h4>

                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.15] mb-8 text-gray-900">
                        Planning your <span className="text-aethel-500">project development</span> journey
                    </h2>

                    <p className="text-base text-gray-600 max-w-sm leading-relaxed">
                        Our journey begins with a deep dive into your vision. In the Discovery phase, we engage in meaningful conversations to grasp your brand identity, goals, and the essence you want to convey. This phase sets the stage for all that follows.
                    </p>
                </div>

                {/* Right Side: Cards Stack */}
                <div className="lg:w-7/12 relative">
                    <CardsStack items={PROCESS_STEPS.map((step, index) => ({
                        id: step.id,
                        content: (
                            <CardsStackItem index={index} step={step} />
                        )
                    }))} />
                </div>

            </div>
        </section>
    );
};

const CardsStackItem = ({ index, step }) => (
    <div className="flex flex-col h-full w-full p-8 md:p-10 gap-4 bg-white rounded-3xl border border-gray-100/50 shadow-sm relative">
        <div className="flex justify-between items-start">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-[80%] leading-tight">
                {step.title}
            </h3>
            <span className="text-2xl md:text-3xl font-bold text-aethel-500/80">
                {step.id}
            </span>
        </div>

        <div className="mt-4">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {step.description}
            </p>
        </div>

        {/* Subtle blur overlay for depth text if needed, as per some 'stack' designs? 
            No, let's keep it clean as per the focused card images.
        */}
    </div>
);
