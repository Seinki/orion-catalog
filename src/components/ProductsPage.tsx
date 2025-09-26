import React from 'react';
import { motion } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';
import { products } from '../data/products';
// Mapping kategori manusiawi berdasarkan kata kunci pada nama produk
const humanCategories = [
  { key: 'Switch', label: 'Saklar Pintar' },
  { key: 'Socket', label: 'Stop Kontak Pintar' },
  { key: 'Control Center', label: 'Panel Kontrol' },
  { key: 'Panel', label: 'Panel Kontrol' },
  { key: 'Gateway', label: 'Gateway Zigbee/WiFi' },
  { key: 'Camera', label: 'Kamera & CCTV' },
  { key: 'IP camera', label: 'Kamera & CCTV' },
  { key: 'Lock', label: 'Kunci Pintu Pintar' },
  { key: 'Curtain', label: 'Motor Tirai' },
  { key: 'Light', label: 'Lampu & Strip LED' },
  { key: 'LED', label: 'Lampu & Strip LED' },
  { key: 'Sensor', label: 'Sensor' },
  { key: 'Doorbell', label: 'Bel Pintu Pintar' },
  { key: 'Repeater', label: 'Sensor' },
  { key: 'Gas', label: 'Sensor' },
  { key: 'Smoke', label: 'Sensor' },
];

function getHumanCategory(productName: string): string {
  for (const { key, label } of humanCategories) {
    if (productName.toLowerCase().includes(key.toLowerCase())) {
      return label;
    }
  }
  return 'Lainnya';
}

// Dapatkan daftar kategori manusiawi unik dari semua produk
const allHumanCategories = Array.from(
  new Set(products.map(p => getHumanCategory(p.name)))
);
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Product } from '../types';


export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showCategory, setShowCategory] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const PRODUCTS_PER_PAGE = 12;

  const filteredProducts = products.filter(product => {
    const humanCat = getHumanCategory(product.name);
    const matchesCategory = selectedCategory === 'all' || humanCat === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

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

  // Reset to page 1 if filter/search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

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
                {allHumanCategories.map(category => (
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
          {paginatedProducts.map((product, index) => (
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <nav className="inline-flex items-center space-x-1 rounded-lg bg-slate-800/70 px-4 py-2 border border-slate-700">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md font-medium text-slate-300 hover:bg-slate-700 transition disabled:opacity-40`}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md font-medium transition-all duration-150 ${
                    currentPage === page
                      ? 'bg-cyan-400 text-slate-900 shadow'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md font-medium text-slate-300 hover:bg-slate-700 transition disabled:opacity-40`}
              >
                &gt;
              </button>
            </nav>
          </div>
        )}

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