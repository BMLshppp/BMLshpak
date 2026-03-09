"use client";

import { motion } from "framer-motion";

interface GoldButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function GoldButton({
  children,
  variant = "primary",
  className = "",
  onClick,
}: GoldButtonProps) {
  if (variant === "primary") {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`
          relative overflow-hidden rounded-lg px-8 py-4 font-semibold
          bg-gradient-to-r from-[#D4AF37] via-[#F5D76E] to-[#D4AF37]
          bg-[length:200%_100%]
          text-[#0B0B0F] shadow-gold-glow
          transition-all duration-300
          hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]
          animate-pulse-glow
          ${className}
        `}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }

  if (variant === "outline") {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`
          rounded-lg border-2 border-[#D4AF37]/60 px-8 py-4 font-semibold
          text-[#F5D76E] bg-transparent
          hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]
          transition-all duration-300
          ${className}
        `}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        rounded-lg px-8 py-4 font-semibold
        bg-white/5 text-[#F5D76E] border border-white/10
        hover:bg-white/10 transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
