import { useState } from "react";

export default function SearchForm() {
  const [searchData, setSearchData] = useState({
    destino: '',
    fechaSalida: '',
    fechaRegreso: '',
    viajeros: '1'
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
    const params = new URLSearchParams(searchData);
    window.location.href = `/paquetes?${params.toString()}`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Encuentra tu Próxima Aventura</h2>
          <p className="text-lg text-gray-600">Busca entre cientos de destinos y encuentra el paquete perfecto para ti</p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destino</label>
              <select 
                name="destino"
                value={searchData.destino}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Seleccionar destino</option>
                <option value="mexico">México</option>
                <option value="peru">Perú</option>
                <option value="europa">Europa</option>
                <option value="asia">Asia</option>
                <option value="africa">África</option>
                <option value="america-del-sur">América del Sur</option>
                <option value="caribe">Caribe</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de salida</label>
              <input 
                type="date" 
                name="fechaSalida"
                value={searchData.fechaSalida}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de regreso</label>
              <input 
                type="date" 
                name="fechaRegreso"
                value={searchData.fechaRegreso}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Viajeros</label>
              <select 
                name="viajeros"
                value={searchData.viajeros}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5+ personas</option>
              </select>
            </div>
            
            <div className="md:col-span-2 lg:col-span-4 flex justify-center mt-4">
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
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
