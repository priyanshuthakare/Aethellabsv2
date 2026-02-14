"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const CardsStack = ({ items, offset = 100 }) => {
    return (
        <div className="w-full relative pb-40">
            {items.map((item, index) => {
                return (
                    <Card
                        key={item.id}
                        index={index}
                        content={item.content}
                        offset={offset}
                    />
                );
            })}
        </div>
    );
};

const Card = ({ content, index, offset }) => {
    // "Deck of Cards" Stacking
    // Start sticking at 120px from top + index * 40px (tight stacking)
    // This creates the "fan" effect at the top where you see the headers of previous cards.

    const topOffset = 120 + index * 15; // Tighter stack offset (15px) to mimic the "fan" look

    return (
        <div
            className="sticky w-full flex flex-col items-center"
            style={{
                top: topOffset,
                zIndex: index + 1,
            }}
        >
            <div
                className="relative w-full rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 bg-white transition-all duration-300"
                style={{
                    minHeight: '280px', // More compact like the image
                    transformOrigin: "top center",
                }}
            >
                {content}
            </div>

            {/* Spacer to push next card down naturally in flow before it sticks */}
            <div style={{ height: '40px' }} />
        </div>
    )
};
