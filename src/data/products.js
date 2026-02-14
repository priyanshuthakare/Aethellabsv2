export const PRODUCTS = [
    {
        id: 'workflow-automation-pack',
        category: 'Workflows',
        title: 'Email & CRM Automation Pack',
        shortDescription: 'Streamline your client outreach and data entry.',
        price: '$199',
        description: 'A comprehensive set of workflows designed to connect your email marketing tools with your CRM. Automatically capture leads, tag them based on interactions, and schedule follow-up sequences without lifting a finger.',
        howToUse: 'Import the workflow definitions into your automation tool (Zapier/Make). Configure your API keys for your CRM and Email provider. Enable the scenarios and watch your productivity soar.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'content-scheduler-workflow',
        category: 'Workflows',
        title: 'Social Media Content Scheduler',
        shortDescription: 'Plan, approve, and post content automatically.',
        price: '$149',
        description: 'An end-to-end workflow for content teams. drafting in Notion or Airtable, approval notifications via Slack, and automatic posting to LinkedIn, Twitter, and Instagram.',
        howToUse: 'Connect your Notion/Airtable database. Set up the Slack webhooks for notifications. Authenticate your social media accounts. The workflow polls for status changes to "Approved" and publishes accordingly.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: 'internal-admin-tool',
        category: 'Internal Tools',
        title: 'Customer Support Admin Panel',
        shortDescription: 'Unified view of customer tickets and data.',
        price: '$499',
        description: 'A React-based admin panel that aggregates data from Stripe, Zendesk, and your core database. Give your support agents a superhero view of every customer interaction.',
        howToUse: 'Deploy the provided Docker container or host on Vercel. Configure environment variables for your third-party services. Create agent accounts and assign roles.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'inventory-tracker',
        category: 'Internal Tools',
        title: 'Smart Inventory Tracker',
        shortDescription: 'Real-time inventory management interface.',
        price: '$399',
        description: 'Keep track of stock levels, set low-stock alerts, and manage supplier orders from a single intuitive interface. Integrates with major e-commerce platforms.',
        howToUse: 'Connect to your existing inventory database. Set up threshold alerts. Use the dashboard to manually adjust stock or generate purchase orders.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'executive-dashboard',
        category: 'Dashboards',
        title: 'Executive KPI Dashboard',
        shortDescription: 'High-level metrics for decision makers.',
        price: '$599',
        description: 'Visualize your company key performance indicators in real-time. Revenue trends, user acquisition costs, and churn rates presented in beautiful, interactive charts.',
        howToUse: 'Connect your data warehouse (Snowflake/BigQuery). Map your metrics to the dashboard widgets. Share read-only access with your executive team.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' // Reused image for dashboard theme
    },
    {
        id: 'sales-perf-dashboard',
        category: 'Dashboards',
        title: 'Sales Performance Monitor',
        shortDescription: 'Track team performance and targets.',
        price: '$449',
        description: 'Gamify your sales process. Leaderboards, target tracking, and deal flow visualization to keep your sales team motivated and aligned.',
        howToUse: 'Integrate with Salesforce or HubSpot. Set up team goals and individual quotas. Display on office TV screens or share via URL.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    }
];
