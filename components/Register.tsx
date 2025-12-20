
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fix: Import named member useLocation from react-router-dom
import { useLocation } from 'react-router-dom';
import { 
  MessageCircle, 
  ClipboardCheck, 
  Rocket, 
  ChevronDown, 
  CheckCircle2,
  Circle,
  Users,
  LayoutGrid
} from 'lucide-react';
import { getWaLink } from '../constants';

// Fix: Cast motion components to any to bypass environment-specific type merging issues
const MotionDiv = motion.div as any;

// Data Alur Pendaftaran
const steps = [
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    step: "1",
    title: "Konsultasi Awal",
    desc: "Hubungi admin untuk diskusi detail mengenai kebutuhan, kondisi, dan potensi calon peserta dengan pengajar ahli kami."
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-white" />,
    step: "2",
    title: "Asesmen",
    desc: "Kami melakukan asesmen verbal secara singkat untuk penempatan kelas dan merekomendasikan program pelatihan yang paling sesuai."
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    step: "3",
    title: "Mulai Pelatihan",
    desc: "Setelah program disepakati, lakukan pendaftaran resmi dan peserta siap memulai sesi pelatihan sesuai jadwal yang disepakati."
  }
];

// Data FAQ
const faqs = [
  {
    question: "Apakah ada biaya pendaftaran dan bagaimana skema pembayarannya?",
    answer: "Tidak ada biaya pendaftaran. Biaya pelatihan dikenakan per paket (umumnya 6x pertemuan) yang dibayarkan di awal, setelah program pelatihan disepakati dalam proses konsultasi and asesmen."
  },
  {
    question: "Berapa lama durasi satu sesi pelatihan?",
    answer: "Satu sesi pelatihan umumnya berdurasi 120 menit (2 jam). Durasi ini dapat disesuaikan berdasarkan program dan kebutuhan spesifik peserta setelah diskusi dengan tim pengajar."
  },
  {
    question: "Siapa target usia dan jenis disabilitas yang dilayani?",
    answer: "Fokus layanan kami saat ini adalah peserta disabilitas usia 16 sampai 30 tahun. Mohon maaf, kami belum dapat menerima peserta anak-anak. Terkait jenis disabilitas, kami menerima berbagai jenis (dilakukan asesmen mendalam untuk disabilitas berat)."
  },
  {
    question: "Apakah pelatihan ini hanya untuk penyandang disabilitas?",
    answer: "Fokus utama kami adalah pemberdayaan masyarakat penyandang disabilitas. Namun, kami menyambut peserta umum (usia 16-30 tahun) yang tertarik dengan program pelatihan kami dan berkomitmen menciptakan lingkungan belajar yang inklusif."
  },
  {
    question: "Bagaimana kebijakan jika peserta tidak dapat hadir di sesi pelatihan?",
    answer: "Jika peserta tidak hadir tanpa alasan, sesi dihitung hangus. Namun jika sakit atau halangan mendesak dan sudah info sebelumnya, sesi tersebut akan dijadwal ulang ke pertemuan selanjutnya."
  },
  {
    question: "Apakah pelatihan dilakukan secara online atau offline?",
    answer: "Untuk saat ini, pelatihan hanya dapat dilakukan secara offline di tempat kursus kami di Depok. Program online saat ini hanya tersedia untuk kegiatan seminar tertentu."
  }
];

interface LocationState {
  selectionName?: string;
}

