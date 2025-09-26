import { motion } from "framer-motion";
import React from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import logo from "../assets/orion-logo.png";
import { useCartStore } from "../store/cartStore";

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onPageChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const navItems = [
    { name: "Beranda", key: "home" },
    { name: "Produk", key: "products" },
    { name: "Dukungan", key: "support" },
    { name: "Kontak", key: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-400/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onPageChange("home")}
          >
            {/* <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="orion-logo" width={35} />
              <span>
                <h1 className="text-white font-bold text-xl">Orion+</h1>
                <p className="text-cyan-400 text-xs">Smart Home</p>
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange(item.key)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.key
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item.name}
                {currentPage === item.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleCart}
              className="relative p-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <FiShoppingCart size={20} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-400 text-slate-900 rounded-full text-xs font-bold flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-slate-700"
          >
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  onPageChange(item.key);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  currentPage === item.key
                    ? "text-cyan-400 bg-slate-800/50"
                    : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/30"
                }`}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
