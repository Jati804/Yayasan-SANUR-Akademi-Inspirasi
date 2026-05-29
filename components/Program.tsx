import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  FileText, 
  TrendingUp, 
  Store, 
  Video, 
  ArrowRight,
  ChevronDown,
  BookOpen,
  Target,
  Award,
} from 'lucide-react';

const MotionDiv = motion.div as any;

const BookOpenCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    <path d="m9 9 2 2 4-4"/>
  </svg>
);

interface Modul {
  judul: string;
  materi: string[];
  isEval?: boolean;
}

interface TrainingProgram {
  name: string;
  desc: string;
  icon: React.ReactNode;
  iconSmall: React.ReactNode;
  color: string;
  tags: string[];
  tujuan: string;
  modul: Modul[];
}

const trainingPrograms: TrainingProgram[] = [
  {
    name: "Pelatihan Ms-Excel",
    desc: "Olah data profesional",
    icon: <FileSpreadsheet className="w-8 h-8 text-white" />,
    iconSmall: <FileSpreadsheet className="w-5 h-5 text-white" />,
    color: "bg-green-500",
    tags: ["Rumus Dasar", "Pivot Table", "Dashboard"],
    tujuan: "Peserta mampu mengolah, menganalisis, dan memvisualisasikan data menggunakan Microsoft Excel secara profesional.",
    modul: [
      { judul: "Dasar Excel & Navigasi", materi: ["Pengenalan antarmuka Excel", "Manajemen sel, baris, dan kolom", "Format data dasar", "Rumus aritmatika dasar (SUM, AVERAGE, MIN, MAX)"] },
      { judul: "Rumus & Fungsi Lanjutan", materi: ["Fungsi IF, AND, OR", "VLOOKUP & HLOOKUP", "Fungsi teks (CONCATENATE, LEFT, RIGHT, MID)", "Fungsi tanggal & waktu"] },
      { judul: "Pivot Table & Analisis Data", materi: ["Pengenalan Pivot Table", "Membuat laporan ringkasan otomatis", "Filter & sorting data", "Grouping data"] },
      { judul: "Visualisasi Data", materi: ["Membuat chart & grafik", "Conditional formatting", "Sparklines", "Data validation"] },
      { judul: "Dashboard & Laporan", materi: ["Merancang dashboard interaktif", "Slicers & timeline", "Named ranges", "Print & page layout"] },
      { judul: "Evaluasi & Proyek Akhir", materi: ["Simulasi ujian kompetensi (nilai minimal 80)", "Proyek akhir: membuat laporan data nyata", "Review & feedback", "Sertifikasi kompetensi"], isEval: true },
    ]
  },
  {
    name: "Pelatihan Ms-Word",
    desc: "Administrasi perkantoran",
    icon: <FileText className="w-8 h-8 text-white" />,
    iconSmall: <FileText className="w-5 h-5 text-white" />,
    color: "bg-blue-500",
    tags: ["Mail Merge", "Layout Dokumen", "Typing Skill"],
    tujuan: "Peserta mampu membuat dokumen profesional, surat resmi, dan laporan menggunakan Microsoft Word dengan efisien.",
    modul: [
      { judul: "Dasar Word & Typing Skill", materi: ["Pengenalan antarmuka Word", "Teknik mengetik 10 jari dasar", "Format teks: font, size, paragraf", "Bullet & numbering"] },
      { judul: "Layout Dokumen", materi: ["Header, footer, & halaman", "Pengaturan margin & orientasi", "Tab stops & indentasi", "Tabel dasar"] },
      { judul: "Dokumen Resmi & Template", materi: ["Membuat surat resmi & memo", "Template dokumen", "Styles & heading", "Daftar isi otomatis"] },
      { judul: "Mail Merge", materi: ["Konsep mail merge", "Membuat surat massal dari database", "Merge label & amplop", "Preview & cetak hasil merge"] },
      { judul: "Fitur Lanjutan", materi: ["Track Changes & komentar", "Footnote & endnote", "Referensi & bibliografi", "Proteksi dokumen"] },
      { judul: "Evaluasi & Proyek Akhir", materi: ["Simulasi ujian kompetensi (nilai minimal 80)", "Proyek akhir: laporan formal lengkap", "Review & feedback", "Sertifikasi kompetensi"], isEval: true },
    ]
  },
  {
    name: "Affiliate TikTok",
    desc: "Pemasaran & Video Kreatif",
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    iconSmall: <TrendingUp className="w-5 h-5 text-white" />,
    color: "bg-purple-500",
    tags: ["Public Speaking", "Video Produk", "Tarik Follower"],
    tujuan: "Peserta mampu membuat konten video produk yang menarik, membangun audiens, dan menghasilkan komisi dari program afiliasi TikTok.",
    modul: [
      { judul: "Dasar TikTok & Algoritma", materi: ["Memahami ekosistem TikTok", "Cara kerja algoritma FYP", "Riset niche & kompetitor", "Setup akun creator"] },
      { judul: "Public Speaking & On-Camera", materi: ["Teknik berbicara di depan kamera", "Bahasa tubuh & ekspresi", "Latihan deliver pesan singkat", "Mengatasi gugup di depan kamera"] },
      { judul: "Produksi Video Produk", materi: ["Teknik pengambilan gambar produk", "Lighting sederhana di rumah", "Skrip video produk", "Hook opener yang menarik"] },
      { judul: "Editing & Konten Kreatif", materi: ["Editing video di CapCut", "Teks, transisi, & musik", "Strategi posting & jadwal konten", "Analisis performa konten"] },
      { judul: "Afiliasi & Monetisasi", materi: ["Daftar TikTok Shop Affiliate", "Memilih produk potensial", "Cara kerja komisi & penarikan", "Optimasi link afiliasi"] },
      { judul: "Evaluasi & Proyek Akhir", materi: ["Simulasi ujian kompetensi (nilai minimal 80)", "Proyek akhir: 3 video afiliasi nyata", "Review & feedback", "Sertifikasi kompetensi"], isEval: true },
    ]
  },
  {
    name: "Pendampingan CPNS",
    desc: "Strategi lolos seleksi",
    icon: <BookOpenCheck className="w-8 h-8 text-white" />,
    iconSmall: <BookOpenCheck className="w-5 h-5 text-white" />,
    color: "bg-orange-500",
    tags: ["Panduan Dasar", "Strategi Instansi", "Bedah Kisi-kisi"],
    tujuan: "Peserta memahami alur seleksi CPNS, mampu mengerjakan soal SKD dengan strategi, dan siap menghadapi ujian dengan percaya diri.",
    modul: [
      { judul: "Panduan Dasar CPNS", materi: ["Alur pendaftaran SSCASN", "Jenis formasi & instansi", "Persyaratan dokumen", "Strategi memilih instansi yang tepat"] },
      { judul: "Tes Wawasan Kebangsaan (TWK)", materi: ["Materi Pancasila & UUD 1945", "Sejarah perjuangan bangsa", "Bela negara & wawasan nusantara", "Latihan soal TWK"] },
      { judul: "Tes Intelegensia Umum (TIU)", materi: ["Kemampuan verbal & analogi", "Deret angka & logika", "Kemampuan spasial", "Strategi menjawab cepat"] },
      { judul: "Tes Karakteristik Pribadi (TKP)", materi: ["Memahami pola jawaban TKP", "Integritas & etika kerja", "Pelayanan publik", "Latihan simulasi TKP"] },
      { judul: "Bedah Kisi-kisi & Simulasi", materi: ["Analisis kisi-kisi terbaru", "Simulasi CAT full SKD", "Review kesalahan umum", "Manajemen waktu ujian"] },
      { judul: "Evaluasi & Proyek Akhir", materi: ["Simulasi ujian final CAT (nilai minimal 80)", "Review & strategi akhir", "Tanya jawab intensif", "Sertifikasi kompetensi"], isEval: true },
    ]
  },
  {
    name: "Kewirausahaan",
    desc: "Mulai bisnis sendiri",
    icon: <Store className="w-8 h-8 text-white" />,
    iconSmall: <Store className="w-5 h-5 text-white" />,
    color: "bg-red-500",
    tags: ["Ide Bisnis", "Manajemen Uang", "Branding"],
    tujuan: "Peserta mampu merancang ide bisnis, membuat rencana bisnis sederhana, mengelola keuangan, dan membangun brand yang dikenal.",
    modul: [
      { judul: "Mindset & Ide Bisnis", materi: ["Mindset wirausaha vs karyawan", "Teknik menemukan ide bisnis", "Validasi ide dengan riset pasar", "Mengenali target pelanggan"] },
      { judul: "Perencanaan Bisnis", materi: ["Struktur Business Model Canvas", "Analisis SWOT sederhana", "Menentukan harga jual", "Membuat proposal bisnis mini"] },
      { judul: "Manajemen Keuangan", materi: ["Pencatatan arus kas sederhana", "Modal awal & break even point", "Laporan laba rugi dasar", "Pisah keuangan bisnis & pribadi"] },
      { judul: "Branding & Identitas Bisnis", materi: ["Membangun nama & logo bisnis", "Identitas visual yang konsisten", "Storytelling brand", "Membuat profil bisnis di media sosial"] },
      { judul: "Pemasaran Digital", materi: ["Strategi konten untuk bisnis", "Jualan di marketplace (Shopee, Tokopedia)", "WhatsApp Business", "Iklan berbayar dasar (Meta Ads)"] },
      { judul: "Evaluasi & Proyek Akhir", materi: ["Simulasi ujian kompetensi (nilai minimal 80)", "Proyek akhir: presentasi bisnis plan", "Review & feedback mentor", "Sertifikasi kompetensi"], isEval: true },
    ]
  },
  {
    name: "YouTube Creator",
    desc: "Membangun Channel",
    icon: <Video className="w-8 h-8 text-white" />,
    iconSmall: <Video className="w-5 h-5 text-white" />,
    color: "bg-pink-500",
    tags: ["Scripting", "Lighting", "Editing Dasar"],
    tujuan: "Peserta mampu membuat, mengedit, dan mengoptimalkan konten YouTube untuk membangun channel dengan audiens yang terus berkembang.",
    modul: [
      { judul: "Dasar YouTube & Strategi Channel", materi: ["Cara kerja algoritma YouTube", "Memilih niche channel", "Setup channel & branding awal", "Riset kompetitor & benchmark"] },
      { judul: "Scripting & Storytelling", materi: ["Struktur video yang engaging", "Teknik menulis skrip", "Hook pembuka yang kuat", "Call-to-action efektif"] },
      { judul: "Produksi Video", materi: ["Teknik lighting sederhana", "Pengaturan kamera & audio", "Tips syuting di rumah", "B-roll & variasi shot"] },
      { judul: "Editing Video", materi: ["Dasar editing di CapCut/DaVinci", "Potong, transisi, & color grading", "Tambah musik & efek suara", "Render & export optimal"] },
      { judul: "SEO YouTube & Growth", materi: ["Riset kata kunci YouTube", "Optimasi judul, deskripsi, & tag", "Membuat thumbnail menarik", "Analitik channel & strategi growth"] },
      { judul: "Evaluasi & Proyek Akhir", materi: ["Simulasi ujian kompetensi (nilai minimal 80)", "Proyek akhir: upload 2 video lengkap", "Review & feedback", "Sertifikasi kompetensi"], isEval: true },
    ]
  },
];

