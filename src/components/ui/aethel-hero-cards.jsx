import React from "react";
import DisplayCards from "@/components/ui/display-cards";
import { CircleCheckBig } from "lucide-react";

const aethelHeroCards = [
    {
        icon: <CircleCheckBig className="size-6 text-blue-300" />,
        title: "Legacy Optimized",
        description: "Seamlessly connecting AI agents into your current tech stack.",
        date: "100+ Integrations",
        className: "[grid-area:stack] hover:-translate-y-20 grayscale hover:grayscale-0",
    },
    {
        icon: <CircleCheckBig className="size-6 text-blue-300" />,
        title: "Autonomous Flow",
        description: "Replacing manual drudgery with intelligent, self-healing n8n workflows.",
        date: "24/7 Efficiency",
        className: "[grid-area:stack] translate-x-24 translate-y-16 hover:-translate-y-7 grayscale hover:grayscale-0",
    },
    {
        icon: <CircleCheckBig className="size-6 text-blue-300" />,
        title: "Smart Scaling",
        description: "Deploying custom AI agents that think, act, and execute at scale.",
        date: "Deploying Today",
        className: "[grid-area:stack] translate-x-48 translate-y-32 hover:translate-y-16",
    },
];

export function AethelHeroCards() {
    return (
        <div className="flex min-h-[420px] w-full items-center justify-center py-24">
            <div className="w-full max-w-4xl">
                <DisplayCards cards={aethelHeroCards} />
            </div>
        </div>
    );
}
