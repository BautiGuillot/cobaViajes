import { useEffect, useState } from "react";

export default function PaquetesGrid({ apiUrl, dominio }) {
  const [paquetes, setPaquetes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const d = dominio || window.location.hostname;
    fetch(`${apiUrl}/api/public/paquetes/agencia/dominio/${d}`)
      .then((res) => res.json())
      .then((data) => setPaquetes(data))
      .finally(() => setLoading(false));
  }, [apiUrl, dominio]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Cargando paquetes...</span>
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
        <h3 className="text-lg font-medium text-gray-900 mb-2">No hay paquetes disponibles</h3>
        <p className="text-gray-500">Pronto tendremos increíbles ofertas para ti.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Paquetes Destacados</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre nuestras ofertas más populares con descuentos especiales
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paquetes.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
            <a href={`/paquete?id=${p.id}`} className="block">
              {/* Imagen del paquete */}
              <div className="relative h-64 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
                {p.imagenUrl ? (
                  <img 
                    src={p.imagenUrl} 
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
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {p.descuento}% OFF
                  </div>
                )}
                {/* Badge de fechas */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {p.fechaInicio ? new Date(p.fechaInicio).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' }) : 'Próximamente'}
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-blue-600 font-medium">{p.destino || 'Destino'}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {p.titulo}
                </h3>
                
                <div className="flex items-center justify-end mb-4">
                  {p.fechaInicio && p.fechaFin && (
                    <div className="text-sm text-gray-500">
                      <span>
                        {Math.ceil((new Date(p.fechaFin) - new Date(p.fechaInicio)) / (1000 * 60 * 60 * 24))} días
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {p.descripcion}
                </p>

                

                {/* Precio y botón */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="block text-xs text-gray-500">Precio desde</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${p.precio?.toLocaleString('es-ES') || '0'}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">por persona</span>
                  </div>
                  <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group-hover:shadow-lg">
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
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
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
