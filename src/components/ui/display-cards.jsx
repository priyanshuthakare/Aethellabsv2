import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

function DisplayCard({
    className,
    icon = <Sparkles className="size-4 text-blue-300" />,
    title = "Featured",
    description = "Discover amazing content",
    date = "Just now",
    iconClassName = "text-blue-500",
    titleClassName = "text-blue-500",
}) {
    return (
        <div
            className={cn(
                "relative flex h-64 w-[36rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-white/20 bg-muted/80 backdrop-blur-sm px-8 py-6 transition-all duration-700 hover:border-white/30 hover:bg-muted/90 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
                className
            )}
        >
            <div>
                <span className="relative inline-block rounded-full bg-blue-800 p-1.5">
                    {icon}
                </span>
                <p className={cn("text-2xl font-bold", titleClassName)}>{title}</p>
            </div>
            <p className="text-lg leading-relaxed">{description}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
        </div>
    );
}

export default function DisplayCards({ cards }) {
    const defaultCards = [
        { className: "[grid-area:stack] hover:-translate-y-10 grayscale hover:grayscale-0" },
        { className: "[grid-area:stack] translate-x-24 translate-y-16 hover:-translate-y-1 grayscale hover:grayscale-0" },
        { className: "[grid-area:stack] translate-x-48 translate-y-32 hover:translate-y-16" },
    ];

    return (
        <div className="grid [grid-template-areas:'stack'] place-items-center animate-in fade-in duration-700">
            {(cards || defaultCards).map((card, i) => (
                <DisplayCard key={i} {...card} />
            ))}
        </div>
    );
}
