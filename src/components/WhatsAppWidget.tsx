import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  return (
    <motion.a
      href="https://wa.me/6282316801506?text=Halo%20Bu%20Mita,%20saya%20ingin%20bertanya%20tentang..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full" />
    </motion.a>
  );
};

export default WhatsAppWidget;
