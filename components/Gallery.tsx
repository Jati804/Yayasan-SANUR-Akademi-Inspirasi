import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

const images = [
  { 
    /* 
       PANDUAN GANTI FOTO GITHUB:
       1. Upload foto ke GitHub.
       2. Buka fotonya, klik tombol "Raw".
       3. Copy link di browser (biasanya diawali raw.githubusercontent.com).
       4. Tempel di bagian 'src' di bawah ini.
    */
    src: "https://github.com/Jati804/Yayasan-SANUR-Akademi-Inspirasi/blob/7047d2e52436f677e20db7a4cc11a91350f48e80/Images/SANUR1.jpg", 
    alt: "Kegiatan Belajar di Kelas",
    caption: "Suasana Belajar Kondusif"
  },
  { 
    src: "https://github.com/Jati804/Yayasan-SANUR-Akademi-Inspirasi/blob/7047d2e52436f677e20db7a4cc11a91350f48e80/Images/SANUR2.jpg", 
    alt: "Presentasi Materi",
    caption: "Pendalaman Materi"
  },
  { 
    src: "https://github.com/Jati804/Yayasan-SANUR-Akademi-Inspirasi/blob/7047d2e52436f677e20db7a4cc11a91350f48e80/Images/SANUR3.jpg", 
    alt: "Mentoring Personal",
    caption: "Pendampingan Intensif"
  },
  { 
    src: "https://github.com/Jati804/Yayasan-SANUR-Akademi-Inspirasi/blob/7047d2e52436f677e20db7a4cc11a91350f48e80/Images/SANUR6.jpg", 
    alt: "Diskusi Kelompok",
    caption: "Kolaborasi Tim"
  },
  { 
    src: "https://github.com/Jati804/Yayasan-SANUR-Akademi-Inspirasi/blob/7047d2e52436f677e20db7a4cc11a91350f48e80/Images/SANUR5.jpg", 
    alt: "Webinar Pelatihan Komputer",
    caption: "Digital Skills Webinar"
  },
  { 
    src: "https://github.com/Jati804/Yayasan-SANUR-Akademi-Inspirasi/blob/7047d2e52436f677e20db7a4cc11a91350f48e80/Images/SANUR4.jpg", 
    alt: "Sesi Diskusi",
    caption: "Sharing Session"
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <ImageIcon className="w-3 h-3" />
              Dokumentasi Kami
            </span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-gray-900 mb-4">
              Galeri Kegiatan
            </h2>
            <p className="text-gray-500">Melihat lebih dekat interaksi dan semangat belajar di SANUR Akademi Inspirasi.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              layoutId={`img-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 cursor-pointer bg-white border border-gray-100 transition-all duration-500"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-secondary font-black text-[10px] tracking-[0.2em] uppercase mb-2">
                      SANUR MOMENTS
                    </p>
                    <h3 className="text-white font-heading font-bold text-xl leading-tight">
                      {img.caption}
                    </h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm mt-4">
                      <ZoomIn className="w-4 h-4" />
                      <span>Klik untuk memperbesar</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            >
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                onClick={() => setSelectedImage(null)}
              >
                <X size={48} strokeWidth={1.5} />
              </motion.button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()} 
                className="relative max-w-5xl w-full flex flex-col items-center"
              >
                <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                  />
                </div>
                <div className="mt-6 text-center text-white">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-secondary">{selectedImage.caption}</h3>
                  <p className="text-white/60 text-base md:text-lg mt-2">{selectedImage.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
