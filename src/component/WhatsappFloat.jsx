import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  return (
    React.createElement(motion.a, {
      href: "https://wa.me/919748517824",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors",
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      initial: { scale: 0 },
      animate: { scale: 1 },
      transition: { delay: 1, type: "spring", stiffness: 260, damping: 20 }
    },
      React.createElement(MessageCircle, { size: 24 }),
      React.createElement(motion.div, {
        className: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full",
        animate: { scale: [1, 1.2, 1] },
        transition: { repeat: Infinity, duration: 2 }
      })
    )
  );
};

export default WhatsAppFloat;