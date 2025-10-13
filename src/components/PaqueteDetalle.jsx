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

    const base = (apiUrl || "").replace(/\/+$/, "");
    if (!base || !hostname || !usedId) return;

    const safeHost = encodeURIComponent(hostname);
    const safeId = encodeURIComponent(usedId);
    fetch(`${base}/api/public/paquetes/dominio/${safeHost}/paquete/${safeId}`)
      .then((res) => res.json())
      .then((data) => setPaquete(data))
      .catch(() => setPaquete(null));
  }, [apiUrl, dominio, id]);

  if (!paquete)
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coba-royal"></div>
        <p className="mt-4 text-coba-teal">Cargando paquete...</p>
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
      <nav className="text-sm text-coba-teal mb-4" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <a href="/" className="hover:text-coba-royal">Inicio</a>
          </li>
          <li className="mx-2">/</li>
          <li>
            <a href="/#paquetes" className="hover:text-coba-royal">Paquetes</a>
          </li>
          <li className="mx-2">/</li>
          <li className="text-coba-charcoal" aria-current="page">{paquete.titulo}</li>
        </ol>
      </nav>

      {/* Hero imagen */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
        <div className="relative h-64 md:h-96 bg-coba-beige">
          {paquete.imagenDestino ? (
            <img
              src={paquete.imagenDestino}
              alt={`Imagen del paquete ${paquete.titulo}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-coba-teal">
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
          <div className="bg-coba-cream rounded-2xl shadow p-6 md:p-8">
            <h2 className="text-xl font-semibold text-coba-charcoal mb-4">Descripción</h2>
            <p className="text-coba-teal leading-relaxed whitespace-pre-line">{paquete.descripcion}</p>
            {(paquete.imagenHotel) && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-coba-charcoal mb-3">Imagen del hotel</h3>
                <div className="rounded-xl overflow-hidden shadow">
                  <img
                    src={paquete.imagenHotel}
                    alt={`Hotel para el paquete ${paquete.titulo}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Columna lateral */}
        <aside className="lg:col-span-1">
          <div className="bg-coba-cream rounded-2xl shadow p-6 sticky top-4">
            <div className="mb-4">
              <span className="block text-sm text-coba-teal mb-1">Desde</span>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-bold text-coba-royal">${precioFormateado}</span>
                <span className="text-sm text-coba-teal mb-1">por persona</span>
              </div>
            </div>
            <a
              href={`https://wa.me/2364379198?text=Hola, me pasarías más información del paquete "${paquete.titulo}"?`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-coba-teal hover:bg-coba-royal text-coba-cream font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Solicitar Presupuesto
            </a>
            {paquete.urlHotel && (
              <a
                href={paquete.urlHotel}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-3 rounded-lg border border-coba-royal text-coba-royal hover:bg-coba-royal hover:text-coba-cream font-medium transition-colors"
              >
                Ver hotel
              </a>
            )}
            <p className="text-xs text-coba-teal mt-3">Presupuesto sujeto a disponibilidad.</p>
          </div>

          <div className="mt-6 text-sm">
            <a href="/" className="text-coba-teal hover:text-coba-royal">← Volver</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
