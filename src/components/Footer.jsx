import { useState } from "react";

export default function Footer() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const API_URL = import.meta.env.PUBLIC_API_URL;
  const ENV_DOMINIO = import.meta.env.PUBLIC_DOMINIO;

  const buildApiUrl = (dominio) => {
    const base = API_URL ? API_URL.replace(/\/$/, "") : "";
    return `${base}/api/public/${dominio}/newsletter/suscribir`;
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!nombre.trim()) {
      setErrorMessage("Por favor ingresa tu nombre.");
      return;
    }

    if (!email) {
      setErrorMessage("Por favor ingresa un email válido.");
      return;
    }

    const dominio = ENV_DOMINIO || (typeof window !== "undefined" ? window.location.hostname : "");
    if (!dominio) {
      setErrorMessage("No se pudo determinar el dominio.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(buildApiUrl(dominio), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ nombre: nombre.trim(), email }),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(text || "No fue posible suscribirte.");
      }

      setIsSubscribed(true);
      setNombre("");
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    } catch (err) {
      setErrorMessage(err?.message || "Ocurrió un error inesperado.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-coba-charcoal text-coba-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-coba-yellow">Coba Viajes</h3>
              <p className="text-coba-beige mt-2">Tu aventura comienza aquí</p>
            </div>
            <p className="text-coba-beige text-sm leading-relaxed">
              Creamos experiencias de viaje únicas e inolvidables desde hace más de 15 años.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-coba-yellow">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-coba-beige hover:opacity-80 transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/paquetes" className="text-coba-beige hover:opacity-80 transition-colors duration-200">
                  Paquetes
                </a>
              </li>
              <li>
                <a href="/cruceros" className="text-coba-beige hover:opacity-80 transition-colors duration-200">
                  Cruceros
                </a>
              </li>
              <li>
                <a href="/viajes-15" className="text-coba-beige hover:opacity-80 transition-colors duration-200">
                  Viajes 15 Días
                </a>
              </li>
              <li>
                <a href="/nosotros" className="text-coba-beige hover:opacity-80 transition-colors duration-200">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>


          {/* Contacto y Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-coba-yellow">Contacto</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="mr-2 text-coba-yellow">📲</span>
                <a href="tel:+542364469157" className="text-coba-beige hover:opacity-80 text-sm transition-colors">
                  2364 46-9157
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-coba-yellow">📍</span>
                <span className="text-coba-beige text-sm">R. De Escalada 92, Junín (Bs As)</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-coba-yellow">✈️</span>
                <span className="text-coba-beige text-sm">Hace realidad tu sueño de viajar</span>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold mb-3 text-coba-yellow">Síguenos</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/2364351443" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-coba-beige hover:opacity-80 transition-colors duration-200"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/cobaviajes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-coba-beige hover:opacity-80 transition-colors duration-200"
                  title="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/cobaviajes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-coba-beige hover:opacity-80 transition-colors duration-200"
                  title="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-coba-yellow">Newsletter</h4>
            <p className="text-coba-beige text-sm mb-4">Recibe ofertas exclusivas y las mejores promociones</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              {/* Honeypot */}
              <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="w-full px-3 py-2 bg-coba-charcoal border border-coba-teal rounded-md text-sm text-coba-cream placeholder-coba-beige focus:outline-none focus:ring-2 focus:ring-coba-yellow focus:border-transparent"
                required
              />
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-coba-charcoal border border-coba-teal rounded-l-md text-sm text-coba-cream placeholder-coba-beige focus:outline-none focus:ring-2 focus:ring-coba-yellow focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-coba-yellow hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-coba-charcoal text-sm font-medium rounded-r-md transition-colors duration-200"
                >
                  {isSubmitting ? "Enviando..." : "Suscribir"}
                </button>
              </div>
            </form>
            {isSubscribed && (
              <p className="text-xs mt-2 text-coba-yellow">¡Te has suscrito exitosamente!</p>
            )}
            {errorMessage && (
              <p className="text-red-400 text-xs mt-2">{errorMessage}</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coba-teal mt-8 pt-8 text-center">
          <p className="text-coba-beige text-sm">
            © {new Date().getFullYear()} BatMat. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
