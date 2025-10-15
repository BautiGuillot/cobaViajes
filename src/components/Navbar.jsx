import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-coba-cream shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/coba-logo.webp" alt="Coba Viajes" className="h-12" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Inicio
              </a>
              <a
                href="/paquetes"
                className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Paquetes
              </a>
              <a
                href="/cruceros"
                className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Cruceros
              </a>
              <a
                href="/circuito"
                className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Circuito Personalizado
              </a>
              
              <a
                href="/nosotros"
                className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Nosotros
              </a>
              <a
                href="/contacto"
                className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={`https://wa.me/2364379198?text=${encodeURIComponent('Hola! Quiero cotizar un viaje')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coba-whatsapp hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Cotizar por WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-coba-charcoal hover:text-coba-royal focus:outline-none focus:text-coba-royal"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-coba-cream border-t border-coba-beige">
              <a
                href="/"
                className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium"
              >
                Inicio
              </a>
              <a
                href="/paquetes"
                className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium"
              >
                Destinos
              </a>
              <a
                href="/cruceros"
                className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium"
              >
                Paquetes
              </a>
              <a
                href="/circuito"
                className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium"
              >
                Circuito Personalizado
              </a>
              <a
                href="/nosotros"
                className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium"
              >
                Nosotros
              </a>
              <a
                href="/contacto"
                className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium"
              >
                Contacto
              </a>
              <a
                href={`https://wa.me/2364379198?text=${encodeURIComponent('Hola! Quiero cotizar un viaje')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coba-whatsapp hover:bg-green-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
