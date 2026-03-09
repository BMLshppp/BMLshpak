"use client";

import { motion } from "framer-motion";
import GoldButton from "@/components/ui/GoldButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5D76E] to-[#D4AF37] bg-clip-text text-transparent">
              Освой навык,
            </span>
            <br />
            <span className="text-white">который приносит деньги</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Премиальная система обучения, которая поможет тебе выйти на стабильный
            доход онлайн.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <GoldButton
              variant="primary"
              onClick={() =>
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Записаться
            </GoldButton>
            <GoldButton
              variant="outline"
              onClick={() =>
                document.getElementById("program")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Посмотреть программу
            </GoldButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
