import { motion } from "framer-motion";
import React from "react";
import { FiArrowRight, FiShield, FiWifi, FiZap } from "react-icons/fi";

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
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Orion+
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-light text-slate-300">
                Smart Home
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Integrasi Cerdas untuk Hunian Masa Depan
            </motion.p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { icon: FiWifi, text: "WiFi Connected", color: "text-cyan-400" },
              { icon: FiShield, text: "Secure & Safe", color: "text-blue-400" },
              {
                icon: FiZap,
                text: "Energy Efficient",
                color: "text-green-400",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50"
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
                <span className="text-sm text-slate-300 font-medium">
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
            className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-full overflow-hidden transition-all duration-300"
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Smart Products" },
              { number: "10K+", label: "Happy Homes" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
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
