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
        <svg className="w-8 h-8 text-coba-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "15 Años de Experiencia",
      description: "Reconocidos como la mejor agencia de viajes por 3 años consecutivos",
      bgColor: "bg-coba-cream",
      iconColor: "text-coba-teal"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-coba-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "+50,000 Viajeros",
      description: "Miles de clientes satisfechos que han confiado en nosotros",
      bgColor: "bg-coba-yellow",
      iconColor: "text-coba-charcoal"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-coba-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "Soporte 24/7",
      description: "Asistencia completa antes, durante y después de tu viaje",
      bgColor: "bg-coba-beige",
      iconColor: "text-coba-royal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-coba-cream to-coba-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coba-charcoal mb-6">¿Por Qué Elegir Coba Viajes?</h2>
          <p className="text-xl text-coba-teal max-w-3xl mx-auto">Somos tu mejor aliado para crear experiencias de viaje inolvidables con más de 15 años de experiencia</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-coba-cream rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className={`${feature.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-coba-charcoal mb-3 group-hover:text-coba-royal transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-coba-teal text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Estadísticas adicionales */}
        <div className="mt-16 bg-coba-cream rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border-r border-coba-beige last:border-r-0">
              <div className="text-4xl font-bold text-coba-royal mb-2">+50,000</div>
              <div className="text-coba-teal font-medium">Viajeros Satisfechos</div>
            </div>
            <div className="border-r border-coba-beige last:border-r-0">
              <div className="text-4xl font-bold text-coba-royal mb-2">15+</div>
              <div className="text-coba-teal font-medium">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coba-royal mb-2">24/7</div>
              <div className="text-coba-teal font-medium">Soporte al Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
