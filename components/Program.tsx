
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  FileText, 
  TrendingUp, 
  Store, 
  Video, 
  Users, 
  ArrowRight,
  BookOpen,
  Clock,
  Crown
} from 'lucide-react';

// Moved BookOpenCheck definition above trainingPrograms to fix "used before its declaration" error
const BookOpenCheck = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    <path d="m9 9 2 2 4-4"/>
  </svg>
);

const trainingPrograms = [
  { 
    name: "Pelatihan Ms-Excel", 
    desc: "Olah data profesional",
    icon: <FileSpreadsheet className="w-8 h-8 text-white" />,
    color: "bg-green-500",
    tags: ["Rumus Dasar", "Pivot Table", "Dashboard"]
  },
  { 
    name: "Pelatihan Ms-Word", 
    desc: "Administrasi perkantoran",
    icon: <FileText className="w-8 h-8 text-white" />,
    color: "bg-blue-500",
    tags: ["Mail Merge", "Layout Dokumen", "Typing Skill"]
  },
  { 
    name: "Affiliate TikTok", 
    desc: "Pemasaran & Video Kreatif",
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    color: "bg-purple-500",
    tags: ["Public Speaking", "Video Produk", "Tarik Follower"]
  },
  { 
    name: "Pendampingan CPNS", 
    desc: "Strategi lolos seleksi",
    icon: <BookOpenCheck className="w-8 h-8 text-white" />,
    color: "bg-orange-500",
    tags: ["Panduan Daftar", "Strategi Instansi", "Bedah Kisi-kisi"]
  },
  { 
    name: "Kewirausahaan", 
    desc: "Mulai bisnis sendiri",
    icon: <Store className="w-8 h-8 text-white" />,
    color: "bg-red-500",
    tags: ["Ide Bisnis", "Manajemen Uang", "Branding"]
  },
  { 
    name: "YouTube Creator", 
    desc: "Membangun Channel",
    icon: <Video className="w-8 h-8 text-white" />,
    color: "bg-pink-500",
    tags: ["Scripting", "Lighting", "Editing Dasar"]
  },
];

const Program: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectProgram = (programName: string) => {
    navigate('/daftar', { state: { selectionName: programName } });
  };

  return (
    <section className="pt-32 pb-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
           >
             <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Kurikulum & Biaya</span>
             <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Program Pelatihan</h1>
             <p className="text-lg text-gray-500 leading-relaxed">Pilih materi yang ingin Anda kuasai. Kami mendampingi hingga kompeten.</p>
           </motion.div>
        </div>

        {/* 1. CURRICULUM SECTION */}
        <div className="mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 shadow-md">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <h2 className="font-heading font-black text-2xl md:text-3xl text-primary-dark mb-6">Rancangan Kurikulum</h2>
                    <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                        <p>Menggunakan <span className="font-bold text-primary">Kurikulum Berbasis Kompetensi (KBK)</span>. Evaluasi dilakukan tiap 5 pertemuan.</p>
                        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm my-6 inline-block w-full md:w-auto">
                            <p className="font-bold text-gray-800">🎯 Parameter Kelulusan:</p>
                            <p className="text-gray-600 mt-2">Nilai minimal 80 untuk sertifikasi kompetensi.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. PROGRAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {trainingPrograms.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => handleSelectProgram(program.name)}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col relative"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${program.color} group-hover:scale-110 transition-transform mb-6`}>
                {program.icon}
              </div>
              <h4 className="font-black text-2xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {program.name}
              </h4>
              <p className="text-gray-500 mb-6">{program.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {program.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-400 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between text-primary font-bold">
                <span className="text-sm">Daftar</span>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. PRICING SECTION */}
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-heading font-black text-3xl md:text-4xl text-gray-800 mb-4">Biaya Pendidikan</h2>
                <p className="text-gray-500">Transparan, terjangkau, dan berkualitas.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="bg-white rounded-3xl p-8 border-2 border-secondary/20 shadow-xl relative group">
                    <div className="absolute top-0 right-0">
                      <div className="bg-secondary text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-bl-2xl flex items-center gap-1">
                         <Crown className="w-3 h-3 fill-white" /> Paling Diminati
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                        <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kelas Semi-Private</h3>
                    <div className="bg-surface w-full py-6 rounded-2xl mb-6 px-4">
                        <div className="flex items-baseline justify-center mt-2 gap-1 text-gray-900">
                            <span className="text-2xl font-bold">Rp</span>
                            <span className="text-4xl md:text-6xl font-black">60.000</span>
                            <span className="text-xl font-bold text-gray-500">/ Jam</span>
                        </div>
                    </div>
                    <div className="w-full space-y-3 text-sm px-4">
                        <div className="flex items-center gap-3 text-gray-600"><Clock className="w-5 h-5" /><span>Durasi: 2 Jam per sesi</span></div>
                        <div className="flex items-center gap-3 text-gray-600"><BookOpenCheck className="w-5 h-5" /><span>Paket: 6 Kali Pertemuan</span></div>
                        <div className="border-t pt-3 mt-3 flex justify-between items-center bg-gray-50 p-3 rounded-lg"><span className="text-gray-500">Total:</span><span className="font-bold text-primary text-lg">Rp 720.000</span></div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                    <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                        <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kelas Private</h3>
                    <div className="bg-surface w-full py-6 rounded-2xl mb-6 px-4">
                        <div className="flex items-baseline justify-center mt-2 gap-1 text-gray-900">
                            <span className="text-2xl font-bold">Rp</span>
                            <span className="text-4xl md:text-6xl font-black">125.000</span>
                            <span className="text-xl font-bold text-gray-500">/ Jam</span>
                        </div>
                    </div>
                    <div className="w-full space-y-3 text-sm px-4">
                        <div className="flex items-center gap-3 text-gray-600"><Clock className="w-5 h-5" /><span>Durasi: 2 Jam per sesi</span></div>
                        <div className="flex items-center gap-3 text-gray-600"><BookOpenCheck className="w-5 h-5" /><span>Paket: 6 Kali Pertemuan</span></div>
                        <div className="border-t pt-3 mt-3 flex justify-between items-center bg-gray-50 p-3 rounded-lg"><span className="text-gray-500">Total:</span><span className="font-bold text-primary text-lg">Rp 1.500.000</span></div>
                    </div>
                </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-8 italic">*Pembayaran di awal untuk menjamin komitmen belajar.</p>
        </div>

      </div>
    </section>
  );
};

export default Program;
