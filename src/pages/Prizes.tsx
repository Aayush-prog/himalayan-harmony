import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Crown } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

const Prizes = () => {
  usePageTitle("Prizes");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader title="Prizes & Awards" subtitle="Champions of the Trail" bgImage="/IMG_8069.JPG" />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* 50KM Category */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300 mb-16 overflow-visible"
        >
          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
          <div className="px-2 md:px-4">
            <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-6">
              <div className="p-4 bg-primary text-black shadow-lg shadow-primary/20">
                <Crown size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic text-white">
                50 KM Prizes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Cash Prizes */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-transparent p-6 border border-yellow-500/20 relative overflow-visible">
                <h3 className="text-xl font-black mb-6 text-yellow-500 flex items-center gap-3 uppercase italic tracking-wider">
                  <Award className="w-6 h-6" /> Top 3 Male & Female
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      rank: "Champion 冠軍",
                      prize: "HK$ 3,000",
                      extra: "+ Gift Voucher",
                    },
                    {
                      rank: "1st Runner-up 亞軍",
                      prize: "HK$ 2,000",
                      extra: "+ Gift Voucher",
                    },
                    {
                      rank: "2nd Runner-up 季軍",
                      prize: "HK$ 1,000",
                      extra: "+ Gift Voucher",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-yellow-500/10 pb-3 last:border-0 hover:bg-yellow-500/5 px-2 transition-colors"
                    >
                      <span className="font-bold text-white/90 italic uppercase">
                        {item.rank}
                      </span>
                      <div className="text-right">
                        <div className="font-black font-mono text-yellow-400 text-lg tracking-wider">
                          {item.prize}
                        </div>
                        <div className="text-xs text-yellow-500/70 uppercase font-bold">
                          {item.extra}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trophies */}
              <div>
                <h3 className="text-xl font-black mb-6 text-primary flex items-center gap-3 uppercase italic tracking-wider">
                  <Trophy className="w-6 h-6" /> Age Categories
                </h3>
                <div className="bg-black/40 border border-white/10 p-6">
                  <p className="font-bold text-white mb-4 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    Trophies for Top 3 in each category
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {["18-39", "40-49", "50 above"].map((age, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-white/5 border-l-2 border-primary/50"
                      >
                        <span className="text-gray-300 uppercase text-sm font-bold">
                          Category
                        </span>
                        <span className="text-white font-mono font-bold">
                          {age}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 12KM Category */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300"
        >
          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />

          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
            <Medal className="text-primary w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-black uppercase italic text-white">
              12 KM Prizes
            </h2>
          </div>

          <div className="bg-black/40 border border-white/10 p-6">
            <h3 className="text-lg font-black text-white uppercase italic mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Awards & Prizes
            </h3>
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div>
                <p className="text-gray-300 mb-2">
                  Trophies for Top 3 in each age category /
                  每個年齡組別嘅前3名嘅獎盃
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "12-13",
                    "14-15",
                    "16-17",
                    "18-39",
                    "40-49",
                    "50 above",
                  ].map((age, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider rounded"
                    >
                      {age}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="text-center text-gray-400 text-sm mt-12">
          <p>
            Prizes subject to change. Race Director has final say on all
            matters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
