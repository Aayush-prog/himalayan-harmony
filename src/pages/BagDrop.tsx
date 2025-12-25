import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Luggage, Clock, Package, ShieldAlert, AlertTriangle } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

interface BagDropRule {
    en: string;
    zh: string;
}

const BagDrop = () => {
    usePageTitle('Bag Drop');
    const rules: BagDropRule[] = [
        {
            en: "After the registration and equipment inspection, the participants can go to the luggage handling area at the starting point. The luggage handling area opens one hour before the start.",
            zh: "參賽者於賽事進行登記和裝備檢查後，可前往起點的行李寄存站，行李寄存站在起步前一小時開放。"
        },
        {
            en: "Each participant can only store one piece of packed luggage at most, and the size cannot exceed 30L rucksack or equivalent capacity.",
            zh: "每位參賽者只可最多寄存一件包裝妥當行李，大小不可超出30L背囊或相等之容量。"
        },
        {
            en: "The organizer recommends that participants bring their own waterproof bags to pack their luggage. Restricted items: fragile items and valuables. Flammable items ARE NOT ALLOWED.",
            zh: "大會建議參賽者自備防水袋包裝行李。限制物品：易碎物品及貴重物品。不可儲存易燃物品。"
        },
        {
            en: "The organizer will not be responsible for any damage or loss caused by handling, transporting and storing luggage.",
            zh: "任何因處理、運送及存放行李時而導致的損壞或遺失，大會不會為此負責。"
        },
        {
            en: "The organizer reserves the right to change the luggage storage arrangement in response to any unexpected situation or bad weather.",
            zh: "大會有權因應任何突發情況或惡劣天氣而更改行李寄存的安排。"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Bag Drop" subtitle="行李寄存 | Luggage Storage" />

            <div className="container mx-auto px-4 py-12 max-w-4xl">

                {/* Quick Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
                >
                    <div className="bg-[#0a193c] border border-white/10 p-4 flex items-center gap-4">
                        <div className="bg-primary/20 p-3 text-primary">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">Opens</p>
                            <p className="text-white font-bold">1 Hour Before Start</p>
                            <p className="text-gray-500 text-xs">起步前一小時開放</p>
                        </div>
                    </div>
                    <div className="bg-[#0a193c] border border-white/10 p-4 flex items-center gap-4">
                        <div className="bg-primary/20 p-3 text-primary">
                            <Package className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">Max Size</p>
                            <p className="text-white font-bold">30L Rucksack</p>
                            <p className="text-gray-500 text-xs">30L背囊或相等容量</p>
                        </div>
                    </div>
                    <div className="bg-[#0a193c] border border-white/10 p-4 flex items-center gap-4">
                        <div className="bg-primary/20 p-3 text-primary">
                            <Luggage className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">Limit</p>
                            <p className="text-white font-bold">1 Bag Per Person</p>
                            <p className="text-gray-500 text-xs">每人一件行李</p>
                        </div>
                    </div>
                </motion.div>

                {/* Main Rules Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative bg-[#0a193c] border border-white/10 p-6 md:p-8 mb-8"
                >
                    {/* Corner decorations */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />

                    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                        <div className="bg-primary p-3 text-black">
                            <Luggage className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-white uppercase italic">Bag Drop Rules</h2>
                            <p className="text-gray-400 text-sm">行李寄存規則</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {rules.map((rule, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                className="flex gap-4 group"
                            >
                                <span className="font-mono text-primary font-black text-sm italic bg-black/20 w-8 h-8 flex items-center justify-center border border-white/5 group-hover:bg-primary group-hover:text-black transition-colors shrink-0 mt-1">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                                        {rule.en}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                        {rule.zh}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Warning Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-r from-red-900/30 to-red-800/10 border border-red-500/30 p-6"
                >
                    <h3 className="text-lg font-black text-red-400 uppercase italic mb-4 flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5" /> Restricted Items / 限制物品
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 bg-red-900/20 p-3 border border-red-500/20">
                            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                            <div>
                                <p className="text-gray-300 text-sm">Fragile Items</p>
                                <p className="text-gray-500 text-xs">易碎物品</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-red-900/20 p-3 border border-red-500/20">
                            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                            <div>
                                <p className="text-gray-300 text-sm">Valuables</p>
                                <p className="text-gray-500 text-xs">貴重物品</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-red-900/30 p-3 border border-red-500/30">
                            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                            <div>
                                <p className="text-red-400 text-sm font-bold">Flammable Items</p>
                                <p className="text-gray-500 text-xs">易燃物品 (NOT ALLOWED)</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default BagDrop;
