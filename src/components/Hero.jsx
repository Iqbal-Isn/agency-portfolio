function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden -mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-whatsapp/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-400/15 rounded-full blur-xl animate-ping"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">
              Solusi Website Modern UMKM
            </span>
          </div>

          {/* Tagline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-slide-up px-4">
            JASA PEMBUATAN
            <span className="block bg-gradient-to-r from-whatsapp via-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
              WEBSITE PROFESIONAL
            </span>
          </h1>

          {/* Subtitle/Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-up animation-delay-200 px-4">
            Tingkatkan bisnis Anda dengan website profesional yang menarik
            pelanggan lebih banyak. Solusi website berkualitas tinggi untuk UMKM
            dengan harga terjangkau.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up animation-delay-400 px-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-whatsapp to-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl no-underline font-bold text-base sm:text-lg transition-all duration-500 shadow-[0_8px_32px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.4)] hover:scale-105 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-whatsapp opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                className="relative w-5 h-5 sm:w-6 sm:h-6 fill-white animate-bounce"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative">Konsultasi Gratis</span>
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>

            <a
              href="#portfolio"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-500 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 backdrop-blur-sm overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Lihat Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

          {/* Achievements/Pencapaian */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up animation-delay-600">
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-whatsapp/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-whatsapp to-green-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-whatsapp/25 transition-all duration-500">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H13m-3 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM17 21h3a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10z"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-whatsapp transition-colors duration-500">
                  100%
                </h3>
                <p className="text-xl font-bold text-white mb-2">Client Puas</p>
                <p className="text-white/80 leading-relaxed">
                  Tingkat kepuasan pelanggan tertinggi dengan hasil yang
                  memuaskan
                </p>
              </div>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors duration-500">
                  50+
                </h3>
                <p className="text-xl font-bold text-white mb-2">
                  Website Diorder
                </p>
                <p className="text-white/80 leading-relaxed">
                  Proyek website yang telah berhasil diselesaikan dengan
                  kualitas terbaik
                </p>
              </div>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-green-500/25 transition-all duration-500">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3 group-hover:text-green-400 transition-colors duration-500">
                  90%
                </h3>
                <p className="text-xl font-bold text-white mb-2">
                  Harga Terjangkau
                </p>
                <p className="text-white/80 leading-relaxed">
                  Kualitas premium dengan harga yang bersaing dan terjangkau
                  untuk UMKM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
