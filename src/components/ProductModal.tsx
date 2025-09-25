import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiShoppingCart } from 'react-icons/fi';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const { addItem } = useCartStore();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-800 rounded-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors"
            >
              <FiX size={20} />
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 md:h-96 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30 backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
                  <p className="text-slate-400 mb-4">Model: {product.model}</p>
                  <p className="text-slate-300 leading-relaxed">{product.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-cyan-400">${product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddToCart}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      isAdded
                        ? 'bg-green-500 text-white'
                        : 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                    }`}
                  >
                    <motion.div
                      animate={{ rotate: isAdded ? 360 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isAdded ? <FiCheck size={20} /> : <FiShoppingCart size={20} />}
                    </motion.div>
                    <span>{isAdded ? 'Ditambahkan!' : 'Tambah ke Keranjang'}</span>
                  </motion.button>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Fitur Utama</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <span className="text-slate-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Spesifikasi</h3>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex justify-between py-2 border-b border-slate-700/50"
                      >
                        <span className="text-slate-400">{key}</span>
                        <span className="text-slate-300 font-medium">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};