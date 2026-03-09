"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Высокооплачиваемый навык",
    description:
      "Обучение востребованной профессии с высоким потенциалом дохода.",
  },
  {
    title: "Пошаговая система",
    description:
      "Чёткий путь от нуля до первых результатов без лишней теории.",
  },
  {
    title: "Клиенты и первые деньги",
    description:
      "Получи практические инструменты для привлечения платящих клиентов.",
  },
  {
    title: "Масштабирование дохода",
    description:
      "Научись увеличивать заработок и строить устойчивый бизнес онлайн.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Почему </span>
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
            выбирают нас
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass rounded-2xl p-8 lg:p-10 hover:border-[#D4AF37]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-3xl font-bold text-[#D4AF37]/80 mb-4 group-hover:text-[#F5D76E] transition-colors">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
