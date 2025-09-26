import orionLogo from '../assets/orion-logo.png';


const Footer: React.FC = () => (
  <footer className="bg-slate-800/90 border-t border-slate-700/50 py-12 mt-20 text-slate-200">
    <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Brand & Deskripsi */}
      <div className="flex flex-col items-center md:items-start">
  <img src={orionLogo} alt="Orion+ Logo" className="w-16 h-16 mb-3 rounded-lg shadow-lg p-2" />
        <h3 className="text-2xl font-bold text-white mb-2">Orion+</h3>
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
          <a href="https://instagram.com/orionplus.id" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm-5.25 2.25a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 0 1 0-4.5z"/></svg></a>
          <a href="https://linkedin.com/company/orionplus" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75s1.75.78 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47c-1.5 0-1.73 1.18-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54c3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
        </div>
        <div className="mt-4 text-slate-500 text-xs">© 2025 Orion+. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
