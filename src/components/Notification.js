// src/components/Notification.js
import React, { useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotificationStore } from '../services/store/useNotificationStore';

const Notification = () => {
  const { message, type, isOpen, closeNotification } = useNotificationStore();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeNotification();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, closeNotification]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg z-50 text-white flex items-center space-x-2 ${
            type === 'success' ? 'bg-sky-600' : 'bg-red-500'
          }`}
          role="alert"
          aria-live="assertive"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          {type === 'success' ? (
            <CheckCircleIcon className="w-6 h-6 text-white" />
          ) : (
            <XCircleIcon className="w-6 h-6 text-white" />
          )}
          <span>{message}</span>
          <button onClick={closeNotification} className="ml-4 text-lg focus:outline-none">
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
