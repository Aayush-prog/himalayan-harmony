import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Bus, Map, Navigation, DollarSign } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

const Transport = () => {
    usePageTitle('Transport');

    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Transport" subtitle="Getting to the Start Line" />

            <div className="container mx-auto px-4 py-12 max-w-4xl">

                {/* Shuttle Bus Main Info */}
                <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300 mb-12"
                >
                    {/* Corner decorations */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                    <div className="border-b border-white/10 pb-6 mb-6">
                        <h2 className="text-3xl font-black text-white uppercase italic tracking-wider flex items-center gap-3">
                            <Bus className="w-8 h-8 text-primary" /> Official Shuttle Bus
                        </h2>
                        <p className="text-primary font-bold tracking-widest uppercase mt-2 text-sm">Departure Time: 5:20 AM Sharp</p>
                    </div>

                    <div>
                        <p className="mb-6 text-blue-200/80 leading-relaxed font-medium">
                            Please show your bus ticket attached to the back of your race bib.
                            Buses arrive around 5:45-5:50 AM at Pineapple Dam, Shing Mun Road.
                        </p>

                        <div className="grid gap-4 md:grid-cols-2">
                            {[
                                { name: "Admiralty", link: "https://maps.app.goo.gl/FMJ1RKeYYfsy8Nft8" },
                                { name: "Prince Edward", link: "https://maps.app.goo.gl/G2GpL7ny5ec7BVQq9" },
                                { name: "Shatin", link: "https://maps.app.goo.gl/sxz5J9T3EKtCozLV6" },
                                { name: "Yuen Long", link: "#" },
                            ].map((loc, i) => (
                                <a
                                    key={i}
                                    href={loc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-black/40 border border-white/10 hover:bg-primary hover:text-black hover:border-primary transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <Map className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                                        <span className="font-bold uppercase tracking-wider text-sm">{loc.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-black uppercase group-hover:text-black text-primary">
                                        Map <Navigation className="w-3 h-3" />
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center gap-3 p-4 bg-primary/20 border border-primary/30 text-primary">
                            <DollarSign className="w-5 h-5" />
                            <span className="font-black uppercase tracking-wider">Fee: HK$ 40 per person</span>
                        </div>
                    </div>
                </motion.div>

                {/* Personal Transport */}
                <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300"
                >
                    {/* Corner decorations */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                    <h2 className="text-2xl font-black mb-4 flex items-center gap-2 text-white uppercase italic">
                        <Navigation className="w-6 h-6 text-primary" /> Personal Transport
                    </h2>
                    <p className="text-blue-200/80 mb-6 font-medium">
                        If you are heading to the start by yourself, please note the race starting point is at:
                    </p>
                    <div className="bg-black/40 p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 group hover:border-primary/50 transition-colors">
                        <div>
                            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-1">Shing Mun Reservoir</h3>
                            <span className="text-primary font-bold uppercase text-xs tracking-widest">Tsuen Wan, New Territories</span>
                        </div>
                        <a
                            href="https://goo.gl/maps/MNJ6ihNpYbYCDws59"
                            className="bg-primary hover:bg-white hover:text-black text-black font-black text-sm px-6 py-3 uppercase tracking-widest transition-all skew-x-[-12deg] shadow-lg shadow-primary/20 hover:shadow-primary/50"
                            target="_blank"
                        >
                            <span className="skew-x-[12deg] inline-flex items-center gap-2">
                                Open Map <Map className="w-4 h-4" />
                            </span>
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Transport;
