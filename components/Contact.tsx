import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO, getWaLink } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="daftar" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">
          
          {/* Contact Info Side */}
          <div className="lg:w-1/3 bg-primary text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-3xl mb-2">Kontak Kami</h3>
              <p className="text-blue-100 mb-10">
                Hubungi kami untuk konsultasi program atau informasi pendaftaran.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Telepon / WA</h4>
                    <p className="text-blue-100 font-light mt-1">{CONTACT_INFO.phoneDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Lokasi</h4>
                    <p className="text-blue-100 font-light mt-1 leading-relaxed">
                      Jl. H. Iming No.107, Kelurahan Beji, Kecamatan Beji, Kota Depok, Jawa Barat 16421
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                     <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Jam Operasional</h4>
                    <p className="text-blue-100 font-light mt-1">
                      Senin - Sabtu: 08.00 - 16.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <a 
                 href={getWaLink()} 
                 target="_blank" 
                 rel="noreferrer"
                 className="block w-full text-center bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-xl transition-colors shadow-lg"
               >
                 Chat WhatsApp Sekarang
               </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] relative bg-gray-100">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.108564787933!2d106.81646737355678!3d-6.379985462403239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed71d3d58777%3A0x30f4dc9c1ff9fe8f!2sYayasan%20SANUR%20Akademi%20Inspirasi!5e0!3m2!1sid!2sid!4v1765667679588!5m2!1sid!2sid" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 w-full h-full"
               title="Lokasi Sanur Akademi"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;