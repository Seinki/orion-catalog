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
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showCategory, setShowCategory] = React.useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  React.useEffect(() => {
    if (!showCategory) return;
    const handleClick = (e: MouseEvent) => {
      const dropdown = document.getElementById('category-dropdown');
      if (dropdown && !dropdown.contains(e.target as Node)) {
        setShowCategory(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showCategory]);

  return (
    <div id="products" className="min-h-screen bg-slate-900 pt-20">
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

        {/* Search & Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
        >
          <div className="relative flex items-center w-full md:w-auto gap-2">
            <button
              type="button"
              onClick={() => setShowCategory(v => !v)}
              className="p-2 rounded-full bg-slate-700 text-slate-400 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Pilih Kategori"
            >
              <FiFilter size={20} />
            </button>
            {showCategory && (
              <div id="category-dropdown" className="absolute left-0 top-10 z-10 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-lg py-2 animate-fade-in">
                <button
                  onClick={() => { setSelectedCategory('all'); setShowCategory(false); }}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedCategory === 'all' ? 'bg-cyan-400 text-slate-900' : 'text-slate-200 hover:bg-slate-700 hover:text-cyan-400'}`}
                >
                  Semua Produk
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => { setSelectedCategory(category); setShowCategory(false); }}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedCategory === category ? 'bg-cyan-400 text-slate-900' : 'text-slate-200 hover:bg-slate-700 hover:text-cyan-400'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Cari produk, model, atau fitur..."
            className="w-full max-w-md px-4 py-2 rounded-full bg-slate-700 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
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