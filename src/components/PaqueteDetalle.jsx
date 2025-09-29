import { useEffect, useState } from "react";

export default function PaqueteDetalle(props) {
  const { apiUrl, dominio, id } = props ?? {};
  const [paquete, setPaquete] = useState(null);

  useEffect(() => {
    const hostname =
      dominio || (typeof window !== "undefined" ? window.location.hostname : undefined);

    const usedId =
      id ??
      (typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("id")
        : null);

    if (!apiUrl || !hostname || !usedId) return;

    fetch(`${apiUrl}/api/public/paquetes/dominio/${hostname}/paquete/${usedId}`)
      .then((res) => res.json())
      .then((data) => setPaquete(data))
      .catch(() => setPaquete(null));
  }, [apiUrl, dominio, id]);

  if (!paquete)
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Cargando paquete...</p>
      </div>
    );

  const precioFormateado =
    typeof paquete.precio === "number"
      ? paquete.precio.toLocaleString("es-ES")
      : paquete.precio;

  const dias = paquete?.fechaInicio && paquete?.fechaFin
    ? Math.max(
        1,
        Math.ceil(
          (new Date(paquete.fechaFin).getTime() - new Date(paquete.fechaInicio).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      )
    : null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <a href="/" className="hover:text-blue-600">Inicio</a>
          </li>
          <li className="mx-2">/</li>
          <li>
            <a href="/#paquetes" className="hover:text-blue-600">Paquetes</a>
          </li>
          <li className="mx-2">/</li>
          <li className="text-gray-700" aria-current="page">{paquete.titulo}</li>
        </ol>
      </nav>

      {/* Hero imagen */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
        <div className="relative h-64 md:h-96 bg-gray-100">
          {paquete.imagenUrl ? (
            <img
              src={paquete.imagenUrl}
              alt={`Imagen del paquete ${paquete.titulo}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow">{paquete.titulo}</h1>
              {paquete.destino && (
                <p className="text-white/90 mt-1">{paquete.destino}</p>
              )}
            </div>
            <div className="flex gap-2">
              {dias && (
                <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {dias} días
                </span>
              )}
              {paquete.fechaInicio && (
                <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {new Date(paquete.fechaInicio).toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" })}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna principal */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Descripción</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{paquete.descripcion}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-700 font-medium">Incluye</p>
                <ul className="mt-2 text-sm text-blue-900 space-y-1 list-disc list-inside">
                  <li>Vuelos ida y vuelta</li>
                  <li>Alojamiento seleccionado</li>
                  <li>Traslados</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm text-green-700 font-medium">Información</p>
                <ul className="mt-2 text-sm text-green-900 space-y-1 list-disc list-inside">
                  <li>Política de cancelación flexible</li>
                  <li>Asistencia 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Columna lateral */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow p-6 sticky top-4">
            <div className="mb-4">
              <span className="block text-sm text-gray-500 mb-1">Desde</span>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-bold text-blue-600">${precioFormateado}</span>
                <span className="text-sm text-gray-500 mb-1">por persona</span>
              </div>
            </div>
            <a
              href="/"
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Reservar ahora
            </a>
            <p className="text-xs text-gray-500 mt-3">Precio final sujeto a disponibilidad.</p>
          </div>

          <div className="mt-6 text-sm">
            <a href="/" className="text-gray-600 hover:text-blue-600">← Volver</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
