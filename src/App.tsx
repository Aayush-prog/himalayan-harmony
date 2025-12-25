import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import PublicLayout from '@/layouts/PublicLayout';
import AdminLayout from '@/layouts/AdminLayout';
import ScrollToTop from '@/components/ScrollToTop';

// Pages
import Home from '@/pages/Home';
import News from '@/pages/News';
import NewsDetail from '@/pages/NewsDetail';
import RaceInfo from '@/pages/RaceInfo';
import Registration from '@/pages/Registration';
import Results from '@/pages/Results';
import RacePackPickUp from '@/pages/RacePackPickUp';
import Prizes from '@/pages/Prizes';
import Transport from '@/pages/Transport';
import RulesAndRegulations from '@/pages/RulesAndRegulations';
import BagDrop from '@/pages/BagDrop';
import Volunteer from '@/pages/Volunteer';
import Sponsorship from '@/pages/Sponsorship';
import Login from '@/pages/Login';
import UserDashboard from '@/pages/UserDashboard';
import AdminDashboard from '@/pages/admin/Dashboard';
import AdminRegistrations from '@/pages/admin/Registrations';
import AdminPayments from '@/pages/admin/Payments';
import AdminRaces from '@/pages/admin/Races';
import AdminUsers from '@/pages/admin/Users';
import AdminContent from '@/pages/admin/Content';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <RootLayout>
                <Routes>
                    {/* Public Routes */}
                    <Route element={<PublicLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/news/:id" element={<NewsDetail />} />
                        <Route path="/race-info" element={<RaceInfo />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="/race-pack-pick-up" element={<RacePackPickUp />} />
                        <Route path="/prizes" element={<Prizes />} />
                        <Route path="/transport" element={<Transport />} />
                        <Route path="/rules-and-regulations" element={<RulesAndRegulations />} />
                        <Route path="/bag-drop" element={<BagDrop />} />
                        <Route path="/volunteer" element={<Volunteer />} />
                        <Route path="/sponsorship" element={<Sponsorship />} />
                    </Route>

                    {/* Auth Routes */}
                    <Route path="/login" element={<Login />} />

                    {/* User Routes */}
                    <Route path="/dashboard" element={<UserDashboard />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="registrations" element={<AdminRegistrations />} />
                        <Route path="payments" element={<AdminPayments />} />
                        <Route path="races" element={<AdminRaces />} />
                        <Route path="users" element={<AdminUsers />} />
                        <Route path="content" element={<AdminContent />} />
                    </Route>
                </Routes>
            </RootLayout>
        </BrowserRouter>
    );
}

export default App;
