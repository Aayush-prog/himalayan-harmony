
import { Link, Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';

export default function AdminLayout() {
    return (
        <div className="flex min-h-screen bg-background text-gray-300 font-sans">
            <aside className="w-64 bg-white/5 border-r border-white/10 flex flex-col fixed inset-y-0 h-screen overflow-y-auto">
                <div className="p-6 border-b border-white/10 text-xl font-black text-white tracking-widest text-center">
                    HIMALAYAN <span className="text-primary">ULTRA</span>
                </div>
                <nav className="flex-grow py-6">
                    <ul className="space-y-1">
                        <li>
                            <Link to="/admin" className="block px-6 py-3 hover:bg-white/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/registrations" className="block px-6 py-3 hover:bg-white/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary">
                                Registrations
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/payments" className="block px-6 py-3 hover:bg-white/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary">
                                Payments
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/races" className="block px-6 py-3 hover:bg-white/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary">
                                Races
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/users" className="block px-6 py-3 hover:bg-white/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary">
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/content" className="block px-6 py-3 hover:bg-white/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary">
                                Content
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/settings" className="block px-6 py-3 hover:bg-white/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary">
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="p-6 border-t border-white/10 flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">A</div>
                    <span className="font-bold text-white">Admin User</span>
                </div>
            </aside>
            <main className="flex-1 ml-64 flex flex-col min-h-screen">
                <div className="p-8 flex-grow">
                    <header className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-wide">Dashboard</h2>
                        <button className="btn btn-primary px-4 py-2 text-xs">Logout</button>
                    </header>
                    <div className="animate-fade-in">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
