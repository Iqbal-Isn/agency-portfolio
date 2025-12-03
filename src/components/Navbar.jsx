import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-[1000] font-sans border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <a
            href="/"
            className="text-xl sm:text-2xl font-bold text-gray-800 no-underline transition-colors duration-300 hover:text-whatsapp"
          >
            Heizuru
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex list-none gap-8 m-0 p-0">
          <li>
            <a
              href="#home"
              className="text-gray-800 no-underline font-medium transition-colors duration-300 relative hover:text-whatsapp after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-whatsapp after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="text-gray-800 no-underline font-medium transition-colors duration-300 relative hover:text-whatsapp after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-whatsapp after:transition-all after:duration-300 hover:after:w-full"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-gray-800 no-underline font-medium transition-colors duration-300 relative hover:text-whatsapp after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-whatsapp after:transition-all after:duration-300 hover:after:w-full"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-gray-800 no-underline font-medium transition-colors duration-300 relative hover:text-whatsapp after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-whatsapp after:transition-all after:duration-300 hover:after:w-full"
            >
              Testimonials
            </a>
          </li>
        </ul>

        {/* Desktop WhatsApp Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-whatsapp text-white px-5 py-2.5 rounded-lg no-underline font-semibold text-sm transition-all duration-300 shadow-[0_2px_4px_rgba(37,211,102,0.3)] hover:bg-whatsapp-hover hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(37,211,102,0.4)]"
          >
            <svg
              className="w-5 h-5 fill-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Pesan Sekarang</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col gap-4 mb-6">
              <li>
                <a
                  href="#home"
                  className="block text-gray-800 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="block text-gray-800 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="block text-gray-800 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block text-gray-800 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
              </li>
            </ul>

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-lg no-underline font-semibold text-sm w-full transition-all duration-300 shadow-[0_2px_4px_rgba(37,211,102,0.3)] hover:bg-whatsapp-hover"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-5 h-5 fill-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Pesan Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
