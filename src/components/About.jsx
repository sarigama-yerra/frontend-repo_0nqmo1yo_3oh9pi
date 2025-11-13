function About() {
  return (
    <section id="tentang" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl p-1 bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400">
          <div className="rounded-2xl bg-white p-8">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-100 to-white" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Tentang Portal</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Portal informasi layanan kantor dirancang untuk memberikan kemudahan akses informasi dengan tampilan modern, cepat, dan responsif. Seluruh konten disusun agar mudah dipahami, sehingga masyarakat dapat menemukan layanan yang dibutuhkan tanpa hambatan.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-500" /> Desain modern dengan efek halus</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-500" /> Navigasi sederhana dan jelas</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-500" /> Informasi terstruktur dan transparan</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;