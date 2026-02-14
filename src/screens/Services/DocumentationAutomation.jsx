import { FileText, Search, Share2, Shield, Layout, Edit } from "lucide-react";
import { ServiceHero } from "../../components/services/ServiceHero";
import { ServiceProblemSolution } from "../../components/services/ServiceProblemSolution";
import { ServiceUseCases } from "../../components/services/ServiceUseCases";
import { ServiceApproach } from "../../components/services/ServiceApproach";
import { ServiceTools } from "../../components/services/ServiceTools";
import { ServiceProcess } from "../../components/services/ServiceProcess";
import { ServiceFAQ } from "../../components/services/ServiceFAQ";

export const DocumentationAutomation = () => {
    const problems = [
        "Create contracts and reports manually from templates.",
        "Inconsistencies in branding and formatting.",
        "Hours wasted searching for the right document version.",
        "Slow turnaround times affecting client satisfaction."
    ];

    const solutions = [
        "Generate thousands of documents in seconds.",
        "Perfect consistency and branding every time.",
        "Centralized, searchable document repository.",
        "Instant delivery triggering faster deal cycles."
    ];

    const useCases = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Contract Generation",
            description: "Auto-fill legal contracts with CRM data and send for e-signature instantly."
        },
        {
            icon: <Layout className="w-6 h-6" />,
            title: "Proposal Creation",
            description: "Create personalized, stunning proposals based on deal size and product selection."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "NDA Management",
            description: "Streamline non-disclosure agreements with automated generation and tracking."
        },
        {
            icon: <Share2 className="w-6 h-6" />,
            title: "Report Distribution",
            description: "Automatically generate and email weekly or monthly performance reports to stakeholders."
        },
        {
            icon: <Edit className="w-6 h-6" />,
            title: "Policy Updates",
            description: "Update a clause in one place and regenerate all compliant documents instantly."
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: "Smart Archives",
            description: "Tag, categorize, and store generated documents automatically for easy retrieval."
        }
    ];

    const faqs = [
        {
            question: "What document formats do you support?",
            answer: "We support PDF, Word (DOCX), Excel, PowerPoint, and HTML formats. We can also generate fillable forms."
        },
        {
            question: "Can you include dynamic images or tables?",
            answer: "Absolutely. We can dynamically insert charts, product images, pricing tables, and conditionally correlated data based on your inputs."
        },
        {
            question: "Does this replace our legal team?",
            answer: "No, it empowers them. By automating standard contracts, your legal team can focus on complex negotiations and exceptions rather than drafting routine documents."
        }
    ];

    const tools = [
        { name: "Documint", category: "Generation" },
        { name: "Pandadoc", category: "eSign & Gen" },
        { name: "Google Docs", category: "Templates" },
        { name: "Airtable", category: "Data Source" },
        { name: "PDFMonkey", category: "PDF Gen" },
        { name: "SignRequest", category: "eSign" },
    ];

    return (
        <div className="animate-fade-in">
            <ServiceHero
                title="Documentation Automation"
                subtitle="Transform your document workflows from slow and manual to instant and error-free. Generate contracts, reports, and proposals at scale."
                badgeText="Zero-Touch Documents"
            />

            <ServiceProblemSolution
                title="Tired of Document Drudgery?"
                subtitle="See how automation brings speed and precision to your paperwork."
                problems={problems}
                solutions={solutions}
            />

            <ServiceUseCases
                title="Documents We Automate"
                description="If it has a template, we can automate it. Here are common use cases."
                useCases={useCases}
            />

            <ServiceApproach />

            <ServiceTools tools={tools} />

            <ServiceProcess />

            <ServiceFAQ faqs={faqs} />
        </div>
    );
};
