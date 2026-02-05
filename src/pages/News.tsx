import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { usePageTitle } from '@/hooks/usePageTitle';

const newsItems = [
    {
        id: 1,
        title: "Race Results Published",
        date: "Jan 15, 2025",
        excerpt: "The official results for the 2025 RaceTiming Ultra have now been verified and published. Congratulations to all finishers!",
        category: "Race Update"
    },
    {
        id: 2,
        title: "Course Alteration for 2026",
        date: "Dec 01, 2024",
        excerpt: "Due to trail maintenance by the AFCD, a small section of the MacLehose Trail Section 4 will be diverted.",
        category: "Course Info"
    },
    {
        id: 3,
        title: "Elite Field Announcement",
        date: "Nov 20, 2024",
        excerpt: "We are excited to welcome a star-studded lineup of international elites for this year's edition.",
        category: "Press Release"
    },
    {
        id: 4,
        title: "Volunteer Roles Fulfilled",
        date: "Oct 10, 2024",
        excerpt: "All volunteer positions have been filled! Thank you to everyone who applied to support the HK50 Series.",
        category: "Community"
    },
    {
        id: 5,
        title: "New sustainability initiatives",
        date: "Sep 05, 2024",
        excerpt: "RaceTiming is going cup-free! Read about our new measures to reduce waste on the trails.",
        category: "Sustainability"
    }
];

export default function NewsPage() {
    usePageTitle('News');
    return (
        <div className="flex flex-col overflow-hidden">
            <PageHeader title="News" subtitle="Latest Updates & Stories" />

            <div className="container mx-auto px-4 py-8 md:py-16">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" staggerDelay={0.1}>
                    {newsItems.map((item) => (
                        <StaggerItem key={item.id}>
                            <motion.div
                                className="design-box flex flex-col group h-full p-0 overflow-hidden"
                                initial={{ skewX: -6 }}
                                whileHover={{
                                    y: -10,
                                    x: 5,
                                    skewX: -6,
                                    boxShadow: '8px 8px 0px 0px rgba(42, 107, 242, 0.4)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="h-40 md:h-48 bg-gray-800 relative w-[110%] -ml-[5%] overflow-hidden origin-center scale-105">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                                    <motion.div
                                        className="w-full h-full bg-gradient-to-br from-[#1a2c55] to-[#0a193c]"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.span
                                        className="absolute top-3 right-8 flex items-center justify-center bg-primary text-[#0a193c] text-[10px] md:text-xs font-black px-3 py-1 uppercase tracking-wider transform -skew-x-[12deg]"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {item.category}
                                    </motion.span>
                                </div>

                                <div className="p-6 md:p-8 flex-grow flex flex-col">
                                    <div className="flex items-center text-[10px] md:text-xs text-primary font-bold uppercase tracking-widest mb-3 md:mb-4">
                                        <motion.span
                                            className="w-2 h-2 rounded-full bg-primary mr-3"
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        {item.date}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 leading-none uppercase italic group-hover:text-primary transition-colors">
                                        <Link to={`/news/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p className="text-blue-200/80 text-sm leading-relaxed mb-6 flex-grow ">
                                        {item.excerpt}
                                    </p>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            to={`/news/${item.id}`}
                                            className="inline-block border-2 border-primary/50 hover:border-primary hover:bg-primary hover:text-black text-primary px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all skew-x-[-12deg]"
                                        >
                                            <span className="inline-block skew-x-[12deg]">Read Story</span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
}
