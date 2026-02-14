import { Wrench, Database, Layout, Lock, Smartphone, Users } from "lucide-react";
import { ServiceHero } from "../../components/services/ServiceHero";
import { ServiceProblemSolution } from "../../components/services/ServiceProblemSolution";
import { ServiceUseCases } from "../../components/services/ServiceUseCases";
import { ServiceApproach } from "../../components/services/ServiceApproach";
import { ServiceTools } from "../../components/services/ServiceTools";
import { ServiceProcess } from "../../components/services/ServiceProcess";
import { ServiceFAQ } from "../../components/services/ServiceFAQ";

export const CustomInternalTools = () => {
    const problems = [
        "Running critical operations on fragile spreadsheets.",
        "Off-the-shelf software is too rigid or expensive.",
        "Scattered data across email threads and drives.",
        "Poor user experience for internal teams slowing down work."
    ];

    const solutions = [
        "Robust, database-backed applications.",
        "Tailor-made features that fit your exact workflow.",
        "Centralized Single Source of Truth.",
        "Intuitive UIs that your team will actually love using."
    ];

    const useCases = [
        {
            icon: <Database className="w-6 h-6" />,
            title: "Inventory Management",
            description: "Track stock levels, manage suppliers, and automate re-ordering points."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "CRM & Sales Trackers",
            description: "Custom pipelines, contact management, and interaction logging specific to your niche."
        },
        {
            icon: <Wrench className="w-6 h-6" />,
            title: "Field Operations Apps",
            description: "Mobile-friendly apps for field teams to log jobs, upload photos, and get signatures."
        },
        {
            icon: <Layout className="w-6 h-6" />, // Generic icon
            title: "Admin Panels",
            description: "Control operational settings, manage users, and view system health in one place."
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Approval Portals",
            description: "Secure interfaces for managers to review and approve expenses, leaves, or POs."
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Employee Onboarding",
            description: "Checklists, form submissions, and resource access all in a single employee app."
        }
    ];

    const faqs = [
        {
            question: "Why custom tools instead of SaaS?",
            answer: "SaaS forces you to adapt your process to their software. Custom tools adapt to your winning process, giving you a competitive edge and often costing less in the long run."
        },
        {
            question: "How long does it take to build?",
            answer: "Using modern low-code/no-code platforms, we can ship functional internal tools in weeks, not months."
        },
        {
            question: "Is it difficult to maintain?",
            answer: "We build on platforms designed for maintainability (like Retool, Glide, or custom React apps). We provide full documentation and training so your team can own it, or we can manage it for you."
        }
    ];

    const tools = [
        { name: "Retool", category: "Internal Tools" },
        { name: "Glide", category: "Mobile Apps" },
        { name: "Softr", category: "Web Apps" },
        { name: "Airtable", category: "Database" },
        { name: "Supabase", category: "Backend" },
        { name: "Bubble", category: "Visual Dev" },
    ];

    return (
        <div className="animate-fade-in">
            <ServiceHero
                title="Custom Internal Tools"
                subtitle="Give your team superpowers. We build secure, reliable internal applications that fit your business like a glove."
                badgeText="Empower Your Team"
            />

            <ServiceProblemSolution
                title="Escape Spreadsheet Hell"
                subtitle="Move your critical business logic into robust, scalable applications."
                problems={problems}
                solutions={solutions}
            />

            <ServiceUseCases
                title="Tools We Build"
                description="Whatever your operational gap, we can build a tool to fill it."
                useCases={useCases}
            />

            <ServiceApproach />

            <ServiceTools tools={tools} />

            <ServiceProcess />

            <ServiceFAQ faqs={faqs} />
        </div>
    );
};
