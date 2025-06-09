"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/data";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-honey-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="inline-block p-3 bg-honey-100 rounded-full mb-6">
            <Quote className="w-8 h-8 text-honey-600" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kata <span className="honey-text">Pelanggan</span>
          </h2>

          <p className="text-xl text-stone-600 max-w-3xl mx-auto">Kepuasan dan kepercayaan pelanggan adalah prioritas utama kami. Dengarkan pengalaman mereka dengan produk Madu Kamii.</p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl min-h-[400px]">
            <motion.div key={currentIndex} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="p-8 md:py-12 px-20">
              {/* Quote Icon */}
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-honey-200 mb-6">
                <Quote className="w-16 h-16" />
              </motion.div>

              {/* Rating */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex items-center gap-1 mb-6">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </motion.div>

              {/* Comment */}
              <motion.blockquote initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-xl md:text-2xl text-stone-700 leading-relaxed mb-8 font-medium">
                &ldquo;{TESTIMONIALS[currentIndex].comment}&rdquo;
              </motion.blockquote>

              {/* Customer Info */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-honey-200 to-honey-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-honey-700">{TESTIMONIALS[currentIndex].name.charAt(0)}</span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-stone-900">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="text-stone-600">Pembeli {TESTIMONIALS[currentIndex].product}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="pointer-events-auto bg-white/80 backdrop-blur-md border-honey-200 hover:bg-honey-50 rounded-full w-12 h-12">
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button variant="outline" size="icon" onClick={nextTestimonial} className="pointer-events-auto bg-white/80 backdrop-blur-md border-honey-200 hover:bg-honey-50 rounded-full w-12 h-12">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button key={index} onClick={() => goToTestimonial(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-honey-500 w-8" : "bg-stone-300 hover:bg-honey-300"}`} />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="text-sm text-stone-500 hover:text-honey-600 transition-colors">
              {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"} Auto-play
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { value: "4.9/5", label: "Rating Rata-rata", icon: "⭐" },
            { value: "1000+", label: "Review Positif", icon: "💬" },
            { value: "98%", label: "Kepuasan Pelanggan", icon: "❤️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-honey-600 mb-1">{stat.value}</div>
              <div className="text-stone-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
