import PageHeader from "@/components/PageHeader";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { motion, AnimatePresence } from "framer-motion";
import RaceMap from "@/components/RaceMap";
import ElevationChart from "@/components/ElevationChart";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollAnimations";
import { Calendar, Clock, MapPin, User } from "lucide-react";

type RaceCategory = "50KM" | "12KM";

const raceData = {
  "50KM": {
    name: "50KM Challenge",
    description:
      "The 50KM Challenge is a rigorous test of endurance, traversing the most scenic and challenging parts of Tai Mo Shan. Suitable for experienced trail runners, this course offers significantly high elevation gain and technical descents.",
    elevation: { gain: "2,900m", loss: "2,400m" },
    gpxFile: "/HIMALAYAN HARMONY 50.gpx",
    checkpoints: [
      {
        name: "Start - Tai Mo Shan",
        dist: "0 km",
        cutoff: "06:30 - 08:30",
        refreshment: "Nepalese Cultural Show",
      },
      {
        name: "CP1 - Shing Mun",
        dist: "9.4 km",
        cutoff: "08:00 - 10:30",
        refreshment: "Aid, Food, Drinks",
      },
      {
        name: "CP2 - Shatin Pass",
        dist: "23.6 km",
        cutoff: "09:00 - 12:30",
        refreshment: "Aid, Food, Drinks",
      },
      {
        name: "CP3 - Shing Mun",
        dist: "35.2 km",
        cutoff: "10:30 - 15:00",
        refreshment: "Aid, Food, Drinks",
      },
      {
        name: "CP4 - Lead Mine Pass",
        dist: "42.2 km",
        cutoff: "11:30 - 18:00",
        refreshment: "Aid, Food, Drinks",
      },
      {
        name: "WP5 - Sze Fong Shan",
        dist: "45.6 km",
        cutoff: "12:00 - 19:00",
        refreshment: "Water Only",
      },
      {
        name: "Finish - Tai Mo Shan",
        dist: "50 km",
        cutoff: "12:30 - 22:00",
        refreshment: "Aid, Food, Drinks",
      },
    ],
    date: "22 Mar 2026",
    day: "Sunday",
    startTime: "08:00",
    cutoff: "14h Cut-off",
    location: "Tai Mo Shan",
    venue: "Rotary Park",
    minAge: "18+ Years",
    registrationFee: "HKD 790",
    categories: ["18-39", "40-49", "50 above"],
  },
  "12KM": {
    name: "12KM Experience",
    description:
      "A fast and beautiful introductory course. Perfect for beginners or speedsters looking to blast through the trails. Enjoy the lush greenery of Tai Mo Shan without the extreme distance.",
    elevation: { gain: "659m", loss: "650m" },
    gpxFile: "/Himalayan Harmony 12KM.gpx",
    checkpoints: [
      {
        name: "Start - Tai Mo Shan",
        dist: "0 km",
        cutoff: "07:30 - 09:30",
        refreshment: "Nepalese Cultural Show",
      },
      {
        name: "CP1 - Sze Fong Shan",
        dist: "6.3 km",
        cutoff: "09:30 - 11:30",
        refreshment: "Aid, Food, Drinks",
      },
      {
        name: "Finish - Tai Mo Shan",
        dist: "12.5 km",
        cutoff: "10:00 - 13:00",
        refreshment: "Aid, Food, Drinks",
      },
    ],
    date: "22 Mar 2026",
    day: "Sunday",
    startTime: "07:30 - 09:30",
    cutoff: "5.5h Cut-off",
    location: "Tai Mo Shan",
    venue: "Rotary Park",
    minAge: "18+ Years",
    registrationFee: "HKD 390",
    categories: ["12-13", "14-15", "16-17", "18-39", "40-49", "50 above"],
  },
};

