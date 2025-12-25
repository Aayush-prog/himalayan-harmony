import { useAuth } from '@/context/AuthContext';
import Footer from '@/components/Footer';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function UserDashboard() {
    usePageTitle('Dashboard');
    const { user, logout } = useAuth();

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white/5 border-b border-white/10 py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-black text-white uppercase tracking-wider">Hello, <span className="text-primary">{user?.name || 'Runner'}</span></h1>
                        <p className="text-gray-400 text-sm mt-1">Welcome to your race dashboard.</p>
                    </div>
                    <button onClick={logout} className="btn btn-outline text-xs px-6 py-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">Logout</button>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12 flex-grow">
                {/* Status Card */}
                <div className="glass p-8 rounded-xl border-l-4 border-primary mb-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="text-9xl font-black text-white">#1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white uppercase mb-6 relative z-10">Registration Status</h2>
                    <div className="flex items-center gap-4 mb-8 bg-black/20 p-4 rounded-lg border border-white/5 relative z-10 max-w-2xl">
                        <span className="h-3 w-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse"></span>
                        <span className="text-gray-300 font-medium">You are not currently registered for any race.</span>
                    </div>
                    <button className="btn btn-primary relative z-10 shadow-lg shadow-primary/20">Register for 2026</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group">
                        <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">🏆</span>
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase mb-2">My Results</h3>
                        <p className="text-gray-400 text-sm mb-6">View your past race performance and times.</p>
                        <span className="text-xs font-mono bg-black/30 px-3 py-1 rounded text-gray-500">No past results found.</span>
                    </div>

                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group">
                        <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">📅</span>
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase mb-2">Training Plan</h3>
                        <p className="text-gray-400 text-sm mb-6">Access your personalized training schedule.</p>
                        <button className="text-primary text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                            Access Plan <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
