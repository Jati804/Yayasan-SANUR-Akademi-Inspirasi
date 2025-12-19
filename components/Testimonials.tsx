
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

// Fix: Cast motion components to any to bypass environment-specific type merging issues
const MotionDiv = motion.div as any;

const testimonials = [
  {
    name: "Rudi Hartono",
    role: "Alumni Ms. Office",
    quote: "Awalnya saya ragu bisa mengoperasikan komputer karena keterbatasan fisik. Tapi instruktur di SANUR sangat sabar. Sekarang saya sudah bekerja sebagai staff administrasi.",
    rating: 5
  },
  {
    name: "Siti Aminah",
    role: "Peserta Kewirausahaan",
    quote: "Pelatihan mentalitasnya yang paling ngena. Bukan cuma diajarin jualan, tapi diajarin berani menghadapi orang. Terima kasih SANUR!",
    rating: 5
  },
  {
    name: "Budi Santoso",
    role: "Alumni Desain Grafis",
    quote: "Suasananya kekeluargaan banget. Nggak ada diskriminasi, semua saling dukung. Materinya juga daging semua, langsung kepakai buat kerja.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -ml-36 -mb-36 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-dark text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="w-3 h-3 fill-secondary" />
              Cerita Sukses Alumni
            </span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-gray-900 mb-6">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Pengalaman nyata dari mereka yang telah berproses dan bertumbuh bersama SANUR Akademi Inspirasi.</p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testi, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col relative group hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute -top-5 left-10 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500">
                <Quote className="w-6 h-6 fill-current" />
              </div>

              <div className="flex gap-1 mb-8 mt-4">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                ))}
              </div>

              <p className="text-gray-600 text-lg italic mb-10 flex-grow leading-relaxed font-medium">
                "{testi.quote}"
              </p>

              <div className="pt-8 border-t border-gray-50 flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-inner overflow-hidden">
                  <span className="opacity-40 absolute text-4xl -right-2 -bottom-2">{testi.name.charAt(0)}</span>
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg group-hover:text-primary transition-colors">{testi.name}</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{testi.role}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
