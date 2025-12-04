function Portfolio() {
  const portfolios = [
    {
      id: 1,
      title: "Toko Online Fashion",
      category: "E-commerce",
      description:
        "Website toko online dengan katalog produk lengkap, sistem keranjang belanja, dan integrasi pembayaran digital.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      link: "#",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Restaurant Modern",
      category: "Food & Beverage",
      description:
        "Website restaurant dengan menu digital, sistem pemesanan online, dan informasi lokasi cabang.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      link: "#",
      technologies: ["React", "Express", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Klinik Kesehatan",
      category: "Healthcare",
      description:
        "Website klinik dengan sistem appointment online, informasi dokter, dan layanan kesehatan digital.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      link: "#",
      technologies: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      id: 4,
      title: "Bengkel Motor",
      category: "Service",
      description:
        "Website bengkel dengan layanan booking servis online, katalog sparepart, dan informasi harga.",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=300&fit=crop",
      link: "#",
      technologies: ["React", "Firebase", "Tailwind"],
    },
    {
      id: 5,
      title: "Travel Agency",
      category: "Travel",
      description:
        "Website biro perjalanan dengan paket wisata lengkap, booking sistem, dan galeri destinasi.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      link: "#",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
    },
    {
      id: 6,
      title: "Kursus Online",
      category: "Education",
      description:
        "Platform kursus online dengan sistem pembelajaran interaktif, dashboard siswa, dan sertifikat digital.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      link: "#",
      technologies: ["React", "Django", "SQLite"],
    },
  ];

  return (
    <section id="portfolio" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl tracking-tight font-bold text-gray-900 mb-4">
            Portfolio Unggulan
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto tracking-tighter">
            Berikut adalah beberapa proyek website unggulan yang telah kami
            kerjakan untuk berbagai jenis bisnis UMKM
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-80"
            >
              {/* Full Image Background */}
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-whatsapp text-white text-sm font-medium rounded-full">
                  {portfolio.category}
                </span>
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-whatsapp transition-colors duration-300">
                  {portfolio.title}
                </h3>

                {/* Action Button */}
                <a
                  href={portfolio.link}
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg"
                >
                  <span>Lihat Detail</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
