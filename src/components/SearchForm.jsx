import { useState } from "react";

export default function SearchForm() {
  const [searchData, setSearchData] = useState({
    destino: '',
    fechaSalida: '',
    fechaRegreso: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la búsqueda
    console.log('Búsqueda:', searchData);
    // Redirigir a la página de resultados con los parámetros
    const cleanedSearchData = Object.entries(searchData).reduce((acc, [key, value]) => {
      if (typeof value !== 'string') {
        return value ? { ...acc, [key]: value } : acc;
      }

      const normalizedValue = value.trim().replace(/\s+/g, ' ');

      if (!normalizedValue) {
        return acc;
      }

      return {
        ...acc,
        [key]: normalizedValue
      };
    }, {});

    const params = new URLSearchParams(cleanedSearchData);
    window.location.href = `/paquetes?${params.toString()}`;
  };

  return (
    <section className="py-16 bg-coba-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coba-charcoal mb-4">Encuentra tu Próxima Aventura</h2>
          <p className="text-lg text-coba-teal">Busca entre cientos de destinos y encuentra el paquete perfecto para ti</p>
        </div>
        
        <div className="bg-coba-cream rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Destino</label>
              <input 
                type="text"
                name="destino"
                value={searchData.destino}
                onChange={handleInputChange}
                placeholder="Ej: México, Europa, Asia..."
                className="w-full px-4 py-3 border border-coba-teal rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-coba-cream text-coba-charcoal placeholder-coba-teal"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Fecha de salida</label>
              <input 
                type="date" 
                name="fechaSalida"
                value={searchData.fechaSalida}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-coba-teal rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-coba-cream text-coba-charcoal placeholder-coba-teal"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Fecha de regreso</label>
              <input 
                type="date" 
                name="fechaRegreso"
                value={searchData.fechaRegreso}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-coba-teal rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-coba-cream text-coba-charcoal placeholder-coba-teal"
              />
            </div>
            
            <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-4">
              <button 
                type="submit"
                className="bg-coba-royal hover:bg-coba-teal text-coba-cream px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Buscar Paquetes
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
