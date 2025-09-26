import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiTrash2, FiMessageCircle } from 'react-icons/fi';
import { useCartStore } from '../store/cartStore';
import { generateWhatsAppMessage, openWhatsApp } from '../utils/whatsapp';

export const CartModal: React.FC = () => {
  const {
    items,
    isOpen,
    toggleCart,
    updateQuantity,
    removeItem,
    clearCart,
  // getTotalPrice
  } = useCartStore();



  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage(items);
    openWhatsApp(message);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={toggleCart}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.8, opacity: 0, x: 100 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md max-h-[90vh] bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white">Keranjang Belanja</h2>
              <div className="flex items-center space-x-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                    title="Kosongkan Keranjang"
                  >
                    <FiTrash2 size={18} />
                  </button>
                )}
                <button
                  onClick={toggleCart}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto max-h-96">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4">
                    <FiMessageCircle className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Keranjang Kosong</h3>
                  <p className="text-slate-400 text-sm">Tambahkan produk untuk mulai berbelanja</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-white truncate">{item.name}</h3>
                        <p className="text-sm text-slate-400">{item.model}</p>

                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-slate-400 hover:text-white transition-colors"
                        >
                          <FiMinus size={16} />
                        </button>
                        
                        <span className="w-8 text-center text-white font-medium">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-slate-400 hover:text-white transition-colors"
                        >
                          <FiPlus size={16} />
                        </button>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 ml-2 text-slate-400 hover:text-red-400 transition-colors"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-white">Total:</span>
                  <span className="text-base font-medium text-slate-400 italic">Hubungi Admin</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300"
                >
                  <FiMessageCircle size={20} />
                  <span>Pesan via WhatsApp</span>
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};