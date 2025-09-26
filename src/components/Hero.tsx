import { motion } from "framer-motion";
import React from "react";
import { FiArrowRight, FiShield, FiWifi, FiZap } from "react-icons/fi";

import heroImg from "../assets/Orion-Pro-HQ-German-Quality.png";

interface HeroProps {
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Kiri: Teks dan Fitur */}
          <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 md:mb-5 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Orion+
                </span>
                <br />
                <span className="text-2xl md:text-3xl font-light text-slate-300">
                  Smart Home
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-xl text-slate-400 mb-6 md:mb-8 max-w-xl leading-relaxed mx-auto md:mx-0"
              >
                Integrasi Cerdas untuk Hunian Masa Depan
              </motion.p>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-8 w-full"
            >
              {[
                { icon: FiWifi, text: "WiFi Connected", color: "text-cyan-400" },
                { icon: FiShield, text: "Secure & Safe", color: "text-blue-400" },
                { icon: FiZap, text: "Energy Efficient", color: "text-green-400" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="flex flex-col items-center space-y-1 p-3 rounded-xl bg-slate-800/40 backdrop-blur border border-slate-700/40 min-w-[90px]"
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  <span className="text-xs md:text-sm text-slate-300 font-medium mt-1">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(100, 255, 218, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onExploreProducts}
              className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-full overflow-hidden transition-all duration-300 mt-2"
            >
              <span className="relative z-10">Jelajahi Produk</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <FiArrowRight className="w-5 h-5" />
              </motion.div>

              {/* Button Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>
          </div>

          {/* Kanan: Hero Image */}
          <div className="flex-1 flex justify-center md:justify-end items-center mb-10 md:mb-0">
            <motion.img
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
              src={heroImg}
              alt="Orion Smart Home Hero"
              className="w-[260px] sm:w-[320px] md:w-[500px] lg:w-[580px] rounded-3xl shadow-2xl border-4 border-cyan-400/30 bg-slate-900/40 object-cover"
              style={{ boxShadow: "0 8px 40px 0 rgba(0,255,255,0.10)" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
