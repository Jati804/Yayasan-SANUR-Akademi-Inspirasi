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
  Layers,
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

interface LevelModul {
  level: 'Basic' | 'Intermediate' | 'Advanced';
  output: string;
  materi: { judul: string; kajian: string[] }[];
}

interface TrainingProgram {
  name: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  colorLight: string;
  colorText: string;
  tags: string[];
  tujuan: string;
  levels: LevelModul[];
}

const trainingPrograms: TrainingProgram[] = [
  {
    name: "Pelatihan Ms-Excel",
    desc: "Olah data profesional dari Basic hingga Advanced",
    icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
    color: "bg-green-500",
    colorLight: "bg-green-50",
    colorText: "text-green-600",
    tags: ["Rumus & Fungsi", "Pivot Table", "Dashboard", "VBA & Macro"],
    tujuan: "Peserta mampu mengolah, menganalisis, dan memvisualisasikan data menggunakan Microsoft Excel secara profesional — dari laporan tabel dasar hingga otomatisasi sistem dan analisis bisnis tingkat lanjut.",
    levels: [
      {
        level: "Basic",
        output: "Menghasilkan laporan tabel yang rapi, terbaca, dan siap cetak.",
        materi: [
          { judul: "Navigasi dan Manajemen Data Dasar", kajian: ["Pemahaman Struktur: Workbook, Worksheet, Row, Column, dan Cell", "Input Data: memasukkan dan mengedit data tanpa merusak format", "Manajemen Sheet: tambah, hapus, ganti nama, dan beri warna tab sheet"] },
          { judul: "Operasi Aritmatika & Fungsi Dasar (The Big 5)", kajian: ["Operator Dasar: +, -, *, /", "Fungsi Statistik: SUM, AVERAGE, COUNT, MAX, MIN"] },
          { judul: "Formatting dan Estetika Tabel", kajian: ["Cell Formatting: jenis huruf, warna sel, border", "Number Formatting: Mata Uang, Persentase, Tanggal", "Alignment & Merge: teks tengah dan gabungkan sel judul"] },
          { judul: "Pengurutan dan Penyaringan (Sort & Filter)", kajian: ["Sorting: urutkan data A-Z atau angka terkecil ke terbesar", "Filtering: tampilkan hanya data yang diinginkan"] },
          { judul: "Dasar Visualisasi dan Pencetakan", kajian: ["Chart Dasar: Bar Chart dan Pie Chart sederhana", "Page Setup: atur skala cetak agar tabel tidak terpotong saat print/PDF"] },
        ]
      },
      {
        level: "Intermediate",
        output: "Mengolah data dengan cara membangun sistem yang otomatis dan dinamis.",
        materi: [
          { judul: "Penguasaan Logika Bersyarat (Conditional Logic)", kajian: ["IF tunggal dan Nested IF", "AND, OR, NOT untuk kriteria kompleks", "Conditional Formatting: warna sel berubah otomatis berdasarkan nilai"] },
          { judul: "Pencarian dan Penghubungan Data (Lookup & Reference)", kajian: ["VLOOKUP & HLOOKUP", "INDEX & MATCH: alternatif fleksibel pengganti VLOOKUP", "XLOOKUP (Excel terbaru): cara modern tanpa batasan posisi kolom"] },
          { judul: "Pengolahan Teks dan Tanggal Lanjutan", kajian: ["Text Functions: LEFT, RIGHT, MID, CONCATENATE, TRIM", "Date & Time: hitung selisih hari kerja, jatuh tempo, ekstrak bulan/tahun"] },
          { judul: "Analisis Data dengan Pivot Table", kajian: ["Pivot Table Dasar: ringkasan total penjualan per kategori/wilayah", "Slicers & Timelines: tombol filter interaktif", "Grouping: kelompokkan data tanggal per bulan/kuartal/tahun otomatis"] },
          { judul: "Validasi Data dan Keamanan (Data Integrity)", kajian: ["Data Validation: Dropdown List agar input konsisten", "Protection: kunci sel rumus tanpa menghalangi area input"] },
        ]
      },
      {
        level: "Advanced",
        output: "Membangun sistem, otomatisasi total, dan analisis mendalam.",
        materi: [
          { judul: "Otomatisasi dengan Macro dan VBA", kajian: ["Recording Macro: rekam langkah kerja dan jalankan dengan satu tombol", "VBA Programming: fungsi buatan sendiri & otomatisasi lintas aplikasi", "Automation: bersihkan dan gabungkan puluhan file Excel secara otomatis"] },
          { judul: "Power Query dan Power Pivot", kajian: ["Power Query (ETL): hubungkan Excel ke database SQL/website", "Data Modeling: Relationship antar tabel tanpa VLOOKUP", "DAX: rumus statistik kompleks seperti Year-over-Year growth"] },
          { judul: "Analisis Prediktif dan Simulasi Bisnis", kajian: ["What-If Analysis: Goal Seek, Scenario Manager, Data Tables", "Solver: solusi optimal dengan banyak batasan (misal: jadwal karyawan)", "Forecasting: prediksi tren penjualan masa depan"] },
          { judul: "Dashboard Interaktif dan Visualisasi Tingkat Tinggi", kajian: ["Advanced Charting: Waterfall, Gantt, Dynamic Dashboards", "Form Controls: Scroll bars, Checkboxes, Option buttons interaktif"] },
          { judul: "Formula Array dan Fungsi Dinamis", kajian: ["Dynamic Array: FILTER, UNIQUE, SORT, SEQUENCE", "Nested Complexity: gabungkan 5-10 fungsi dalam satu sel"] },
        ]
      }
    ]
  },
  {
    name: "Pelatihan Ms-Word",
    desc: "Administrasi perkantoran dan dokumen profesional",
    icon: <FileText className="w-7 h-7 text-white" />,
    color: "bg-blue-500",
    colorLight: "bg-blue-50",
    colorText: "text-blue-600",
    tags: ["Dokumen Resmi", "Mail Merge", "Styles & TOC", "Otomatisasi VBA"],
    tujuan: "Peserta mampu membuat dokumen profesional dari surat menyurat sederhana hingga manajemen dokumen skala besar dengan otomatisasi penuh dan keamanan dokumen tingkat lanjut.",
    levels: [
      {
        level: "Basic",
        output: "Mampu membuat dokumen yang rapi, terstruktur, dan siap cetak — surat menyurat, laporan, dan cetak (print).",
        materi: [
          { judul: "Dasar Pengetikan dan Navigasi", kajian: ["Input Teks: mengetik, menghapus, Copy & Cut-Paste", "Manajemen File: buat baru, Save/Save As, ekspor PDF", "Navigasi: Zoom, Scroll, Undo/Redo"] },
          { judul: "Formatting Teks (Tipografi Dasar)", kajian: ["Font Styling: jenis huruf, ukuran, warna, Bold/Italic/Underline", "Case Change: ubah teks ke huruf besar/kecil sekaligus", "Clear Formatting: kembalikan semua format ke setelan pabrik"] },
          { judul: "Formatting Paragraf", kajian: ["Alignment: Rata Kiri, Tengah, Kanan, Justify", "Line Spacing: jarak antar baris (1.0, 1.15, 1.5)", "Bullets & Numbering, Indentation"] },
          { judul: "Layout dan Pengaturan Halaman", kajian: ["Page Setup: jenis kertas (A4/F4/Legal) dan arah Portrait/Landscape", "Margins: atur batas tepi (standar 4-4-3-3)", "Page Break: pindah halaman baru tanpa 'Enter' berkali-kali"] },
          { judul: "Penyisipan Objek Dasar", kajian: ["Tables: buat tabel, tambah baris/kolom, atur lebar kolom", "Pictures & Shapes: sisipkan gambar/bentuk dengan Wrap Text"] },
        ]
      },
      {
        level: "Intermediate",
        output: "Otomatisasi dan manajemen dokumen panjang — laporan tahunan, skripsi, atau buku agar konsisten dan cepat tanpa pengaturan manual.",
        materi: [
          { judul: "Style dan Tema (Consistency)", kajian: ["Heading Styles: gunakan Heading 1-3 untuk struktur dokumen", "Modify Styles: ubah format seluruh judul hanya dengan satu klik", "Navigation Pane: pindah antar bab tanpa scroll panjang"] },
          { judul: "Otomatisasi Referensi", kajian: ["Table of Contents: daftar isi otomatis dari Heading Styles", "Captions & Table of Figures: label gambar/tabel otomatis", "Footnotes, Endnotes, dan Cross-reference"] },
          { judul: "Manajemen Halaman Kompleks (Sections)", kajian: ["Section Breaks: nomor romawi di awal, angka di isi", "Different Layouts: satu halaman Landscape di tengah dokumen Portrait", "Headers & Footers berbeda antar bab"] },
          { judul: "Mail Merge (Otomatisasi Dokumen Massal)", kajian: ["Surat Massal/Sertifikat: hubungkan Word dengan Excel untuk cetak nama berbeda-beda otomatis"] },
          { judul: "Review dan Kolaborasi", kajian: ["Track Changes: tandai setiap perubahan di dokumen", "Comments: catatan tanpa merusak isi", "Compare & Combine: bandingkan dua dokumen hampir sama"] },
        ]
      },
      {
        level: "Advanced",
        output: "Membangun 'mesin dokumen' yang aman, efisien, dan meminimalisir kesalahan manusia melalui otomatisasi dan kontrol sistem.",
        materi: [
          { judul: "Otomatisasi dengan Field Codes dan Macros", kajian: ["Field Codes: kode {DATE}, {IF} untuk informasi dinamis", "VBA & Macros: script otomatisasi tindakan repetitif"] },
          { judul: "Formulir Digital Interaktif (Developer Tools)", kajian: ["Content Controls: Checkboxes, Date Pickers, Drop-down Lists", "Form Protection: kunci dokumen kecuali area yang boleh diisi"] },
          { judul: "Manajemen Dokumen Skala Besar", kajian: ["Master & Sub-documents: pecah buku besar menjadi file kecil yang sinkron", "Advanced Indexing: buat indeks kata kunci profesional"] },
          { judul: "Integrasi Tingkat Tinggi dan Branding", kajian: ["Custom Templates: file .dotx dengan skema warna dan Quick Parts", "Object Linking (OLE): tabel Excel live di dalam Word — update otomatis"] },
          { judul: "Keamanan Dokumen dan Metadata", kajian: ["Digital Signatures: tanda tangan digital legal", "Restrict Editing: atur izin akses spesifik per pengguna", "Document Inspector: bersihkan metadata tersembunyi sebelum kirim"] },
        ]
      }
    ]
  },
  {
    name: "Affiliate TikTok",
    desc: "Pemasaran digital dan konten video kreatif",
    icon: <TrendingUp className="w-7 h-7 text-white" />,
    color: "bg-purple-500",
    colorLight: "bg-purple-50",
    colorText: "text-purple-600",
    tags: ["Public Speaking", "Video Produk", "Copywriting", "Passive Income"],
    tujuan: "Peserta mampu membangun sistem afiliasi TikTok dari nol — dari pecah telur komisi pertama hingga passive income skala besar melalui otomatisasi dan strategi digital tingkat lanjut.",
    levels: [
      {
        level: "Basic",
        output: "Memiliki akun affiliate aktif, daftar 5-10 produk niche, dan berhasil mendapatkan klik & komisi pertama.",
        materi: [
          { judul: "Pemahaman Ekosistem & Istilah (Mindset)", kajian: ["Alur Kerja: peran Merchant, Affiliate Marketer, dan Customer", "Istilah Teknis: Affiliate Link, Cookie Duration, Niche, Commission Rate", "Kepatuhan (Compliance): aturan main agar akun tidak di-banned"] },
          { judul: "Pemilihan Program dan Niche", kajian: ["Menentukan Niche: pilih satu bidang (Gadget, Skincare, Alat Masak)", "Pendaftaran Program: Shopee Affiliate, TikTok Affiliate, Amazon Associates", "Kurasi Produk: pilih produk rating tinggi dan rasio penjualan bagus"] },
          { judul: "Manajemen Link Afiliasi", kajian: ["Custom Link: ambil link produk dan ubah jadi link afiliasi pribadi", "Link Shortener: Bitly/TinyURL agar link tidak mencurigakan", "Link in Bio: halaman Linktree/Late.shop untuk profil media sosial"] },
          { judul: "Pembuatan Konten Promosi Sederhana", kajian: ["Soft Selling: narasi natural 'Review jujur pemakaian 7 hari...'", "Visual Dasar: foto/video produk jernih atau aset dari penjual", "Call to Action (CTA): ajakan klik yang efektif"] },
          { judul: "Distribusi Konten (Traffic Generation)", kajian: ["Pemanfaatan Media Sosial: WhatsApp Status, Instagram Story, komentar relevan", "Konsistensi: kebiasaan posting harian untuk meningkatkan peluang klik"] },
        ]
      },
      {
        level: "Intermediate",
        output: "Membangun sistem untuk penghasilan bulanan yang stabil dan terukur melalui mesin traffic.",
        materi: [
          { judul: "Personal Branding & Authority", kajian: ["Niche Expert: dikenal sebagai rujukan di bidang tertentu", "Trust Building: konten edukasi value-first sebelum penjualan", "Loyalty: pengikut aktif yang menunggu rekomendasi produk"] },
          { judul: "Copywriting & Content Funneling", kajian: ["Psychological Trigger: AIDA dan PAS framework", "Storytelling: promosi dalam bentuk cerita keseharian (seamless promotion)", "Video Editing Intermediate: hook kuat dalam 3 detik pertama"] },
          { judul: "Analisis Data & Optimasi (Tracking)", kajian: ["Click-Through Rate (CTR): analisis penonton vs klik link", "Conversion Rate: pahami mengapa banyak klik tapi sedikit beli", "A/B Testing: dua gaya konten berbeda untuk komisi optimal"] },
          { judul: "Paid Traffic (Iklan Berbayar) Dasar", kajian: ["Platform Ads: TikTok Ads, Facebook/Instagram Ads, Shopee MyAds", "ROI: hitung biaya iklan vs komisi yang didapat"] },
          { judul: "List Building (Database)", kajian: ["Lead Magnet: e-book/voucher/grup diskusi gratis untuk kumpulkan kontak", "Broadcasting: kelola grup WA/Telegram/Email List tanpa tergantung algoritma"] },
        ]
      },
      {
        level: "Advanced",
        output: "Sebagai Digital Strategist & Business Owner — passive income skala besar melalui otomatisasi dan dominasi pasar.",
        materi: [
          { judul: "Otomatisasi Sistem (Passive Income Machine)", kajian: ["Email Marketing Automation: autoresponder 30-90 hari setelah subscriber masuk", "Sales Funnel Kompleks: landing page dengan Upselling dan Cross-selling", "Chatbot & AI: auto-reply komentar/pesan dan arahkan ke link afiliasi"] },
          { judul: "High-Ticket Affiliate & Multi-Tier", kajian: ["High-Ticket Program: produk mahal (software, kursus premium) komisi jutaan/transaksi", "Recurring Commission: produk SaaS berlangganan = komisi tiap bulan", "Multi-Tier: persentase dari hasil kerja tim sub-affiliate yang dibangun"] },
          { judul: "Advanced Media Buying & Arbitrase", kajian: ["Scaling Ads: kelola budget besar di Google/YouTube/TikTok Ads dengan ROAS positif", "Retargeting/Remarketing: kejar ulang yang pernah klik tapi belum beli", "Pixel & API Tracking: kode pelacak tingkat lanjut untuk analisis perilaku audiens"] },
          { judul: "SEO & Authority Site (Aset Jangka Panjang)", kajian: ["Niche Site: website review di peringkat 1 Google untuk kata kunci 'Terbaik/Review/Harga'", "Backlink Strategy: bangun otoritas website agar traffic organik gratis bertahun-tahun"] },
          { judul: "Negosiasi dan Partnership Eksklusif", kajian: ["Custom Commission: minta kenaikan persentase karena volume penjualan besar", "Exclusive Voucher Code: kode promo atas nama brand sendiri", "Whitelabel/Bridge Branding: transisi menuju Product Owner"] },
        ]
      }
    ]
  },
  {
    name: "Pendampingan CPNS",
    desc: "Strategi lolos seleksi dari administrasi hingga simulasi CAT",
    icon: <BookOpenCheck className="w-7 h-7 text-white" />,
    color: "bg-orange-500",
    colorLight: "bg-orange-50",
    colorText: "text-orange-600",
    tags: ["TWK", "TIU", "TKP", "Simulasi CAT"],
    tujuan: "Peserta memahami alur seleksi CPNS secara menyeluruh — dari strategi pemilihan formasi, penguasaan materi SKD, hingga simulasi ujian CAT yang realistis.",
    levels: [
      {
        level: "Basic",
        output: "Fokus pada pemahaman aturan main dan penguatan konsep dasar sebelum menyentuh soal-soal sulit.",
        materi: [
          { judul: "Foundation & Strategy", kajian: [
            "Analisis Formasi: pilih instansi/jabatan berdasarkan peluang (pendaftar vs kuota) dan kualifikasi",
            "Strategi Administrasi: audit dokumen (ijazah, sertifikat, akreditasi) — anti-gugur berkas",
            "Pengenalan Kisi-kisi SKD: TWK (Wawasan Kebangsaan), TIU (Tes Intelegensia Umum), TKP (Karakteristik Pribadi)"
          ]},
        ]
      },
      {
        level: "Intermediate",
        output: "Fokus pada penguasaan materi secara mendalam dan teknik pengerjaan soal yang cepat.",
        materi: [
          { judul: "Skill & Drills", kajian: [
            "Mastering TIU: metode cepat soal hitungan dan logika posisi tanpa hitung manual panjang",
            "Deep Dive TWK: bedakan konsep mirip (Bela Negara vs Patriotisme) agar tidak terjebak soal jebakan",
            "Bedah Pola Soal TKP: 'Kunci Jawaban PNS' — jawaban yang mencerminkan integritas dan pelayanan publik",
            "Try Out Rutin: latihan soal dengan batasan waktu untuk melatih ketenangan"
          ]},
        ]
      },
      {
        level: "Advanced",
        output: "Fokus pada simulasi riil dan persiapan tahap akhir (SKB).",
        materi: [
          { judul: "Optimization & Simulation", kajian: [
            "Simulasi CAT (Computer Assisted Test): sistem mirip aslinya dengan tekanan waktu dan antarmuka komputer",
            "Manajemen Waktu Ekstrem: strategi TKP dulu → TWK → TIU untuk maksimalkan poin dalam 100 menit",
            "Persiapan SKB (Seleksi Kompetensi Bidang): pendampingan spesifik sesuai formasi",
            "Simulasi Wawancara & Psikotes: cara menjawab agar terlihat loyal dan berintegritas tinggi"
          ]},
        ]
      }
    ]
  },
  {
    name: "Kewirausahaan",
    desc: "Membangun usaha mikro mandiri dan berdaya saing",
    icon: <Store className="w-7 h-7 text-white" />,
    color: "bg-red-500",
    colorLight: "bg-red-50",
    colorText: "text-red-600",
    tags: ["Validasi Usaha", "Keuangan UMKM", "Branding", "Scale-up"],
    tujuan: "Peserta mampu membangun dan mengelola usaha mikro — dari keberanian memulai, validasi produk, manajemen keuangan, branding, hingga skala usaha yang mandiri dan siap naik kelas.",
    levels: [
      {
        level: "Basic",
        output: "Bertahan hidup dan validasi — pemilik usaha mampu mengubah keterampilan atau aset pribadi menjadi uang secara konsisten.",
        materi: [
          { judul: "Mentalitas Dagang & Kemandirian", kajian: ["Keberanian Memulai: atasi rasa malu dan takut gagal untuk menawarkan produk pertama", "Kemandirian: disiplin waktu operasional tanpa harus disuruh"] },
          { judul: "Produk Layak Jual (Product Readiness)", kajian: ["Kualitas Standar: rasa/kualitas jasa selalu sama setiap kali dibeli", "Kemasan Rapi: bersih, ada label nama usaha dan nomor WhatsApp", "Produk Unggulan: satu produk Best Seller agar fokus dalam penawaran"] },
          { judul: "Pengaturan Keuangan 'Kantong Terpisah'", kajian: ["Pemisahan Uang: dua dompet/rekening (pribadi vs usaha)", "Catatan Kas Harian: setiap rupiah masuk-keluar di buku saku", "Penghitungan Laba Bersih: harga jual dikurangi biaya bahan baku per unit"] },
          { judul: "Pemasaran Lingkungan Terdekat (Local Marketing)", kajian: ["Pemanfaatan WhatsApp: status WA dan grup RT/RW/Keluarga sebagai toko utama", "Word of Mouth: minta dan sebar testimoni tetangga/teman", "Pelayanan Ramah: bangun hubungan untuk Repeat Order"] },
          { judul: "Legalitas Paling Dasar", kajian: ["NIB (Nomor Induk Berusaha): daftar melalui sistem OSS", "Identitas Usaha: nama toko/brand yang unik dan mudah diingat"] },
        ]
      },
      {
        level: "Intermediate",
        output: "Pengelolaan usaha yang stabil — perluasan pasar melampaui tetangga/teman dengan manajemen yang lebih rapi.",
        materi: [
          { judul: "Perluasan Jangkauan Pasar (Market Expansion)", kajian: ["Digitalisasi Penjualan: toko di Shopee/Tokopedia atau GrabFood/GoFood/ShopeeFood", "Akun Media Sosial Bisnis: Instagram/TikTok khusus usaha, bukan akun pribadi", "Konsinyasi: titipkan produk di warung, koperasi, atau kafe sekitar"] },
          { judul: "Standarisasi dan Efisiensi Produksi", kajian: ["Resep/Cara Kerja Baku: catatan takaran agar hasil tetap sama meski dikerjakan orang lain", "Investasi Alat: sisihkan laba untuk alat lebih produktif", "Manajemen Stok: hitung kebutuhan bahan baku seminggu ke depan"] },
          { judul: "Keuangan dan Laba untuk Investasi", kajian: ["Gaji untuk Diri Sendiri: tentukan gaji bulanan dari laba agar modal tetap utuh", "Laporan Sederhana Bulanan: bandingkan omzet dan keuntungan antar bulan", "Dana Darurat Usaha: simpanan untuk perbaikan alat atau kenaikan harga bahan baku"] },
          { judul: "Branding dan Diferensiasi Produk", kajian: ["Identitas Visual: logo, stiker label informatif, foto produk estetik (kualitas katalog)", "Niche Market: tonjolkan keunikan agar tidak bersaing hanya lewat harga murah"] },
          { judul: "Pemanfaatan Tenaga Kerja Tambahan", kajian: ["Rekrutmen Tenaga Lepas: gunakan jasa freelance/borongan saat pesanan membludak", "Komunikasi Instruksi: arahan kerja jelas agar hasilnya sesuai keinginan"] },
        ]
      },
      {
        level: "Advanced",
        output: "Membangun sistem kemandirian ekonomi — usaha efisien, pasar loyal, siap naik kelas ke skala Kecil/Menengah.",
        materi: [
          { judul: "Automasi Operasional (Self-Running Micro Business)", kajian: ["Sistem Produksi Mandiri: jika pemilik berhalangan, produksi tetap berjalan 100% normal", "Aplikasi Kasir Digital (POS): Moka, Majoo, atau Qasir untuk catat penjualan otomatis", "Sertifikasi Dasar: P-IRT atau Sertifikasi Halal untuk perkuat kepercayaan"] },
          { judul: "Penguasaan Pasar & Komunitas", kajian: ["Database Pelanggan: kelola nomor WA/email pembeli untuk promo khusus tanpa cari pelanggan baru", "Omni-channel Marketing: TikTok Shop, Shopee, Instagram — konten saling terintegrasi", "Kolaborasi Lokal: paket bundling dengan usaha mikro lain untuk perluasan pasar kolektif"] },
          { judul: "Manajemen Keuangan untuk Ekspansi", kajian: ["Pembiayaan Strategis: laporan keuangan layak untuk akses KUR atau pendanaan mikro", "Efisiensi Biaya: negosiasi supplier besar atau beralih ke pembelian grosir", "Pajak UMKM: pahami Pajak Final 0.5% dan mulai berkontribusi legal"] },
          { judul: "Pengembangan Brand & Kekayaan Intelektual", kajian: ["Pendaftaran Merek (HAKI): daftarkan ke DJKI agar tidak bisa ditiru", "Reputasi Digital: pertahankan rating 4.8+ di Google Maps/Marketplace", "Visual Identity Kuat: packaging setara produk pabrikan dengan sentuhan lokal"] },
          { judul: "Peningkatan Skala (Scale-up Readiness)", kajian: ["Sistem Reseller/Agen: bangun jaringan penjual agar produk tersebar tanpa buka toko baru", "Pendelegasian Tim: minimal 1-3 karyawan tetap dengan sistem gaji profesional"] },
        ]
      }
    ]
  },
  {
    name: "YouTube Creator",
    desc: "Membangun channel dari konten konsisten hingga media entrepreneur",
    icon: <Video className="w-7 h-7 text-white" />,
    color: "bg-pink-500",
    colorLight: "bg-pink-50",
    colorText: "text-pink-600",
    tags: ["Scripting", "Produksi Video", "SEO YouTube", "Monetisasi"],
    tujuan: "Peserta mampu membuat, mengedit, dan mengoptimalkan konten YouTube — dari upload video pertama yang layak tonton hingga membangun bisnis media yang skalabel dengan tim dan monetisasi multi-channel.",
    levels: [
      {
        level: "Basic",
        output: "Konsisten upload konten 'layak tonton': percaya diri di depan kamera, 1 video per minggu, niche konsisten, dan komunitas kecil yang aktif.",
        materi: [
          { judul: "Fondasi Saluran (Channel Setup)", kajian: ["Optimasi Profil: nama mudah diingat, foto profil, Channel Art relevan", "Branding Dasar: deskripsi channel dengan kata kunci agar mudah ditemukan", "Verifikasi Akun: untuk thumbnail kustom dan video >15 menit"] },
          { judul: "Produksi Konten dengan Alat Seadanya", kajian: ["Teknik Rekaman HP: stabil (tripod/posisi tangan) dan pencahayaan alami", "Kualitas Audio: audio lebih penting dari video — rekam suara jernih tanpa noise", "Basic Lighting: Three-Point Lighting sederhana atau ring light"] },
          { judul: "Editing Video Dasar", kajian: ["Cutting & Trimming: buang bagian tidak penting (salah bicara, jeda lama)", "Penyisipan Elemen: teks, No Copyright Music, transisi sederhana", "Exporting: resolusi minimal 1080p (Full HD)"] },
          { judul: "Clickability (Thumbnail & Judul)", kajian: ["Desain Thumbnail: kontras, teks terbaca, ekspresi wajah menarik via Canva", "Penulisan Judul: pancing rasa penasaran tanpa clickbait menipu"] },
          { judul: "Pemahaman Dasar Algoritma & Dashboard", kajian: ["Upload Workflow: atur Privacy, tambah tag, pilih kategori", "YouTube Studio Dasar: baca Views dan Watch Time"] },
        ]
      },
      {
        level: "Intermediate",
        output: "Content Creator — fokus kualitas produksi cinematic dan strategi pertumbuhan (Growth Strategy).",
        materi: [
          { judul: "Storytelling dan Struktur Konten (Retention)", kajian: ["Hook 30 Detik: pembukaan video sangat menarik agar tidak langsung skip", "Scripting: susun skrip/outline beralur (Pembukaan → Konflik → Klimaks → Penutup)", "Pacing: atur tempo — kapan cepat, kapan melambat agar tidak bosan"] },
          { judul: "Peningkatan Kualitas Produksi (Cinematic)", kajian: ["B-Roll & Overlay: rekaman tambahan untuk visual lebih dinamis", "Color Grading: koreksi warna dasar agar mood konsisten dan estetik", "Sound Design: SFX tepat dan Audio Ducking"] },
          { judul: "SEO YouTube & Riset Kata Kunci", kajian: ["Keyword Research: TubeBuddy, VidIQ, Google Trends untuk topik banyak dicari", "Metadata Lanjutan: optimasi judul, deskripsi, tag dengan kata kunci alami", "CTR Optimization: A/B Testing thumbnail untuk video klik rendah"] },
          { judul: "Manajemen Komunitas & Engagement", kajian: ["Community Tab: polling, foto, teks untuk interaksi antar upload", "Card & End Screens: arahkan penonton ke video lain (Watch Session)", "Brand Persona: salam pembuka, gaya bicara, atau set studio khas yang mudah dikenali"] },
          { judul: "Analisis Dashboard (YouTube Analytics)", kajian: ["Audience Retention Graph: lihat di menit ke berapa penonton pergi", "Traffic Sources: pahami asal penonton (Search/Suggestion/Sosmed)"] },
        ]
      },
      {
        level: "Advanced",
        output: "Media Entrepreneur — bisnis media berkelanjutan, skalabel, dan berdampak luas.",
        materi: [
          { judul: "Pengembangan IP (Intellectual Property) & Brand", kajian: ["Show Development: format acara konsisten (serial mingguan, dokumenter, podcast)", "Brand Guidelines: standar visual dan komunikasi yang sangat konsisten", "Merchandising: ubah loyalitas audiens menjadi penjualan produk fisik/digital"] },
          { judul: "Manajemen Tim & Workflow (Scaling)", kajian: ["SOP Produksi: standar operasional untuk tim editor, penulis naskah, desain grafis", "Production Pipeline: jadwal syuting dan upload dalam jumlah banyak (batching)", "Project Management: Trello/Notion/Slack untuk pantau progres dari ide hingga tayang"] },
          { judul: "Monetisasi Multi-Channel & Sponsorship Lanjutan", kajian: ["Direct Sponsorship: negosiasi brand besar untuk kontrak ambassador jangka panjang", "Affiliate & Digital Products: integrasi penjualan kursus/e-book/software secara halus", "Fan Funding: Membership, Patreon, atau donasi dengan nilai eksklusif"] },
          { judul: "Advanced Audience Psychology & Viral Engineering", kajian: ["Viral Theory: ciptakan tren, bukan sekadar ikuti tren", "Hyper-Optimization: A/B testing judul & thumbnail ekstrem untuk maksimalkan CTR", "Community Expansion: Discord, Newsletter, atau Aplikasi sendiri di luar YouTube"] },
          { judul: "Data Science & Strategi Lintas Platform", kajian: ["Comparative Analytics: bandingkan performa dengan kompetitor untuk temukan celah pasar", "Multi-Platform Integration: repurposing — satu video panjang jadi puluhan Shorts/Reels/TikTok", "International Reach: dubbing atau subtitle profesional untuk CPM global lebih tinggi"] },
        ]
      }
    ]
  },
];

