import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

interface NotificationToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  message,
  type,
  isVisible,
  onClose
}) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-24 right-4 z-50 max-w-sm"
        >
          <div className={`flex items-center space-x-3 p-4 rounded-xl border backdrop-blur-sm ${
            type === 'success'
              ? 'bg-green-500/10 border-green-500/30 text-green-400'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}>
            <div className={`p-1 rounded-full ${
              type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}>
              <FiCheck className="w-4 h-4 text-white" />
            </div>
            
            <span className="flex-1 text-sm font-medium text-white">
              {message}
            </span>
            
            <button
              onClick={onClose}
              className="p-1 hover:bg-slate-700 rounded transition-colors"
            >
              <FiX className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};