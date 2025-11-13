import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} LayananKantor. Semua hak dilindungi.</p>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <a href="#layanan" className="hover:text-slate-700">Layanan</a>
            <span>•</span>
            <a href="#tentang" className="hover:text-slate-700">Tentang</a>
            <span>•</span>
            <a href="#kontak" className="hover:text-slate-700">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;