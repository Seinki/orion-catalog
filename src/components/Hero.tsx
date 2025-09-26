
import { Link } from "react-router-dom";
import heroImg from "../assets/Orion-Pro-HQ-German-Quality.png";
import ceoImg from "../assets/ceo-placeholder.jpg";
import logo1 from "../assets/orion-logo.png";
import logo2 from "../assets/orion-logo1.png";
import logo3 from "../assets/Orion-Pro-HQ-German-Quality.png";
import logo4 from "../assets/Orion-Pro-HQ-German-Quality-1.png";
import product1 from "../assets/orionProduct-photos/product1.png";
import product2 from "../assets/orionProduct-photos/product5.png";
import product3 from "../assets/orionProduct-photos/product10.png";
import product4 from "../assets/orionProduct-photos/product15.png";

type HeroProps = {
  onExploreProducts: () => void;
};

export const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  const featureIcons = [
    { icon: FiShield, text: "Keamanan Terjamin", color: "text-cyan-400", desc: "Sistem smart home kami mengutamakan keamanan data dan perangkat Anda." },
    { icon: FiWifi, text: "Koneksi Stabil", color: "text-blue-400", desc: "Teknologi WiFi terbaru untuk koneksi perangkat yang selalu stabil dan responsif." },
    { icon: FiZap, text: "Efisiensi Energi", color: "text-green-400", desc: "Hemat energi dan biaya listrik dengan fitur otomatisasi cerdas." },
  ];
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
                  Integrasi Cerdas untuk Hunian Masa Depan
                </p>
              </div>
              {/* Feature Icons */}
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-8 w-full">
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
              </div>
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
              <img
                src={heroImg}
                alt="Orion Smart Home Hero"
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
    {/* About Section */}
    <section className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center gap-10">
  <img src="https://ui-avatars.com/api/?name=CEO+Orion&background=0D8ABC&color=fff&size=256" alt="CEO" className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400/30 shadow-lg mb-6 md:mb-0" />
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
          <p className="text-slate-400 mb-2">Orion+ didirikan oleh <span className="font-semibold text-cyan-400">John Doe</span>, seorang visioner di bidang teknologi smart home.</p>
          <p className="text-slate-400 mb-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque nec enim dictum cursus. Integer facilisis, urna at dictum cursus, enim elit convallis urna, nec dictum enim elit nec urna."</p>
          <p className="text-slate-400">Kami berkomitmen menghadirkan solusi hunian cerdas yang aman, nyaman, dan efisien untuk masa depan Anda.</p>
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
            {[
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
            ].map((item, idx) => (
              <Link
                key={idx}
                to="/products"
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
                    <h3 className="text-lg font-semibold text-white drop-shadow-lg">{item.title}</h3>
                    <FiArrowRight className="w-5 h-5 text-cyan-400 animate-bounce-x" />
                  </div>
                  <p className="text-slate-200 text-sm drop-shadow-lg">{item.desc}</p>
                </div>
                <span className="absolute inset-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
      </div>
    </section>
    </>
  );
};
import { FiArrowRight, FiShield, FiWifi, FiZap } from 'react-icons/fi';
