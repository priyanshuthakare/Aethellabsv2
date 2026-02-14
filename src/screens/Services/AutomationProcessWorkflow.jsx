import { FileText, Database, Mail, Clock, ShieldCheck, Zap } from "lucide-react";
import { ServiceHero } from "../../components/services/ServiceHero";
import { ServiceProblemSolution } from "../../components/services/ServiceProblemSolution";
import { ServiceUseCases } from "../../components/services/ServiceUseCases";
import { ServiceApproach } from "../../components/services/ServiceApproach";
import { ServiceTools } from "../../components/services/ServiceTools";
import { ServiceProcess } from "../../components/services/ServiceProcess";
import { ServiceFAQ } from "../../components/services/ServiceFAQ";

export const AutomationProcessWorkflow = () => {
    const problems = [
        "Team spends hours on manual data entry and copy-pasting.",
        "Processes bottleneck when key people are away.",
        "Human errors lead to costly mistakes and rework.",
        "Disconnected tools require constant toggle-toggling."
    ];

    const solutions = [
        "Automated data flow between systems in real-time.",
        "Standardized workflows that run 24/7 without supervision.",
        "99.9% accuracy with validation at every step.",
        "Seamless integration creating a unified ecosystem."
    ];

    const useCases = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Invoice Processing",
            description: "Automatically extract data from invoices, match with POs, and sync to Xero/QuickBooks."
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Data Sync & Migration",
            description: "Keep CRM, Project Management, and Billing tools perfectly synchronized."
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Client Onboarding",
            description: "Auto-generate contracts, create folders, send welcome emails, and set up tasks."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Reporting Automation",
            description: "Compile data from multiple sources into scheduled management reports."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Compliance Checks",
            description: "Automated verification of documents and audit trails for regulatory compliance."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Lead Management",
            description: "Instant lead qualification, routing, and follow-up sequences."
        }
    ];

    const faqs = [
        {
            question: "How long does it take to implement?",
            answer: "Simple workflows can be live in a few days. Complex, enterprise-wide automations typically take 2-4 weeks. We work in sprints to deliver value quickly."
        },
        {
            question: "Do I need to change my existing software?",
            answer: "Rarely. We specialize in connecting the tools you already use. If a tool lacks an API, we have other methods to integrate it securely."
        },
        {
            question: "What happens if an automation breaks?",
            answer: "We build robust error handling and monitoring into every workflow. If something fails (e.g., an external API is down), we get alerted immediately and can often resolve it before you even notice."
        },
        {
            question: "Is it secure?",
            answer: "Yes. Security is our top priority. We use encrypted connections, follow least-privilege principles, and process data without storing it whenever possible."
        }
    ];

    return (
        <div className="animate-fade-in">
            <ServiceHero
                title="Business Process Automation"
                subtitle="Stop wasting time on busywork. We build intelligent workflows that automate your manual tasks, so your team can focus on what matters."
                badgeText="Streamline Your Operations"
            />

            <ServiceProblemSolution
                title="Are Manual Processes Holding You Back?"
                subtitle="Comparing the cost of status quo vs. the power of automation."
                problems={problems}
                solutions={solutions}
            />

            <ServiceUseCases
                title="What We Automate"
                description="From simple tasks to complex end-to-end operations, here are common workflows we streamline."
                useCases={useCases}
            />

            <ServiceApproach />

            <ServiceTools />

            <ServiceProcess />

            <ServiceFAQ faqs={faqs} />
        </div>
    );
};
