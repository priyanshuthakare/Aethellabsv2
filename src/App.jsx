import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { ServiceLayout } from "./screens/Services/ServiceLayout";
import { AutomationProcessWorkflow } from "./screens/Services/AutomationProcessWorkflow";
import { DocumentationAutomation } from "./screens/Services/DocumentationAutomation";
import { AIIntegration } from "./screens/Services/AIIntegration";
import { CustomInternalTools } from "./screens/Services/CustomInternalTools";
import { CustomDashboardsPortals } from "./screens/Services/CustomDashboardsPortals";
import { ProductsPage } from "./screens/Products/ProductsPage";
import { ProductDetail } from "./screens/Products/ProductDetail";
import { Login } from "./screens/Auth/Login";
import { SignUp } from "./screens/Auth/SignUp";
import { ScrollToTop } from "./components/ScrollToTop"; // We'll need a scroll to top component likely
import { ProductLayout } from "./screens/Products/ProductLayout";
import { MyPurchase } from "./screens/User/MyPurchase";
import { MyCart } from "./screens/User/MyCart";

export const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Desktop />} />
                <Route path="/services" element={<ServiceLayout />}>
                    <Route path="automation-process-workflow" element={<AutomationProcessWorkflow />} />
                    <Route path="documentation-automation" element={<DocumentationAutomation />} />
                    <Route path="ai-integration" element={<AIIntegration />} />
                    <Route path="custom-internal-tools" element={<CustomInternalTools />} />
                    <Route path="custom-dashboards-portals" element={<CustomDashboardsPortals />} />
                </Route>
                <Route path="/products" element={<ProductLayout />}>
                    <Route index element={<ProductsPage />} />
                    <Route path=":productId" element={<ProductDetail />} />
                </Route>
                <Route element={<ProductLayout />}>
                    <Route path="/purchases" element={<MyPurchase />} />
                    <Route path="/cart" element={<MyCart />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default App;
