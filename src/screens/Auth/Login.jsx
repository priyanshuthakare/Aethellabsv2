import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Check } from "lucide-react";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const initial = email ? email.charAt(0).toUpperCase() : "";

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-50 font-sans relative">
            <Link to="/" className="absolute top-8 left-8 text-gray-500 hover:text-aethel-600 transition-colors flex items-center gap-2 font-medium">
                ← Back to Home
            </Link>
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                {/* Left Side - Visual */}
                <div className="w-full md:w-1/2 relative flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="/auth-left-bg.png" alt="Background" className="w-full h-full object-cover object-left-top" />
                    </div>

                    <div className="relative z-10 p-8 md:p-12">
                        <img src="/auth-logo-white.png" alt="Logo" className="w-12 h-auto" />
                    </div>

                    <div className="relative z-10 mt-auto p-8 md:p-12 text-left">
                        <p className="text-white text-lg font-medium mb-2 opacity-90">
                            You can easily
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                            Get access your personal hub for clarity and productivity
                        </h2>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
                            <p className="text-gray-500">
                                Please enter your details to access your account.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Your email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-aethel-500 focus:ring-2 focus:ring-aethel-200 outline-none transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••••"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-aethel-500 focus:ring-2 focus:ring-aethel-200 outline-none transition-all bg-gray-50 focus:bg-white pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center transition-colors group-hover:border-aethel-500 text-white peer-checked:bg-aethel-500 peer-checked:border-aethel-500">
                                        <input type="checkbox" className="hidden peer" />
                                        <Check size={14} className="opacity-0 peer-checked:opacity-100" />
                                    </div>
                                    <span className="text-sm text-gray-600">Remember me</span>
                                </label>
                                <a href="#" className="text-sm font-medium text-aethel-600 hover:text-aethel-700 hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    localStorage.setItem("isLoggedIn", "true");
                                    window.dispatchEvent(new Event("auth-change"));
                                    navigate("/");
                                }}
                                className="w-full bg-aethel-600 hover:bg-aethel-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-aethel-500/30 transform hover:-translate-y-0.5"
                            >
                                Sign In
                            </button>

                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">or continue with</span>
                                </div>
                            </div>

                            <button type="button" className="w-full flex items-center justify-center gap-3 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                <span className="font-medium text-gray-700">Continue with Google</span>
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/signup" className="font-semibold text-aethel-600 hover:text-aethel-700 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
