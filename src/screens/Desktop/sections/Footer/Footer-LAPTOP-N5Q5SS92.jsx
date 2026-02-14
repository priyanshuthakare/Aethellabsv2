import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const footerLinks = {
    services: [
        { label: "Automation & Process Workflow", href: "/services/automation-process-workflow" },
        { label: "Documentation Automation", href: "/services/documentation-automation" },
        { label: "AI Integration", href: "/services/ai-integration" },
        { label: "Custom Internal Tools", href: "/services/custom-internal-tools" },
        { label: "Custom Dashboards and Portals", href: "/services/custom-dashboards-portals" },
    ],
    methods: [
        { label: "Pathfinder", href: "#" },
        { label: "Transform", href: "#" },
        { label: "AgileSync", href: "#" },
        { label: "FastTrack", href: "#" },
        { label: "InstantBuild", href: "#" },
    ],
    solutions: [
        { label: "By Industry", href: "#" },
        { label: "By Business Function", href: "#" },
        { label: "By Use Case", href: "#" },
        { label: "By Outcome", href: "#" },
        { label: "By Software", href: "#" },
        { label: "By Role", href: "#" },
    ],
    company: [
        { label: "Products", href: "/products" },
        { label: "Our Work", href: "journey" }, // Changed to ID without # for consistency with Navbar logic if needed, but keeping # for now and handling it
        { label: "About Aethel Labs", href: "hero-section" }, // redirect to top
        { label: "Contact", href: "contact" },
    ]
};

const socialLinks = [
    { icon: Twitter, href: "https://X.com/Aethel_Labs" },
    { icon: Linkedin, href: "https://linkedin.com/company/aethellabs" },
    { icon: Instagram, href: "https://instagram.com/aethellabs" },
];

export const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (id) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <footer className="bg-navy-900 pt-16 pb-8 px-4 relative overflow-hidden">
            {/* Blue glow border at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-aethel-500/50 to-transparent" />

            <div className="w-full max-w-[1200px] mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="/image-45.png"
                                alt="Aethel Labs"
                                className="h-8 w-auto object-contain brightness-0 invert"
                            />

                        </div>
                        <p className="text-slate-400 text-sm mb-4">
                            AI & Automation, Made Easy.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-navy-800 hover:bg-aethel-500 rounded-lg flex items-center justify-center transition-colors"
                                    >
                                        <IconComponent className="w-5 h-5 text-slate-400 hover:text-white" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-slate-400 hover:text-aethel-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Methods Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Methods</h4>
                        <ul className="space-y-2">
                            {footerLinks.methods.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-aethel-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Solutions</h4>
                        <ul className="space-y-2">
                            {footerLinks.solutions.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-aethel-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    {link.href.startsWith('/') ? (
                                        <Link
                                            to={link.href}
                                            className="text-slate-400 hover:text-aethel-400 text-sm transition-colors text-left block"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => handleScroll(link.href)}
                                            className="text-slate-400 hover:text-aethel-400 text-sm transition-colors text-left"
                                        >
                                            {link.label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Aethel Labs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                            Terms of Use
                        </a>
                        <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
