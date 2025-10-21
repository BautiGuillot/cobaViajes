import { useEffect, useState } from "react";
import { normalizarTexto } from "../utils/textUtils";

export default function ViajesGrupalesGrid({ apiUrl, dominio, limite = null }) {
  const [paquetes, setPaquetes] = useState([]);
  const [paquetesGrupales, setPaquetesGrupales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const d = (dominio || window.location.hostname || "").toString();
    const base = (apiUrl || "").replace(/\/+$/, "");
    if (!base || !d) {
      setLoading(false);
      return;
    }
    
    fetch(`${base}/api/public/paquetes/agencia/dominio/${encodeURIComponent(d)}`)
      .then((res) => res.json())
      .then((data) => {
        setPaquetes(data);
        // Filtrar solo los paquetes grupales
        const grupales = data.filter(paquete => paquete.paqueteGrupal === true);
        setPaquetesGrupales(grupales);
      })
      .finally(() => setLoading(false));
  }, [apiUrl, dominio]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coba-royal"></div>
        <span className="ml-3 text-coba-charcoal">Cargando viajes grupales...</span>
      </div>
    );
  }

  if (!paquetesGrupales.length) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-coba-charcoal mb-2">No hay viajes grupales disponibles</h3>
        <p className="text-gray-800 mb-4">Pronto tendremos increíbles viajes grupales para ti.</p>
        <a
          href="/paquetes"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-coba-charcoal bg-coba-yellow hover:opacity-90 transition-colors duration-200"
        >
          Ver todos los paquetes
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-coba-charcoal mb-4">
          Viajes Grupales
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          Únete a nuestros viajes grupales y comparte experiencias increíbles con otros viajeros
        </p>
        <div className="mt-4 flex justify-center">
          <span className="px-4 py-2 text-coba-teal bg-coba-teal/10 rounded-full text-sm font-bold">
            👥 {paquetesGrupales.length} viajes grupales disponibles
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(limite ? paquetesGrupales.slice(0, limite) : paquetesGrupales).map((p) => (
          <div key={p.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border-2 border-coba-teal/20">
            <a href={`/paquete?id=${p.id}`} className="block">
              {/* Imagen del paquete */}
              <div className="relative h-64 bg-gradient-to-br from-coba-teal via-coba-royal to-coba-charcoal overflow-hidden">
                {p.imagenDestino ? (
                  <img 
                    src={p.imagenDestino} 
                    alt={`Imagen del paquete ${p.titulo} - ${p.destino}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-60" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* Badge de viaje grupal destacado */}
                <div className="absolute top-4 left-4 text-white bg-coba-teal px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  👥 GRUPAL
                </div>
                
                {/* Badge de descuento si existe */}
                {p.descuento && (
                  <div className="absolute top-4 right-4 text-coba-charcoal bg-coba-yellow px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {p.descuento}% OFF
                  </div>
                )}
                
                {/* Badge de oferta */}
                {p.oferta && (
                  <div className="absolute top-16 left-4 text-white bg-red-500 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ¡OFERTA!
                  </div>
                )}
                
                {/* Badge de fechas */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 text-coba-charcoal px-3 py-1 rounded-full text-sm font-medium">
                  {p.fechaInicio ? new Date(p.fechaInicio).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' }) : 'Próximamente'}
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-gray-800 font-medium">{p.destino || 'Destino'}</span>
                </div>
                
                <h3 className="text-xl font-bold text-coba-charcoal mb-3 group-hover:text-gray-800 transition-colors duration-200 line-clamp-2">
                  {p.titulo}
                </h3>
                
                <div className="flex items-center justify-end mb-4">
                  {p.fechaInicio && p.fechaFin && (
                    <div className="text-sm text-gray-800">
                      <span>
                        {Math.ceil((new Date(p.fechaFin) - new Date(p.fechaInicio)) / (1000 * 60 * 60 * 24))} días
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-800 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {p.descripcion}
                </p>

                {/* Precio y botón */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    {p.precio && p.precio > 0 ? (
                      <>
                        <span className="block text-xs text-gray-800">Precio desde</span>
                        <span className="text-2xl font-bold text-coba-charcoal">
                          ${p.precio.toLocaleString('es-ES')}
                        </span>
                        <span className="text-sm text-gray-800 ml-1">por persona</span>
                      </>
                    ) : (
                      <>
                        <span className="block text-sm text-gray-800 mb-1">Precio</span>
                        <span className="text-lg font-semibold text-coba-charcoal">
                          Solicitar presupuesto
                        </span>
                      </>
                    )}
                  </div>
                  <div className="text-coba-charcoal bg-coba-yellow px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group-hover:shadow-lg hover:opacity-90">
                    Unirse al Grupo
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Botón para ver más viajes grupales - solo si hay límite y más viajes disponibles */}
      {limite && paquetesGrupales.length > limite && (
        <div className="text-center mt-12">
          <a
            href="/viajes-grupales"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-coba-charcoal bg-coba-yellow hover:opacity-90 transition-colors duration-200"
          >
            Ver Todos los Viajes Grupales
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
