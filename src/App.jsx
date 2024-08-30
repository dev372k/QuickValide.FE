import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import LandingPage from './pages/LandingPage/index';
import Dashboard from './pages/Dashboard/index.jsx';
import PrivacyPolicy from './pages/Privacy Policy';
import TermsAndConditions from './pages/Terms and Conditions';
import { decodeToken, getToken } from './helpers/jwtHelper';

import { useDispatch } from 'react-redux';
import DashboardHome from './pages/Dashboard/DashboardHome.jsx';
import DashboardSettings from './pages/Dashboard/DashboardSettings.jsx';
import DashboardBuilder from './pages/Dashboard/DashboardBuilder.jsx';
import DashboardProfile from './pages/Dashboard/DashboardProfile.jsx';
import DashboardAnalytics from './pages/Dashboard/DashboardAnalytics.jsx';
import DashboardSEO from './pages/Dashboard/DashboardSEO.jsx';
import DashboardWaitlist from './pages/Dashboard/DashbaordWaitlist.jsx';

import UserApp from './pages/UserApp/index.jsx';

import { request } from './helpers/requestHelper.js';
import { saveUser } from './services/userSlice.js';

import Theme0 from './themes/Theme0.jsx';
import Theme1 from './themes/Theme1.jsx';
import Theme2 from './themes/Theme2.jsx';
import Theme3 from './themes/Theme3.jsx';
import Builder from './pages/Builder/index.jsx';

function App() {
    const dispatch = useDispatch();
    useEffect(function () {
        const token = getToken();
        document.cookie = `token=${token}; path=/; domain=.quickvalide.com`;

        console.log(document.cookie);
        if (token) {
            const userId = JSON.parse(
                decodeToken(token)[
                    'http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'
                ]
            )['Id'];

            async function getUserAndSetUser() {
                const res = await request(`https://api.quickvalide.com/api/Auth/${userId}`);
                dispatch(saveUser(res.data));
            }

            getUserAndSetUser();
        }
    }, []);

    const hostnameParts = window.location.hostname.split('.');
    const isSubdomain = hostnameParts.length > 2;
    const subdomain = isSubdomain ? hostnameParts.slice(0, -2).join('.') : null;
    // const subdomain = hostnameParts[0];
    console.log(subdomain);

    if (isSubdomain) return <UserApp subdomain={subdomain} />;

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/theme'>
                    <Route path='0' element={<Theme0 />} />
                    <Route path='1' element={<Theme1 />} />
                    <Route path='2' element={<Theme2 />} />
                    <Route path='3' element={<Theme3 />} />
                </Route>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/register' exact element={<Register />} />
                <Route path='/dashboard' element={<ProtectedRoute Component={Dashboard} />}>
                    <Route path='home' element={<ProtectedRoute Component={DashboardHome} />} />
                    <Route
                        path='settings'
                        element={<ProtectedRoute Component={DashboardSettings} />}
                    />
                    <Route
                        path='builder'
                        element={<ProtectedRoute Component={DashboardBuilder} />}
                    />
                    <Route
                        path='profile'
                        element={<ProtectedRoute Component={DashboardProfile} />}
                    />
                    <Route
                        path='analytics'
                        element={<ProtectedRoute Component={DashboardAnalytics} />}
                    />
                    <Route path='seo' element={<ProtectedRoute Component={DashboardSEO} />} />
                    <Route
                        path='waitlist'
                        element={<ProtectedRoute Component={DashboardWaitlist} />}
                    />
                </Route>
                <Route path='/builder' element={<ProtectedRoute Component={Builder} />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
