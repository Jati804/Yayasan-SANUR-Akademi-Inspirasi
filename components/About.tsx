import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Heart, Users, Shield, Lightbulb, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* 1. SECTION LATAR BELAKANG */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Modern Clean Header Style */}
            <h2 className="font-heading font-black text-3xl md:text-5xl text-primary-dark mb-10 leading-tight">
              Tentang Kami
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto text-justify md:text-center"
          >
            <p className="mb-6">
              Populasi penyandang disabilitas di Indonesia sampai saat ini masih menghadapi tantangan besar dalam mendapatkan akses pendidikan inklusif yang berkualitas dan peluang kerja yang setara. Seringkali, pelatihan yang tersedia bersifat generik dan kurang fokus pada keterampilan praktis serta keahlian spesifik yang dibutuhkan industri. 
            </p>
            <p>
              <span className="font-bold text-primary">Yayasan SANUR Akademi Inspirasi</span> hadir untuk menjembatani kesenjangan ini. Kami percaya bahwa setiap individu, tanpa memandang kondisi, memiliki potensi unik yang dapat dikembangkan. Melalui kurikulum yang terstruktur dan pendampingan intensif yang berfokus pada kemandirian, kami berkomitmen mendampingi para peserta agar tidak hanya siap untuk bekerja, tetapi juga siap berwirausaha dan berkontribusi penuh pada masyarakat.
            </p>
          </motion.div>
        </div>

        {/* 2. SECTION VISI & MISI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* Card Visi - Modern Blue Style */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-xl flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
              {/* Header Visi: Side by Side Layout */}
              <div className="flex items-center gap-5 mb-6">
                 <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="font-heading font-bold text-3xl">Visi</h3>
              </div>
              
              <p className="text-blue-50 text-xl leading-relaxed font-medium italic pl-1">
                "Menjadi lembaga yang kredibel dalam menyiapkan kemandirian masyarakat terutama warga negara berkebutuhan khusus."
              </p>
            </div>
          </motion.div>

          {/* Card Misi - Modern White Style */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-white border border-gray-100 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-lg"
          >
            {/* Header Misi: Side by Side Layout */}
            <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Flag className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-3xl text-gray-800">Misi</h3>
            </div>

            <ul className="space-y-6">
              {[
                "Memberikan kurikulum yang relevan dan praktis untuk kebutuhan pasar kerja.",
                "Menyediakan akses informasi yang mendukung peserta dalam merencanakan karir setelah pelatihan.",
                "Melakukan pendampingan psikososial dan pengembangan diri yang berkelanjutan."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-slate-700 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 3. SECTION NILAI - UPDATED STYLE (COLORFUL DEFAULT) */}
        <div>
          <div className="text-center mb-16">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-800">Nilai Utama</h3>
            <div className="w-12 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Inklusivitas", icon: <Users className="w-7 h-7" /> },
              { title: "Kemandirian", icon: <Shield className="w-7 h-7" /> },
              { title: "Transparasi", icon: <Lightbulb className="w-7 h-7" /> },
              { title: "Keterlibatan Komunitas", icon: <Heart className="w-7 h-7" /> }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* ICON CONTAINER UPDATE: Always Blue (Soft) by default, Solid Blue on Hover */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {val.icon}
                </div>
                
                <h4 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-primary transition-colors">
                    {val.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;