import { ShieldCheck, Clock3, FileText, Users } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Perizinan',
    desc: 'Informasi persyaratan dan alur perizinan yang transparan dan mudah diikuti.'
  },
  {
    icon: FileText,
    title: 'Dokumen & Arsip',
    desc: 'Layanan pengelolaan dokumen, surat, dan arsip kantor secara rapi dan efisien.'
  },
  {
    icon: Clock3,
    title: 'Jam Layanan',
    desc: 'Jadwal operasional, estimasi waktu proses, serta antrean layanan terkini.'
  },
  {
    icon: Users,
    title: 'Bantuan & Konsultasi',
    desc: 'Hubungi petugas layanan untuk konsultasi kebutuhan Anda.'
  }
];

function Services() {
  return (
    <section id="layanan" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Layanan Utama</h2>
          <p className="mt-4 text-slate-600">Semua informasi layanan kantor yang Anda perlukan dalam satu portal yang ringkas.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur p-6 hover:shadow-xl hover:shadow-sky-100 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-white grid place-items-center shadow-lg shadow-cyan-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 text-lg">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 group-hover:w-full transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;