const levelConfig = {
  Basic: {
    bg: "bg-emerald-500",
    light: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    headerBg: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
  Intermediate: {
    bg: "bg-blue-500",
    light: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    headerBg: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  Advanced: {
    bg: "bg-violet-600",
    light: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
    headerBg: "bg-gradient-to-r from-violet-600 to-purple-600",
  },
};

const Program: React.FC = () => {
  const navigate = useNavigate();
  const [activeKurikulum, setActiveKurikulum] = useState<number | null>(null);
  const [openLevel, setOpenLevel] = useState<string | null>(null);
  const [openMateri, setOpenMateri] = useState<string | null>(null);

  const handleSelectProgram = (programName: string) => {
    navigate('/daftar', { state: { selectionName: programName } });
  };

  const handleToggleKurikulum = (idx: number) => {
    if (activeKurikulum === idx) {
      setActiveKurikulum(null);
      setOpenLevel(null);
      setOpenMateri(null);
    } else {
      setActiveKurikulum(idx);
      setOpenLevel(null);
      setOpenMateri(null);
    }
  };

  return (
    <section className="pt-32 pb-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

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
            { icon: <Layers className="w-4 h-4" />, label: "3 Level: Basic – Intermediate – Advanced" },
            { icon: <Award className="w-4 h-4" />, label: "Sertifikasi kompetensi" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full text-sm text-gray-600 font-medium">
              <span className="text-primary">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </MotionDiv>

        {/* Program List */}
        <div className="flex flex-col gap-5">
          {trainingPrograms.map((program, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              {/* Main Card — Horizontal */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Card Content Row */}
                <div className="flex flex-col md:flex-row md:items-center gap-0">
                  {/* Left color accent */}
                  <div className={`${program.color} md:w-2 md:self-stretch w-full h-2 md:h-auto flex-shrink-0`} />

                  {/* Icon + Info */}
                  <div className="flex items-center gap-5 p-6 flex-1 min-w-0">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${program.color} flex-shrink-0`}>
                      {program.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-xl text-gray-900 mb-0.5">{program.name}</h4>
                      <p className="text-gray-500 text-sm mb-3">{program.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {program.tags.map((tag, tIdx) => (
                          <span key={tIdx} className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${program.colorLight} ${program.colorText}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 px-6 pb-6 md:pb-0 md:pr-6 flex-shrink-0">
                    <button
                      onClick={() => handleToggleKurikulum(idx)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all duration-200 text-sm font-bold cursor-pointer ${
                        activeKurikulum === idx
                          ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                          : 'bg-white text-gray-500 border-gray-200 hover:border-primary/40 hover:text-primary'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span className="hidden sm:inline">Kurikulum</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeKurikulum === idx ? 'rotate-180' : ''}`} />
                    </button>

                    <button
                      onClick={() => handleSelectProgram(program.name)}
                      className={`group flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-sm text-white transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer ${program.color}`}
                    >
                      <span>Pilih Program</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

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
                      <div className="border-t border-gray-100">
                        {/* Tujuan Banner */}
                        <div className={`px-7 py-4 ${program.colorLight}`}>
                          <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                            <span className={`font-black ${program.colorText}`}>Tujuan: </span>
                            {program.tujuan}
                          </p>
                        </div>

                        {/* Level Tabs */}
                        <div className="p-5 flex flex-col gap-3">
                          {program.levels.map((levelData, lIdx) => {
                            const cfg = levelConfig[levelData.level];
                            const levelKey = `${idx}-${lIdx}`;
                            const isLevelOpen = openLevel === levelKey;

                            return (
                              <div key={lIdx} className={`rounded-2xl border-2 overflow-hidden ${cfg.border}`}>
                                {/* Level Header */}
                                <button
                                  onClick={() => {
                                    setOpenLevel(isLevelOpen ? null : levelKey);
                                    setOpenMateri(null);
                                  }}
                                  className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors cursor-pointer ${isLevelOpen ? cfg.headerBg : 'bg-white hover:' + cfg.light}`}
                                >
                                  <div className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${isLevelOpen ? 'bg-white/20 text-white' : cfg.badge}`}>
                                    {levelData.level}
                                  </div>
                                  <p className={`flex-1 text-sm leading-relaxed ${isLevelOpen ? 'text-white font-medium' : 'text-gray-600'}`}>
                                    {levelData.output}
                                  </p>
                                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isLevelOpen ? 'rotate-180 text-white' : 'text-gray-400'}`} />
                                </button>

                                {/* Materi List */}
                                <AnimatePresence>
                                  {isLevelOpen && (
                                    <MotionDiv
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.25 }}
                                      className="overflow-hidden"
                                    >
                                      <div className={`divide-y ${cfg.border.replace('border-', 'divide-')}`}>
                                        {levelData.materi.map((materi, mIdx) => {
                                          const materiKey = `${levelKey}-${mIdx}`;
                                          const isMateriOpen = openMateri === materiKey;

                                          return (
                                            <div key={mIdx} className="bg-white">
                                              <button
                                                onClick={() => setOpenMateri(isMateriOpen ? null : materiKey)}
                                                className={`w-full flex items-center gap-3 px-5 py-3.5 text-left hover:${cfg.light} transition-colors cursor-pointer`}
                                              >
                                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${cfg.badge}`}>
                                                  {mIdx + 1}
                                                </div>
                                                <span className="flex-1 font-semibold text-gray-800 text-sm">{materi.judul}</span>
                                                <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${isMateriOpen ? 'rotate-180 ' + cfg.text : 'text-gray-300'}`} />
                                              </button>

                                              <AnimatePresence>
                                                {isMateriOpen && (
                                                  <MotionDiv
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                  >
                                                    <div className={`px-5 pt-1 pb-4 ${cfg.light}`}>
                                                      <ul className="space-y-2 ml-9">
                                                        {materi.kajian.map((item, iIdx) => (
                                                          <li key={iIdx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.bg}`}></span>
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

                                      <div className={`px-5 py-3 ${cfg.light} border-t ${cfg.border}`}>
                                        <p className={`text-[10px] font-medium ${cfg.text}`}>Kurikulum bersifat adaptif sesuai progress peserta. Nilai minimal 80 untuk lanjut ke level berikutnya.</p>
                                      </div>
                                    </MotionDiv>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </MotionDiv>
                  )}
                </AnimatePresence>
              </div>
            </MotionDiv>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Program;
