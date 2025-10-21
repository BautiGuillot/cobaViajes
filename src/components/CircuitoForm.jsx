import { useState } from "react";

export default function CircuitoForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechaInicio: '',
    fechaFin: '',
    viajeros: '2',
    presupuesto: '',
    paises: [],
    tipoAlojamiento: '',
    tipoTransporte: '',
    actividades: [],
    observaciones: ''
  });

  const [paisInput, setPaisInput] = useState('');
  const [errors, setErrors] = useState({});


  const actividadesDisponibles = [
    'Turismo cultural', 'Aventura', 'Playa y relax', 'Gastronomía',
    'Naturaleza', 'Historia', 'Arte y museos', 'Compras',
    'Vida nocturna', 'Deportes', 'Fotografía', 'Meditación y yoga'
  ];

  // Funciones de validación
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Teléfono es opcional
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
  };

  const validateDates = (fechaInicio, fechaFin) => {
    if (!fechaInicio || !fechaFin) return true; // Las fechas son requeridas por HTML5
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    return fin > inicio;
  };

  const validateForm = () => {
    const newErrors = {};

    // Validar campos requeridos
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!validatePhone(formData.telefono)) {
      newErrors.telefono = 'Ingresa un teléfono válido';
    }

    if (!formData.fechaInicio) {
      newErrors.fechaInicio = 'La fecha de inicio es requerida';
    }

    if (!formData.fechaFin) {
      newErrors.fechaFin = 'La fecha de fin es requerida';
    }

    if (!validateDates(formData.fechaInicio, formData.fechaFin)) {
      newErrors.fechaFin = 'La fecha de fin debe ser posterior a la fecha de inicio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePaisAdd = () => {
    if (paisInput.trim() && !formData.paises.includes(paisInput.trim())) {
      setFormData(prev => ({
        ...prev,
        paises: [...prev.paises, paisInput.trim()]
      }));
      setPaisInput('');
    }
  };

  const handlePaisRemove = (pais) => {
    setFormData(prev => ({
      ...prev,
      paises: prev.paises.filter(p => p !== pais)
    }));
  };

  const handleActividadToggle = (actividad) => {
    setFormData(prev => ({
      ...prev,
      actividades: prev.actividades.includes(actividad)
        ? prev.actividades.filter(a => a !== actividad)
        : [...prev.actividades, actividad]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar formulario antes de enviar
    if (!validateForm()) {
      return;
    }
    
    // Calcular días automáticamente si hay fechas
    let diasCalculados = '';
    if (formData.fechaInicio && formData.fechaFin) {
      const inicio = new Date(formData.fechaInicio);
      const fin = new Date(formData.fechaFin);
      const diffTime = Math.abs(fin - inicio);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      diasCalculados = diffDays;
    }

    // Crear mensaje para WhatsApp
    const mensaje = `*SOLICITUD DE CIRCUITO PERSONALIZADO*

*Datos del Cliente:*
- Nombre: ${formData.nombre}
- Email: ${formData.email}
- Telefono: ${formData.telefono}

*Fechas del Viaje:*
- Fecha inicio: ${formData.fechaInicio || 'No especificada'}
- Fecha fin: ${formData.fechaFin || 'No especificada'}
- Duracion: ${diasCalculados ? `${diasCalculados} dias` : 'No calculada'}

*Viajeros:*
- Cantidad: ${formData.viajeros} personas

*Presupuesto:*
- ${formData.presupuesto || 'No especificado'}

*Destinos:*
${formData.paises.length > 0 ? formData.paises.map(pais => `- ${pais}`).join('\n') : '- No especificados'}

*Preferencias:*
- Alojamiento: ${formData.tipoAlojamiento || 'No especificado'}
- Transporte: ${formData.tipoTransporte || 'No especificado'}

*Actividades de interes:*
${formData.actividades.length > 0 ? formData.actividades.map(act => `- ${act}`).join('\n') : '- No especificadas'}

*Observaciones:*
${formData.observaciones || 'Ninguna'}

Hola! Me gustaria solicitar un presupuesto para este circuito personalizado.`;

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Abrir WhatsApp
    window.open(`https://wa.me/2364351443?text=${mensajeCodificado}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Datos Personales */}
        <div>
          <h3 className="text-xl font-semibold text-coba-charcoal mb-4">Datos Personales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Nombre completo *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal ${
                  errors.nombre ? 'border-red-500' : 'border-coba-teal'
                }`}
                placeholder="Tu nombre completo"
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal ${
                  errors.email ? 'border-red-500' : 'border-coba-teal'
                }`}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal ${
                  errors.telefono ? 'border-red-500' : 'border-coba-teal'
                }`}
                placeholder="+54 9 11 1234-5678"
              />
              {errors.telefono && (
                <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
              )}
            </div>
          </div>
        </div>

        {/* Fechas */}
        <div>
          <h3 className="text-xl font-semibold text-coba-charcoal mb-4">Fechas del Viaje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Fecha de inicio *</label>
              <input
                type="date"
                name="fechaInicio"
                value={formData.fechaInicio}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal ${
                  errors.fechaInicio ? 'border-red-500' : 'border-coba-teal'
                }`}
              />
              {errors.fechaInicio && (
                <p className="text-red-500 text-sm mt-1">{errors.fechaInicio}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Fecha de fin *</label>
              <input
                type="date"
                name="fechaFin"
                value={formData.fechaFin}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal ${
                  errors.fechaFin ? 'border-red-500' : 'border-coba-teal'
                }`}
              />
              {errors.fechaFin && (
                <p className="text-red-500 text-sm mt-1">{errors.fechaFin}</p>
              )}
            </div>
          </div>
        </div>

        {/* Viajeros y Presupuesto */}
        <div>
          <h3 className="text-xl font-semibold text-coba-charcoal mb-4">Viajeros y Presupuesto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Número de viajeros</label>
              <select
                name="viajeros"
                value={formData.viajeros}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-coba-teal rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal"
              >
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 personas</option>
                <option value="7">7 personas</option>
                <option value="8">8 personas</option>
                <option value="9">9 personas</option>
                <option value="10">10+ personas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Presupuesto aproximado (USD)</label>
              <select
                name="presupuesto"
                value={formData.presupuesto}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-coba-teal rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal"
              >
                <option value="">Seleccionar rango</option>
                <option value="Menos de $2,000">Menos de $2,000</option>
                <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $15,000">$10,000 - $15,000</option>
                <option value="$15,000 - $25,000">$15,000 - $25,000</option>
                <option value="Más de $25,000">Más de $25,000</option>
              </select>
            </div>
          </div>
        </div>

        {/* Destinos */}
        <div>
          <h3 className="text-xl font-semibold text-coba-charcoal mb-4">Destinos de Interés</h3>
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={paisInput}
                onChange={(e) => setPaisInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handlePaisAdd())}
                className="flex-1 px-4 py-3 border border-coba-teal rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal"
                placeholder="Escribe un país y presiona Enter"
              />
              <button
                type="button"
                onClick={handlePaisAdd}
                className="px-6 py-3 text-coba-charcoal bg-coba-yellow rounded-lg transition-colors hover:opacity-90"
              >
                Agregar
              </button>
            </div>
            {formData.paises.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.paises.map((pais, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-coba-teal bg-opacity-20 text-gray-800"
                  >
                    {pais}
                    <button
                      type="button"
                      onClick={() => handlePaisRemove(pais)}
                      className="ml-2 text-coba-charcoal hover:text-gray-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Preferencias */}
        <div>
          <h3 className="text-xl font-semibold text-coba-charcoal mb-4">Preferencias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Tipo de alojamiento</label>
              <select
                name="tipoAlojamiento"
                value={formData.tipoAlojamiento}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-coba-teal rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal"
              >
                <option value="">Seleccionar</option>
                <option value="Hotel 3 estrellas">Hotel 3 estrellas</option>
                <option value="Hotel 4 estrellas">Hotel 4 estrellas</option>
                <option value="Hotel 5 estrellas">Hotel 5 estrellas</option>
                <option value="Hostal/B&B">Hostal/B&B</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Resort">Resort</option>
                <option value="Ecolodge">Ecolodge</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-coba-charcoal mb-2">Tipo de transporte</label>
              <select
                name="tipoTransporte"
                value={formData.tipoTransporte}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-coba-teal rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal"
              >
                <option value="">Seleccionar</option>
                <option value="Económico">Económico</option>
                <option value="Estándar">Estándar</option>
                <option value="Premium">Premium</option>
                <option value="Lujo">Lujo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Actividades */}
        <div>
          <h3 className="text-xl font-semibold text-coba-charcoal mb-4">Actividades de Interés</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {actividadesDisponibles.map((actividad) => (
              <label key={actividad} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.actividades.includes(actividad)}
                  onChange={() => handleActividadToggle(actividad)}
                  className="w-4 h-4 text-gray-800 border-gray-300 rounded focus:ring-coba-teal"
                />
                <span className="text-sm text-gray-700">{actividad}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Observaciones */}
        <div>
          <label className="block text-sm font-medium text-coba-charcoal mb-2">Observaciones adicionales</label>
          <textarea
            name="observaciones"
            value={formData.observaciones}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-coba-teal rounded-lg focus:ring-2 focus:ring-coba-yellow focus:border-transparent bg-white text-coba-charcoal placeholder-coba-teal"
            placeholder="Cuéntanos más detalles sobre tu viaje ideal, restricciones alimentarias, necesidades especiales, etc."
          />
        </div>

        {/* Botón de envío */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-8 py-4 bg-coba-whatsapp hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Solicitar Presupuesto por WhatsApp
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Al hacer clic, se abrirá WhatsApp con toda la información del formulario
          </p>
        </div>
      </form>
    </div>
  );
}
