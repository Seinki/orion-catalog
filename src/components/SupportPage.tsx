import { motion } from "framer-motion";
import React from "react";
import {
  FiChevronDown,
  FiDownload,
  FiHelpCircle,
  FiTool,
} from "react-icons/fi";

export const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Bagaimana cara mengatur perangkat LANBON untuk pertama kali?",
      answer:
        "Unduh aplikasi Orion+, buat akun, dan ikuti panduan setup yang disediakan. Pastikan perangkat terhubung ke WiFi yang sama dengan smartphone Anda.",
    },
    {
      question:
        "Apakah produk LANBON kompatibel dengan Google Assistant dan Alexa?",
      answer:
        "Ya, semua produk Orion+ mendukung integrasi dengan Google Assistant dan Amazon Alexa. Anda dapat mengontrol perangkat menggunakan perintah suara.",
    },
    {
      question:
        "Bagaimana jika saya lupa password WiFi dan perlu mengatur ulang perangkat?",
      answer:
        "Tekan dan tahan tombol reset pada perangkat selama 10 detik hingga lampu indikator berkedip. Perangkat akan kembali ke mode pairing dan siap untuk dikonfigurasi ulang.",
    },
    {
      question: "Apakah saya perlu hub khusus untuk menggunakan produk LANBON?",
      answer:
        "Untuk sebagian besar produk WiFi, Anda tidak memerlukan hub khusus. Namun, untuk produk Zigbee, Anda memerlukan LANBON Control Hub untuk komunikasi optimal.",
    },
    {
      question: "Bagaimana cara memperbarui firmware perangkat?",
      answer:
        "Buka aplikasi Orion+, pilih perangkat yang ingin diperbarui, dan jika ada update tersedia, akan muncul notifikasi. Ikuti instruksi untuk memperbarui firmware secara otomatis.",
    },
  ];

  const guides = [
    {
      title: "Panduan Setup Awal",
      description:
        "Langkah-langkah lengkap mengatur perangkat LANBON pertama kali",
      icon: FiTool,
      downloadUrl: "#",
    },
    {
      title: "Manual Instalasi Switch",
      description: "Panduan instalasi untuk semua jenis smart switch LANBON",
      icon: FiDownload,
      downloadUrl: "#",
    },
    {
      title: "Konfigurasi Smart Lighting",
      description: "Cara mengatur dan mengoptimalkan smart lighting system",
      icon: FiTool,
      downloadUrl: "#",
    },
    {
      title: "Troubleshooting Guide",
      description: "Solusi untuk masalah umum yang mungkin Anda hadapi",
      icon: FiHelpCircle,
      downloadUrl: "#",
    },
  ];

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
            Pusat <span className="text-cyan-400">Dukungan</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Temukan jawaban, panduan instalasi, dan bantuan teknis untuk produk
            Orion+
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FiHelpCircle className="mr-3 text-cyan-400" />
              Pertanyaan Umum (FAQ)
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                  >
                    <span className="text-white font-medium pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown className="text-cyan-400 flex-shrink-0" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Installation Guides */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FiDownload className="mr-3 text-cyan-400" />
              Panduan Instalasi
            </h2>

            <div className="space-y-4">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                      <guide.icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-slate-400 mb-4">{guide.description}</p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        <FiDownload size={16} />
                        <span>Download PDF</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Butuh Bantuan Lebih Lanjut?
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Tim support kami siap membantu Anda 24/7. Hubungi kami melalui
              WhatsApp untuk mendapatkan bantuan langsung dari ahli smart home
              kami.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/6281234567890?text=Halo, saya butuh bantuan dengan produk Orion+",
                  "_blank"
                )
              }
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <FiHelpCircle size={20} />
              <span>Chat dengan Support</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
