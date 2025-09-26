import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { CartModal } from "./components/CartModal";
import { ContactPage } from "./components/ContactPage";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { NotificationToast } from "./components/NotificationToast";
import { ProductsPage } from "./components/ProductsPage";
import { SupportPage } from "./components/SupportPage";

type PageType = "home" | "products" | "support" | "contact";

function App() {
  const [currentPage, setCurrentPage] = React.useState<PageType>("home");
  const [notification, setNotification] = React.useState<{
    message: string;
    type: "success" | "error";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const handlePageChange = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleExploreProducts = () => {
    setCurrentPage("products");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const showNotification = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setNotification({ message, type, isVisible: true });
  };

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }));
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Hero onExploreProducts={handleExploreProducts} />;
      case "products":
        return <ProductsPage />;
      case "support":
        return <SupportPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <Hero onExploreProducts={handleExploreProducts} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      {/* Cart Modal */}
      <CartModal />

      {/* Notification Toast */}
      <NotificationToast
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />

      {/* Footer */}
      <footer className="bg-slate-800/50 border-t border-slate-700/50 py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Orion+</h3>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Integrasi Cerdas untuk Hunian Masa Depan
            </p>
            <p className="text-slate-500 text-sm">
              © 2025 Orion+. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
