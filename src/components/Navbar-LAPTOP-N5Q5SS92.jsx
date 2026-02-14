import { ChevronRight, ChevronDown, ShoppingBag, ShoppingCart, Workflow, FileText, Bot, Wrench, LayoutDashboard } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

/**
 * @intent Main navigation bar for the Aethel Labs website
 * @param none
 */
export const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulated login state
    const dropdownRef = useRef(null);
    const profileRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems } = useCart();

    const handleScroll = (id) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsServicesOpen(false);
    };

    // Handle scroll after navigation
    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                // Clear state
                window.history.replaceState({}, document.title);
            }
        }
    }, [location]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsServicesOpen(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const serviceLinks = [
        { name: "Automation & Process Workflow", path: "/services/automation-process-workflow", icon: Workflow },
        { name: "Documentation Automation", path: "/services/documentation-automation", icon: FileText },
        { name: "AI Integration", path: "/services/ai-integration", icon: Bot },
        { name: "Custom Internal Tools", path: "/services/custom-internal-tools", icon: Wrench },
        { name: "Custom Dashboards and Portals", path: "/services/custom-dashboards-portals", icon: LayoutDashboard },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <nav
                className="max-w-[1200px] mx-auto bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100 px-4 py-2 md:px-6 md:py-3 flex items-center justify-between"
            >
                {/* Left: Logo + Brand Name */}
                <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => handleScroll("hero-section")}>
                    <img
                        src="/image-45.png"
                        alt="Aethel Labs Logo"
                        className="h-8 md:h-9 w-auto object-contain"
                    />
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center gap-1 px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                        >
                            Services
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isServicesOpen && (
                            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden transform origin-top-left transition-all">
                                {serviceLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="flex items-center gap-3 px-5 py-3 text-sm text-gray-600 hover:text-aethel-600 hover:bg-gray-50 transition-colors font-medium border-l-2 border-transparent hover:border-aethel-500 group"
                                        onClick={() => setIsServicesOpen(false)}
                                    >
                                        <link.icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        to="/products"
                        className="px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                        Products
                    </Link>

                    <button
                        onClick={() => handleScroll("journey")}
                        className="px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                        How We Work
                    </button>

                    <button
                        onClick={() => handleScroll("use-cases")}
                        className="px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                        Case Study
                    </button>
                </div>

                {/* Right: CTA or Profile */}
                <div className="flex items-center gap-3">
                    {isLoggedIn ? (
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 focus:outline-none transition-transform active:scale-95"
                            >
                                <img
                                    src="/profile-icon.png"
                                    alt="Profile"
                                    className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-transparent hover:border-aethel-200 transition-all shadow-sm"
                                />
                            </button>

                            {/* Profile Dropdown */}
                            {isProfileOpen && (
                                <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden transform origin-top-right transition-all animation-fade-in">
                                    <div className="px-4 py-3 border-b border-gray-50 mb-1">
                                        <p className="text-sm font-semibold text-gray-900">John Doe</p>
                                        <p className="text-xs text-gray-500 truncate">john.doe@example.com</p>
                                    </div>

                                    <Link
                                        to="/purchases"
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:text-aethel-600 hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        <ShoppingBag size={18} />
                                        My Purchase
                                    </Link>
                                    <Link
                                        to="/cart"
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:text-aethel-600 hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        <ShoppingCart size={18} />
                                        My Cart
                                        {cartItems.length > 0 && (
                                            <span className="ml-auto bg-aethel-100 text-aethel-700 text-xs font-bold px-2 py-0.5 rounded-full">{cartItems.length}</span>
                                        )}
                                    </Link>

                                    <div className="border-t border-gray-50 mt-1 pt-1">
                                        <button
                                            className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                            onClick={() => {
                                                setIsLoggedIn(false);
                                                setIsProfileOpen(false);
                                            }}
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all hidden md:block"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="inline-flex items-center gap-1.5 md:gap-2 bg-aethel-500 hover:bg-aethel-600 text-white font-semibold text-xs md:text-sm px-3.5 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                Sign Up
                                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
