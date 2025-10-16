export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-coba-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Viajes Seguros",
      description: "Seguros de viaje incluidos y protocolos de seguridad certificados",
      bgColor: "bg-coba-beige",
      iconColor: "text-coba-royal"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-coba-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Experiencia Comprobada",
      description: "Años de experiencia creando viajes inolvidables para nuestros clientes",
      bgColor: "bg-coba-beige",
      iconColor: "text-coba-royal"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-coba-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
      ),
      title: "Clientes Satisfechos",
      description: "Miles de viajeros han confiado en nosotros para sus aventuras",
      bgColor: "bg-coba-beige",
      iconColor: "text-coba-charcoal"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-coba-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Soporte 24/7",
      description: "Asistencia completa antes, durante y después de tu viaje",
      bgColor: "bg-coba-beige",
      iconColor: "text-coba-royal"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coba-charcoal mb-6">¿Por Qué Elegir Coba Viajes?</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">Somos tu mejor aliado para crear experiencias de viaje inolvidables con años de experiencia</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className={`${feature.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-coba-charcoal mb-3 group-hover:text-gray-800 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Estadísticas adicionales */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border-r border-coba-beige last:border-r-0">
              <div className="text-4xl font-bold text-coba-charcoal mb-2">+10,000</div>
              <div className="text-gray-800 font-medium">Viajeros Satisfechos</div>
            </div>
            <div className="border-r border-coba-beige last:border-r-0">
              <div className="text-4xl font-bold text-coba-charcoal mb-2">+10</div>
              <div className="text-gray-800 font-medium">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coba-charcoal mb-2">24/7</div>
              <div className="text-gray-800 font-medium">Soporte al Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
