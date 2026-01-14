"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "./animations/ScrollAnimations";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-white/5 overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-10 md:mb-16">
          {/* Brand Section */}
          <FadeInUp className="space-y-4 md:space-y-6 col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <motion.h3
                className="text-2xl md:text-3xl font-black tracking-tighter text-white"
                whileHover={{ scale: 1.02 }}
              >
                HIMALAYAN <br></br>
                <span className="text-primary">HARMONY</span>
              </motion.h3>
            </Link>
            <p className="text-gray-400 leading-relaxed font-light text-xs md:text-sm">
              Push your limits in the heart of the mountains. The ultimate
              endurance challenge awaiting your spirit.
            </p>
          </FadeInUp>

          {/* Check out links */}
          <FadeInUp delay={0.1}>
            <h4 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mb-4 md:mb-8 border-l-2 border-primary pl-3">
              Explore
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Race Info", path: "/race-info" },
                { name: "News", path: "/news" },
                { name: "Results", path: "/results" },
                {
                  name: "HKNUTRA",
                  path: "https://hknutra.com",
                  external: true,
                },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {(link as any).external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-xs md:text-sm"
                    >
                      <motion.span
                        className="w-0 h-[1px] bg-primary mr-0 transition-all duration-300"
                        whileHover={{ width: 8, marginRight: 8 }}
                      />
                      <motion.span whileHover={{ x: 5 }}>
                        {link.name}
                      </motion.span>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-xs md:text-sm"
                    >
                      <motion.span
                        className="w-0 h-[1px] bg-primary mr-0 transition-all duration-300"
                        whileHover={{ width: 8, marginRight: 8 }}
                      />
                      <motion.span whileHover={{ x: 5 }}>
                        {link.name}
                      </motion.span>
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </FadeInUp>

          {/* Participant Links */}
          <FadeInUp delay={0.2}>
            <h4 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mb-4 md:mb-8 border-l-2 border-primary pl-3">
              Participants
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Registration", path: "/registration" },
                { name: "Login", path: "/login" },
                { name: "Rule Book", path: "/race-info" },
                { name: "FAQ", path: "/race-info" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-xs md:text-sm"
                  >
                    <motion.span
                      className="w-0 h-[1px] bg-primary mr-0 transition-all duration-300"
                      whileHover={{ width: 8, marginRight: 8 }}
                    />
                    <motion.span whileHover={{ x: 5 }}>{link.name}</motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </FadeInUp>

          {/* Contact */}
          <FadeInUp delay={0.3} className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mb-4 md:mb-8 border-l-2 border-primary pl-3">
              Contact
            </h4>
            <div className="space-y-3 md:space-y-4 text-gray-400 text-xs md:text-sm font-light">
              <p>
                G/F, 874 Canton Road,
                <br />
                Yau Ma Tei, Kowloon, Hong Kong
              </p>
              <p>
                <a
                  href="mailto:himalaynharmony@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  himalaynharmony@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+85268443741"
                  className="hover:text-primary transition-colors"
                >
                  6844 3741
                </a>
              </p>
              <div className="flex gap-3 mt-4 md:mt-6">
                <motion.a
                  href="https://www.facebook.com/hknutra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "#1877F2",
                    color: "#fff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              </div>
            </div>
          </FadeInUp>
        </div>

        <motion.div
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Himalayan Harmony. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <motion.div whileHover={{ color: "rgb(22, 163, 74)" }}>
              <Link to="#">Privacy Policy</Link>
            </motion.div>
            <motion.div whileHover={{ color: "rgb(22, 163, 74)" }}>
              <Link to="#">Terms of Service</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
