
import { motion } from 'framer-motion';

interface WinnerProps {
    winners: any[];
}

export default function WinnerPodium({ winners }: WinnerProps) {
    if (!winners || winners.length < 3) return null;

    // Display order: 2nd (Left), 1st (Center), 3rd (Right)
    const displayOrder = [winners[1], winners[0], winners[2]];

    const podiumVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                type: 'spring' as const,
                bounce: 0.4
            }
        })
    };

    const getRankStyles = (rank: number) => {
        if (rank === 1) return {
            // Rank 1: Gold - Center
            container: 'h-[360px] md:h-[440px] w-full max-w-[280px] bg-transparent z-20 scale-110',
            imageBorder: 'border-2 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.5)]',
            rankText: 'text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]',
            barColor: 'bg-[#FFD700]'
        };
        if (rank === 2) return {
            // Rank 2: Silver - Left
            container: 'h-[320px] md:h-[380px] w-full max-w-[240px] bg-transparent z-10 scale-100',
            imageBorder: 'border-2 border-[#C0C0C0] shadow-[0_0_20px_rgba(192,192,192,0.4)]',
            rankText: 'text-[#C0C0C0] drop-shadow-[0_0_10px_rgba(192,192,192,0.6)]',
            barColor: 'bg-[#C0C0C0]'
        };
        return {
            // Rank 3: Bronze - Right
            container: 'h-[320px] md:h-[380px] w-full max-w-[240px] bg-transparent z-10 scale-100',
            imageBorder: 'border-2 border-[#CD7F32] shadow-[0_0_20px_rgba(205,127,50,0.4)]',
            rankText: 'text-[#CD7F32] drop-shadow-[0_0_10px_rgba(205,127,50,0.6)]',
            barColor: 'bg-[#CD7F32]'
        };
    };

    return (
        <div className="flex flex-row items-end justify-center gap-4 md:gap-8 mt-12 mb-8 w-full max-w-6xl mx-auto px-4 perspective-1000 font-sans">
            {displayOrder.map((winner, index) => {
                if (!winner) return null;
                const rank = index === 1 ? 1 : index === 0 ? 2 : 3;
                const styles = getRankStyles(rank);

                let imgSrc = "/runner_default.png";
                if (winner.name.includes("Guo Min")) imgSrc = "/runner_guo_min.png";
                else if (winner.name.includes("Tom Joly")) imgSrc = "/runner_tom_joly.png";
                else if (winner.name.includes("Tyler Green")) imgSrc = "/runner_tyler_green.png";

                // Split name for styling
                const [firstName, ...lastNameParts] = winner.name.split(' ');
                const lastName = lastNameParts.join(' ');

                return (
                    <motion.div
                        key={winner?.no || index}
                        custom={rank === 1 ? 1 : rank === 2 ? 0 : 2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={podiumVariants}
                        className={`relative flex flex-col items-center group ${styles.container}`}
                    >
                        {/* Name Above (F1 Style) - Italic as requested */}
                        <div className="text-center mb-3 w-full flex flex-col items-center justify-end h-16">
                            <div className="font-bold italic uppercase text-white/70 text-base md:text-xl tracking-widest leading-none mb-1">{firstName}</div>
                            <div className="font-black italic uppercase text-white text-2xl md:text-4xl tracking-wide leading-none">{lastName || firstName}</div>
                        </div>

                        {/* Big Rank Number Line */}
                        <div className="flex items-center w-full gap-2 mb-1 pl-1">
                            <div className={`text-5xl md:text-6xl font-black italic ${styles.rankText} leading-none`}>0{rank}</div>
                            <div className="h-[2px] grow bg-white/20 relative mt-4">
                                <div className={`absolute right-0 top-0 h-full w-1/2 ${styles.barColor}`}></div>
                            </div>
                        </div>

                        {/* Image Frame - Pure Rectangle (no rounded corners) */}
                        <div className={`
                            w-full h-full relative overflow-hidden bg-black/40 backdrop-blur-sm
                            ${styles.imageBorder}
                        `}>
                            <img src={imgSrc} alt={winner.name} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />

                            {/* Bottom Info Bar Overlay */}
                            <div className="absolute bottom-0 w-full bg-black/90 backdrop-blur-md p-2 flex justify-between items-center border-t border-white/10">
                                <span className="text-white font-bold text-xs italic">{winner.pts} PTS</span>
                                <span className="text-gray-400 text-[10px] font-mono">{winner.time}</span>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
