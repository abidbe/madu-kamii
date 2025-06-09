"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Clock, Instagram, Send } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { generateWhatsAppMessage, getWhatsAppUrl } from "@/lib/utils";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate WhatsApp message with form data
    const message = `Halo Madu Kamii! 🍯

Nama: ${formData.name}
No. HP: ${formData.phone}

Pesan: ${formData.message}

Terima kasih! 😊`;

    // Open WhatsApp
    window.open(getWhatsAppUrl(encodeURIComponent(message)), "_blank");

    // Reset form
    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const quickMessages = ["Mau tanya harga dan stok produk", "Minta rekomendasi madu terbaik", "Info pengiriman ke luar kota", "Konsultasi manfaat madu untuk kesehatan"];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-honey-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="inline-block p-3 bg-honey-100 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-honey-600" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hubungi <span className="honey-text">Kami</span>
          </h2>

          <p className="text-xl text-stone-600 max-w-3xl mx-auto">Ada pertanyaan atau butuh konsultasi? Tim customer service kami siap membantu Anda 24/7 untuk memberikan pelayanan terbaik.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Mari Berkenalan! 👋</h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Kami sangat senang mendengar dari Anda. Jangan ragu untuk menghubungi kami kapan saja untuk pertanyaan, pesanan, atau sekedar ingin berbagi cerita tentang pengalaman mengonsumsi madu kamii.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "WhatsApp",
                  value: COMPANY_INFO.phone,
                  action: () => window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}`, "_blank"),
                  color: "text-green-600",
                },
                {
                  icon: Clock,
                  title: "Jam Operasional",
                  value: `${COMPANY_INFO.hours} WIB`,
                  action: null,
                  color: "text-blue-600",
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  value: COMPANY_INFO.instagram,
                  action: () => window.open(`https://instagram.com/${COMPANY_INFO.instagram.replace("@", "")}`, "_blank"),
                  color: "text-pink-600",
                },
                {
                  icon: MapPin,
                  title: "Lokasi",
                  value: "Kota Jambi, Jambi",
                  action: null,
                  color: "text-red-600",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  onClick={contact.action ? () => contact.action!() : undefined}
                  className={`flex items-center gap-4 p-4 rounded-xl hover:bg-honey-50 transition-colors ${contact.action ? "cursor-pointer" : ""}`}
                >
                  <div className={`p-3 rounded-full bg-white shadow-md ${contact.color}`}>
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">{contact.title}</h4>
                    <p className="text-stone-600">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Messages */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.5 }}>
              <h4 className="font-semibold mb-4">💬 Pesan Cepat:</h4>
              <div className="space-y-2">
                {quickMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const whatsappMessage = generateWhatsAppMessage(message);
                      window.open(getWhatsAppUrl(whatsappMessage), "_blank");
                    }}
                    className="block w-full text-left p-3 text-sm bg-white rounded-lg border border-stone-200 hover:border-honey-300 hover:bg-honey-50 transition-all duration-200"
                  >
                    {message}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.3 }}>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Nama Lengkap</label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Masukkan nama lengkap" required className="w-full" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.4 }}>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Nomor WhatsApp</label>
                  <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="08xxxxxxxxxx" required className="w-full" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.5 }}>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Pesan</label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tulis pesan Anda di sini..." rows={5} required className="w-full" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.6 }}>
                  <Button type="submit" disabled={isSubmitting} className="w-full btn-honey text-lg py-3">
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Mengirim...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Kirim via WhatsApp
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>

              <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="mt-6 p-4 bg-honey-50 rounded-xl">
                <p className="text-sm text-stone-600 text-center">📱 Pesan akan dikirim langsung ke WhatsApp kami untuk respon yang lebih cepat</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
