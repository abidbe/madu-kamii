"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Phone, Instagram, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produk: ["Madu Hitam Premium", "Madu Kelulut", "Madu Tualang", "Madu Multiflora", "Madu Karet", "Madu Randu"],
    layanan: ["Konsultasi Gratis", "Pengiriman Cepat", "Garansi Kualitas", "Customer Service 24/7"],
    informasi: ["Tentang Kami", "Manfaat Madu", "Cara Pemesanan", "Testimoni"],
  };

  return (
    <footer className="bg-gradient-to-b from-stone-900 to-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-honey-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍯</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Madu Kamii</h3>
                <p className="text-stone-400 text-sm">Kemurnian Alam Hutan Jambi</p>
              </div>
            </div>

            <p className="text-stone-300 leading-relaxed mb-6 max-w-md">Menyediakan madu hutan Jambi premium dengan kualitas terbaik untuk kesehatan dan keberkahan keluarga Indonesia. Dipercaya lebih dari 1000+ pelanggan setia.</p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-honey-400" />
                <span className="text-stone-300">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-honey-400" />
                <span className="text-stone-300">{COMPANY_INFO.instagram}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-honey-400" />
                <span className="text-stone-300">Kota Jambi, Jambi</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-honey-400" />
                <span className="text-stone-300">Setiap Hari: {COMPANY_INFO.hours} WIB</span>
              </div>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <h4 className="text-lg font-bold mb-6 text-honey-400">Produk Kami</h4>
            <ul className="space-y-3">
              {footerLinks.produk.map((item, index) => (
                <li key={index}>
                  <button className="text-stone-300 hover:text-honey-400 transition-colors text-left">{item}</button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services & Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h4 className="text-lg font-bold mb-6 text-honey-400">Layanan</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.layanan.map((item, index) => (
                <li key={index}>
                  <span className="text-stone-300">{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-6 text-honey-400">Informasi</h4>
            <ul className="space-y-3">
              {footerLinks.informasi.map((item, index) => (
                <li key={index}>
                  <button className="text-stone-300 hover:text-honey-400 transition-colors text-left">{item}</button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="border-t border-stone-800 pt-12 mb-12">
          <div className="bg-gradient-to-r from-honey-600 to-honey-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Dapatkan Update Terbaru! 📧</h3>
            <p className="text-honey-100 mb-6 max-w-2xl mx-auto">Jadilah yang pertama tahu tentang produk baru, promo menarik, dan tips kesehatan dengan madu alami langsung ke WhatsApp Anda.</p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Halo! Saya ingin mendapatkan update terbaru dari Madu Kamii 📱");
                window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${message}`, "_blank");
              }}
              className="bg-white text-honey-600 font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Subscribe via WhatsApp
            </button>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex justify-center gap-6 mb-8">
          {[
            {
              icon: "📱",
              label: "WhatsApp",
              action: () => window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}`, "_blank"),
            },
            {
              icon: "📸",
              label: "Instagram",
              action: () => window.open(`https://instagram.com/${COMPANY_INFO.instagram.replace("@", "")}`, "_blank"),
            },
          ].map((social) => (
            <motion.button
              key={social.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={social.action}
              className="w-14 h-14 bg-stone-800 hover:bg-honey-600 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{social.icon}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="border-t border-stone-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400">© {currentYear} Madu Kamii. Semua hak dilindungi.</p>

            <div className="flex items-center gap-2 text-stone-400">
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>di Jambi, Indonesia</span>
            </div>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-6 text-center"
          >
            <span className="text-3xl">🍯</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
