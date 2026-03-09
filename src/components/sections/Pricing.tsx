"use client";

import { motion } from "framer-motion";
import GoldButton from "@/components/ui/GoldButton";

const startFeatures = [
  "Полный доступ к курсу",
  "Доступ в сообщество",
  "Шаблоны",
  "Базовая поддержка",
];

const proFeatures = [
  "Всё из тарифа Старт",
  "Личный созвон 1-на-1",
  "Продвинутые модули",
  "Закрытый мастермайнд",
  "Приоритетная поддержка",
];

export default function Pricing() {
  return (
    <section className="py-24 lg:py-32 relative" id="pricing">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Выбери </span>
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
            свой тариф
          </span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Инвестируй в себя — результат окупится многократно
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center lg:items-stretch">
          {/* Тариф Старт */}
          <motion.div
            className="glass rounded-2xl p-8 lg:p-10 flex flex-col relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-white mb-2">
              Старт
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$350</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {startFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="text-[#D4AF37]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <GoldButton variant="outline" className="w-full justify-center">
              Выбрать Старт
            </GoldButton>
          </motion.div>

          {/* Тариф ПРО — главный, с золотой рамкой */}
          <motion.div
            className="relative rounded-2xl p-8 lg:p-10 flex flex-col lg:scale-[1.03] order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Золотая рамка и свечение */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#D4AF37]/60 shadow-card-glow" />
            <div className="absolute inset-0 rounded-2xl glass" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0B0B0F] text-sm font-semibold">
                Самый популярный
              </span>
              <h3 className="font-display text-2xl font-semibold text-[#F5D76E] mb-2 mt-2">
                ПРО
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$550</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {proFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <span className="text-[#F5D76E]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <GoldButton variant="primary" className="w-full justify-center">
                Выбрать ПРО
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
