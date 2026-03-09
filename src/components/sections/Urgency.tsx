"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Urgency() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = 72 / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= 72) {
          setProgress(72);
          clearInterval(timer);
        } else {
          setProgress(Math.round(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="glass rounded-2xl p-10 lg:p-14 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-6">
            Осталось ограниченное количество мест
          </h3>

          <div className="mb-4">
            <span className="text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
              {progress}%
            </span>
            <span className="text-gray-400 ml-2">мест уже занято</span>
          </div>

          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E]"
              initial={{ width: 0 }}
              animate={{ width: isInView ? "72%" : 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Успей зарезервировать место на ближайший поток
          </p>
        </motion.div>
      </div>
    </section>
  );
}
