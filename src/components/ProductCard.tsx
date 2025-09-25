import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiCheck } from 'react-icons/fi';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        boxShadow: '0 20px 40px rgba(100, 255, 218, 0.2)' 
      }}
      transition={{ duration: 0.3 }}
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30 backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-slate-400 mb-1">Model: {product.model}</p>
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-md"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 2 && (
              <span className="px-2 py-1 text-xs text-slate-400">
                +{product.features.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-cyan-400">
              ${product.price}
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className={`relative p-3 rounded-full transition-all duration-300 ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
            }`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isAdded ? 360 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isAdded ? <FiCheck size={20} /> : <FiPlus size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/20 rounded-2xl transition-all duration-300" />
    </motion.div>
  );
};