const Register: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  
  // Set null as default to keep FAQs closed on entry
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  // Form State
  const [selectedProgram, setSelectedProgram] = useState<string>(state?.selectionName || "");
  const [selectedPackage, setSelectedPackage] = useState<string>(""); 
  const [price, setPrice] = useState<string>("0");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (selectedPackage === 'Semi-Private') {
        setPrice("Rp 720.000"); 
    }
    if (selectedPackage === 'Private') {
        setPrice("Rp 1.500.000"); 
    }
    if (!selectedPackage) setPrice("0");
  }, [selectedPackage]);

  const getWhatsappLink = () => {
    const text = `Halo, saya tertarik dengan program pelatihan di SANUR Akademi Inspirasi.\n\nMinat Program: *${selectedProgram || 'Belum pilih'}*\nRencana Paket: *${selectedPackage || 'Belum pilih'}*\nEstimasi Biaya: *${price} (Paket 6 Sesi)*\n\nMohon info jadwal konsultasi.`;
    return getWaLink(text);
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 overflow-y-auto">
      <div className="container mx-auto px-4 md:px-8">

        {/* 1. ALUR PENDAFTARAN */}
        <section className="mb-16 text-center">
            <h1 className="font-heading font-black text-3xl md:text-4xl text-gray-900 mb-4">
              Alur Pendaftaran
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12">
                Ikuti langkah mudah di bawah ini untuk memulai konsultasi program pelatihan yang paling sesuai dengan kebutuhanmu.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
                <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-100 -z-10 rounded-full"></div>

                {steps.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center relative group hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-primary/20 border-4 border-white">
                        {item.step}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
                ))}
            </div>
        </section>

        {/* 2. FORMULIR PEMILIHAN PAKET */}
        <section className="max-w-3xl mx-auto bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100 mb-12">
            <div className="text-center mb-8">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-800 mb-2">Estimasi Biaya & Konsultasi</h2>
                <p className="text-gray-500 text-sm">Lengkapi formulir di bawah ini untuk melihat estimasi biaya.</p>
            </div>

            <div className="space-y-6">
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4 text-secondary" />
                        Program Pilihan
                    </label>
                    <select 
                        value={selectedProgram} 
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none font-medium text-gray-700 transition-all cursor-pointer text-sm md:text-base appearance-none"
                    >
                        <option value="" disabled>
                          {isMobile ? "-- Pilih Program Pelatihan --" : "-- Klik Disini Untuk Memilih Program Pelatihan --"}
                        </option>
                        <option value="Pelatihan Ms-Excel">Pelatihan Ms-Excel</option>
                        <option value="Pelatihan Ms-Word">Pelatihan Ms-Word</option>
                        <option value="Affiliate TikTok">Affiliate TikTok</option>
                        <option value="Pendampingan CPNS">Pendampingan CPNS</option>
                        <option value="Kewirausahaan">Kewirausahaan</option>
                        <option value="YouTube Creator">YouTube Creator</option>
                    </select>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                            <Users className="w-4 h-4 text-secondary" />
                            Jenis Kelas (Wajib Dipilih)
                        </label>
                        <span className="text-[10px] md:text-xs text-primary bg-blue-50 px-2 py-1 rounded font-medium animate-pulse">
                            👇 Klik salah satu kotak di bawah
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div 
                            onClick={() => setSelectedPackage('Semi-Private')}
                            className={`cursor-pointer rounded-2xl border-2 p-5 transition-all relative group shadow-sm hover:shadow-md ${
                                selectedPackage === 'Semi-Private' 
                                ? 'border-primary bg-blue-50 ring-2 ring-blue-100 ring-offset-2' 
                                : 'border-gray-200 bg-white hover:border-blue-300'
                            }`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h4 className={`font-bold text-lg ${selectedPackage === 'Semi-Private' ? 'text-primary' : 'text-gray-700'}`}>Semi-Private</h4>
                                    <p className="text-xs text-gray-500">Max 5 orang. Diskusi aktif.</p>
                                </div>
                                <div>
                                    {selectedPackage === 'Semi-Private' 
                                        ? <CheckCircle2 className="w-6 h-6 text-primary fill-blue-100" />
                                        : <Circle className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                                    }
                                </div>
                            </div>
                            <div className="mt-4 mb-4 pt-4 border-t border-gray-100/50">
                                <p className="font-bold text-gray-900 text-xl">Rp 720.000</p>
                                <p className="text-[10px] text-gray-400">Total untuk 6 Sesi</p>
                            </div>
                            <div className={`w-full py-2 rounded-lg text-center text-sm font-bold transition-colors ${
                                selectedPackage === 'Semi-Private'
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600'
                            }`}>
                                {selectedPackage === 'Semi-Private' ? '✔ Paket Terpilih' : 'Pilih Paket Ini'}
                            </div>
                        </div>

                        <div 
                            onClick={() => setSelectedPackage('Private')}
                            className={`cursor-pointer rounded-2xl border-2 p-5 transition-all relative group shadow-sm hover:shadow-md ${
                                selectedPackage === 'Private' 
                                ? 'border-primary bg-blue-50 ring-2 ring-blue-100 ring-offset-2' 
                                : 'border-gray-200 bg-white hover:border-blue-300'
                            }`}
                        >
                             <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h4 className={`font-bold text-lg ${selectedPackage === 'Private' ? 'text-primary' : 'text-gray-700'}`}>Private</h4>
                                    <p className="text-xs text-gray-500">1 on 1. Fokus intensif.</p>
                                </div>
                                <div>
                                    {selectedPackage === 'Private' 
                                        ? <CheckCircle2 className="w-6 h-6 text-primary fill-blue-100" />
                                        : <Circle className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                                    }
                                </div>
                            </div>
                             <div className="mt-4 mb-4 pt-4 border-t border-gray-100/50">
                                <p className="font-bold text-gray-900 text-xl">Rp 1.500.000</p>
                                <p className="text-[10px] text-gray-400">Total untuk 6 Sesi</p>
                            </div>
                             <div className={`w-full py-2 rounded-lg text-center text-sm font-bold transition-colors ${
                                selectedPackage === 'Private'
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600'
                            }`}>
                                {selectedPackage === 'Private' ? '✔ Paket Terpilih' : 'Pilih Paket Ini'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. SUMMARY CARD */}
        <AnimatePresence>
            {selectedProgram && selectedPackage && (
                <MotionDiv 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto mb-16"
                >
                    <div className="bg-white rounded-2xl shadow-xl border border-primary/20 overflow-hidden relative">
                         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
                         <div className="p-8 text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Ringkasan Pilihan</p>
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">{selectedProgram}</h3>
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                                <span>Paket {selectedPackage}</span>
                                <span>•</span>
                                <span>6 x Pertemuan (120 Menit)</span>
                            </div>
                            <div className="mb-8">
                                <p className="text-gray-500 text-sm mb-1">Total Biaya Pendidikan</p>
                                <p className="text-4xl font-black text-gray-900">{price}</p>
                            </div>
                            <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                                <strong>Catatan:</strong> Tidak ada biaya pendaftaran. Pembayaran dilakukan setelah jadwal disepakati bersama admin.
                            </p>
                            <a 
                                href={getWhatsappLink()}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-3 w-full md:w-auto bg-[#25D366] hover:bg-[#1fae54] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition-all hover:scale-105"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Lanjut Konsultasi WhatsApp
                            </a>
                            <p className="text-xs text-gray-400 mt-4">Anda akan diarahkan ke aplikasi WhatsApp</p>
                         </div>
                    </div>
                </MotionDiv>
            )}
        </AnimatePresence>

        {/* 4. FAQ */}
        <div className="max-w-3xl mx-auto border-t border-gray-100 pt-16">
            <h3 className="font-bold text-xl text-center text-gray-800 mb-8">Pertanyaan Umum (FAQ)</h3>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
               <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                 <button 
                   onClick={() => toggleAccordion(idx)}
                   className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-gray-700 text-sm md:text-base hover:bg-gray-100 transition-colors"
                 >
                   <span className="pr-4">{faq.question}</span>
                   <ChevronDown className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180' : 'rotate-0'}`} />
                 </button>
                 <AnimatePresence>
                    {activeAccordion === idx && (
                        <MotionDiv
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200/50 pt-3">
                                {faq.answer}
                            </div>
                        </MotionDiv>
                    )}
                 </AnimatePresence>
               </div>
             ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