export default function RaceInfoPage() {
  usePageTitle("Race Info");
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<RaceCategory>("50KM");

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  const content = raceData[activeTab];

  const handleDownloadGPX = () => {
    const link = document.createElement("a");
    link.href = content.gpxFile;
    link.download = content.gpxFile.replace("/", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <PageHeader title="The Race" subtitle="Course Maps & Details" />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <FadeInUp>
          <div className="flex justify-center mb-8 md:mb-12 flex-wrap gap-4 md:gap-6">
            {(Object.keys(raceData) as RaceCategory[]).map((tab) => (
              <button
                key={tab}
                className="relative group inline-block"
                onClick={() => setActiveTab(tab)}
              >
                <span
                  className={`absolute inset-0 -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10 ${
                    activeTab === tab ? "bg-[#2a6bf2]" : "bg-[#2a6bf2]/50"
                  }`}
                ></span>
                <span
                  className={`relative block -skew-x-12 px-6 md:px-10 py-3 md:py-4 hover:-translate-y-0.5 transition-transform border border-white/10 ${
                    activeTab === tab ? "bg-[#ff8fa3]" : "bg-background"
                  }`}
                >
                  <span
                    className={`block font-black italic uppercase tracking-widest text-xs md:text-sm ${
                      activeTab === tab ? "text-[#0a193c]" : "text-gray-400"
                    }`}
                  >
                    {raceData[tab].name}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </FadeInUp>

        <section className="space-y-8 md:space-y-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-white uppercase italic">
                {content.name} Course
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {content.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Race Info Grid */}
          <FadeInUp delay={0.15}>
            <motion.div
              key={`info-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic">
                  Race Details
                </h3>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-black text-primary">
                    {content.registrationFee}
                  </span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">
                    Registration Fee
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    (HKD 50 goes to{" "}
                    <a
                      href="https://exchangeandempower.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors"
                    >
                      Exchange and Empower
                    </a>
                    )
                  </span>
                </div>
              </div>

              {/* Exchange and Empower Info */}
              <div className="bg-primary/10 border border-primary/30 p-4 mb-6 rounded">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-300 mb-2">
                      <strong className="text-primary">HKD 50</strong> from your
                      registration fee goes to{" "}
                      <a
                        href="https://exchangeandempower.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white transition-colors font-bold"
                      >
                        Exchange and Empower
                      </a>
                      , a Hong Kong based charity founded in 2018 that supports
                      women from disadvantaged communities in Asia through the
                      sport of trail running.
                    </p>
                    <p className="text-xs text-gray-400">
                      Exchange and Empower's programs support women and children
                      from rural Nepal and women working in Hong Kong as foreign
                      domestic helpers. Through workshops, social hikes and
                      training programs, athletes are empowered to build
                      self-confidence and act as role models for other women in
                      their communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-black/20 p-3 border border-white/5 rounded">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Calendar size={16} />
                    <span className="text-xs uppercase font-bold">Date</span>
                  </div>
                  <div className="font-bold text-white text-sm">
                    {content.date}
                  </div>
                  <div className="text-xs text-gray-500">{content.day}</div>
                </div>
                <div className="bg-black/20 p-3 border border-white/5 rounded">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Clock size={16} />
                    <span className="text-xs uppercase font-bold">
                      Start Time
                    </span>
                  </div>
                  <div className="font-bold text-white text-sm">
                    {content.startTime}
                  </div>
                  <div className="text-xs text-gray-500">{content.cutoff}</div>
                </div>
                <div className="bg-black/20 p-3 border border-white/5 rounded">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <MapPin size={16} />
                    <span className="text-xs uppercase font-bold">
                      Location
                    </span>
                  </div>
                  <div className="font-bold text-white text-sm">
                    {content.location}
                  </div>
                  <div className="text-xs text-gray-500">{content.venue}</div>
                </div>
                <div className="bg-black/20 p-3 border border-white/5 rounded">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <User size={16} />
                    <span className="text-xs uppercase font-bold">Age</span>
                  </div>
                  <div className="font-bold text-white text-sm">
                    {content.minAge}
                  </div>
                  <div className="text-xs text-gray-500">Min. Age</div>
                </div>
              </div>

              {/* Age Categories */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="text-xs uppercase font-bold text-gray-400 tracking-widest">
                    Age Categories:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {content.categories.map((age, i) => (
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
            </motion.div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <motion.div
              className="bg-white/5 border border-white/10 overflow-hidden"
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 md:p-6 lg:p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic">
                  Course Map
                </h3>
                <button
                  onClick={handleDownloadGPX}
                  className="relative group inline-block"
                >
                  <span className="absolute inset-0 bg-[#2a6bf2] -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10"></span>
                  <span className="relative block bg-background -skew-x-12 px-6 py-2 hover:-translate-y-0.5 transition-transform border border-white/10">
                    <span className="block font-black italic uppercase text-white tracking-widest text-xs">
                      Download GPX
                    </span>
                  </span>
                </button>
              </div>
              <div className="p-0 bg-black/40 h-[300px] md:h-[400px] lg:h-[500px] w-full relative z-0">
                <RaceMap
                  key={activeTab}
                  gpxFile={content.gpxFile}
                  checkpoints={content.checkpoints}
                />
              </div>
            </motion.div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <FadeInLeft delay={0.1}>
              <motion.div
                className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300 h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic mb-4 md:mb-8 border-b border-white/10 pb-4">
                  Elevation Profile
                </h3>
                <div className="h-40 md:h-48 bg-black/30 mb-6 md:mb-8 border border-white/10 overflow-hidden">
                  <ElevationChart raceType={activeTab} />
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  <div className="bg-black/30 p-4 md:p-6 text-center border border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                    <strong className="block text-gray-400 uppercase text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">
                      Gain
                    </strong>
                    <span className="text-xl md:text-3xl font-black text-primary">
                      {content.elevation.gain}
                    </span>
                  </div>
                  <div className="bg-black/30 p-4 md:p-6 text-center border border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                    <strong className="block text-gray-400 uppercase text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">
                      Loss
                    </strong>
                    <span className="text-xl md:text-3xl font-black text-white">
                      {content.elevation.loss}
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeInLeft>

            <FadeInRight delay={0.2}>
              <motion.div
                className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300 h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic mb-4 md:mb-8 border-b border-white/10 pb-4">
                  Checkpoints
                </h3>
                <div className="space-y-2 md:space-y-4 overflow-x-auto">
                  <div className="grid grid-cols-4 text-[10px] md:text-xs uppercase text-gray-500 font-bold italic tracking-widest pb-2 border-b border-white/5 px-2 min-w-100">
                    <div>CP</div>
                    <div>Distance</div>
                    <div>Cut-off</div>
                    <div>Refreshment</div>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {content.checkpoints.map((cp, idx) => {
                        const isStart = cp.name.toLowerCase().includes("start");
                        const isFinish = cp.name
                          .toLowerCase()
                          .includes("finish");
                        return (
                          <motion.div
                            key={idx}
                            className={`grid grid-cols-4 py-3 md:py-4 border-b border-white/5 last:border-0 px-2 min-w-100 hover:bg-white/5 transition-colors cursor-pointer ${
                              isStart
                                ? "bg-green-500/10 border-l-2 border-l-green-500"
                                : ""
                            } ${
                              isFinish
                                ? "bg-red-500/10 border-l-2 border-l-red-500"
                                : ""
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div
                              className={`font-medium text-xs md:text-sm truncate pr-2 italic ${
                                isStart
                                  ? "text-green-400"
                                  : isFinish
                                  ? "text-red-400"
                                  : "text-white"
                              }`}
                            >
                              {cp.name}
                            </div>
                            <div className="font-mono text-primary text-xs md:text-sm italic">
                              {cp.dist}
                            </div>
                            <div className="font-mono text-gray-300 text-xs md:text-sm italic">
                              {cp.cutoff}
                            </div>
                            <div className="text-gray-400 text-xs md:text-sm italic">
                              {cp.refreshment}
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </FadeInRight>
          </div>

          {/* Switch Race Button */}
          <FadeInUp delay={0.25}>
            <div className="flex justify-center">
              <button
                onClick={() =>
                  setActiveTab(activeTab === "50KM" ? "12KM" : "50KM")
                }
                className="relative group inline-block"
              >
                <span className="absolute inset-0 bg-[#2a6bf2] -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10"></span>
                <span className="relative block bg-[#ff8fa3] -skew-x-12 px-8 py-3 hover:-translate-y-0.5 transition-transform border border-white/10">
                  <span className="block font-black italic uppercase text-[#0a193c] tracking-widest text-sm">
                    View{" "}
                    {activeTab === "50KM"
                      ? "12KM Experience"
                      : "50KM Challenge"}
                  </span>
                </span>
              </button>
            </div>
          </FadeInUp>

          {/* Rules Section using Design Box */}
          <FadeInUp delay={0.3}>
            <motion.div
              className="design-box border-l-4 border-l-primary"
              initial={{ skewX: -6 }}
              whileHover={{
                scale: 1.01,
                skewX: -6,
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-4 md:mb-6">
                Rules & Regulations
              </h3>
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-4"
                staggerDelay={0.05}
              >
                {[
                  "Participants must be self-sufficient and carry mandatory gear at all times.",
                  "Littering on the course is strictly prohibited and will result in immediate disqualification.",
                  "Bib numbers must be worn on the front and visible at all times.",
                  "Helping other runners in distress is mandatory; time lost will be adjusted.",
                  "The race director reserves the right to modify the course due to weather conditions.",
                  "Supporters provided by runners are only allowed at designated checkpoints.",
                  "Age Categories: 18-39, 40-49 and 50 above.",
                ].map((rule, i) => (
                  <StaggerItem key={i}>
                    <motion.li
                      className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base list-none"
                      whileHover={{ x: 5, color: "#fff" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-primary mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary block"></span>
                      <span>{rule}</span>
                    </motion.li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </FadeInUp>
        </section>
      </div>
    </div>
  );
}
