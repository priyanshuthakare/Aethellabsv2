import {
    BarChart3,
    Boxes,
    Calendar,
    ClipboardList,
    Clock,
    CreditCard,
    FileCheck,
    FileText,
    HeadphonesIcon,
    MessageSquare,
    Package,
    Receipt,
    Sparkles,
    TrendingUp,
    UserPlus
} from "lucide-react";

/**
 * @intent Use cases section showcasing automation solutions by category
 * Optimized with categorized use cases and cleaner grid layout
 */
const useCaseCategories = [
    {
        category: "Operations",
        items: [
            { icon: Calendar, title: "Field Service Scheduling" },
            { icon: ClipboardList, title: "Job Sheet Management" },
            { icon: Package, title: "Order Processing" },
            { icon: Boxes, title: "Inventory Sync" },
        ]
    },
    {
        category: "Finance",
        items: [
            { icon: Receipt, title: "Invoice Generation" },
            { icon: CreditCard, title: "Accounts Payable" },
            { icon: BarChart3, title: "Payment Reconciliation" },
            { icon: FileText, title: "Contract Management" },
        ]
    },
    {
        category: "Documents",
        items: [
            { icon: FileCheck, title: "Data Extraction (OCR)" },
            { icon: FileText, title: "Document Generation" },
            { icon: BarChart3, title: "Executive Reporting" },
            { icon: ClipboardList, title: "Form Processing" },
        ]
    },
    {
        category: "Team & HR",
        items: [
            { icon: UserPlus, title: "Employee Onboarding" },
            { icon: Clock, title: "Time Tracking" },
            { icon: Calendar, title: "Meeting Scheduling" },
            { icon: TrendingUp, title: "Performance Tracking" },
        ]
    },
    {
        category: "Sales & CRM",
        items: [
            { icon: TrendingUp, title: "Lead Allocation" },
            { icon: MessageSquare, title: "Enquiry Management" },
            { icon: HeadphonesIcon, title: "Customer Support" },
            { icon: MessageSquare, title: "Follow-up Automation" },
        ]
    }
];

export const UseCasesSection = () => {
    return (
        <section id="use-cases" className="py-24 px-4 bg-gray-50">
            <div className="w-full max-w-[1200px] mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Automation solutions{" "}
                        <span className="text-aethel-500">for every workflow</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From operations to finance, we've built thousands of AI automation
                        solutions for businesses like yours.
                    </p>
                </div>

                {/* Categorized Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {useCaseCategories.map((category, catIndex) => (
                        <div key={catIndex} className="bg-white rounded-2xl p-6 border border-gray-100">
                            {/* Category Header */}
                            <h3 className="text-sm font-bold text-aethel-600 uppercase tracking-wider mb-4">
                                {category.category}
                            </h3>

                            {/* Items */}
                            <div className="space-y-3">
                                {category.items.map((item, itemIndex) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div
                                            key={itemIndex}
                                            className="group flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-aethel-50 transition-colors cursor-pointer"
                                        >
                                            <div className="w-8 h-8 bg-gray-100 group-hover:bg-aethel-500 rounded-lg flex items-center justify-center transition-colors">
                                                <IconComponent className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="text-sm text-gray-700 group-hover:text-aethel-700 transition-colors">
                                                {item.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 bg-aethel-500 hover:bg-aethel-600 text-white font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer">
                        <Sparkles className="w-5 h-5" />
                        <span>Don't see your use case? We can build it.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
