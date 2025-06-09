"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Zap } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { formatCurrency, calculateDiscount, generateWhatsAppMessage, getWhatsAppUrl } from "@/lib/utils";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleBuyNow = (product: (typeof PRODUCTS)[0]) => {
    const message = generateWhatsAppMessage(product.name, product.discountPrice);
    window.open(getWhatsAppUrl(message), "_blank");
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-honey-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="inline-block p-3 bg-honey-100 rounded-full mb-6">
            <ShoppingCart className="w-8 h-8 text-honey-600" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pilihan <span className="honey-text">Madu Premium</span>
          </h2>

          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">Koleksi lengkap madu hutan Jambi asli dengan berbagai varian dan khasiat unik. Dipilih khusus untuk memberikan manfaat terbaik bagi kesehatan Anda.</p>
        </motion.div>

        {/* Products Grid */}
        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div key={product.id} variants={item} whileHover={{ y: -12 }} className="group h-full">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover h-full flex flex-col">
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-honey-100 to-honey-200 overflow-hidden">
                  {/* Discount Badge */}
                  {product.originalPrice > product.discountPrice && (
                    <motion.div initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: -12 }} transition={{ delay: index * 0.1 + 0.5 }} className="absolute top-4 left-4 z-10">
                      <Badge className="bg-red-500 text-white font-bold px-3 py-1 text-sm">-{calculateDiscount(product.originalPrice, product.discountPrice)}%</Badge>
                    </motion.div>
                  )}

                  {/* Product Illustration Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-8xl opacity-60"
                    >
                      🍯
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-honey-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Quick Action Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             bg-white text-honey-600 p-3 rounded-full shadow-lg
                             opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() => handleBuyNow(product)}
                  >
                    <Zap className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Product Type */}
                  <Badge variant="secondary" className="mb-3 text-honey-700 bg-honey-100">
                    {product.size}
                  </Badge>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-honey-600 transition-colors">{product.name}</h3>

                  {/* Description */}
                  <p className="text-stone-600 mb-4 leading-relaxed flex-1">{product.description}</p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                      {product.benefits.length > 2 && <span className="text-xs text-stone-500">+{product.benefits.length - 2} lainnya</span>}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-honey-600">{formatCurrency(product.discountPrice)}</span>
                      {product.originalPrice > product.discountPrice && <span className="text-lg text-stone-400 line-through">{formatCurrency(product.originalPrice)}</span>}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-stone-500 ml-1">(4.9)</span>
                    </div>
                  </div>

                  {/* Action Buttons - di bagian bawah */}
                  <div className="flex gap-3 mt-auto">
                    <Button onClick={() => handleBuyNow(product)} className="flex-1 btn-honey group-hover:shadow-honey-lg">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Beli Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Tidak Yakin Pilih Yang Mana? 🤔</h3>
            <p className="text-stone-600 mb-6">Konsultasi gratis dengan tim ahli kami untuk mendapatkan rekomendasi madu terbaik sesuai kebutuhan Anda</p>
            <Button
              onClick={() => {
                const message = generateWhatsAppMessage("Konsultasi Pilihan Madu Terbaik");
                window.open(getWhatsAppUrl(message), "_blank");
              }}
              size="lg"
              className="forest-gradient text-white hover:shadow-lg"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
