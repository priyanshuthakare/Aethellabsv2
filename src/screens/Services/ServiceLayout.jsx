import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../Desktop/sections/Footer/Footer";

export const ServiceLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
            {/* Background glow similar to Desktop */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -left-1/4 top-[20%] w-1/2 h-1/3 bg-aethel-500/5 rounded-full blur-3xl" />
                <div className="absolute -right-1/4 top-[50%] w-1/2 h-1/3 bg-aethel-500/5 rounded-full blur-3xl" />
            </div>

            <Navbar />

            <main className="flex-grow pt-24 relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};
