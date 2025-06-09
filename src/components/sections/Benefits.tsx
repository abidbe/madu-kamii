"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BENEFITS } from "@/lib/data";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-honey-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-6xl mb-6">
            ✨
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Manfaat <span className="honey-text">Luar Biasa</span>
          </h2>

          <p className="text-xl text-stone-600 max-w-3xl mx-auto">Rasakan khasiat alami madu hutan Jambi yang telah terbukti memberikan manfaat kesehatan optimal untuk seluruh keluarga</p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon */}
                <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-honey-600 transition-colors">{benefit.title}</h3>

                {/* Description */}
                <p className="text-stone-600 leading-relaxed">{benefit.description}</p>

                {/* Decorative element */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "3rem" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="h-1 bg-gradient-to-r from-honey-400 to-honey-600 rounded-full mt-6"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} transition={{ duration: 0.8, delay: 0.8 }} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-honey-400 to-honey-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Mulai Hidup Sehat dengan Madu Alami! 🌿</h3>
            <p className="text-xl opacity-90 mb-6">Bergabunglah dengan ribuan pelanggan yang telah merasakan manfaat luar biasa madu hutan Jambi</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => {
                  const element = document.getElementById("products");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-honey-600 font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Pilih Madu Terbaik
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
