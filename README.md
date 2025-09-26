# Página de Aterrizaje Perteneo

Una página de aterrizaje profesional, innovadora y optimizada para SEO para Perteneo - una plataforma SaaS que ayuda a restaurantes y comercios en Colombia a construir fidelidad de clientes con tarjetas digitales en Google Wallet y Apple Wallet.

## 🎯 Características

- **Diseño Moderno**: Diseño premium y minimalista con colores de marca Perteneo (Azul Marino Profundo, Dorado, Coral)
- **Completamente Responsivo**: Diseño mobile-first que funciona perfectamente en todos los dispositivos
- **Optimizado para SEO**: Meta tags completos, schema markup y HTML semántico
- **Enfocado en Rendimiento**: Optimizado para Core Web Vitals y carga rápida
- **Elementos Interactivos**: Animaciones sutiles usando Framer Motion
- **Formulario de Contacto**: Integrado con Formspree para captura de leads
- **Listo para Analytics**: Configuración de Google Analytics 4

## 🚀 Stack Técnico

- **Astro** - Generador de sitios estáticos para rendimiento óptimo
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones e interacciones suaves
- **Formspree** - Manejo de formularios de contacto
- **Google Analytics** - Seguimiento de analytics del sitio web

## 📋 Prerequisitos

- Node.js 18+ 
- npm o yarn package manager

## 🛠️ Instalación y Configuración

1. **Instalar Dependencias**
   ```bash
   npm install
   ```

2. **Variables de Entorno**
   Copia el archivo `.env` y configura tus variables de entorno:
   ```bash
   # Configuración de Google Analytics 4
   GA4_MEASUREMENT_ID=G-XXXXXXXXXX

   # Configuración de Formspree  
   FORMSPREE_FORM_ID=tu_id_de_formulario_aqui

   # Configuración del Sitio
   SITE_URL=https://perteneo.com
   SITE_NAME=Perteneo
   ```

3. **Servidor de Desarrollo**
   ```bash
   npm run dev
   ```
   Visita `http://localhost:4321` para ver la página de aterrizaje.

4. **Build para Producción**
   ```bash
   npm run build
   ```

## 🎨 Personalización

### Colores de Marca
La página utiliza los colores de marca de Perteneo definidos en `tailwind.config.mjs`:
- **Azul Marino Profundo**: `#1B365D` - Color principal de marca
- **Dorado**: `#E6B800` - Color de acento para destacar
- **Coral**: `#FF6F61` - Color para llamadas a la acción

### Secciones de Contenido
La página incluye estas secciones clave:

1. **Sección Hero** - Titular convincente y propuesta de valor
2. **Cómo Funciona** - Explicación del proceso de 4 pasos
3. **Beneficios** - 6 beneficios clave con estadísticas
4. **Casos de Uso** - Ejemplos prácticos para diferentes tipos de negocios
5. **Precios** - Niveles de precios claros y comparación de características
6. **Preguntas Frecuentes** - Preguntas comunes en lenguaje amigable
7. **CTA Final** - Sección enfocada en conversión
8. **Footer** - Formulario de contacto para captura de leads

## 📧 Configuración de Formspree

1. Crea una cuenta en Formspree en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario y obtén tu Form ID
3. Actualiza el `FORMSPREE_FORM_ID` en tu archivo `.env`
4. Actualiza la acción del formulario en el componente Footer

## 📊 Configuración de Google Analytics

1. Crea una propiedad de Google Analytics 4
2. Obtén tu Measurement ID (formato: G-XXXXXXXXXX)
3. Agrégalo a tu archivo `.env` como `GA4_MEASUREMENT_ID`

## 🔍 Características SEO

- Meta tags completos, Open Graph y Schema markup
- Sitemap XML y robots.txt
- Estructura HTML semántica
- Optimizado para motores de búsqueda y compartir en redes sociales

## 🚀 Despliegue

Los archivos construidos están en la carpeta `dist/` y pueden desplegarse en cualquier servicio de hosting estático como Netlify, Vercel, o GitHub Pages.

---

**Construido para dueños de restaurantes y comercios que quieren construir relaciones duraderas con sus clientes.**