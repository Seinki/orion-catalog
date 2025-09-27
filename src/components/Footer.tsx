import orionLogo from '../assets/orionLogo.png';
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaTiktok } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'Instagram',
    href: '#', // Ganti dengan URL Instagram Anda
    icon: <SlSocialInstagram size={24} />,
  },
  {
    label: 'TikTok',
    href: '#', // Ganti dengan URL TikTok Anda
    icon: <FaTiktok size={24} />,
  },
  {
    label: 'LinkedIn',
    href: '#', // Ganti dengan URL LinkedIn Anda
    icon: <SlSocialLinkedin size={24} />,
  },
];

const Footer: React.FC = () => (
  <footer className="bg-slate-800/90 border-t border-slate-700/50 py-12 mt-20 text-slate-200">
    <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Brand & Deskripsi */}
      <div className="flex flex-col items-center md:items-start">
  <img src={orionLogo} alt="Orion+ Logo" width={130} className="mb-3 rounded-lg shadow-lg p-2" />
        {/* <h3 className="text-2xl font-bold text-white mb-2">Orion+</h3> */}
        <p className="text-slate-400 mb-4 max-w-xs text-center md:text-left">Integrasi Cerdas untuk Hunian Masa Depan. Solusi smart home modern, aman, dan efisien untuk keluarga Indonesia.</p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-full shadow transition"
        >
          Hubungi Kami
        </a>
      </div>
      {/* Kontak & Info */}
      <div className="flex flex-col gap-2 items-center md:items-start">
        <div>
          <span className="font-semibold text-white">Alamat:</span><br />
          Jl. Teknologi No. 123, Jakarta, Indonesia
        </div>
        <div>
          <span className="font-semibold text-white">Telepon:</span> <a href="tel:+622112345678" className="text-cyan-400 hover:underline">(021) 123-45678</a>
        </div>
        <div>
          <span className="font-semibold text-white">Email:</span> <a href="mailto:info@orionplus.id" className="text-cyan-400 hover:underline">info@orionplus.id</a>
        </div>
        <div>
          <span className="font-semibold text-white">WhatsApp:</span> <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">+62 812-3456-7890</a>
        </div>
      </div>
      {/* Social Media */}
      <div className="flex flex-col gap-2 items-center md:items-end">
        <div className="font-semibold text-white mb-2">Ikuti Kami:</div>
        <div className="flex gap-4 mb-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ikuti kami di ${link.label}`}
              className="hover:text-cyan-400 transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="mt-4 text-slate-500 text-xs">© 2025 Orion+. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
