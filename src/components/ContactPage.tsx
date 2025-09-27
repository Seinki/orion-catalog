import { motion } from "framer-motion";
import React from "react";
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { openWhatsApp, WHATSAPP_PHONE_NUMBER } from "../utils/whatsapp";

const contactInfo = [
  { icon: FiPhone, title: "Telepon & WhatsApp", details: `+${WHATSAPP_PHONE_NUMBER.slice(0, 2)} ${WHATSAPP_PHONE_NUMBER.slice(2, 5)}-${WHATSAPP_PHONE_NUMBER.slice(5, 9)}-${WHATSAPP_PHONE_NUMBER.slice(9)}`, subtext: "Tersedia pada jam kerja" },
  { icon: FiMail, title: "Email", details: "orionplus@gmail.com", subtext: "Respons pada jam kerja" },
  { icon: FiMapPin, title: "Alamat", details: "Jl. Sunda No.38, Kb. Pisang, Kec. Sumur Bandung", subtext: "Kota Bandung, Jawa Barat 40112" },
  { icon: FiClock, title: "Jam Operasional", details: "Senin - Sabtu: 09:00 - 17:00", subtext: "Minggu & Hari Libur Nasional: Tutup" },
];

const subjectOptions = ["Konsultasi Produk", "Instalasi dan Setup", "Support Teknis", "Kerjasama Bisnis", "Lainnya"];


export const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate WhatsApp message from form data
    const message = `Halo Orion+,

Nama: ${formData.name}
Email: ${formData.email}
Subjek: ${formData.subject}

Pesan:
${formData.message}

Terima kasih.`;

    openWhatsApp(message);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi <span className="text-cyan-400">Kami</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Siap membantu mewujudkan hunian smart home impian Anda. Konsultasi
            gratis dengan ahli kami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="alamat@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subjek
                  </label>
                  <select
                    name="subject"
                    title="Pilih subjek pesan"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  >
                    <option value="">Pilih subjek pesan</option>
                    {subjectOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Ceritakan kebutuhan smart home Anda atau pertanyaan yang ingin diajukan..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-medium rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
                >
                  <FiSend size={20} />
                  <span>Kirim via WhatsApp</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Informasi Kontak
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-slate-700/30 rounded-xl"
                  >
                    <div className="p-3 bg-cyan-400/10 rounded-lg">
                      <info.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-slate-300 mb-1">{info.details}</p>
                      <p className="text-sm text-slate-400">{info.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Aksi Cepat</h3>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    openWhatsApp("Halo, saya ingin konsultasi produk Orion+")
                  }
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
                >
                  <FiPhone size={20} />
                  <span>Chat WhatsApp Sekarang</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(`tel:+${WHATSAPP_PHONE_NUMBER}`, "_blank")}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300"
                >
                  <FiPhone size={20} />
                  <span>Telepon Langsung</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
