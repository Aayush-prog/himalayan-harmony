import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, FileText, AlertCircle } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

const RacePackPickUp = () => {
    usePageTitle('Race Pack Pick Up');

    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Race Pack Pick Up" subtitle="Get Ready for Race Day" />

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid gap-8">
                        {/* Key Information Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300"
                        >
                            {/* Corner decorations */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                            <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-3 uppercase italic tracking-wider border-b border-white/10 pb-4">
                                <Calendar className="w-8 h-8 text-primary" /> Collection Schedule
                            </h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-black/40 border border-white/5 hover:border-primary/50 transition-colors group">
                                    <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Date</span>
                                    <span className="text-lg md:text-xl font-black text-white italic group-hover:text-primary transition-colors">Feb 4-7, 2026 (Wed - Fri)</span>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-black/40 border border-white/5 hover:border-primary/50 transition-colors group">
                                    <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Time</span>
                                    <span className="text-lg md:text-xl font-black text-white italic group-hover:text-primary transition-colors">11:45 AM - 7:45 PM</span>
                                </div>
                            </div>

                            <div className="p-4 border-l-4 border-primary bg-primary/10 rounded-r-sm mb-2">
                                <p className="text-sm leading-relaxed text-blue-100">
                                    <span className="font-black text-primary uppercase mr-2">Overseas Participants:</span>
                                    If you are traveling from overseas, you may pick up your race pack the day before the race with valid proof of travel/ID.
                                </p>
                            </div>
                        </motion.div>

                        {/* Location Section */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300"
                        >
                            {/* Corner decorations */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                            <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-3 uppercase italic tracking-wider border-b border-white/10 pb-4">
                                <MapPin className="w-8 h-8 text-primary" /> Location
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-black text-primary uppercase italic tracking-wide mb-2">Action X Store</h3>
                                    <p className="text-gray-300 font-medium leading-relaxed uppercase tracking-wide text-sm">
                                        11 Floor, Unit B, 12 Wing Lok Street,<br />
                                        Wing Sing Commercial Centre,<br />
                                        Sheung Wan, HK
                                    </p>
                                </div>
                                <div className="text-xs font-bold text-gray-400 bg-white/5 p-3 border-l-2 border-gray-500">
                                    Exit A2 MTR and walk 50m LEFT towards Central direction.
                                </div>
                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-black hover:bg-primary hover:text-black font-black text-sm px-6 py-4 uppercase tracking-widest transition-all skew-x-[-12deg] shadow-lg inline-block mt-2 group"
                                >
                                    <div className="skew-x-[12deg] flex items-center gap-2">
                                        View on Google Maps <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        {/* Important Info Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300"
                            >
                                {/* Corner decorations */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                                <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-white uppercase italic tracking-wider">
                                    <FileText className="w-6 h-6 text-primary" /> What's Included?
                                </h3>
                                <ul className="space-y-3">
                                    {["Race Number (Bib)", "Event T-Shirt", "Safety Pins", "Face Mask", "Sponsor Goodies"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                                            <span className="w-1.5 h-1.5 bg-primary skew-x-[-12deg]"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300"
                            >
                                {/* Corner decorations */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                                <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-white uppercase italic tracking-wider">
                                    <AlertCircle className="w-6 h-6 text-primary" /> Friend Pickup?
                                </h3>
                                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                    If you need someone else to pick up for you, they must bring a signed release form.
                                </p>
                                <button className="w-full bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-black font-black text-xs md:text-sm py-3 uppercase tracking-widest transition-all skew-x-[-12deg]">
                                    <span className="skew-x-[12deg] inline-block">Download Form</span>
                                </button>
                            </motion.div>
                        </div>

                        {/* Late Pickup */}
                        <motion.div
                            initial={{ skewX: -6 }}
                            whileHover={{
                                y: -5,
                                skewX: -6,
                                borderColor: 'rgba(239, 68, 68, 0.8)',
                                boxShadow: '8px 8px 0px 0px rgba(239, 68, 68, 0.4)'
                            }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#1a0505] border border-red-500/30 p-8 skew-x-[-6deg] relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <AlertCircle className="w-32 h-32 text-red-500" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-4 text-red-500 uppercase italic tracking-wider">Missed the pickup?</h3>
                                <p className="text-red-100/80 font-medium leading-relaxed max-w-2xl">
                                    Special arrangements on race day require a <strong className="text-white border-b-2 border-red-500">HKD 150 administrative fee</strong> (cash only).
                                    Fee waived for Macau/Mainland China/Overseas participants with valid ID if emailed 3 days prior.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RacePackPickUp;
