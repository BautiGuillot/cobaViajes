// Función para normalizar texto (quitar tildes, convertir a minúsculas, quitar espacios extra, puntos, etc.)
export const normalizarTexto = (texto) => {
  if (!texto || typeof texto !== 'string') return '';
  
  return texto
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ') // Reemplazar múltiples espacios con uno solo
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    .replace(/[.,;:!?\-_()]/g, '') // Quitar puntuación
    .replace(/\s+/g, '') // Quitar todos los espacios
};
