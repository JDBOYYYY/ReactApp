import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Layout from './layout/layout.tsx'
import { TimeRecording } from './timeRecording/timeRecordingPage.tsx'
import { MonthlyReport } from './monthlyReport/monthlyReport.page.tsx'
import { MyTeam } from './myTeam/myTeam.page.tsx'
import { Settings } from './settings/settings.page.tsx'
import { YearReport } from './yearReport/yearReport.page.tsx'
import { Login } from './login/login.page.tsx'
import { Pricing } from './pricingPage/pricing.page.tsx'
import LayoutShowcase from './layout/layoutShowcase.tsx'
import { Features } from './features/features.tsx'

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            {/* <RouterProvider router={router} /> */}
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<LayoutShowcase/>}>
                        <Route index element={<App/> }/>
                    </Route>
                    <Route path = '/pricing' element = {<LayoutShowcase/>}>
                        <Route index element={<Pricing/> }/>
                    </Route>
                    <Route path = '/pricing' element = {<LayoutShowcase/>}>
                        <Route index element={<Pricing/> }/>
                    </Route>
                    <Route path = '/features' element = {<LayoutShowcase/>}>
                        <Route index element={<Features/> }/>
                    </Route>
                    <Route path = '/login'>
                        <Route index element={<Login/> }/>
                    </Route>
                    <Route path='/timeRecording' element={<Layout />}>
                        <Route index element={< TimeRecording />} />
                    </Route>
                    <Route path='/monthlyReport' element={<Layout />}>
                        <Route index element={< MonthlyReport />} />
                    </Route>
                    <Route path='/yearReport' element={<Layout />}>
                        <Route index element={< YearReport />} />
                    </Route>
                    <Route path='/myTeam' element={<Layout />}>
                        <Route index element={< MyTeam />} />
                    </Route>
                    <Route path='/settings' element={<Layout />}>
                        <Route index element={< Settings />} />
                    </Route>

                    

                    
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}

