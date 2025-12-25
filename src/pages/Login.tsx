import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function LoginPage() {
    usePageTitle('Login');
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login logic - in real app, verify with backend
        if (isAdmin) {
            if (email === 'admin@himalayanultra.com' && password === 'admin') {
                login('admin');
            } else {
                alert('Invalid admin credentials (try admin@himalayanultra.com / admin)');
            }
        } else {
            if (email && password) {
                login('user');
            } else {
                alert('Please enter usage credentials (try any)');
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen w-full bg-[#050510]">
            <div className="flex flex-1 w-full">
                {/* Left Panel - Image & Branding */}
                <div className="hidden lg:flex w-1/2 relative flex-col justify-end p-16 text-white">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/hero-bg.png"
                            alt="Background"
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 mb-8">
                        <h1 className="text-6xl font-black mb-4 leading-none">
                            RACE<span className="text-primary">TIMING</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-md leading-relaxed">
                            Login to manage your race journey or access the administrative dashboard.
                        </p>
                    </div>
                </div>

                {/* Right Panel - Login Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
                    <div className="w-full max-w-md bg-[#15151e] p-8 md:p-10 border border-white/10 relative z-10 skew-x-[-3deg] shadow-[10px_10px_0px_0px_rgba(42,107,242,0.1)]">
                        <div className="skew-x-[3deg]">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">Welcome Back</h2>
                                <p className="text-gray-400">Please enter your details to sign in.</p>
                            </div>

                            <div className="flex bg-[#0a0a1a] p-1 mb-8 border border-white/5 skew-x-[-6deg]">
                                <button
                                    className={`flex-1 py-2 text-sm font-bold skew-x-[6deg] transition-all duration-300 ${!isAdmin ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                                    onClick={() => setIsAdmin(false)}
                                >
                                    Runner
                                </button>
                                <button
                                    className={`flex-1 py-2 text-sm font-bold skew-x-[6deg] transition-all duration-300 ${isAdmin ? 'bg-primary text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                                    onClick={() => setIsAdmin(true)}
                                >
                                    Admin
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-[#0a0a1a] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-[#0a0a1a] transition-colors placeholder-gray-600 rounded-none skew-x-[-3deg]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-[#0a0a1a] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-[#0a0a1a] transition-colors placeholder-gray-600 rounded-none skew-x-[-3deg]"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-full mt-8 py-4 text-base shadow-lg shadow-primary/20 skew-x-[-3deg] hover:brightness-110">
                                    <span className="skew-x-[3deg] inline-block">{isAdmin ? 'Login as Admin' : 'Login as Runner'}</span>
                                </button>
                            </form>

                            <p className="text-center text-gray-400 mt-8 text-sm">
                                Don't have an account? <Link to="/registration" className="text-primary hover:text-white font-bold uppercase tracking-wider transition-colors ml-1">Register</Link>
                            </p>

                            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-center text-gray-500 font-mono bg-black/20 p-4 border border-white/5 skew-x-[-3deg]">
                                <div className="skew-x-[3deg]">
                                    <strong>Demo:</strong> Admin (admin@himalayanultra.com / admin) <br /> User (user@test.com / any)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
