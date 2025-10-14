import { useEffect, useState } from "react";

export default function PaquetesGrid({ apiUrl, dominio }) {
  const [paquetes, setPaquetes] = useState([]);
  const [paquetesFiltrados, setPaquetesFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtrosAplicados, setFiltrosAplicados] = useState({});

  // Función para aplicar filtros
  const aplicarFiltros = (paquetes, filtros) => {
    return paquetes.filter(paquete => {
      // Filtro por destino (string)
      const destinoFiltroNormalizado = typeof filtros.destino === 'string'
        ? filtros.destino.trim()
        : filtros.destino;

      if (destinoFiltroNormalizado && paquete.destino) {
        const destinoPaquete = paquete.destino.toLowerCase();
        const destinoFiltro = destinoFiltroNormalizado.toLowerCase();
        if (!destinoPaquete.includes(destinoFiltro)) {
          return false;
        }
      }

      // Filtro por fecha de salida
      if (filtros.fechaSalida && paquete.fechaInicio) {
        const fechaSalidaPaquete = new Date(paquete.fechaInicio);
        const fechaSalidaFiltro = new Date(filtros.fechaSalida);
        if (fechaSalidaPaquete < fechaSalidaFiltro) {
          return false;
        }
      }

      // Filtro por fecha de regreso
      if (filtros.fechaRegreso && paquete.fechaFin) {
        const fechaRegresoPaquete = new Date(paquete.fechaFin);
        const fechaRegresoFiltro = new Date(filtros.fechaRegreso);
        if (fechaRegresoPaquete > fechaRegresoFiltro) {
          return false;
        }
      }


      return true;
    });
  };

  // Función para leer parámetros de URL
  const leerParametrosURL = () => {
    if (typeof window === "undefined") return {};
    
    const urlParams = new URLSearchParams(window.location.search);
    const filtros = {};
    
    const destinoParam = urlParams.get('destino');
    const fechaSalidaParam = urlParams.get('fechaSalida');
    const fechaRegresoParam = urlParams.get('fechaRegreso');

    if (destinoParam) {
      const destinoNormalizado = destinoParam.trim().replace(/\s+/g, ' ');
      if (destinoNormalizado) filtros.destino = destinoNormalizado;
    }
    if (fechaSalidaParam) filtros.fechaSalida = fechaSalidaParam.trim();
    if (fechaRegresoParam) filtros.fechaRegreso = fechaRegresoParam.trim();

    return filtros;
  };

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
        
        // Aplicar filtros de URL si existen
        const filtros = leerParametrosURL();
        setFiltrosAplicados(filtros);
        
        if (Object.keys(filtros).length > 0) {
          const filtrados = aplicarFiltros(data, filtros);
          setPaquetesFiltrados(filtrados);
        } else {
          setPaquetesFiltrados(data);
        }
      })
      .finally(() => setLoading(false));
  }, [apiUrl, dominio]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coba-royal"></div>
        <span className="ml-3 text-coba-charcoal">Cargando paquetes...</span>
      </div>
    );
  }

  if (!paquetes.length) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.5a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-coba-charcoal mb-2">No hay paquetes disponibles</h3>
        <p className="text-gray-800">Pronto tendremos increíbles ofertas para ti.</p>
      </div>
    );
  }

  if (!paquetesFiltrados.length && Object.keys(filtrosAplicados).length > 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-coba-charcoal mb-2">No se encontraron paquetes</h3>
        <p className="text-gray-800 mb-4">No hay paquetes que coincidan con tus criterios de búsqueda.</p>
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
          {Object.keys(filtrosAplicados).length > 0 ? 'Resultados de Búsqueda' : 'Paquetes Destacados'}
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          {Object.keys(filtrosAplicados).length > 0 
            ? `Mostrando ${paquetesFiltrados.length} de ${paquetes.length} paquetes`
            : 'Descubre nuestras ofertas más populares con descuentos especiales'
          }
        </p>
        
        {/* Mostrar filtros aplicados */}
        {Object.keys(filtrosAplicados).length > 0 && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {filtrosAplicados.destino && (
              <span className="px-3 py-1 text-coba-charcoal bg-coba-yellow rounded-full text-sm">
                Destino: {filtrosAplicados.destino}
              </span>
            )}
            {filtrosAplicados.fechaSalida && (
              <span className="px-3 py-1 bg-coba-beige text-gray-800 rounded-full text-sm">
                Salida: {new Date(filtrosAplicados.fechaSalida).toLocaleDateString('es-ES')}
              </span>
            )}
            {filtrosAplicados.fechaRegreso && (
              <span className="px-3 py-1 bg-coba-beige text-gray-800 rounded-full text-sm">
                Regreso: {new Date(filtrosAplicados.fechaRegreso).toLocaleDateString('es-ES')}
              </span>
            )}
            <a
              href="/paquetes"
              className="px-3 py-1 bg-coba-cream text-coba-charcoal rounded-full text-sm hover:bg-coba-beige transition-colors"
            >
              Limpiar filtros
            </a>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paquetesFiltrados.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
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
                {/* Badge de descuento si existe */}
                {p.descuento && (
                  <div className="absolute top-4 right-4 text-coba-charcoal bg-coba-yellow px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {p.descuento}% OFF
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
                    <span className="block text-xs text-gray-800">Precio desde</span>
                    <span className="text-2xl font-bold text-coba-charcoal">
                      ${p.precio?.toLocaleString('es-ES') || '0'}
                    </span>
                    <span className="text-sm text-gray-800 ml-1">por persona</span>
                  </div>
                  <div className="text-coba-charcoal bg-coba-yellow px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group-hover:shadow-lg hover:opacity-90">
                    Ver Detalles
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Botón para ver más paquetes */}
      <div className="text-center mt-12">
        <a
          href="/paquetes"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-coba-charcoal bg-coba-yellow hover:opacity-90 transition-colors duration-200"
        >
          Ver Todos los Paquetes
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}
