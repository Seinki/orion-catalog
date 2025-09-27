
// import { Link } from "react-router-dom";
import { FiArrowRight, FiShield, FiWifi, FiZap } from 'react-icons/fi';
import heroImg from "../assets/Orion-Pro-HQ-German-Quality.png";
import logo1 from "../assets/orion-logo.png";
import logo2 from "../assets/orion-logo1.png";
import logo3 from "../assets/Orion-Pro-HQ-German-Quality.png";
import logo4 from "../assets/Orion-Pro-HQ-German-Quality-1.png";
import product1 from "../assets/orionProduct-photos/product1.png";
import product2 from "../assets/orionProduct-photos/product5.png";
import product3 from "../assets/orionProduct-photos/product10.png";
import product4 from "../assets/orionProduct-photos/product15.png";
import { motion } from 'framer-motion';

type HomePageProps = {
  onExploreProducts: () => void;
  onCollectionCardClick?: () => void;
};

const featureIcons = [
  { icon: FiShield, text: "Keamanan Terjamin", color: "text-cyan-400", desc: "Sistem smart home kami mengutamakan keamanan data dan perangkat Anda." },
  { icon: FiWifi, text: "Koneksi Stabil", color: "text-blue-400", desc: "Teknologi WiFi terbaru untuk koneksi perangkat yang selalu stabil dan responsif." },
  { icon: FiZap, text: "Efisiensi Energi", color: "text-green-400", desc: "Hemat energi dan biaya listrik dengan fitur otomatisasi cerdas." },
];

const collectionItems = [
  {
    img: product1,
    title: "Smart Switch",
    desc: "Switch pintar dengan kontrol sentuh dan WiFi."
  },
  {
    img: product2,
    title: "Smart Socket",
    desc: "Soket pintar dengan monitoring energi dan proteksi anak."
  },
  {
    img: product3,
    title: "Control Center",
    desc: "Panel kontrol pusat untuk seluruh perangkat smart home Anda."
  },
  {
    img: product4,
    title: "Sensor & Automation",
    desc: "Sensor pintar dan fitur otomatisasi untuk keamanan dan kenyamanan."
  }
];

export const HomePage: React.FC<HomePageProps> = ({ onExploreProducts, onCollectionCardClick }) => {
  return (
    <>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 mt-8">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
            {/* Kiri: Teks dan Fitur */}
            <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
              {/* Main Heading */}
              <div className="w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 md:mb-5 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Orion+
                  </span>
                  <br />
                  <span className="text-2xl md:text-3xl font-light text-slate-300">
                    Smart Home
                  </span>
                </h1>
                <p className="text-base md:text-xl text-slate-400 mb-6 md:mb-8 max-w-xl leading-relaxed mx-auto md:mx-0">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-cyan-400/80 via-blue-400/70 to-cyan-300/80 bg-clip-text text-transparent font-semibold drop-shadow-lg">
                      Integrasi Cerdas untuk Hunian Masa Depan
                    </span>
                    <span className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-cyan-300/40 rounded-full blur-sm opacity-80" />
                  </span>
                  <br />
                  <span className="text-xs md:text-sm text-cyan-400/80 italic font-light tracking-wide block mt-2 animate-pulse">
                    Smart. Connected. Effortless.
                  </span>
                </p>
              </div>
              {/* Feature Icons */}
              {/* <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-8 w-full">
                {featureIcons.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-1 p-3 rounded-xl bg-slate-800/40 backdrop-blur border border-slate-700/40 min-w-[90px]"
                  >
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                    <span className="text-xs md:text-sm text-slate-300 font-medium mt-1">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div> */}
              {/* CTA Button */}
              <button
                onClick={onExploreProducts}
                className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-full overflow-hidden transition-all duration-300 mt-2"
              >
                <span className="relative z-10">Jelajahi Produk</span>
                <span className="relative z-10">
                  <FiArrowRight className="w-5 h-5" />
                </span>
                {/* Button Glow Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
            {/* Kanan: Hero Image */}
            <div className="flex-1 flex justify-center md:justify-end items-center mb-10 md:mb-0">
              <motion.img
                src={heroImg}
                alt="Orion Smart Home Hero"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.08, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                whileHover={{ scale: 1.13 }}
                className="w-[260px] sm:w-[320px] md:w-[500px] lg:w-[580px] rounded-3xl shadow-2xl border-4 border-cyan-400/30 bg-slate-900/40 object-cover"
                style={{ boxShadow: "0 8px 40px 0 rgba(0,255,255,0.10)" }}
              />
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>
    {/* About Section */}
    <section className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
        <div className="text-slate-400 text-lg leading-relaxed space-y-4">
          <p>
            Di Orion+, kami percaya bahwa teknologi smart home seharusnya tidak hanya canggih, tetapi juga <span className="text-cyan-400 font-medium">mudah diakses dan dapat diandalkan</span> oleh setiap keluarga di Indonesia. Misi kami adalah menyederhanakan kehidupan modern melalui sebuah ekosistem yang terintegrasi penuh.
          </p>
          <p>
            Kami berfokus pada tiga pilar utama: <span className="text-white font-semibold">Keamanan</span> untuk ketenangan pikiran, <span className="text-white font-semibold">Konektivitas</span> yang andal untuk kenyamanan tanpa batas, dan <span className="text-white font-semibold">Efisiensi</span> untuk gaya hidup yang lebih hemat dan berkelanjutan.
          </p>
          <p>
            Lebih dari sekadar produk, kami adalah partner Anda dalam membangun hunian masa depan. Kami berkomitmen untuk menghadirkan solusi cerdas yang benar-benar bekerja untuk Anda, didukung oleh layanan dan inovasi yang berkelanjutan.
          </p>
        </div>
      </div>
    </section>
    {/* Why Choose Us */}
    <section className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featureIcons.map((feature, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
                <feature.icon className={`mx-auto w-10 h-10 mb-4 ${feature.color}`} />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.text}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
    {/* Our Client Section */}
    <section className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Clients</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src={logo1} alt="Client 1" className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300" />
          <img src={logo2} alt="Client 2" className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300" />
          <img src={logo3} alt="Client 3" className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300" />
          <img src={logo4} alt="Client 4" className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300" />
        </div>
      </div>
    </section>
    {/* Explore Our Collections */}
    <section className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Explore Our Collections
        </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Sample product cards */}
            {collectionItems.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={onCollectionCardClick}
                className="group relative block rounded-xl overflow-hidden shadow-lg border border-slate-700 bg-slate-800 transition-transform duration-200 hover:scale-[1.03] focus:outline-none"
                style={{ aspectRatio: '1/1' }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="relative z-10 flex flex-col justify-end h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white text-left drop-shadow-lg">{item.title}</h3>
                    <FiArrowRight className="w-5 h-5 text-cyan-400 animate-bounce-x" />
                  </div>
                  <p className="text-slate-200 text-sm drop-shadow-lg text-left">{item.desc}</p>
                </div>
                <span className="absolute inset-0" aria-hidden="true" />
              </button>
            ))}
          </div>
      </div>
    </section>
    </>
  );
};
