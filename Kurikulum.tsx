import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileSpreadsheet,
  FileText,
  TrendingUp,
  Store,
  Video,
  BookOpen,
  ChevronDown,
  Target,
  Clock,
  CheckCircle2,
  Award,
  Layers
} from 'lucide-react';

const MotionDiv = motion.div as any;
const MotionSection = motion.section as any;

// Reusable BookOpenCheck SVG
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
  pertemuan: string;
  judul: string;
  materi: string[];
}

interface Program {
  id: number;
  name: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  bgLight: string;
  textColor: string;
  borderColor: string;
  tujuan: string;
  durasi: string;
  modul: Modul[];
}

const kurikulumData: Program[] = [
  {
    id: 1,
    name: "Pelatihan Ms-Excel",
    desc: "Olah data profesional",
    icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
    color: "bg-green-500",
    bgLight: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    tujuan: "Peserta mampu mengolah, menganalisis, dan memvisualisasikan data menggunakan Microsoft Excel secara profesional.",
    durasi: "12 Pertemuan (2 Jam/Sesi)",
    modul: [
      {
        pertemuan: "Pertemuan 1–2",
        judul: "Dasar Excel & Navigasi",
        materi: ["Pengenalan antarmuka Excel", "Manajemen sel, baris, kolom", "Format data dasar", "Rumus aritmatika dasar (SUM, AVERAGE, MIN, MAX)"]
      },
      {
        pertemuan: "Pertemuan 3–4",
        judul: "Rumus & Fungsi Lanjutan",
        materi: ["Fungsi IF, AND, OR", "VLOOKUP & HLOOKUP", "Fungsi teks (CONCATENATE, LEFT, RIGHT, MID)", "Fungsi tanggal & waktu"]
      },
      {
        pertemuan: "Pertemuan 5–6",
        judul: "Evaluasi 1 + Pivot Table",
        materi: ["Evaluasi kompetensi modul 1–2 (nilai minimal 80)", "Pengenalan Pivot Table", "Membuat laporan ringkasan otomatis", "Filter & sorting data"]
      },
      {
        pertemuan: "Pertemuan 7–8",
        judul: "Visualisasi Data",
        materi: ["Membuat chart & grafik", "Conditional formatting", "Sparklines", "Data validation"]
      },
      {
        pertemuan: "Pertemuan 9–10",
        judul: "Dashboard & Laporan",
        materi: ["Merancang dashboard interaktif", "Slicers & timeline", "Named ranges", "Print & page layout"]
      },
      {
        pertemuan: "Pertemuan 11–12",
        judul: "Evaluasi 2 + Proyek Akhir",
        materi: ["Evaluasi kompetensi modul 3–5 (nilai minimal 80)", "Proyek akhir: membuat laporan data nyata", "Review & feedback", "Sertifikasi kompetensi"]
      },
    ]
  },
  {
    id: 2,
    name: "Pelatihan Ms-Word",
    desc: "Administrasi perkantoran",
    icon: <FileText className="w-7 h-7 text-white" />,
    color: "bg-blue-500",
    bgLight: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    tujuan: "Peserta mampu membuat dokumen profesional, surat resmi, dan laporan menggunakan Microsoft Word dengan efisien.",
    durasi: "12 Pertemuan (2 Jam/Sesi)",
    modul: [
      {
        pertemuan: "Pertemuan 1–2",
        judul: "Dasar Word & Typing Skill",
        materi: ["Pengenalan antarmuka Word", "Teknik mengetik 10 jari dasar", "Format teks: font, size, paragraf", "Bullet & numbering"]
      },
      {
        pertemuan: "Pertemuan 3–4",
        judul: "Layout Dokumen",
        materi: ["Header, footer, & halaman", "Pengaturan margin & orientasi", "Tab stops & indentasi", "Tabel dasar"]
      },
      {
        pertemuan: "Pertemuan 5–6",
        judul: "Evaluasi 1 + Dokumen Resmi",
        materi: ["Evaluasi kompetensi modul 1–2 (nilai minimal 80)", "Membuat surat resmi & memo", "Template dokumen", "Styles & heading"]
      },
      {
        pertemuan: "Pertemuan 7–8",
        judul: "Mail Merge",
        materi: ["Konsep mail merge", "Membuat surat massal dari database", "Merge label & amplop", "Preview & cetak hasil merge"]
      },
      {
        pertemuan: "Pertemuan 9–10",
        judul: "Fitur Lanjutan",
        materi: ["Table of Contents otomatis", "Track Changes & komentar", "Footnote & endnote", "Referensi & bibliografi"]
      },
      {
        pertemuan: "Pertemuan 11–12",
        judul: "Evaluasi 2 + Proyek Akhir",
        materi: ["Evaluasi kompetensi modul 3–5 (nilai minimal 80)", "Proyek akhir: laporan formal lengkap", "Review & feedback", "Sertifikasi kompetensi"]
      },
    ]
  },
  {
    id: 3,
    name: "Affiliate TikTok",
    desc: "Pemasaran & Video Kreatif",
    icon: <TrendingUp className="w-7 h-7 text-white" />,
    color: "bg-purple-500",
    bgLight: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    tujuan: "Peserta mampu membuat konten video produk yang menarik, membangun audiens, dan menghasilkan komisi dari program afiliasi TikTok.",
    durasi: "12 Pertemuan (2 Jam/Sesi)",
    modul: [
      {
        pertemuan: "Pertemuan 1–2",
        judul: "Dasar TikTok & Algoritma",
        materi: ["Memahami ekosistem TikTok", "Cara kerja algoritma FYP", "Riset niche & kompetitor", "Setup akun creator"]
      },
      {
        pertemuan: "Pertemuan 3–4",
        judul: "Public Speaking & On-Camera",
        materi: ["Teknik berbicara di depan kamera", "Bahasa tubuh & ekspresi", "Latihan deliver pesan singkat", "Mengatasi gugup di depan kamera"]
      },
      {
        pertemuan: "Pertemuan 5–6",
        judul: "Evaluasi 1 + Produksi Video",
        materi: ["Evaluasi kompetensi modul 1–2 (nilai minimal 80)", "Teknik pengambilan gambar produk", "Lighting sederhana di rumah", "Skrip video produk"]
      },
      {
        pertemuan: "Pertemuan 7–8",
        judul: "Editing & Konten Kreatif",
        materi: ["Editing video di CapCut", "Teks, transisi, & musik", "Hook opener yang menarik", "Strategi posting & jadwal konten"]
      },
      {
        pertemuan: "Pertemuan 9–10",
        judul: "Afiliasi & Monetisasi",
        materi: ["Daftar TikTok Shop Affiliate", "Memilih produk potensial", "Cara kerja komisi & penarikan", "Analisis performa konten"]
      },
      {
        pertemuan: "Pertemuan 11–12",
        judul: "Evaluasi 2 + Proyek Akhir",
        materi: ["Evaluasi kompetensi modul 3–5 (nilai minimal 80)", "Proyek akhir: 3 video afiliasi nyata", "Review & feedback", "Sertifikasi kompetensi"]
      },
    ]
  },
  {
    id: 4,
    name: "Pendampingan CPNS",
    desc: "Strategi lolos seleksi",
    icon: <BookOpenCheck className="w-7 h-7 text-white" />,
    color: "bg-orange-500",
    bgLight: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
    tujuan: "Peserta memahami alur seleksi CPNS, mampu mengerjakan soal SKD dengan strategi, dan siap menghadapi ujian dengan percaya diri.",
    durasi: "12 Pertemuan (2 Jam/Sesi)",
    modul: [
      {
        pertemuan: "Pertemuan 1–2",
        judul: "Panduan Dasar CPNS",
        materi: ["Alur pendaftaran SSCASN", "Jenis formasi & instansi", "Persyaratan dokumen", "Strategi memilih instansi yang tepat"]
      },
      {
        pertemuan: "Pertemuan 3–4",
        judul: "Tes Wawasan Kebangsaan (TWK)",
        materi: ["Materi Pancasila & UUD 1945", "Sejarah perjuangan bangsa", "Bela negara & wawasan nusantara", "Latihan soal TWK"]
      },
      {
        pertemuan: "Pertemuan 5–6",
        judul: "Evaluasi 1 + Tes Intelegensia Umum (TIU)",
        materi: ["Evaluasi kompetensi modul 1–2 (nilai minimal 80)", "Kemampuan verbal & analogi", "Deret angka & logika", "Strategi menjawab cepat"]
      },
      {
        pertemuan: "Pertemuan 7–8",
        judul: "Tes Karakteristik Pribadi (TKP)",
        materi: ["Memahami pola jawaban TKP", "Integritas & etika kerja", "Pelayanan publik", "Latihan simulasi TKP]"]
      },
      {
        pertemuan: "Pertemuan 9–10",
        judul: "Bedah Kisi-kisi & Simulasi",
        materi: ["Analisis kisi-kisi terbaru", "Simulasi CAT full SKD", "Review kesalahan umum", "Manajemen waktu ujian"]
      },
      {
        pertemuan: "Pertemuan 11–12",
        judul: "Evaluasi 2 + Proyek Akhir",
        materi: ["Evaluasi kompetensi modul 3–5 (nilai minimal 80)", "Simulasi ujian final CAT", "Review & strategi akhir", "Sertifikasi kompetensi"]
      },
    ]
  },
  {
    id: 5,
    name: "Kewirausahaan",
    desc: "Mulai bisnis sendiri",
    icon: <Store className="w-7 h-7 text-white" />,
    color: "bg-red-500",
    bgLight: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
    tujuan: "Peserta mampu merancang ide bisnis, membuat rencana bisnis sederhana, mengelola keuangan, dan membangun brand yang dikenal.",
    durasi: "12 Pertemuan (2 Jam/Sesi)",
    modul: [
      {
        pertemuan: "Pertemuan 1–2",
        judul: "Mindset & Ide Bisnis",
        materi: ["Mindset wirausaha vs karyawan", "Teknik menemukan ide bisnis", "Validasi ide dengan riset pasar", "Mengenali target pelanggan"]
      },
      {
        pertemuan: "Pertemuan 3–4",
        judul: "Perencanaan Bisnis",
        materi: ["Struktur Business Model Canvas", "Analisis SWOT sederhana", "Menentukan harga jual", "Membuat proposal bisnis mini"]
      },
      {
        pertemuan: "Pertemuan 5–6",
        judul: "Evaluasi 1 + Manajemen Keuangan",
        materi: ["Evaluasi kompetensi modul 1–2 (nilai minimal 80)", "Pencatatan arus kas sederhana", "Modal awal & break even point", "Laporan laba rugi dasar"]
      },
      {
        pertemuan: "Pertemuan 7–8",
        judul: "Branding & Identitas Bisnis",
        materi: ["Membangun nama & logo bisnis", "Identitas visual yang konsisten", "Storytelling brand", "Membuat profil bisnis di media sosial"]
      },
      {
        pertemuan: "Pertemuan 9–10",
        judul: "Pemasaran Digital",
        materi: ["Strategi konten untuk bisnis", "Jualan di marketplace (Shopee, Tokopedia)", "WhatsApp Business", "Iklan berbayar dasar (Meta Ads)"]
      },
      {
        pertemuan: "Pertemuan 11–12",
        judul: "Evaluasi 2 + Proyek Akhir",
        materi: ["Evaluasi kompetensi modul 3–5 (nilai minimal 80)", "Proyek akhir: presentasi bisnis plan", "Review & feedback mentor", "Sertifikasi kompetensi"]
      },
    ]
  },
  {
    id: 6,
    name: "YouTube Creator",
    desc: "Membangun Channel",
    icon: <Video className="w-7 h-7 text-white" />,
    color: "bg-pink-500",
    bgLight: "bg-pink-50",
    textColor: "text-pink-700",
    borderColor: "border-pink-200",
    tujuan: "Peserta mampu membuat, mengedit, dan mengoptimalkan konten YouTube untuk membangun channel dengan audiens yang terus berkembang.",
    durasi: "12 Pertemuan (2 Jam/Sesi)",
    modul: [
      {
        pertemuan: "Pertemuan 1–2",
        judul: "Dasar YouTube & Strategi Channel",
        materi: ["Cara kerja algoritma YouTube", "Memilih niche channel", "Setup channel & branding awal", "Riset kompetitor & benchmark"]
      },
      {
        pertemuan: "Pertemuan 3–4",
        judul: "Scripting & Storytelling",
        materi: ["Struktur video yang engaging", "Teknik menulis skrip", "Hook pembuka yang kuat", "Call-to-action efektif"]
      },
      {
        pertemuan: "Pertemuan 5–6",
        judul: "Evaluasi 1 + Produksi Video",
        materi: ["Evaluasi kompetensi modul 1–2 (nilai minimal 80)", "Teknik lighting sederhana", "Pengaturan kamera & audio", "Tips syuting di rumah"]
      },
      {
        pertemuan: "Pertemuan 7–8",
        judul: "Editing Video",
        materi: ["Dasar editing di CapCut/DaVinci", "Potong, transisi, & color grading", "Tambah musik & efek suara", "Render & export optimal"]
      },
      {
        pertemuan: "Pertemuan 9–10",
        judul: "SEO YouTube & Growth",
        materi: ["Riset kata kunci YouTube", "Optimasi judul, deskripsi, & tag", "Membuat thumbnail menarik", "Analitik channel & strategi growth"]
      },
      {
        pertemuan: "Pertemuan 11–12",
        judul: "Evaluasi 2 + Proyek Akhir",
        materi: ["Evaluasi kompetensi modul 3–5 (nilai minimal 80)", "Proyek akhir: upload 2 video lengkap", "Review & feedback", "Sertifikasi kompetensi"]
      },
    ]
  },
];

