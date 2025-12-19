import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, BookOpen, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: <UserCheck className="w-8 h-8 text-secondary" />,
    title: "Pendampingan Intensif",
    desc: "Sesi semi private (max 5 peserta) agar pendampingan lebih optimal."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Kurikulum Praktis",
    desc: "Fokus pada Kurikulum Berbasis Kompetensi yang relevan dengan pasar kerja."
  },
  {
    icon: <Users className="w-8 h-8 text-secondary" />,
    title: "Kesiapan Karir",
    desc: "Pendampingan karir dan pembekalan untuk menunjang transisi ke dunia profesional."
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Lingkungan Inklusif",
    desc: "Suasana belajar yang suportif, aman, dan memberdayakan."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Intro Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-3xl md:text-4xl text-gray-800 mb-6 leading-tight">
              Mengapa memilih belajar di <span className="text-primary">SANUR?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Yayasan SANUR Akademi Inspirasi merupakan organisasi nirlaba yang bergerak di bidang pendidikan dan pemberdayaan sosial untuk masyarakat penyandang disabilitas. Kami berfokus pada peningkatan keterampilan praktis dan kemandirian.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3 group-hover:text-primary transition-colors">
                {feat.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;