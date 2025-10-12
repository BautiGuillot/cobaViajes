/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Paleta de colores COBÁ Viajes y Turismo
        coba: {
          yellow: '#FFD700',      // 01: Amarillo dorado brillante
          charcoal: '#2C2C2C',    // 02: Gris carbón oscuro
          royal: '#1E40AF',       // 03: Azul real vibrante
          teal: '#0F766E',        // 04: Verde azulado profundo
          beige: '#F5F5DC',       // 05: Beige cálido claro
          cream: '#FFFEF7',       // 06: Crema muy clara
        },
        primary: {
          50: '#FFFEF7',          // Crema muy clara
          100: '#F5F5DC',         // Beige cálido
          200: '#FFD700',         // Amarillo dorado
          300: '#0F766E',         // Verde azulado
          400: '#1E40AF',         // Azul real
          500: '#1E40AF',         // Azul real (principal)
          600: '#0F766E',         // Verde azulado más oscuro
          700: '#2C2C2C',         // Gris carbón
          800: '#1A1A1A',         // Negro suave
          900: '#000000',         // Negro puro
        },
      },
    },
  },
  plugins: [],
}
