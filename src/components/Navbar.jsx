import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg shadow-cyan-500/20"></div>
          <span className="font-semibold text-slate-800">LayananKantor</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#layanan" className="hover:text-slate-900 transition-colors">Layanan</a>
          <a href="#tentang" className="hover:text-slate-900 transition-colors">Tentang</a>
          <a href="#kontak" className="hover:text-slate-900 transition-colors">Kontak</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-white/70 transition-colors" aria-label="Menu">
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;