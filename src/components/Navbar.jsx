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
          <div className="hidden lg:block flex-1">
            <div className="flex justify-center items-center space-x-1">
              {/* Servicios principales */}
              <div className="flex items-center space-x-2">
                <a
                  href="/"
                  className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Inicio
                </a>
                <a
                  href="/paquetes"
                  className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Paquetes
                </a>
                <a
                  href="/ofertas"
                  className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Ofertas
                </a>
              </div>

              {/* Separador visual */}
              <div className="w-px h-6 bg-coba-beige mx-2"></div>

              {/* Servicios especializados */}
              <div className="flex items-center space-x-2">
                <a
                  href="/viajes-grupales"
                  className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Grupales
                </a>
                <a
                  href="/cruceros"
                  className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M256 16c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16V32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H368V96h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H368v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H368v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H368v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H368v56c0 39.8-32.2 72-72 72H192c-39.8 0-72-32.2-72-72V288H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V224H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V160H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V96H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V48H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V16c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16V32h48V16zm80 352H464c26.5 0 48 21.5 48 48v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V416c0-17.7-14.3-32-32-32H544c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32v48c0 35.3-28.7 64-64 64H528c-35.3 0-64-28.7-64-64V384H336c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H144V320c0-17.7 14.3-32 32-32H304c17.7 0 32 14.3 32 32z"/>
                  </svg>
                  Cruceros
                </a>
                <a
                  href="/viajes-15"
                  className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Viajes 15
                </a>
                <a
                  href="/circuito"
                  className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Circuito
                </a>
              </div>

              {/* Separador visual */}
              <div className="w-px h-6 bg-coba-beige mx-2"></div>

              {/* Información de la empresa */}
              <div className="flex items-center space-x-2">
                <a
                  href="/nosotros"
                  className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Nosotros
                </a>
                <a
                  href="/contacto"
                  className="text-coba-charcoal hover:text-coba-royal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contacto
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href={`https://wa.me/2364351443?text=${encodeURIComponent('Hola! Quiero cotizar un viaje')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coba-whatsapp hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-coba-cream border-t border-coba-beige">
              {/* Servicios principales */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-coba-royal uppercase tracking-wide px-3 py-2">
                  Servicios Principales
                </div>
                <a
                  href="/"
                  className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Inicio
                </a>
                <a
                  href="/paquetes"
                  className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Paquetes
                </a>
                <a
                  href="/ofertas"
                  className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Ofertas
                </a>
              </div>

              {/* Servicios especializados */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-coba-royal uppercase tracking-wide px-3 py-2">
                  Servicios Especializados
                </div>
                <a
                  href="/viajes-grupales"
                  className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Viajes Grupales
                </a>
                <a
                  href="/cruceros"
                  className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M256 16c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16V32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H368V96h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H368v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H368v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H368v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H368v56c0 39.8-32.2 72-72 72H192c-39.8 0-72-32.2-72-72V288H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V224H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V160H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V96H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V48H72c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V16c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16V32h48V16zm80 352H464c26.5 0 48 21.5 48 48v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V416c0-17.7-14.3-32-32-32H544c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32v48c0 35.3-28.7 64-64 64H528c-35.3 0-64-28.7-64-64V384H336c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H144V320c0-17.7 14.3-32 32-32H304c17.7 0 32 14.3 32 32z"/>
                  </svg>
                  Cruceros
                </a>
                <a
                  href="/viajes-15"
                  className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Viajes de 15
                </a>
                <a
                  href="/circuito"
                  className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Circuito Personalizado
                </a>
              </div>

              {/* Información de la empresa */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-coba-royal uppercase tracking-wide px-3 py-2">
                  Empresa
                </div>
                <a
                  href="/nosotros"
                  className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Nosotros
                </a>
                <a
                  href="/contacto"
                  className="text-coba-charcoal hover:text-coba-royal block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contacto
                </a>
              </div>

              {/* CTA Button móvil */}
              <div className="pt-4 border-t border-coba-beige">
                <a
                  href={`https://wa.me/2364351443?text=${encodeURIComponent('Hola! Quiero cotizar un viaje')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-coba-whatsapp hover:bg-green-600 text-white block px-3 py-3 rounded-lg text-base font-semibold mt-2 flex items-center justify-center gap-2 shadow-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
