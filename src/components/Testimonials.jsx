function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmad Rahman",
      role: "Pemilik Toko Online",
      company: "FashionStore.id",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Website yang dibuat sangat responsif dan penjualan online saya meningkat drastis. Tim Heizuru sangat profesional dan tepat waktu.",
      rating: 5,
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      role: "Owner Restaurant",
      company: "Warung Nusantara",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Menu digital yang mudah digunakan. Customer bisa pesan online dan pickup. Sangat membantu selama pandemi.",
      rating: 5,
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Direktur Klinik",
      company: "Klinik Sehat",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Sistem appointment online sangat membantu mengatur jadwal pasien. Website loading cepat dan user-friendly.",
      rating: 5,
    },
    {
      id: 4,
      name: "Maya Sari",
      role: "Pemilik Bengkel",
      company: "Bengkel Motor Maju",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Booking servis online memudahkan customer. Katalog sparepart dan harga transparan. Rekomendasi!",
      rating: 5,
    },
    {
      id: 5,
      name: "Rudi Hartono",
      role: "CEO Travel Agency",
      company: "Wisata Nusantara",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Website booking sistemnya sangat smooth. Galeri destinasi menarik dan meningkatkan conversion rate.",
      rating: 5,
    },
    {
      id: 6,
      name: "Dewi Anggraini",
      role: "Founder Platform Edukasi",
      company: "BelajarOnline.com",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Dashboard siswa dan sistem pembelajaran interaktif sangat bagus. Sertifikat digital otomatis terbit.",
      rating: 5,
    },
    {
      id: 7,
      name: "Agus Priyanto",
      role: "Pemilik UMKM Makanan",
      company: "Oleh-oleh Jogja",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Website e-commerce dengan payment gateway yang lengkap. Penjualan online meningkat 300%.",
      rating: 5,
    },
    {
      id: 8,
      name: "Linda Kusuma",
      role: "Manager Spa & Wellness",
      company: "Spa Tranquil",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      testimonial:
        "Booking sistem online sangat membantu. Customer bisa pilih treatment dan jadwal langsung dari website.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      className="w-full bg-gray-50 py-16 md:py-20 lg:py-32"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl tracking-tight font-bold text-gray-900 mb-4 px-4">
            Apa Kata Client Kami
          </h2>
          <p className="text-base sm:text-lg md:text-xl tracking-tighter text-gray-600 max-w-3xl mx-auto px-4">
            Testimoni dari berbagai UMKM yang telah berhasil menggunakan jasa
            pembuatan website kami
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Row 1 - Scroll Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* Duplicate testimonials for infinite scroll */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-48 sm:w-80 md:w-96 mx-2 sm:mx-3 md:mx-4"
                >
                  <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border-2 border-gray-200 h-full">
                    {/* Rating */}
                    <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 italic leading-relaxed text-xs sm:text-sm md:text-base overflow-hidden">
                      "
                      {testimonial.testimonial.length > 100
                        ? testimonial.testimonial.substring(0, 100) + "..."
                        : testimonial.testimonial}
                      "
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-600 truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {/* Duplicate testimonials for infinite scroll */}
              {[
                ...testimonials.slice().reverse(),
                ...testimonials.slice().reverse(),
              ].map((testimonial, index) => (
                <div
                  key={`reverse-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-48 sm:w-80 md:w-96 mx-2 sm:mx-3 md:mx-4"
                >
                  <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border-2 border-gray-200 h-full">
                    {/* Rating */}
                    <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 italic leading-relaxed text-xs sm:text-sm md:text-base overflow-hidden">
                      "
                      {testimonial.testimonial.length > 100
                        ? testimonial.testimonial.substring(0, 100) + "..."
                        : testimonial.testimonial}
                      "
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-600 truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-whatsapp/10 to-whatsapp/5 rounded-2xl p-6 sm:p-8 md:p-12 mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl tracking-tight font-bold text-gray-900 mb-4">
              Siap Tingkatkan Bisnis Anda?
            </h3>
            <p className="text-base sm:text-lg tracking-tighter text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Dapatkan website profesional untuk UMKM Anda hari ini. Konsultasi
              gratis dan dapatkan penawaran terbaik dari tim ahli kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-[0_4px_6px_rgba(37,211,102,0.3)] hover:bg-whatsapp-hover hover:-translate-y-1 hover:shadow-[0_6px_12px_rgba(37,211,102,0.4)]"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Konsultasi Gratis</span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                <span>Lihat Portfolio</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
