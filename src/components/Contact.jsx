function Contact() {
  return (
    <section id="kontak" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Butuh Bantuan?</h2>
          <p className="mt-3 text-slate-600">Silakan tinggalkan pesan Anda. Tim kami akan segera menghubungi.</p>
        </div>
        <form className="mt-10 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="w-full rounded-xl border border-slate-200 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-sky-400 transition" placeholder="Nama" />
            <input className="w-full rounded-xl border border-slate-200 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-sky-400 transition" placeholder="Email" />
          </div>
          <input className="w-full rounded-xl border border-slate-200 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-sky-400 transition" placeholder="Subjek" />
          <textarea rows="5" className="w-full rounded-xl border border-slate-200 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 ring-sky-400 transition" placeholder="Pesan" />
          <div className="flex justify-center">
            <button type="button" className="mt-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">Kirim Pesan</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;