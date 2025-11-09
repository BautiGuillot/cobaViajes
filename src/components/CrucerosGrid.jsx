import { useEffect, useState } from "react";

export default function CrucerosGrid({ apiUrl, dominio, mostrarBotonVerTodos = true, limite }) {
  const [cruceros, setCruceros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const d = (dominio || window.location.hostname || "").toString();
    const base = (apiUrl || "").replace(/\/+$/, "");
    if (!base || !d) {
      setLoading(false);
      return;
    }
    
    fetch(`${base}/api/public/cruceros/agencia/dominio/${encodeURIComponent(d)}`)
      .then((res) => res.json())
      .then((data) => {
        setCruceros(data);
      })
      .catch((error) => {
        console.error("Error al cargar cruceros:", error);
      })
      .finally(() => setLoading(false));
  }, [apiUrl, dominio]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coba-royal"></div>
        <span className="ml-3 text-coba-charcoal">Cargando cruceros...</span>
      </div>
    );
  }

  if (!cruceros.length) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-coba-charcoal mb-2">No hay cruceros disponibles</h3>
        <p className="text-gray-800">Pronto tendremos increíbles ofertas para ti.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-coba-charcoal mb-4">
          Cruceros Destacados
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          Descubre los mejores cruceros del mundo con las mejores tarifas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(limite ? cruceros.slice(0, limite) : cruceros).map((crucero) => {
          // Calcular duración en noches
          const duracionNoches = crucero.fechaInicio && crucero.fechaFin
            ? Math.ceil((new Date(crucero.fechaFin) - new Date(crucero.fechaInicio)) / (1000 * 60 * 60 * 24))
            : null;

          return (
            <div key={crucero.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
              <a href={`/crucero?id=${crucero.id}`} className="block">
                {/* Imagen del crucero */}
                <div className="relative h-64 bg-gradient-to-br from-coba-teal via-coba-royal to-coba-charcoal overflow-hidden">
                {crucero.imagenUrl ? (
                  <img 
                    src={crucero.imagenUrl} 
                    alt={`${crucero.titulo} - Crucero a ${crucero.destino}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-60" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                {/* Badge de descuento si existe */}
                {crucero.descuento && (
                  <div className="absolute top-4 right-4 text-coba-charcoal bg-coba-yellow px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {crucero.descuento}% OFF
                  </div>
                )}
                {/* Badge de oferta */}
                {crucero.oferta && (
                  <div className="absolute top-4 left-4 text-white bg-red-500 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ¡OFERTA!
                  </div>
                )}
                {/* Badge de viaje grupal */}
                {crucero.paqueteGrupal && (
                  <div className={`absolute left-4 text-white bg-coba-teal px-3 py-1 rounded-full text-sm font-bold shadow-lg ${crucero.oferta ? 'top-16' : 'top-4'}`}>
                    GRUPAL
                  </div>
                )}
                {/* Badge de fecha de inicio */}
                {crucero.fechaInicio && (
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 text-coba-charcoal px-3 py-1 rounded-full text-sm font-medium">
                    {new Date(crucero.fechaInicio).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}
                  </div>
                )}
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-gray-800 font-medium">{crucero.destino || 'Destino'}</span>
                </div>
                
                <h3 className="text-xl font-bold text-coba-charcoal mb-3 group-hover:text-gray-800 transition-colors duration-200 line-clamp-2">
                  {crucero.titulo}
                </h3>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-800">
                  {duracionNoches && (
                    <span>{duracionNoches} noches</span>
                  )}
                  {crucero.puertoSalida && (
                    <span className="text-xs">Desde {crucero.puertoSalida}</span>
                  )}
                </div>

                <p className="text-gray-800 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {crucero.descripcion}
                </p>

                {/* Precio y botón */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    {crucero.precio && crucero.precio > 0 ? (
                      <>
                        <span className="block text-xs text-gray-800">Precio desde</span>
                        <span className="text-2xl font-bold text-coba-charcoal">
                          ${crucero.precio.toLocaleString('es-ES')}
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
                    Ver Detalles
                  </div>
                </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Botón para ver más cruceros - solo si hay límite y más cruceros disponibles o mostrarBotonVerTodos */}
      {(mostrarBotonVerTodos && !limite) || (limite && cruceros.length > limite) ? (
        <div className="text-center mt-12">
          <a
            href="/cruceros"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-coba-charcoal bg-coba-yellow hover:opacity-90 transition-colors duration-200"
          >
            Ver Todos los Cruceros
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      ) : null}
    </div>
  );
}

