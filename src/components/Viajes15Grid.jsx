import { useState } from "react";

export default function Viajes15Grid() {
  const [selectedPaquete, setSelectedPaquete] = useState(null);

  const paquetes15 = [
    {
      id: 1,
      titulo: "Parques Temáticos Orlando",
      descripcion: "Vive la magia de Disney, Universal y todos los parques más increíbles de Orlando. Magic Kingdom, EPCOT, Hollywood Studios, Universal Studios, Islands of Adventure y mucho más te esperan",
      imagen: "https://images.unsplash.com/photo-1661231134255-140c22390823?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      incluye: [
        "Entradas a parques temáticos",
        "Opciones de FastPass disponibles",
        "Acceso al Mundo Mágico de Harry Potter",
        "Experiencias con personajes",
        "Traslados y transporte",
        "Asistencia y planificación del viaje"
      ]
    },
    {
      id: 2,
      titulo: "Shopping en Miami y Orlando",
      descripcion: "Disfruta de los mejores outlets y centros comerciales de Florida. Aventura Mall, Sawgrass Mills, Premium Outlets y mucho más para hacer las compras de tus sueños",
      imagen: "https://images.unsplash.com/photo-1617121361626-ea83002467a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
      incluye: [
        "Tours a principales centros comerciales",
        "Visita a outlets premium",
        "Acceso a tarjetas de descuentos",
        "Traslados incluidos",
        "Tiempo libre para compras",
        "Asesoramiento personalizado"
      ]
    },
    {
      id: 3,
      titulo: "Playas de Miami y Key West",
      descripcion: "Relájate en las mejores playas de Florida. South Beach, Miami Beach, Key West y los Cayos te esperan con aguas cristalinas y arena blanca para disfrutar al máximo",
      imagen: "https://images.unsplash.com/photo-1506812574058-fc75fa93fead?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      incluye: [
        "Estadía en Miami Beach",
        "Tours por South Beach y Ocean Drive",
        "Actividades acuáticas disponibles",
        "Paseos en bote",
        "Experiencias en atardeceres únicos"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Encabezado de la sección */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-coba-charcoal mb-4">
          🎉 Viajes de 15 Años - Experiencia Inolvidable
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Celebra tus 15 años con un viaje mágico a Orlando y Miami. Vive la experiencia 
          de los mejores parques temáticos, playas paradisíacas y aventuras únicas que 
          recordarás para siempre.
        </p>
      </div>

      {/* Información destacada */}
      <div className="bg-coba-cream rounded-2xl p-8 mb-12 shadow-xl border-2 border-coba-beige">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">✨</div>
            <h3 className="font-bold text-xl mb-2 text-coba-charcoal">Paquetes Todo Incluido</h3>
            <p className="text-gray-700">Vuelos, hoteles, entradas y traslados</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎢</div>
            <h3 className="font-bold text-xl mb-2 text-coba-charcoal">Los Mejores Parques</h3>
            <p className="text-gray-700">Disney, Universal, SeaWorld y más</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📸</div>
            <h3 className="font-bold text-xl mb-2 text-coba-charcoal">Recuerdos Inolvidables</h3>
            <p className="text-gray-700">Sesión de fotos profesional incluida</p>
          </div>
        </div>
      </div>

      {/* Lista de paquetes con imágenes y texto alternado */}
      <div className="space-y-16 mb-12">
        {paquetes15.map((paquete, index) => (
          <div
            key={paquete.id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 items-center bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
          >
            {/* Imagen */}
            <div className="w-full md:w-1/2 h-80 relative overflow-hidden group">
              <img
                src={paquete.imagen}
                alt={paquete.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Contenido */}
            <div className="w-full md:w-1/2 p-8">
              <h3 className="text-3xl font-bold text-coba-charcoal mb-4">
                {paquete.titulo}
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {paquete.descripcion}
              </p>
              
              {/* Lista de lo que incluye */}
              <div className="mb-6">
                <h4 className="font-bold text-lg text-coba-charcoal mb-3">
                  ✅ Incluye:
                </h4>
                <ul className="space-y-2">
                  {paquete.incluye.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-coba-teal mr-2 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón */}
              <button
                onClick={() => setSelectedPaquete(paquete)}
                className="text-coba-charcoal bg-coba-yellow hover:opacity-90 font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ver Más Detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalles */}
      {selectedPaquete && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPaquete(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedPaquete.imagen}
                alt={selectedPaquete.titulo}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPaquete(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-coba-charcoal rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg transition-all"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-coba-charcoal mb-4">
                {selectedPaquete.titulo}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {selectedPaquete.descripcion}
              </p>
              <div className="bg-coba-cream rounded-xl p-6 mb-6">
                <h4 className="font-bold text-xl text-coba-charcoal mb-4">
                  ✅ Incluye:
                </h4>
                <ul className="space-y-2">
                  {selectedPaquete.incluye.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-coba-teal mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/2364351443?text=${encodeURIComponent(
                    `Hola! Quiero información sobre el paquete de 15 años: ${selectedPaquete.titulo}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-coba-whatsapp hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  Consultar por WhatsApp
                </a>
                <button
                  onClick={() => setSelectedPaquete(null)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-coba-charcoal font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sección de contacto */}
      <div className="bg-coba-cream rounded-2xl p-8 text-center shadow-lg">
        <h3 className="text-2xl font-bold text-coba-charcoal mb-4">
          ¿Listo para tu viaje de 15?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contáctanos y armaremos el paquete perfecto para ti. Podemos personalizar 
          tu viaje según tus preferencias y presupuesto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/2364351443?text=${encodeURIComponent(
              'Hola! Quiero información sobre los viajes de 15 años a Disney y Miami'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coba-whatsapp hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Consultar por WhatsApp
          </a>
          <a
                  href="/contacto"
                  className="text-coba-charcoal bg-coba-yellow hover:opacity-90 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Formulario de Contacto
                </a>
        </div>
      </div>
    </div>
  );
}

