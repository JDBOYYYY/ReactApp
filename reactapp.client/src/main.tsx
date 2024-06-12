import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Routes, BrowserRouter, Route, useParams, Navigate } from 'react-router-dom';
import Layout from './layout/layout';
import { TimeRecording } from './timeRecording/timeRecordingPage';
import { MonthlyReport } from './monthlyReport/monthlyReport.page';
import { MyTeam } from './myTeam/myTeam.page';
import { Settings } from './settings/settings.page';
import { YearReport } from './yearReport/yearReport.page';
import { Login } from './login/login.page';
import { Pricing } from './pricingPage/pricing.page';
import { Features } from './features/features';
import { Clients } from './clients/clients';
import { AboutUs } from './aboutUs/aboutUs';
import '../i18n';

import { ConfigProvider } from './ConfigContext';
import { getClientConfig } from './configLoader';
import LayoutShowcase from './layout/layoutShowcase';

// Client-specific layout component
const ClientLayout: React.FC = () => {
    const { client } = useParams<{ client: string }>();
    if (!client) {
        return <Navigate to="/client1/login" />; // Redirect to default client if no client is specified
    }

    const config = getClientConfig(client);

    return (
        <ConfigProvider config={config}>
            <Layout />
        </ConfigProvider>
    );
};

// Client-specific route without layout
const ClientRoute: React.FC<{ component: React.FC }> = ({ component: Component }) => {
    const { client } = useParams<{ client: string }>();
    if (!client) {
        return <Navigate to="/client1/login" />; // Redirect to default client if no client is specified
    }

    const config = getClientConfig(client);

    return (
        <ConfigProvider config={config}>
            <Component />
        </ConfigProvider>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    {/* Showcase routes */}
                    <Route path="/" element={<LayoutShowcase />}>
                        <Route index element={<App />} />
                    </Route>
                    <Route path="/pricing" element={<LayoutShowcase />}>
                        <Route index element={<Pricing />} />
                    </Route>
                    <Route path="/clients" element={<LayoutShowcase />}>
                        <Route index element={<Clients />} />
                    </Route>
                    <Route path="/features" element={<LayoutShowcase />}>
                        <Route index element={<Features />} />
                    </Route>
                    <Route path="/aboutUs" element={<LayoutShowcase />}>
                        <Route index element={<AboutUs />} />
                    </Route>

                    <Route path="/:client/login" element={<ClientRoute component={Login} />} />

                    <Route path="/:client/*" element={<ClientLayout />}>
                        <Route path="pricing" element={<Pricing />} />
                        <Route path="clients" element={<Clients />} />
                        <Route path="features" element={<Features />} />
                        <Route path="aboutUs" element={<AboutUs />} />
                        <Route path="timeRecording" element={<TimeRecording />} />
                        <Route path="monthlyReport" element={<MonthlyReport />} />
                        <Route path="yearReport" element={<YearReport />} />
                        <Route path="myTeam" element={<MyTeam />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    
                    {/* Redirect to default client if no path matches */}
                    <Route path="*" element={<Navigate to="/client1/home" />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}
