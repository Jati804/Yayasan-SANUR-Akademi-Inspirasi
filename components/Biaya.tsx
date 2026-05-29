import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Clock, Crown, ArrowRight } from 'lucide-react';

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

const Biaya: React.FC = () => {
  const navigate = useNavigate();

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
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Biaya Pendidikan</span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Investasi Masa Depan</h1>
            <p className="text-lg text-gray-500 leading-relaxed">Transparan, terjangkau, dan berkualitas. Pilih kelas yang sesuai kebutuhan Anda.</p>
          </MotionDiv>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Semi-Private */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border-2 border-secondary/20 shadow-xl relative group"
            >
              <div className="absolute top-0 right-0">
                <div className="bg-secondary text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-bl-2xl flex items-center gap-1">
                  <Crown className="w-3 h-3 fill-white" /> Paling Diminati
                </div>
              </div>
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kelas Semi-Private</h3>
              <p className="text-sm text-gray-400 mb-6">Belajar bersama 2–3 peserta, lebih hemat tetap fokus.</p>
              <div className="bg-surface w-full py-6 rounded-2xl mb-6 px-4">
                <div className="flex items-baseline justify-center mt-2 gap-1 text-gray-900">
                  <span className="text-2xl font-bold">Rp</span>
                  <span className="text-4xl md:text-6xl font-black">60.000</span>
                  <span className="text-xl font-bold text-gray-500">/ Jam</span>
                </div>
              </div>
              <div className="w-full space-y-3 text-sm px-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600"><Clock className="w-5 h-5 text-primary" /><span>Durasi: 2 Jam per sesi</span></div>
                <div className="flex items-center gap-3 text-gray-600"><BookOpenCheck className="w-5 h-5 text-primary" /><span>Paket: 6 Kali Pertemuan</span></div>
                <div className="border-t pt-3 mt-3 flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-500">Total:</span>
                  <span className="font-bold text-primary text-lg">Rp 720.000</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/daftar')}
                className="w-full bg-secondary hover:bg-secondary-dark text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 uppercase tracking-wider text-sm active:scale-95"
              >
                Daftar Sekarang <ArrowRight className="w-4 h-4" />
              </button>
            </MotionDiv>

            {/* Private */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kelas Private</h3>
              <p className="text-sm text-gray-400 mb-6">Belajar 1-on-1, jadwal fleksibel, materi disesuaikan.</p>
              <div className="bg-surface w-full py-6 rounded-2xl mb-6 px-4">
                <div className="flex items-baseline justify-center mt-2 gap-1 text-gray-900">
                  <span className="text-2xl font-bold">Rp</span>
                  <span className="text-4xl md:text-6xl font-black">125.000</span>
                  <span className="text-xl font-bold text-gray-500">/ Jam</span>
                </div>
              </div>
              <div className="w-full space-y-3 text-sm px-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600"><Clock className="w-5 h-5 text-primary" /><span>Durasi: 2 Jam per sesi</span></div>
                <div className="flex items-center gap-3 text-gray-600"><BookOpenCheck className="w-5 h-5 text-primary" /><span>Paket: 6 Kali Pertemuan</span></div>
                <div className="border-t pt-3 mt-3 flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-500">Total:</span>
                  <span className="font-bold text-primary text-lg">Rp 1.500.000</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/daftar')}
                className="w-full bg-primary hover:bg-primary-dark text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 uppercase tracking-wider text-sm active:scale-95"
              >
                Daftar Sekarang <ArrowRight className="w-4 h-4" />
              </button>
            </MotionDiv>

          </div>
          <p className="text-center text-gray-400 text-sm mt-8 italic">*Pembayaran di awal untuk menjamin komitmen belajar.</p>
        </div>

      </div>
    </section>
  );
};

export default Biaya;
