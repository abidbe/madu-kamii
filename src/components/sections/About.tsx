"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Award, Heart } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: "1000+", label: "Pelanggan Setia" },
    { icon: Award, value: "5", label: "Tahun Pengalaman" },
    { icon: MapPin, value: "100%", label: "Hutan Jambi Asli" },
    { icon: Heart, value: "4.9", label: "Rating Kepuasan" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="inline-block p-3 bg-honey-100 rounded-full mb-6">
              <Heart className="w-8 h-8 text-honey-600" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cerita <span className="honey-text">Madu Kamii</span>
            </h2>

            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.3 }}>
                Berawal dari kecintaan terhadap alam Jambi yang kaya akan keanekaragaman hayati,
                <strong className="text-honey-600"> Madu Kamii</strong> hadir untuk menghadirkan kemurnian madu hutan tropis terbaik langsung ke meja Anda.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.4 }}>
                Setiap tetes madu yang kami sajikan merupakan hasil kerja sama harmonis antara lebah hutan dan ekosistem alami Jambi yang terjaga. Kami berkomitmen menjaga
                <strong className="text-forest-600"> kualitas premium</strong> tanpa mengorbankan kelestarian alam.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.5 }}>
                Dengan pengalaman lebih dari 5 tahun dan kepercayaan dari ribuan pelanggan, kami terus berinovasi untuk memberikan produk madu terbaik dengan
                <strong className="text-honey-600"> pelayanan yang memuaskan</strong>.
              </motion.p>
            </div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-honey-50 to-forest-50 rounded-2xl border border-honey-200"
            >
              <h3 className="text-xl font-bold text-honey-700 mb-3">🎯 Misi Kami</h3>
              <p className="text-stone-700">&ldquo;Menyebarkan manfaat kesehatan alami madu hutan Jambi ke seluruh Indonesia sambil melestarikan ekosistem hutan untuk generasi mendatang.&rdquo;</p>
            </motion.div>
          </motion.div>

          {/* Visual + Stats */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            {/* Main Visual */}
            <div className="relative bg-gradient-to-br from-honey-100 via-honey-200 to-forest-100 rounded-3xl p-12 h-96 overflow-hidden">
              {/* Background Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-8 text-6xl opacity-30"
              >
                🌳
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 left-8 text-4xl opacity-40"
              >
                🐝
              </motion.div>

              {/* Center Honey Pot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-9xl"
                >
                  🍯
                </motion.div>
              </div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-honey-400 rounded-full opacity-60"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Stats Grid */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay: 0.8 }} className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-honey-600" />
                  <div className="text-2xl font-bold text-honey-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-stone-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
