export default function HeroSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`
        }}
      ></div>
      
      {/* Filtro con 20% de opacidad */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-center">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Descubre el Mundo con 
            <span className="block md:inline text-coba-yellow"> Coba Viajes</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-4xl mx-auto text-white/90 drop-shadow-md leading-relaxed">
            Vive experiencias únicas con nuestros paquetes personalizados. Desde playas paradisíacas hasta aventuras en la montaña.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#paquetes" 
              className="text-coba-charcoal bg-coba-yellow px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:opacity-90"
            >
              Explorar Destinos
            </a>
            <a 
              href="/ofertas" 
              className="border-2 border-coba-cream hover:bg-coba-cream hover:text-coba-royal text-coba-cream px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver Ofertas Especiales
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
