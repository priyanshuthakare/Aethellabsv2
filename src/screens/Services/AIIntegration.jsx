import { Bot, Brain, MessageSquare, Sparkles, BarChart, Code2 } from "lucide-react";
import { ServiceHero } from "../../components/services/ServiceHero";
import { ServiceProblemSolution } from "../../components/services/ServiceProblemSolution";
import { ServiceUseCases } from "../../components/services/ServiceUseCases";
import { ServiceApproach } from "../../components/services/ServiceApproach";
import { ServiceTools } from "../../components/services/ServiceTools";
import { ServiceProcess } from "../../components/services/ServiceProcess";
import { ServiceFAQ } from "../../components/services/ServiceFAQ";

export const AIIntegration = () => {
    const problems = [
        "Ad-hoc AI use (ChatGPT/Claude) is fragmented and inconsistent.",
        "Data decisions are still based on gut feeling despite having data.",
        "Insights are scattered across isolated tools and documents.",
        "AI results are hit-or-miss without structured prompts and context."
    ];

    const solutions = [
        "Systematic integration with governance and structure.",
        "Real-time, evidence-based insights guiding your team.",
        "Centralized knowledge that is searchable and usable.",
        "Programmatic AI with versioned prompts for consistent results."
    ];

    const useCases = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Milestone Invoicing",
            description: "Automatically trigger and generate invoices based on project milestone completion."
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Proposal Creation",
            description: "Generate comprehensive proposals using data from your CRM and project history."
        },
        {
            icon: <BarChart className="w-6 h-6" />,
            title: "Data Analysis",
            description: "Surface trends and predict outcomes from your operational data automatically."
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Content Creation",
            description: "Create SEO-optimized blogs, social posts, and personalized emails at scale."
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Discovery Analysis",
            description: "Analyze sales calls and discovery meetings to extract requirements and sentiment."
        },
        {
            icon: <Bot className="w-6 h-6" />,
            title: "Supplier Onboarding",
            description: " streamline the collection and verification of supplier documentation and data."
        }
    ];

    const faqs = [
        {
            question: "Why is AI integration important?",
            answer: "It moves you from isolated 'chat' interactions to systematic business value. By embedding AI into your actual workflows, you scale productivity, reduce manual errors, and make your data actionable."
        },
        {
            question: "Is my data private?",
            answer: "Security is paramount. We prioritize privacy-first implementations, often using enterprise endpoints where data is not used for model training, or local models where appropriate."
        },
        {
            question: "Do I need a new tech stack?",
            answer: "No. We specialize in integrating AI into the tools you already use (like Monday.com, Xero, HubSpot, etc.) to enhance them, not replace them."
        },
        {
            question: "How do you ensure accuracy?",
            answer: "We use techniques like RAG (Retrieval-Augmented Generation) to ground AI responses in your specific business data. We also implement 'human-in-the-loop' steps for critical decisions."
        }
    ];

    const tools = [
        { name: "OpenAI", category: "LLM Provider" },
        { name: "Anthropic", category: "LLM Provider" },
        { name: "Pinecone", category: "Vector DB" },
        { name: "n8n", category: "Automation" },
        { name: "Make", category: "Integration" },
        { name: "LangChain", category: "Framework" },
    ];

    return (
        <div className="animate-fade-in">
            <ServiceHero
                title="AI Integration Solutions"
                subtitle="Stop playing with AI. Start integrating it. We design systems that streamline operations, automate decisions, and drive real business outcomes."
                badgeText="From Hype to Value"
            />

            <ServiceProblemSolution
                title="Struggling to Turn AI Hype Into Value?"
                subtitle="Ad-hoc use won't scale. Systematic integration will."
                problems={problems}
                solutions={solutions}
            />

            <ServiceUseCases
                title="Smarter Workflows"
                description="Real examples of how we embed AI into engineering and service businesses."
                useCases={useCases}
            />

            <ServiceApproach />

            <ServiceTools tools={tools} />

            <ServiceProcess />

            <ServiceFAQ faqs={faqs} />
        </div>
    );
};
