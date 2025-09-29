import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para suscribir al newsletter
    console.log("Email suscrito:", email);
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-blue-400">Coba Viajes</h3>
              <p className="text-gray-300 mt-2">Tu aventura comienza aquí</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creamos experiencias de viaje únicas e inolvidables desde hace más de 15 años.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/destinos" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Destinos
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Paquetes
                </a>
              </li>
              <li>
                <a href="/ofertas" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Ofertas Especiales
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Blog de Viajes
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="/corporativos" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Viajes Corporativos
                </a>
              </li>
              <li>
                <a href="/luna-miel" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Luna de Miel
                </a>
              </li>
              <li>
                <a href="/grupos" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Viajes en Grupo
                </a>
              </li>
              <li>
                <a href="/seguros" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Seguros de Viaje
                </a>
              </li>
              <li>
                <a href="/visas" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Visa y Documentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto y Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-400 text-sm">info@cobaviajes.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400 text-sm">123 Aventura St, Ciudad</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold mb-2">Newsletter</h5>
              <p className="text-gray-400 text-xs mb-3">Recibe ofertas exclusivas</p>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-r-md transition-colors duration-200"
                >
                  Suscribir
                </button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-xs mt-2">¡Te has suscrito exitosamente!</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Coba Viajes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
