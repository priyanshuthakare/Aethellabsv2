import { ChevronRight } from "lucide-react";

/**
 * @intent Main navigation bar for the Aethel Labs website
 * @param none
 */
export const Navbar = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <nav
                className="max-w-[1200px] mx-auto bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100 px-4 py-2 md:px-6 md:py-3 flex items-center justify-between"
            >
                {/* Left: Logo + Brand Name */}
                <div className="flex items-center gap-2 md:gap-3">
                    <img
                        src="/image-45.png"
                        alt="Aethel Labs Logo"
                        className="h-8 md:h-9 w-auto object-contain"
                    />
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex items-center gap-1">
                    <button
                        onClick={() => handleScroll("services")}
                        className="px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                        Services
                    </button>

                    <button
                        onClick={() => handleScroll("journey")}
                        className="px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                        How We Work
                    </button>

                    <button
                        onClick={() => handleScroll("faq")}
                        className="px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                        FAQ
                    </button>
                </div>

                {/* Right: CTA */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handleScroll("contact")}
                        className="inline-flex items-center gap-1.5 md:gap-2 bg-aethel-500 hover:bg-aethel-600 text-white font-semibold text-xs md:text-sm px-3.5 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        Get Started
                        <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
