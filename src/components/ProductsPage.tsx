import React from 'react';
import { motion } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';
import { products, categories } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Product } from '../types';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Katalog <span className="text-cyan-400">Produk</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Temukan solusi smart home terdepan untuk hunian masa depan Anda
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center space-x-2 text-slate-400">
            <FiFilter size={20} />
            <span className="font-medium">Kategori:</span>
          </div>
          
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-cyan-400 text-slate-900'
                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-cyan-400'
            }`}
          >
            Semua Produk
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-cyan-400'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard
                product={product}
                onViewDetails={handleViewDetails}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-400 text-lg">
              Tidak ada produk dalam kategori ini.
            </p>
          </motion.div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};