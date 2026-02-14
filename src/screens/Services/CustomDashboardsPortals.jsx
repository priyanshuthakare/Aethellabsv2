import { BarChart2, PieChart, TrendingUp, Globe, Users, Lock } from "lucide-react";
import { ServiceHero } from "../../components/services/ServiceHero";
import { ServiceProblemSolution } from "../../components/services/ServiceProblemSolution";
import { ServiceUseCases } from "../../components/services/ServiceUseCases";
import { ServiceApproach } from "../../components/services/ServiceApproach";
import { ServiceTools } from "../../components/services/ServiceTools";
import { ServiceProcess } from "../../components/services/ServiceProcess";
import { ServiceFAQ } from "../../components/services/ServiceFAQ";

export const CustomDashboardsPortals = () => {
    const problems = [
        "Data is siloed in 10 different tools.",
        "Manually updating Excel reports every week.",
        "Clients asking for updates via email constantly.",
        "No visibility into real-time business performance."
    ];

    const solutions = [
        "One central dashboard for all your metrics.",
        "Real-time data feeds that update automatically.",
        "Self-serve client portals for trust and transparency.",
        "Instant insights to make data-driven decisions."
    ];

    const useCases = [
        {
            icon: <BarChart2 className="w-6 h-6" />,
            title: "Executive Dashboards",
            description: "High-level view of KPIs, revenue, and health metrics for leadership."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Client Portals",
            description: "Secure spaces for clients to view project status, invoices, and deliverables."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Sales Performance",
            description: "Track pipelines, conversion rates, and agent performance in real-time."
        },
        {
            icon: <PieChart className="w-6 h-6" />,
            title: "Marketing Analytics",
            description: "Aggregate data from Ads, Social, and CRM to see true ROI."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Investor Reporting",
            description: "Automated, professional dashboards to keep stakeholders informed."
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Partner Portals",
            description: "Manage affiliates and partners with shared resources and tracking."
        }
    ];

    const faqs = [
        {
            question: "Can you connect to my specific data source?",
            answer: "Most likely. We connect to SQL databases, REST APIs, Google Sheets, Airtable, and thousands of SaaS tools."
        },
        {
            question: "Is it mobile friendly?",
            answer: "Yes, modern dashboards are responsive by default, allowing you to check key metrics from your phone."
        },
        {
            question: "Can I control who sees what?",
            answer: "Yes, we implement granular role-based access control (RBAC). A manager sees different data than an employee, and clients only see their own data."
        }
    ];

    const tools = [
        { name: "Looker Studio", category: "BI Tool" },
        { name: "PowerBI", category: "Enterprise BI" },
        { name: "Retool", category: "Dashboards" },
        { name: "Softr", category: "Client Portals" },
        { name: "Tremor", category: "React Charts" },
        { name: "Metabase", category: "Analytics" },
    ];

    return (
        <div className="animate-fade-in">
            <ServiceHero
                title="Dashboards & Portals"
                subtitle="Stop flying blind. Visualize your data and give your stakeholders the transparency they need with custom dashboards."
                badgeText="Visualize Success"
            />

            <ServiceProblemSolution
                title="Data Without Clarity is Noise"
                subtitle="Turn your raw data into actionable insights."
                problems={problems}
                solutions={solutions}
            />

            <ServiceUseCases
                title="Visibility Solutions"
                description="See clearly, share securely, and decide confidently."
                useCases={useCases}
            />

            <ServiceApproach />

            <ServiceTools tools={tools} />

            <ServiceProcess />

            <ServiceFAQ faqs={faqs} />
        </div>
    );
};
