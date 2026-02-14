import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * A stacking cards component that animates cards on scroll.
 * Uses sticky positioning and Framer Motion for smooth transitions.
 */
export const CardsStack = ({ items, offset = 40, scaleFactor = 0.05 }) => {
    return (
        <div className="w-full relative py-20">
            {items.map((item, index) => {
                return (
                    <Card
                        key={item.id}
                        index={index}
                        content={item.content}
                        total={items.length}
                        offset={offset}
                        scaleFactor={scaleFactor}
                    />
                );
            })}
        </div>
    );
};

const Card = ({ content, index, total, offset, scaleFactor }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"],
    });

    // Scale down as we scroll past it (simulating it going "back" into depth)
    // Or scale UP as it enters if that's the desired effect.
    // The prompt says: "The cards should progressively stack with each scroll, creating a layered, perspective effect"
    // Usually this means sticky cards bunch up at the top.

    // We want the card to be sticky at `top + index * offset`
    const topOffset = 100 + index * offset; // 100px base top margin

    // 3D effect: scale slightly based on scroll position relative to viewport
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (index * 0.02)]); // slight scale diff

    return (
        <div
            ref={cardRef}
            className="sticky flex items-start justify-center"
            style={{
                top: topOffset, // Stacking position
                height: '80vh', // Each card consumes viewport height to allow scrolling
                marginBottom: index === total - 1 ? '10vh' : 0, // Space after last card
            }}
        >
            <motion.div
                className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
                style={{
                    scale, // Apply subtle scale for depth
                    transformOrigin: "top center",
                    rotateX: useTransform(scrollYProgress, [0, 1], [0, 5]), // Slight 3D tilt as it goes up
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {content}
            </motion.div>
        </div>
    )
};
