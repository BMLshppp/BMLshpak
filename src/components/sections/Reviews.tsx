"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Александра",
    result: "+$2 400/мес за 3 месяца",
    text: "До курса работала на зарплате. Сейчас у меня стабильный поток клиентов и доход вырос в 4 раза.",
  },
  {
    name: "Дмитрий",
    result: "Первый клиент за 2 недели",
    text: "Система действительно работает. Записался, прошёл модули, применил — и вот уже первый платящий клиент.",
  },
  {
    name: "Мария",
    result: "Доход с $800 до $3 200",
    text: "Масштабирование — это не миф. Благодаря продвинутым модулям смогла утроить свой ежемесячный доход.",
  },
];

export default function Reviews() {
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
          <span className="text-white">Реальные </span>
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
            результаты
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="glass rounded-2xl p-8 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="text-[#D4AF37] font-semibold text-lg mb-2">
                {review.result}
              </span>
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                {review.text}
              </p>
              <span className="text-gray-500 text-sm">{review.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
