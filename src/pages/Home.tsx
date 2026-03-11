import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Countdown from "@/components/Countdown";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  AnimatedStat,
  TextReveal,
} from "@/components/animations/ScrollAnimations";

export default function Home() {
  usePageTitle();

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden p-0 pt-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10"></div>
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80 "
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <source src="/mobile.MOV" type="video/mp4" />
        </motion.video>
        <div className="container relative z-20 text-center mt-8 md:mt-16 flex flex-col items-center px-4">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-4 leading-none drop-shadow-2xl text-white tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            HIMALAYAN
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white block transform -skew-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              HARMONY
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 tracking-[2px] uppercase font-bold text-blue-200 px-4 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The <span className="text-primary italic">Ultimate</span> Endurance
            Challenge
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Countdown targetDate="2026-03-22T08:00:00" />
          </motion.div>

          <motion.div
            className="flex gap-4 md:gap-6 justify-center mt-12 flex-col sm:flex-row w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/registration" className="relative group inline-block">
              <span className="absolute inset-0 bg-[#2a6bf2] -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10"></span>
              <span className="relative block bg-[#ff8fa3] -skew-x-12 px-10 py-4 hover:-translate-y-0.5 transition-transform border border-white/10">
                <span className="block font-black italic uppercase text-[#0a193c] tracking-widest text-sm md:text-lg">
                  Registration
                </span>
              </span>
            </Link>

            <button className="relative group inline-block">
              <span className="absolute inset-0 bg-[#2a6bf2] -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10"></span>
              <span className="relative block bg-gray-200 -skew-x-12 px-10 py-4 hover:-translate-y-0.5 transition-transform border border-white/10">
                <span className="block font-black italic uppercase text-[#0a193c] tracking-widest text-sm md:text-lg">
                  Watch Trailer
                </span>
              </span>
            </button>
          </motion.div>

          <motion.div
            className="mt-12 mb-16 bg-black/30 backdrop-blur-md px-6 py-2 rounded-none border border-white/10 skew-x-[-10deg]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="skew-x-[10deg]">
              <span className="text-[10px] md:text-xs uppercase text-gray-400 tracking-wider block">
                Organized By
              </span>
              <a
                href="https://hknutra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-primary tracking-wide font-bold hover:text-white transition-colors"
              >
                HKNUTRA
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-transparent text-center py-20 relative z-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <TextReveal>
              <h2 className="text-white mb-8 text-3xl md:text-5xl font-black uppercase leading-tight italic tracking-tighter">
                A Journey Through <br />
                <span className="text-primary">Hong Kong's Wildest Trails</span>
              </h2>
            </TextReveal>
            <FadeInUp delay={0.2}>
              <p className="text-lg md:text-xl text-blue-100/80 mb-12 leading-relaxed font-medium">
                Himalayan Harmony – 2026 is an ultra-endurance race set in Hong
                Kong's highland scenery, inspired by Nepal's formidable trails.
                Starting at Tai Mo Shan Rotary Park, runners will be challenged
                by the ascents and descents of the most celebrated MacLehose and
                Wilson Trails. Then the loop will come to an end with a final
                push over the summit of Tai Mo Shan—the territory's highest
                peak—before returning to the start.
              </p>
            </FadeInUp>
            <StaggerContainer className="flex flex-col md:flex-row justify-around mt-16 pt-10 border-t border-white/10 gap-8">
              <StaggerItem>
                <AnimatedStat className="flex flex-col">
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-2 italic">
                    50<span className="text-primary text-3xl">km</span>
                  </h3>
                  <p className="text-blue-300 uppercase tracking-widest text-sm font-bold">
                    Distance
                  </p>
                </AnimatedStat>
              </StaggerItem>
              <StaggerItem>
                <AnimatedStat className="flex flex-col">
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-2 italic">
                    2900<span className="text-primary text-3xl">m+</span>
                  </h3>
                  <p className="text-blue-300 uppercase tracking-widest text-sm font-bold">
                    Elevation Gain
                  </p>
                </AnimatedStat>
              </StaggerItem>
              <StaggerItem>
                <AnimatedStat className="flex flex-col">
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-2 italic">
                    14<span className="text-primary text-3xl">h</span>
                  </h3>
                  <p className="text-blue-300 uppercase tracking-widest text-sm font-bold">
                    Cut-off Time
                  </p>
                </AnimatedStat>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Latest News */}
      {/* <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <h2 className="text-center mb-16 text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                News
              </span>
            </h2>
          </FadeInUp>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {[
              {
                date: "JAN 15, 2025",
                title: "Race Results Published",
                desc: "Check out the official results for the 2025 edition.",
                link: "/news/1",
              },
              {
                date: "DEC 01, 2024",
                title: "Course Update",
                desc: "Important changes to checkpoint 5 due to maintenance.",
                link: "#",
              },
              {
                date: "NOV 10, 2024",
                title: "Volunteer Roles Fulfilled",
                desc: "All volunteer positions have been filled. Thank you!",
                link: "#",
              },
            ].map((news, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="design-box h-full group cursor-pointer flex flex-col p-0 overflow-hidden"
                  initial={{ skewX: -6 }}
                  whileHover={{
                    y: -10,
                    x: 5,
                    skewX: -6,
                    boxShadow: "8px 8px 0px 0px rgba(42, 107, 242, 0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-48 bg-blue-900/30 overflow-hidden relative w-[110%] -ml-[5%] origin-center scale-105">
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-2 right-4 bg-primary text-black text-[10px] font-bold px-2 py-0.5 skew-x-[-12deg]">
                      NEWS
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-xs text-primary font-bold block mb-2 tracking-widest">
                      {news.date}
                    </span>
                    <h4 className="text-xl font-black mb-3 text-white group-hover:text-primary transition-colors uppercase italic leading-none">
                      {news.title}
                    </h4>
                    <p className="text-blue-200/80 mb-6 text-sm leading-relaxed flex-grow">
                      {news.desc}
                    </p>
                    <Link
                      to={news.link}
                      className="self-start inline-block border border-white/30 hover:border-primary hover:text-primary text-white font-bold text-xs px-4 py-2 uppercase tracking-wider transition-all skew-x-[-12deg]"
                    >
                      <span className="skew-x-[12deg] inline-block">
                        Read More
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Race Categories Section */}
      <section className="py-20 relative z-10 bg-black/30 backdrop-blur-[2px] border-y border-white/5">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <h2 className="text-center mb-4 text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Race <span className="text-primary">Categories</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Choose your challenge - from the ultimate 50KM ultra to the
              accessible 12KM experience
            </p>
          </FadeInUp>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            staggerDelay={0.15}
          >
            {/* 50KM Card */}
            <StaggerItem>
              <motion.div
                className="relative bg-[#0a193c] border border-white/10 p-8 group overflow-hidden"
                whileHover={{ y: -5, borderColor: "rgba(22, 163, 74, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/30 translate-x-3 -translate-y-3" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/30 -translate-x-3 translate-y-3" />

                <div className="absolute top-4 right-4 bg-primary text-black text-xs font-black px-3 py-1 -skew-x-12">
                  <span className="skew-x-12 block">ULTRA</span>
                </div>

                <h3 className="text-5xl md:text-6xl font-black text-white mb-2 italic">
                  50<span className="text-primary">KM</span>
                </h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-6">
                  Challenge
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">Distance</span>
                    <span className="text-white font-bold">51.7 km</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">
                      Elevation Gain
                    </span>
                    <span className="text-white font-bold">2,900m</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">Cut-off Time</span>
                    <span className="text-white font-bold">14 hours</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">
                      Registration Fee
                    </span>
                    <span className="text-primary font-bold">HKD 790</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">
                      Early Bird Price
                    </span>
                    <span className="text-yellow-400 font-bold">HKD 720</span>
                  </div>
                </div>

                <p className="text-xs text-yellow-400 mb-4">
                  Early Bird discount available until Feb 5, 2026
                </p>

                <Link
                  to="/race-info"
                  state={{ activeTab: "50KM" }}
                  className="inline-block border border-primary/50 hover:bg-primary hover:text-black text-primary font-bold text-xs px-6 py-3 uppercase tracking-wider transition-all"
                >
                  View Details
                </Link>
              </motion.div>
            </StaggerItem>

            {/* 12KM Card */}
            <StaggerItem>
              <motion.div
                className="relative bg-[#0a193c] border border-white/10 p-8 group overflow-hidden"
                whileHover={{ y: -5, borderColor: "rgba(22, 163, 74, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/30 translate-x-3 -translate-y-3" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/30 -translate-x-3 translate-y-3" />

                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-black px-3 py-1 -skew-x-12">
                  <span className="skew-x-12 block">FUN RUN</span>
                </div>

                <h3 className="text-5xl md:text-6xl font-black text-white mb-2 italic">
                  12<span className="text-primary">KM</span>
                </h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-6">
                  Experience
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">Distance</span>
                    <span className="text-white font-bold">12.5 km</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">
                      Elevation Gain
                    </span>
                    <span className="text-white font-bold">659m</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">Cut-off Time</span>
                    <span className="text-white font-bold">4 hours</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">
                      Registration Fee
                    </span>
                    <span className="text-primary font-bold">HKD 390</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">
                      Early Bird Price
                    </span>
                    <span className="text-yellow-400 font-bold">HKD 350</span>
                  </div>
                </div>

                <p className="text-xs text-yellow-400 mb-4">
                  Early Bird discount available until Feb 5, 2026
                </p>

                <Link
                  to="/race-info"
                  state={{ activeTab: "12KM" }}
                  className="inline-block border border-primary/50 hover:bg-primary hover:text-black text-primary font-bold text-xs px-6 py-3 uppercase tracking-wider transition-all"
                >
                  View Details
                </Link>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          <FadeInUp delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/registration" className="relative group inline-block">
                <span className="absolute inset-0 bg-[#2a6bf2] -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10"></span>
                <span className="relative block bg-[#ff8fa3] -skew-x-12 px-10 py-4 hover:-translate-y-0.5 transition-transform border border-white/10">
                  <span className="block font-black italic uppercase text-[#0a193c] tracking-widest text-sm">
                    Register Now
                  </span>
                </span>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <h2 className="text-center mb-4 text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Our <span className="text-primary">Sponsors</span>
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Proudly supported by
            </p>
          </FadeInUp>

          <StaggerContainer className="flex flex-wrap justify-center items-center gap-10" staggerDelay={0.1}>
            {[
              { src: '/sponsor1.jpeg', alt: 'Escape Wanchai Hong Kong', href: 'https://www.escapehk.com/' },
              { src: '/sponsor2.jpeg', alt: 'Bar 109 Wanchai Hong Kong', href: 'https://www.bar109.hk/' },
              { src: '/sponsor3.jpeg', alt: 'Gurkha Force Security Limited', href: 'https://www.gurkhahk.site/' },
              { src: '/sponsor4.jpeg', alt: 'Migalpha', href: 'https://www.migalpha.com/' },
              { src: '/sponsor5.jpeg', alt: 'Sponsor 5' },
            ].map((sponsor, i) => (
              <StaggerItem key={i}>
                {sponsor.href ? (
                  <motion.a
                    href={sponsor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-sm p-6 flex items-center justify-center w-64 h-40"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={sponsor.src} alt={sponsor.alt} className="max-w-full max-h-full object-contain" />
                  </motion.a>
                ) : (
                  <div className="bg-white rounded-sm p-6 flex items-center justify-center w-64 h-40">
                    <img src={sponsor.src} alt={sponsor.alt} className="max-w-full max-h-full object-contain" />
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.3}>
            <p className="text-center text-[10px] uppercase tracking-widest text-gray-600 font-bold mt-16 mb-8">Brand Partners</p>
          </FadeInUp>
          <StaggerContainer className="flex flex-wrap justify-center items-center gap-8" staggerDelay={0.1}>
            {[
              { src: '/brand1.jpeg', alt: 'T8', href: 'https://t8.run/' },
              { src: '/brand2.jpeg', alt: 'Blue Mountain Sports', href: 'https://bluemountainsports.hk/' },
              { src: '/brand3.jpeg', alt: 'Spider Outdoor', href: 'https://spideroutdoor.com/' },
            ].map((brand, i) => (
              <StaggerItem key={i}>
                <motion.a
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-sm p-4 flex items-center justify-center w-48 h-28"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={brand.src} alt={brand.alt} className="max-w-full max-h-full object-contain" />
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 pb-32 relative z-10 bg-black/30 backdrop-blur-[2px] border-t border-white/5">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <h2 className="text-center mb-16 text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              FAQ<span className="text-primary">s</span>
            </h2>
          </FadeInUp>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            staggerDelay={0.1}
          >
            {[
              {
                q: "What is the qualifying criteria?",
                a: "Participants must be at least 18 years of age on the date that their applicable race starts for the 50 km. 參加者必須於50KM賽比賽當日最少年滿18歲。",
              },
              {
                q: "Is there mandatory gear?",
                a: "Yes, all runners must carry a windproof jacket, 1L water, survival blanket, whistle, and mobile phone.",
              },
              {
                q: "Can I have a pacer?",
                a: "Feel the Himalayan thrill, challenge yourself! No pacers allowed.",
              },
              {
                q: "What is the refund policy?",
                a: "DO you really want to quit?If yes then 50% refund is available until Feb 10th, 2026. No refunds after that date. Deferrals allowed for medical reasons.",
              },
            ].map((faq, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="design-box h-full group"
                  initial={{ skewX: -6 }}
                  whileHover={{
                    x: 5,
                    y: -5,
                    skewX: -6,
                    borderColor: "var(--color-primary)",
                    boxShadow: "6px 6px 0px 0px rgba(42, 107, 242, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl text-primary font-black uppercase italic mb-3 group-hover:text-white transition-colors">
                    {faq.q}
                  </h3>
                  <p className="text-blue-200 leading-relaxed text-base">
                    {faq.a}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
