"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star, Shield, Heart } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { generateWhatsAppMessage, getWhatsAppUrl } from "@/lib/utils";
import Image from "next/image";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleOrderNow = () => {
    const message = generateWhatsAppMessage("Madu Premium Pilihan Terbaik");
    window.open(getWhatsAppUrl(message), "_blank");
  };

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 hero-bg" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating Elements - Hidden on mobile */}
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
        className="absolute top-20 left-4 md:left-10 text-4xl md:text-6xl opacity-20 hidden sm:block"
      >
        🍯
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
        className="absolute bottom-32 right-8 md:right-16 text-3xl md:text-4xl opacity-20 hidden sm:block"
      >
        🌿
      </motion.div>

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-8 md:right-20 text-4xl md:text-5xl opacity-20 hidden md:block"
      >
        🌺
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ y: textY }} className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white/90 backdrop-blur-md rounded-full shadow-2xl mb-4 sm:mb-6 overflow-hidden">
            <Image src="/images/logo-madu-kami.png" width={120} height={120} alt="Logo Madu Kami" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" />
          </div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="inline-block">Madu</span> <span className="inline-block honey-text animate-shimmer">Kamii</span>
          </motion.h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed drop-shadow-md max-w-3xl mx-auto px-2"
        >
          {COMPANY_INFO.tagline}
        </motion.p>

        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {[
            { icon: Star, text: "Premium Quality" },
            { icon: Shield, text: "100% Murni" },
            { icon: Heart, text: "Hutan Jambi" },
          ].map((feature) => (
            <motion.div key={feature.text} whileHover={{ scale: 1.1 }} className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2 rounded-full text-white text-sm sm:text-base">
              <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={handleOrderNow} size="lg" className="btn-honey text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-2xl hover:shadow-3xl w-full sm:w-auto">
              Pesan Sekarang
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="ml-2">
                →
              </motion.span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={scrollToProducts} variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-md w-full sm:w-auto">
              Lihat Produk
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Statistics */}
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }} className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { number: "1000+", label: "Pelanggan Puas" },
              { number: "6", label: "Varian Madu" },
              { number: "100%", label: "Murni Alami" },
              { number: "24/7", label: "Customer Service" },
            ].map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }} className="text-center text-white">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-white">{stat.number}</div>
                <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
