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
        <motion.img
          src="/hero-bg.png"
          alt="Trail Runner on Ridge"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80 mix-blend-overlay"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
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
              <strong className="text-xs md:text-sm text-primary tracking-wide">
                HKNUTRA
              </strong>
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
                The Himalayan Harmony is an ultra endurance race that takes
                place in Hong Kong, starting in Pak Tam Chung on the Sai Kung
                Peninsula and covering some of the most beautiful trails in Hong
                Kong, including the MacLehose Trail. The race finishes at the
                summit of Tai Mo Shan, Hong Kong's highest peak.
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
                    2494<span className="text-primary text-3xl">m+</span>
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
                title: "Volunteer Recruitment",
                desc: "Join our team and be part of the adventure.",
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
                    <span className="text-white font-bold">2,494m</span>
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
                </div>

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
                    <span className="text-white font-bold">5.5 hours</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">
                      Registration Fee
                    </span>
                    <span className="text-primary font-bold">HKD 390</span>
                  </div>
                </div>

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

          <StaggerContainer className="space-y-12" staggerDelay={0.1}>
            {/* Title Sponsor */}
            <StaggerItem>
              <div className="text-center">
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-6">
                  Title Sponsor
                </p>
                <div className="flex justify-center">
                  <motion.div
                    className="bg-white/5 border border-white/10 px-12 py-8 hover:border-primary/50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/06/Logo-google-transparent-background-PNG.png"
                      alt="Google"
                      className="h-10 md:h-12 w-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </StaggerItem>

            {/* Gold Sponsors */}
            <StaggerItem>
              <div className="text-center">
                <p className="text-xs text-yellow-500 font-bold uppercase tracking-widest mb-6">
                  Gold Sponsors
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    {
                      name: "Meta",
                      logo: "https://i.pinimg.com/736x/b7/06/fa/b706fa17832e8854ee125404a655f0df.jpg",
                    },
                    {
                      name: "Pinterest",
                      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
                    },
                    {
                      name: "Spotify",
                      logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
                    },
                  ].map((sponsor, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/5 border border-white/10 px-8 py-6 hover:border-yellow-500/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-8 md:h-10 w-auto max-w-30 object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>

            {/* Silver Sponsors */}
            <StaggerItem>
              <div className="text-center">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">
                  Silver Sponsors
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    {
                      name: "WhatsApp",
                      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                    },
                    {
                      name: "Slack",
                      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
                    },
                    {
                      name: "Notion",
                      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
                    },
                    {
                      name: "Figma",
                      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                    },
                  ].map((sponsor, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/5 border border-white/10 px-6 py-4 hover:border-gray-400/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-6 md:h-8 w-auto max-w-25 object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeInUp delay={0.3}>
            <div className="mt-16 pt-10 border-t border-white/5 flex justify-center">
              <div className="flex flex-col items-center">
                {/* <Link
                  to="/sponsorship"
                  className="btn btn-outline text-xs px-6 py-3 border-white/20 text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10"
                >
                  <span>Become a Sponsor</span>
                </Link> */}
                <p className="text-[10px] text-gray-600 mt-3 uppercase tracking-widest">
                  Partner with us
                </p>
                <a
                  href="mailto:hknutra@gmail.com"
                  className="text-sm text-primary hover:text-white transition-colors mt-2"
                >
                  hknutra@gmail.com
                </a>
              </div>
            </div>
          </FadeInUp>
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
