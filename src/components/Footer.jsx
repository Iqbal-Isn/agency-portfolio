function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Heizuru</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Spesialis pembuatan website profesional untuk UMKM. Kami
                membantu bisnis Anda go digital dengan website berkualitas
                tinggi, responsif, dan user-friendly.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-whatsapp mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">
                  Jl. Sudirman No. 123, Jakarta
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-whatsapp mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-whatsapp mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300">hello@heizuru.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a
                  href="#home"
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#service"
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Service
                </a>
                <a
                  href="#portfolio"
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </a>
                <a
                  href="#testimonials"
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6">Lokasi Kami</h4>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3!2d106.816666!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJOIDEwNsKwNDknMDEuMiJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Lokasi Heizuru"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Newsletter */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 font-medium">Follow Us:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-whatsapp transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-whatsapp transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C8.396 0 7.609.034 6.298.154 4.987.273 4.014.598 3.194.992c-.807.394-1.489.987-2.087 1.585C.5 3.175 0 3.85 0 5.17c0 1.32.5 2.002 1.107 2.6.598.598 1.28 1.191 2.087 1.585.82.394 1.793.719 3.104.838 1.311.12 2.098.154 5.719.154s4.408-.034 5.719-.154c1.311-.12 2.284-.444 3.104-.838.807-.394 1.489-.987 2.087-1.585C23.5 7.172 24 6.497 24 5.177c0-1.32-.5-2.002-1.107-2.6-.598-.598-1.28-1.191-2.087-1.585C20.987.394 20.014.07 18.703-.05 17.392-.17 16.605-.204 13.017-.204c-3.584 0-4.37.034-5.681.154C5.987.07 5.014.394 4.194.788 3.387 1.182 2.705 1.775 2.107 2.373.5 3.967 0 4.642 0 5.962c0 1.32.5 2.002 1.107 2.6.598.598 1.28 1.191 2.087 1.585.82.394 1.793.719 3.104.838 1.311.12 2.098.154 5.719.154s4.408-.034 5.719-.154c1.311-.12 2.284-.444 3.104-.838.807-.394 1.489-.987 2.087-1.585C23.5 8.972 24 8.297 24 6.977c0-1.32-.5-2.002-1.107-2.6-.598-.598-1.28-1.191-2.087-1.585C21.013 2.394 20.04 2.07 18.729 1.95c-1.311-.12-2.098-.154-5.719-.154zM12.017 5.8c-3.532 0-6.4 2.868-6.4 6.4s2.868 6.4 6.4 6.4 6.4-2.868 6.4-6.4-2.868-6.4-6.4-6.4zm0 10.56c-2.304 0-4.16-1.856-4.16-4.16s1.856-4.16 4.16-4.16 4.16 1.856 4.16 4.16-1.856 4.16-4.16 4.16zm6.24-11.52c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-whatsapp transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center text-white hover:bg-whatsapp-hover transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Heizuru. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