const Kurikulum: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<number>(0);
  const [openModul, setOpenModul] = useState<number | null>(null);

  const current = kurikulumData[activeProgram];

  return (
    <section className="pt-32 pb-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Kurikulum</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Rancangan Kurikulum</h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Setiap program dirancang dengan <span className="font-semibold text-primary">Kurikulum Berbasis Kompetensi (KBK)</span>. Evaluasi dilakukan setiap 6 pertemuan dengan nilai minimal <span className="font-bold text-gray-700">80</span>.
          </p>
        </MotionDiv>

        {/* KBK Info Bar */}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {[
            { icon: <Target className="w-4 h-4" />, label: "Nilai minimal 80" },
            { icon: <Clock className="w-4 h-4" />, label: "Evaluasi tiap 6 pertemuan" },
            { icon: <Award className="w-4 h-4" />, label: "Sertifikasi kompetensi" },
            { icon: <Layers className="w-4 h-4" />, label: "Kurikulum Berbasis Kompetensi" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full text-sm text-gray-600 font-medium">
              <span className="text-primary">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </MotionDiv>

        {/* Program Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {kurikulumData.map((program, idx) => (
            <button
              key={program.id}
              onClick={() => { setActiveProgram(idx); setOpenModul(null); }}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 text-center cursor-pointer ${
                activeProgram === idx
                  ? `${program.bgLight} ${program.borderColor} shadow-md`
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${program.color}`}>
                {program.icon}
              </div>
              <span className={`text-[11px] font-bold leading-tight ${activeProgram === idx ? program.textColor : 'text-gray-600'}`}>
                {program.name}
              </span>
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <MotionDiv
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden"
          >
            {/* Panel Header */}
            <div className={`${current.bgLight} ${current.borderColor} border-b px-8 py-6 flex flex-col md:flex-row md:items-center gap-4`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${current.color} flex-shrink-0`}>
                {current.icon}
              </div>
              <div className="flex-1">
                <h2 className={`text-2xl font-black ${current.textColor}`}>{current.name}</h2>
                <p className="text-gray-500 text-sm mt-1">{current.tujuan}</p>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm text-gray-600 font-medium shadow-sm flex-shrink-0">
                <Clock className="w-4 h-4 text-gray-400" />
                {current.durasi}
              </div>
            </div>

            {/* Modul Accordion */}
            <div className="divide-y divide-gray-50">
              {current.modul.map((modul, idx) => {
                const isOpen = openModul === idx;
                const isEval = modul.judul.toLowerCase().includes('evaluasi');
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenModul(isOpen ? null : idx)}
                      className="w-full flex items-center gap-4 px-8 py-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                        isEval ? `${current.color} text-white` : `${current.bgLight} ${current.textColor}`
                      }`}>
                        {isEval ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-400 font-semibold">{modul.pertemuan}</span>
                          {isEval && (
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${current.bgLight} ${current.textColor}`}>
                              Evaluasi
                            </span>
                          )}
                        </div>
                        <p className="font-bold text-gray-800 mt-0.5">{modul.judul}</p>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <MotionDiv
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className={`px-8 pb-6 pt-2 ${current.bgLight}`}>
                            <ul className="space-y-2">
                              {modul.materi.map((item, mIdx) => (
                                <li key={mIdx} className="flex items-start gap-3 text-sm text-gray-700">
                                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${current.color}`}></span>
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

            {/* Panel Footer */}
            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
              <BookOpen className="w-4 h-4" />
              <span>Kurikulum bersifat adaptif dan dapat disesuaikan dengan kebutuhan peserta.</span>
            </div>
          </MotionDiv>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Kurikulum;
