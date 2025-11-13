import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm mb-4 border border-sky-200">
            <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            Layanan publik modern & transparan
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-slate-900">
            Portal Informasi Layanan Kantor
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400">Cepat, Mudah, Efisien</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            Akses informasi layanan, persyaratan, jam operasional, dan kontak bantuan dalam satu tempat dengan desain modern dan efek halus.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#layanan" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">Lihat Layanan</a>
            <a href="#kontak" className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-200 hover:border-slate-300 text-slate-700 transition-all">Hubungi Kami</a>
          </div>
        </div>
        <div className="h-[420px] lg:h-[520px]" />
      </div>

      <div className="absolute -z-0 inset-x-0 top-40 blur-3xl opacity-40 pointer-events-none">
        <div className="mx-auto h-72 w-[28rem] bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 rounded-full mix-blend-multiply" />
      </div>
    </section>
  );
}

export default Hero;