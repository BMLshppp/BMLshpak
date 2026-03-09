"use client";

import { motion } from "framer-motion";

const modules = [
  {
    number: "01",
    title: "Основы и mindset",
    description: "Фундамент успешного мышления и постановка целей.",
  },
  {
    number: "02",
    title: "Выбор ниши",
    description: "Как найти прибыльную нишу с минимальной конкуренцией.",
  },
  {
    number: "03",
    title: "Создание продукта",
    description: "Упаковка экспертизы в продукт, который продаётся.",
  },
  {
    number: "04",
    title: "Привлечение клиентов",
    description: "Каналы трафика и конверсия в платящих клиентов.",
  },
  {
    number: "05",
    title: "Продажи и переговоры",
    description: "Закрытие сделок и работа с возражениями.",
  },
  {
    number: "06",
    title: "Автоматизация",
    description: "Системы и процессы для масштабирования без выгорания.",
  },
  {
    number: "07",
    title: "Масштабирование",
    description: "Увеличение дохода и выход на новый уровень.",
  },
  {
    number: "08",
    title: "Мастермайнд",
    description: "Продвинутые стратегии для тех, кто готов к росту.",
  },
];

export default function Program() {
  return (
    <section className="py-24 lg:py-32 relative" id="program">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="font-display text-4xl sm:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Программа </span>
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
            обучения
          </span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          8 модулей пошаговой системы для выхода на стабильный доход
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, i) => (
            <motion.div
              key={module.number}
              className="glass rounded-xl p-6 hover:border-[#D4AF37]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="text-[#D4AF37]/70 text-sm font-medium">
                Модуль {module.number}
              </span>
              <h3 className="font-display text-lg font-semibold text-white mt-2 mb-2">
                {module.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
