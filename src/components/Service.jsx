function Service() {
  const services = [
    {
      id: 1,
      icon: (
        <svg
          className="w-12 h-12 text-whatsapp"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Website Responsif",
      description:
        "Website yang tampil sempurna di semua device - desktop, tablet, dan mobile. User experience yang optimal di setiap perangkat.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-12 h-12 text-whatsapp"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Performa Cepat",
      description:
        "Optimasi loading speed dengan teknologi terdepan. Website Anda akan loading dalam hitungan detik, bukan menit.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-12 h-12 text-whatsapp"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Keamanan Terjamin",
      description:
        "SSL certificate gratis, proteksi dari malware, dan backup otomatis. Website Anda aman dari ancaman cyber.",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-12 h-12 text-whatsapp"
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
      ),
      title: "Support 24/7",
      description:
        "Tim support kami siap membantu Anda 24 jam sehari, 7 hari seminggu. Respons cepat untuk setiap pertanyaan.",
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-12 h-12 text-whatsapp"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Harga Terjangkau",
      description:
        "Kualitas premium dengan harga yang bersaing. Kami tawarkan paket website lengkap dengan harga terbaik di pasaran.",
    },
    {
      id: 6,
      icon: (
        <svg
          className="w-12 h-12 text-whatsapp"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "SEO Friendly",
      description:
        "Optimasi SEO dari awal pembuatan. Website Anda akan mudah ditemukan di mesin pencari Google dan Bing.",
    },
  ];

  return (
    <section id="service" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl tracking-tight font-bold text-gray-900 mb-4">
            Kenapa Memilih Heizuru?
          </h2>
          <p className="text-base md:text-xl tracking-tighter text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan solusi website lengkap untuk bisnis UMKM Anda
            dengan standar profesional dan harga yang terjangkau.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-6 p-3 bg-whatsapp/10 rounded-lg w-fit group-hover:bg-whatsapp/20 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg tracking-tight font-bold text-gray-900 mb-4 group-hover:text-whatsapp transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed tracking-tighter">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
