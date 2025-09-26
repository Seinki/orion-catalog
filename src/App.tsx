import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { CartModal } from "./components/CartModal";
import { ContactPage } from "./components/ContactPage";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { NotificationToast } from "./components/NotificationToast";
import { ProductsPage } from "./components/ProductsPage";
import { SupportPage } from "./components/SupportPage";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
