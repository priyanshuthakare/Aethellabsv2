import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_PHASES = [
    {
        id: "process-1",
        title: "Discovery",
        description:
            "We start by understanding your reality, not your org chart. We dig into the workflows that eat up time, the handoffs that create bottlenecks, and the repetitive tasks that shouldn't require human attention.",
    },
    {
        id: "process-2",
        title: "Design",
        description:
            "With a clear picture of the problem, we architect the solution. We're ruthless about what gets automated and what stays human because not everything should be. The result is a system that amplifies your team, not one that gets in their way.",
    },
    {
        id: "process-3",
        title: "Build",
        description:
            "We wire everything together and stress-test it in real-world scenarios. No theoretical frameworks, just working systems that handle the messy edge cases your business actually encounters.",
    },
    {
        id: "process-4",
        title: "Launch",
        description:
            "Go-live isn't the finish line. We onboard your team with clear documentation and hands-on guidance so they're confident from day one. The best automation is the kind people actually use.",
    },
    {
        id: "process-5",
        title: "Evolve",
        description:
            "Your business changes. Your automation should too. We continuously refine and optimize so your systems grow with you, no manual overhead required.",
    },
];

const JourneySection = () => {
    const sectionRef = useRef(null);
    const cardsWrapperRef = useRef(null); // ✅ FIX
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            let offsets = [];
            let accumulated = 0;

            // measure cards
            cards.forEach((card, i) => {
                offsets[i] = accumulated;
                accumulated += card.offsetHeight + 24;
            });

            // ✅ FIX: lock layout
            gsap.set(cards, {
                position: "absolute",
                left: 0,
                right: 0,
            });

            cards.forEach((card, i) => {
                gsap.set(card, { top: offsets[i] });
            });

            // ✅ FIX: give wrapper height
            gsap.set(cardsWrapperRef.current, {
                height: accumulated,
            });

            // pin entire section
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${accumulated - offsets[1]}`,
                pin: true,
            });

            // stack cards UPWARD on scroll
            cards.forEach((card, index) => {
                if (index === 0) return;

                gsap.to(card, {
                    y: -offsets[index],
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: `top+=${offsets[index]} top`,
                        end: `top+=${offsets[index + 1] || accumulated} top`,
                        scrub: true,
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-stone-50">
            <div className="container grid min-h-screen grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 xl:px-12">

                {/* LEFT — FIXED VIA SECTION PIN */}
                <div className="self-start">
                    <span className="text-xs uppercase tracking-wide text-stone-500">
                        Our Process
                    </span>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight">
                        How we work
                    </h2>
                    <p className="mt-6 max-w-prose text-sm text-stone-600">
                        Each phase stacks on top of the previous one — forming a complete
                        system by the time you reach the end.
                    </p>
                </div>

                {/* RIGHT — STACKING CARDS */}
                <div ref={cardsWrapperRef} className="relative self-start">
                    {PROCESS_PHASES.map((phase, index) => (
                        <div
                            key={phase.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="rounded-2xl border bg-white p-8 shadow-xl"
                            style={{ zIndex: PROCESS_PHASES.length - index }}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-semibold">
                                    {phase.title}
                                </h3>
                                <span className="text-xl font-bold text-indigo-500">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-stone-600">
                                {phase.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export { JourneySection };