const Program: React.FC = () => {
  const navigate = useNavigate();
  const [activeKurikulum, setActiveKurikulum] = useState<number | null>(null);
  const [openModul, setOpenModul] = useState<number | null>(null);

  const handleSelectProgram = (programName: string) => {
    navigate('/daftar', { state: { selectionName: programName } });
  };

  const handleToggleKurikulum = (idx: number) => {
    if (activeKurikulum === idx) {
      setActiveKurikulum(null);
      setOpenModul(null);
    } else {
      setActiveKurikulum(idx);
      setOpenModul(null);
    }
  };

  return (
    <section className="pt-32 pb-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Program & Kurikulum</span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Program Pelatihan</h1>
            <p className="text-lg text-gray-500 leading-relaxed">Pilih materi yang ingin Anda kuasai. Kami mendampingi hingga kompeten.</p>
          </MotionDiv>
        </div>

        {/* KBK Info Bar */}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {[
            { icon: <Target className="w-4 h-4" />, label: "Nilai minimal 80" },
            { icon: <BookOpen className="w-4 h-4" />, label: "Kurikulum Berbasis Kompetensi (KBK)" },
            { icon: <Award className="w-4 h-4" />, label: "Sertifikasi kompetensi" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full text-sm text-gray-600 font-medium">
              <span className="text-primary">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </MotionDiv>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {trainingPrograms.map((program, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              {/* Card */}
              <div
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
              </div>

              {/* Kurikulum Toggle Button */}
              <button
                onClick={() => handleToggleKurikulum(idx)}
                className={`mt-2 w-full flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-200 text-sm font-bold cursor-pointer ${
                  activeKurikulum === idx
                    ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                    : 'bg-white text-gray-500 border-gray-100 hover:border-primary/30 hover:text-primary'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Lihat Kurikulum
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeKurikulum === idx ? 'rotate-180' : ''}`} />
              </button>

              {/* Kurikulum Accordion Panel */}
              <AnimatePresence>
                {activeKurikulum === idx && (
                  <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                      {/* Kurikulum Header */}
                      <div className="bg-blue-50 border-b border-blue-100 px-6 py-4">
                        <p className="text-xs text-gray-500 leading-relaxed">{program.tujuan}</p>
                      </div>

                      {/* Modul List */}
                      <div className="divide-y divide-gray-50">
                        {program.modul.map((modul, mIdx) => {
                          const isOpen = openModul === mIdx;
                          return (
                            <div key={mIdx}>
                              <button
                                onClick={() => setOpenModul(isOpen ? null : mIdx)}
                                className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                              >
                                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                                  modul.isEval ? `${program.color} text-white` : 'bg-blue-50 text-primary'
                                }`}>
                                  {modul.isEval ? <Award className="w-3.5 h-3.5" /> : mIdx + 1}
                                </div>
                                <div className="flex-1 min-w-0 flex items-center gap-2">
                                  <span className="font-bold text-gray-800 text-sm">{modul.judul}</span>
                                  {modul.isEval && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-primary flex-shrink-0">
                                      Evaluasi
                                    </span>
                                  )}
                                </div>
                                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                              </button>

                              <AnimatePresence>
                                {isOpen && (
                                  <MotionDiv
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 pb-4 pt-1 bg-blue-50/50">
                                      <ul className="space-y-1.5">
                                        {modul.materi.map((item, iIdx) => (
                                          <li key={iIdx} className="flex items-start gap-2 text-xs text-gray-600">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                            {item}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </MotionDiv>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>

                      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                        <p className="text-[10px] text-gray-400">Kurikulum bersifat adaptif sesuai progress peserta.</p>
                      </div>
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </MotionDiv>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Program;
