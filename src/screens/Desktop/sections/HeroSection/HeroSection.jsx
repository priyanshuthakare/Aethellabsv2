import {
    CheckCircle2,
    ChevronRight,
    Clock,
    Layers,
    Users
} from "lucide-react";
import { Navbar } from "../../../../components/Navbar";
import { AethelHeroCards } from "../../../../components/ui/aethel-hero-cards";

/**
 * @intent Optimized background decoration with reduced GPU load
 * @description Static orbs with reduced blur for better performance
 */
const BackgroundOrbs = () => (
    <>
        {/* Optimized floating orbs - reduced blur, no animation */}
        <div
            className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-aethel-400/25 rounded-full blur-[60px] opacity-80"
            style={{ willChange: 'transform' }}
        />
        <div
            className="absolute -right-32 top-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[50px] opacity-80"
            style={{ willChange: 'transform' }}
        />
        <div
            className="absolute left-1/3 -bottom-20 w-[300px] h-[300px] bg-aethel-500/15 rounded-full blur-[40px] opacity-80"
            style={{ willChange: 'transform' }}
        />
    </>
);

/**
 * @intent Avatar stack with social proof
 * @description Lazy-loaded images with optimized rendering
 */
const AvatarStack = () => {
    const avatars = [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&q=60",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=60",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&q=60",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&q=60",
    ];

    return (
        <div className="flex -space-x-3">
            {avatars.map((avatar, i) => (
                <img
                    key={i}
                    src={avatar}
                    alt={`Team member ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full border-[3px] border-white object-cover shadow-lg hover:scale-110 hover:z-10 transition-transform duration-200"
                />
            ))}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aethel-500 to-aethel-600 border-[3px] border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
                +17
            </div>
        </div>
    );
};



// Trusted By Logos (optional enhancement)
const TrustedLogos = () => (
    <div className="flex items-center gap-8 opacity-60">
        {["Forbes", "TechCrunch", "Wired", "Fast Company"].map((name, i) => (
            <span key={i} className="text-white/60 text-sm font-semibold tracking-wider">
                {name}
            </span>
        ))}
    </div>
);

export const HeroSection = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #472FFF 0%, #1a1066 50%, #040959 100%)' }}>
            {/* Navbar */}
            <Navbar />

            {/* Animated Background */}
            <BackgroundOrbs />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
                    {/* Left: Text Content */}
                    <div className="flex flex-col gap-5">
                        {/* Badge */}
                        {/* <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors cursor-pointer group">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                New Article
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                            <span className="text-white/70 text-sm font-medium">Process Automation ROI</span>
                        </div> */}

                        {/* Main Heading with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                            <span className="text-white">AI Systems</span><br />
                            <span className="bg-gradient-to-r from-white via-aethel-200 to-white bg-clip-text text-transparent">
                                Designed
                            </span><br />
                            <span className="text-white">For Real Workflows</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg">
                            We design and implement AI systems that remove repetitive work, reduce operational friction, and scale with your existing workflows, without disrupting how your team operates.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.open("https://cal.com/aethellabs/discovery", "_blank")}
                                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                            >
                                Book a Discovery Call
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={() => handleScroll("services")}
                                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
                            >
                                Explore Services
                                <Layers className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>

                        {/* Social Proof
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-white font-semibold">4.9/5</span>
                            </div>
                            <div className="h-6 w-px bg-white/30" />
                            <span className="text-white/70 text-sm">Based on 420+ reviews</span>
                        </div> */}
                    </div>

                    {/* Right: Display Cards */}
                    <div className="hidden lg:flex items-center justify-center pr-12">
                        <AethelHeroCards />
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="relative z-10 w-full bg-white/5 backdrop-blur-md border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center md:text-left">
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">5+</span>
                                <span className="text-white/60 text-sm">Businesses Served</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">30+</span>
                                <span className="text-white/60 text-sm">Workflows Deployed</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">99.9%</span>
                                <span className="text-white/60 text-sm">Uptime Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
