import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Gift, Users, Trophy, Zap, Car, CheckCircle } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

const Volunteer = () => {
    usePageTitle('Volunteer');

    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            {/* Added a subtle overlay for extra depth if PageHeader doesn't cover it */}

            <PageHeader title="VOLUNTEER" subtitle="JOIN THE CREW" bgImage="/IMG_6898.jpeg" />

            <div className="container-custom py-12 relative z-10">

                {/* Intro Section with Poster Typography */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-6 tracking-tighter transform -skew-x-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        All Roles Have <br /><span className="text-primary not-italic skew-x-0 inline-block">Been Fulfilled</span>
                    </h2>
                    <p className="text-lg text-blue-100/80 font-medium leading-relaxed max-w-2xl mx-auto">
                        Thank you for the overwhelming response! All volunteer positions for the <span className="text-white font-bold">HK50 Series</span> have been filled.
                        We appreciate everyone who applied and look forward to an amazing event with our incredible volunteer crew.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 mb-20 items-start">
                    {/* Roles Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-black uppercase italic tracking-wider flex items-center gap-3 text-secondary border-b-4 border-secondary/30 pb-2 w-fit transform -rotate-1">
                            <Users className="w-8 h-8" /> Critical Roles
                        </h3>

                        <div className="grid gap-6">
                            {[
                                { title: "Course Marshal", desc: "Direct participants and ensure safety on course." },
                                { title: "Check Point Support", desc: "Food/drink distribution, timing, morale support." },
                                { title: "Start/Finish Crew", desc: "Registration, baggage, medals, crowd control." },
                                { title: "Media & Medical", desc: "Photography, videography, and first aid support." },
                            ].map((role, i) => (
                                <div key={i} className="card-poster group relative opacity-75">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-xl text-white uppercase italic">{role.title}</h4>
                                        <span className="flex items-center gap-1 text-green-400 text-sm font-bold uppercase tracking-wide">
                                            <CheckCircle className="w-4 h-4" /> Filled
                                        </span>
                                    </div>
                                    <p className="text-blue-200 mt-1 font-medium">{role.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits Column - styled as a 'Bib' or Special Feature */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full opacity-60"></div>

                        <div className="bg-[#0f1d40]/90 backdrop-blur-xl border border-white/10 p-10 relative overflow-hidden shadow-2xl skew-y-1">
                            {/* Decorative tape or stripe */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>

                            <h3 className="text-3xl font-black uppercase italic tracking-wider flex items-center gap-3 text-white mb-8">
                                <Gift className="w-8 h-8 text-primary" /> The Perks
                            </h3>

                            <ul className="space-y-8">
                                <li className="flex gap-5 items-start">
                                    <div className="p-3 bg-gradient-to-br from-primary to-pink-600 shadow-lg text-white transform -rotate-3"><Zap /></div>
                                    <div>
                                        <strong className="block text-xl text-white uppercase font-bold tracking-wide">Foods</strong>
                                        <span className="text-blue-200 font-medium pt-1 block">Meals and refreshments provided throughout the event.</span>
                                    </div>
                                </li>
                                <li className="flex gap-5 items-start">
                                    <div className="p-3 bg-gradient-to-br from-secondary to-blue-600 shadow-lg text-white transform rotate-3"><Car /></div>
                                    <div>
                                        <strong className="block text-xl text-white uppercase font-bold tracking-wide">Transportation</strong>
                                        <span className="text-blue-200 font-medium pt-1 block">Free transport to and from event locations.</span>
                                    </div>
                                </li>
                                <li className="flex gap-5 items-start">
                                    <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg text-white transform -rotate-2"><Gift /></div>
                                    <div>
                                        <strong className="block text-xl text-white uppercase font-bold tracking-wide">Special Gifts</strong>
                                        <span className="text-blue-200 font-medium pt-1 block">Exclusive volunteer merchandise and sponsor gifts.</span>
                                    </div>
                                </li>
                                <li className="flex gap-5 items-start">
                                    <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg text-white transform -rotate-1"><Trophy /></div>
                                    <div>
                                        <strong className="block text-xl text-white uppercase font-bold tracking-wide">Certificates</strong>
                                        <span className="text-blue-200 font-medium pt-1 block">Official volunteer certificate for your participation.</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-12 text-center">
                                <div className="btn w-full md:w-auto text-xl py-6 bg-green-600/20 border-2 border-green-500/40 text-green-400 cursor-default flex items-center justify-center gap-2">
                                    <CheckCircle className="w-6 h-6" />
                                    <span>All Positions Filled</span>
                                </div>
                                <p className="mt-4 text-xs text-white/40 uppercase tracking-widest">Thank you to all applicants</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Volunteer;
