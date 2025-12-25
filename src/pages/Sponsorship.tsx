import { motion } from 'framer-motion';
import {
    FadeInUp,
    StaggerContainer,
    StaggerItem
} from '@/components/animations/ScrollAnimations';
import { Mail, TrendingUp, Users, Globe, CheckCircle2 } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function SponsorshipPage() {
    usePageTitle('Sponsorship');

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section with Slanted Design */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden clip-path-slant mb-12">
                {/* Poster Gradient Overlay - Matches PageHeader style */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a193c]/30 via-[#0a193c]/60 to-[#0a193c] z-10 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 z-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Extra dimming as requested */}

                <motion.img
                    src="/sponsorship_bg_artistic.png"
                    alt="Runner on trail"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    initial={{ scale: 1.1, filter: 'grayscale(0%)' }}
                    animate={{ scale: 1, filter: 'grayscale(20%)' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                <div className="container relative z-20 text-center px-4">
                    <FadeInUp>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white italic uppercase tracking-tighter mb-6 drop-shadow-2xl">
                            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Partner</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed">
                            Connect your brand with the ultimate endurance challenge and engaging outdoor community.
                        </p>
                    </FadeInUp>
                </div>
            </section>

            {/* Content Container */}
            <div className="container mx-auto px-4 py-12">

                {/* Benefits Grid */}
                <div className="mb-20">
                    <FadeInUp>
                        <h2 className="text-center text-3xl md:text-4xl font-black text-white uppercase italic mb-12">
                            Why <span className="text-primary">Partner With Us?</span>
                        </h2>
                    </FadeInUp>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: TrendingUp, title: "Brand Visibility", desc: "Logo placement on bibs, shirts, and banners. Seen by thousands." },
                            { icon: Users, title: "Community Engagement", desc: "Direct access to runners at the race village and checkpoints." },
                            { icon: Globe, title: "Digital Reach", desc: "Feature on our website, social media, and newsletters." },
                        ].map((item, idx) => (
                            <StaggerItem key={idx}>
                                <div className="design-box h-full bg-[#0a193c] p-8 border border-white/10 hover:border-primary/50 transition-colors group">
                                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase italic mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Contact CTA & Form */}
                <section className="py-12 bg-transparent relative z-10" id="contact-form">
                    <div className="max-w-5xl mx-auto">
                        <FadeInUp>
                            <div className="bg-[#0a193c] border border-white/10 p-8 md:p-16 relative overflow-hidden rounded-sm">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-6">
                                            Get in <span className="text-primary">Touch</span>
                                        </h2>
                                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                            Ready to elevate your brand? Fill out the form to request our sponsorship deck and discuss custom packages.
                                        </p>
                                        <div className="flex items-center gap-4 text-blue-200">
                                            <Mail className="w-6 h-6 text-primary" />
                                            <span className="text-lg font-medium">sponsor@himalayanharmony.com</span>
                                        </div>
                                    </div>

                                    <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Name</label>
                                            <input type="text" className="w-full bg-black/40 border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="Your Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
                                            <input type="email" className="w-full bg-black/40 border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="contact@company.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                                            <textarea className="w-full bg-black/40 border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors h-32 resize-none" placeholder="Tell us about your sponsorship goals..."></textarea>
                                        </div>
                                        <button className="w-full btn btn-primary">
                                            <span>Send Request</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </section>
            </div>
        </div>
    );
}
