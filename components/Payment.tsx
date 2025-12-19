
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  CreditCard, 
  QrCode, 
  Clock, 
  CheckCircle2, 
  Loader2, 
  ChevronLeft, 
  ShieldCheck,
  ScanLine
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWaLink } from '../constants';

// Fix: Cast motion components to any to bypass environment-specific type merging issues
const MotionDiv = motion.div as any;

const Payment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { selectionName: string; selectionPrice: string; selectionType: string } | null;

  // Status simulasi: 'waiting' | 'checking' | 'success'
  const [status, setStatus] = useState<'waiting' | 'checking' | 'success'>('waiting');
  
  useEffect(() => {
    if (!state) {
      navigate('/program');
    }
  }, [state, navigate]);

  // Simulasi cek pembayaran
  const handleCheckPayment = () => {
    setStatus('checking');
    setTimeout(() => {
      setStatus('success');
    }, 3000);
  };

  if (!state) return null;

  const priceString = state.selectionPrice || "Rp 0";
  const numericPrice = parseInt(priceString.replace(/[^0-9]/g, '')) || 100000; 
  const uniqueCode = Math.floor(Math.random() * 999);
  const totalPrice = numericPrice + uniqueCode;

  return (
    <div className="pt-28 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Nav */}
        <div className="max-w-md mx-auto mb-6">
            <Link to="/daftar" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors text-sm font-medium">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Kembali
            </Link>
        </div>

        <div className="max-w-md mx-auto">
            <AnimatePresence mode='wait'>
                
                {/* STATE 1: WAITING FOR PAYMENT */}
                {status === 'waiting' && (
                    <MotionDiv 
                        key="waiting"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100"
                    >
                        {/* Header Area */}
                        <div className="bg-gray-900 p-6 text-white text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse"></div>
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Total Tagihan</p>
                            <h2 className="text-3xl font-bold font-mono">Rp {totalPrice.toLocaleString('id-ID')}</h2>
                            <div className="flex items-center justify-center gap-2 mt-4 text-xs bg-white/10 py-1.5 px-3 rounded-full inline-flex mx-auto backdrop-blur-sm">
                                <Clock className="w-3 h-3" />
                                <span>Berakhir dalam 23:59:45</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8">
                            
                            {/* QR Section */}
                            <div className="flex flex-col items-center justify-center mb-8">
                                <p className="text-sm font-bold text-gray-800 mb-4">Scan QRIS (Otomatis Deteksi)</p>
                                <div className="relative p-4 bg-white border-2 border-dashed border-gray-300 rounded-2xl group">
                                    {/* QR Image Placeholder */}
                                    <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                                        <QrCode className="w-32 h-32 text-gray-800" />
                                        
                                        {/* THE SCANNING ANIMATION LINE */}
                                        <div className="absolute left-0 w-full h-1 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-scan opacity-80 z-10"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-scan z-0"></div>
                                    </div>
                                    <div className="absolute -bottom-3 -right-3 bg-white border border-gray-200 shadow-sm p-1.5 rounded-lg">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/1200px-Logo_QRIS.svg.png" alt="QRIS" className="h-4 w-auto" />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center">
                                    Arahkan kamera HP / Aplikasi E-Wallet Anda ke kode di atas.
                                </p>
                            </div>

                            {/* Details */}
                            <div className="space-y-3 border-t border-gray-100 pt-6 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Pembayaran untuk</span>
                                    <span className="font-bold text-gray-800">{state.selectionName}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">ID Referensi</span>
                                    <span className="font-mono text-gray-500">INV-{Math.floor(Math.random()*10000)}</span>
                                </div>
                            </div>

                            <button 
                                onClick={handleCheckPayment}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-sm"
                            >
                                <ScanLine className="w-4 h-4" />
                                Cek Status Pembayaran
                            </button>
                        </div>
                    </MotionDiv>
                )}

                {/* STATE 2: CHECKING */}
                {status === 'checking' && (
                     <MotionDiv 
                        key="checking"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl shadow-xl p-12 text-center"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 relative">
                            <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <Loader2 className="absolute inset-0 m-auto text-primary w-8 h-8 animate-pulse" />
                        </div>
                        <h3 className="font-bold text-xl text-gray-800 mb-2">Memverifikasi...</h3>
                        <p className="text-sm text-gray-500">Sistem sedang terhubung ke bank.</p>
                    </MotionDiv>
                )}

                {/* STATE 3: SUCCESS */}
                {status === 'success' && (
                     <MotionDiv 
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden relative"
                    >
                        {/* Confetti / Success Header */}
                        <div className="bg-green-500 p-8 text-center text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                                <CheckCircle2 className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold">Pembayaran Sukses!</h2>
                            <p className="text-green-100 text-sm mt-1">Terima kasih telah mendaftar.</p>
                        </div>

                        {/* Receipt Body */}
                        <div className="p-8 relative">
                             {/* Zigzag top border simulation */}
                            <div className="absolute top-[-10px] left-0 w-full h-4 bg-white" style={{ clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)' }}></div>

                            <div className="space-y-4 mb-8 mt-2">
                                <div className="flex justify-between text-sm border-b border-dashed border-gray-200 pb-2">
                                    <span className="text-gray-500">Item</span>
                                    <span className="font-bold text-gray-800">{state.selectionName}</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-dashed border-gray-200 pb-2">
                                    <span className="text-gray-500">Total Bayar</span>
                                    <span className="font-bold text-gray-800">Rp {totalPrice.toLocaleString('id-ID')}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Status</span>
                                    <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs uppercase">Lunas (Paid)</span>
                                </div>
                            </div>

                            <a 
                                href={getWaLink("Halo Admin, saya sudah melakukan pembayaran via Website.")}
                                target="_blank"
                                rel="noreferrer" 
                                className="block w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg text-center text-sm mb-4"
                            >
                                Chat Admin WhatsApp
                            </a>
                            <Link to="/" className="block text-center text-gray-400 hover:text-gray-600 text-xs font-medium">
                                Kembali ke Beranda
                            </Link>
                        </div>
                    </MotionDiv>
                )}

            </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Payment;
