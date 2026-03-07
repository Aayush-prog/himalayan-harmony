import {
    FadeInUp,
    StaggerContainer,
    StaggerItem
} from '@/components/animations/ScrollAnimations';
import { TrendingUp, Users, Globe } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import PageHeader from '@/components/PageHeader';

export default function SponsorshipPage() {
    usePageTitle('Sponsorship');

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="SPONSORSHIP" subtitle="BECOME A PARTNER" bgImage="/IMG_6898.jpeg" />

            {/* Content Container */}
            <div className="container mx-auto px-4 py-12">

                {/* Current Sponsors */}
                <div className="mb-20">
                    <FadeInUp>
                        <h2 className="text-center text-3xl md:text-4xl font-black text-white uppercase italic mb-12">
                            Our <span className="text-primary">Sponsors</span>
                        </h2>
                    </FadeInUp>

                    <StaggerContainer className="flex flex-wrap justify-center items-center gap-10">
                        {[
                            { src: '/sponsor1.jpeg', alt: 'Escape Wanchai Hong Kong', href: 'https://www.escapehk.com/' },
                            { src: '/sponsor2.jpeg', alt: 'Bar 109 Wanchai Hong Kong', href: 'https://www.bar109.hk/' },
                            { src: '/sponsor3.jpeg', alt: 'Gurkha Force Security Limited', href: 'https://www.gurkhahk.site/' },
                        ].map((sponsor, idx) => (
                            <StaggerItem key={idx}>
                                <a href={sponsor.href} target="_blank" rel="noopener noreferrer" className="bg-white rounded-sm p-6 flex items-center justify-center w-64 h-40 hover:scale-105 transition-transform">
                                    <img src={sponsor.src} alt={sponsor.alt} className="max-w-full max-h-full object-contain" />
                                </a>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Brand Partners */}
                <div className="mb-20">
                    <FadeInUp>
                        <h2 className="text-center text-3xl md:text-4xl font-black text-white uppercase italic mb-12">
                            Brand <span className="text-primary">Partners</span>
                        </h2>
                    </FadeInUp>

                    <StaggerContainer className="flex flex-wrap justify-center items-center gap-10">
                        {[
                            { src: '/brand1.jpeg', alt: 'T8', href: 'https://t8.run/' },
                            { src: '/brand2.jpeg', alt: 'Blue Mountain Sports', href: 'https://bluemountainsports.hk/' },
                            { src: '/brand3.jpeg', alt: 'Spider Outdoor', href: 'https://spideroutdoor.com/' },
                        ].map((brand, idx) => (
                            <StaggerItem key={idx}>
                                <a href={brand.href} target="_blank" rel="noopener noreferrer" className="bg-white rounded-sm p-6 flex items-center justify-center w-64 h-40 hover:scale-105 transition-transform">
                                    <img src={brand.src} alt={brand.alt} className="max-w-full max-h-full object-contain" />
                                </a>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

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

            </div>
        </div>
    );
}
