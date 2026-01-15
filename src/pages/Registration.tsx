import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
} from "@/components/animations/ScrollAnimations";
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  CheckCircle,
  Lock,
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

const REGISTRATION_OPEN_DATE = new Date("2026-01-15T00:00:00");

export default function RegistrationPage() {
  usePageTitle("Registration");
  const isRegistrationOpen = new Date() >= REGISTRATION_OPEN_DATE;
  const REGISTRATION_URL = "https://raceresults.com.hk/event/446";

  return (
    <div className="flex flex-col overflow-hidden">
      <PageHeader title="Registration" subtitle="Secure your spot for 2026" />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <section className="mb-12 md:mb-24">
          <FadeInUp>
            <motion.div
              className="design-box p-5 md:p-8 lg:p-12 text-center max-w-4xl mx-auto mb-10 md:mb-20"
              initial={{ skewX: -6 }}
              whileHover={{
                borderColor: "rgba(22, 163, 74, 0.3)",
                boxShadow: "0 0 40px rgba(42, 107, 242, 0.1)",
                skewX: -6,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

              <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-10 uppercase tracking-widest text-white">
                Important Dates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-center max-w-2xl mx-auto mb-6 md:mb-8">
                <motion.div
                  className="flex flex-col items-center bg-black/20 p-4 border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-widest mb-2">
                    Opening Date
                  </span>
                  <span className="text-2xl md:text-3xl font-black text-primary">
                    Jan 15, 2026
                  </span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center bg-black/20 p-4 border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-widest mb-2">
                    Closing Date
                  </span>
                  <span className="text-2xl md:text-3xl font-black text-white">
                    Mar 19, 2026
                  </span>
                </motion.div>
              </div>
              <motion.p
                className="text-xs md:text-sm text-gray-400 italic bg-black/30 inline-block px-3 md:px-4 py-2 border-l-2 border-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                *Registration is on a first-come, first-served basis. Places are
                limited.
              </motion.p>
            </motion.div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16 text-white uppercase">
              Race Categories
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 50KM Challenge */}
            <FadeInLeft delay={0.2} className="h-full">
              <motion.div
                className="design-box border-2 border-primary/50 flex flex-col h-full bg-[#1a2c55]" // Highlighted style
                initial={{ skewX: -6 }}
                whileHover={{
                  y: -10,
                  x: 5,
                  skewX: -6,
                  borderColor: "rgba(22, 163, 74, 0.8)",
                  boxShadow: "8px 8px 0px 0px rgba(22, 163, 74, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6 border-b border-white/10 pb-6">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2">
                    50KM Challenge
                  </h3>
                  <span className="inline-block bg-primary text-[#0a193c] text-xs font-bold px-3 py-1 skew-x-[-12deg]">
                    The Ultimate Test
                  </span>
                </div>

                <div className="text-center text-4xl md:text-5xl font-black text-primary mb-2">
                  HKD 790
                </div>
                <div className="text-center text-gray-400 text-sm mb-2">
                  Registration Fee
                </div>
                <div className="text-center mb-6">
                  <span className="text-yellow-400 font-bold text-lg">
                    Early Bird: HKD 720
                  </span>
                  <span className="text-yellow-400/70 text-xs block mt-1">
                    before Feb 5, 2026
                  </span>
                </div>

                <div className="bg-black/20 p-4 mb-6 space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-primary" /> Date
                    </span>
                    <span className="text-white font-bold">22 March 2026</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="flex items-center gap-2">
                      <Clock size={14} className="text-primary" /> Start Time
                    </span>
                    <span className="text-white font-bold">
                      08:00 (14h Cut-off)
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="flex items-center gap-2 mt-0.5">
                      <Trophy size={14} className="text-primary" /> Categories
                    </span>
                    <div className="text-right">
                      <span className="text-white font-bold block">18-39</span>
                      <span className="text-white font-bold block">40-49</span>
                      <span className="text-white font-bold block">50+</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow text-gray-300 text-sm">
                  {[
                    "Official Race Tee",
                    "Finisher Medal",
                    "ITRA Points (Pending)",
                    "Top 3 Cash Prizes",
                    "Age Group Trophies",
                  ].map((item, i) => (
                    <motion.li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />{" "}
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className={`btn w-full py-3 text-base font-bold ${
                    isRegistrationOpen
                      ? "btn-primary shadow-lg shadow-primary/20"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                  whileHover={isRegistrationOpen ? { scale: 1.02 } : {}}
                  whileTap={isRegistrationOpen ? { scale: 0.98 } : {}}
                  disabled={!isRegistrationOpen}
                  onClick={() => {
                    if (isRegistrationOpen) {
                      window.open(REGISTRATION_URL, "_blank");
                    }
                  }}
                >
                  {isRegistrationOpen ? (
                    "Register Now"
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Lock size={16} /> Opens Jan 15, 2026
                    </span>
                  )}
                </motion.button>
              </motion.div>
            </FadeInLeft>

            {/* 12KM Experience */}
            <FadeInRight delay={0.2} className="h-full">
              <motion.div
                className="design-box flex flex-col h-full bg-[#0a193c] border border-white/10"
                initial={{ skewX: -6 }}
                whileHover={{
                  y: -10,
                  x: 5,
                  skewX: -6,
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "8px 8px 0px 0px rgba(42, 107, 242, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6 border-b border-white/10 pb-6">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2">
                    12KM Experience
                  </h3>
                  <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 skew-x-[-12deg]">
                    Fast & Furious
                  </span>
                </div>

                <div className="text-center text-4xl md:text-5xl font-black text-white mb-2">
                  HKD 390
                </div>
                <div className="text-center text-gray-500 text-sm mb-2">
                  Registration Fee
                </div>
                <div className="text-center mb-6">
                  <span className="text-yellow-400 font-bold text-lg">
                    Early Bird: HKD 350
                  </span>
                  <span className="text-yellow-400/70 text-xs block mt-1">
                    before Feb 5, 2026
                  </span>
                </div>

                <div className="bg-black/20 p-4 mb-6 space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-primary" /> Date
                    </span>
                    <span className="text-white font-bold">22 March 2026</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="flex items-center gap-2">
                      <Clock size={14} className="text-primary" /> Start Time
                    </span>
                    <span className="text-white font-bold">
                      09:00 (4h Cut-off)
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="flex items-center gap-2 mt-0.5">
                      <Trophy size={14} className="text-primary" /> Categories
                    </span>
                    <div className="text-right">
                      <span className="text-white font-bold block">12-13</span>
                      <span className="text-white font-bold block">14-15</span>
                      <span className="text-white font-bold block">16-17</span>
                      <span className="text-white font-bold block">18-39</span>
                      <span className="text-white font-bold block">40-49</span>
                      <span className="text-white font-bold block">50+</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow text-gray-300 text-sm">
                  {[
                    "Official Race Tee",
                    "Finisher Medal",
                    " scenic route",
                    "Age Group Trophies",
                  ].map((item, i) => (
                    <motion.li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-500 shrink-0" />{" "}
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className={`btn w-full py-3 text-base font-bold ${
                    isRegistrationOpen
                      ? "btn-primary shadow-lg shadow-blue-500/20"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                  whileHover={isRegistrationOpen ? { scale: 1.02 } : {}}
                  whileTap={isRegistrationOpen ? { scale: 0.98 } : {}}
                  disabled={!isRegistrationOpen}
                  onClick={() => {
                    if (isRegistrationOpen) {
                      window.open(REGISTRATION_URL, "_blank");
                    }
                  }}
                >
                  {isRegistrationOpen ? (
                    "Register Now"
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Lock size={16} /> Opens Jan 15, 2026
                    </span>
                  )}
                </motion.button>
              </motion.div>
            </FadeInRight>
          </div>
        </section>

        <FadeInUp delay={0.2}>
          <motion.section
            className="bg-black/60 border border-white/10 overflow-hidden shadow-2xl skew-x-[-3deg] transform"
            whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="skew-x-[3deg] p-5 md:p-10 lg:p-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white uppercase">
                Cancellation & Refunds
              </h2>
              <motion.div
                className="bg-[#0a193c] border border-white/10 p-5 md:p-8 max-w-3xl mx-auto border-l-4 border-l-red-500 text-left relative"
                initial={{ skewX: -6 }}
                whileHover={{
                  y: -5,
                  skewX: -6,
                  borderColor: "rgba(239, 68, 68, 0.8)",
                  boxShadow: "8px 8px 0px 0px rgba(239, 68, 68, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="skew-x-[6deg]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <strong className="block text-primary uppercase text-[10px] md:text-xs tracking-widest mb-1">
                        50% Refund
                      </strong>
                      <span className="text-base md:text-lg text-white">
                        Before Feb 10, 2026
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <strong className="block text-red-500 uppercase text-[10px] md:text-xs tracking-widest mb-1">
                        No Refund
                      </strong>
                      <span className="text-base md:text-lg text-white">
                        After Feb 10, 2026
                      </span>
                    </motion.div>
                  </div>
                  <motion.p
                    className="text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/10 pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Transfers and deferrals are not permitted. Please see the
                    full Rules & Regulations for more details. Medical deferrals
                    are considered on a case-by-case basis with valid
                    documentation.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </FadeInUp>
      </div>
    </div>
  );
}
