/**
 * @fileoverview Archivo de configuración de ejemplo para LinkShow
 * @version 2.0.0
 *
 * INSTRUCCIONES:
 * 1. Copia este archivo como 'config.js'
 * 2. Personaliza tu información en 'config.js'
 * 3. NO subas tu 'config.js' personalizado a Git (ya está en .gitignore)
 *
 * COMANDO RÁPIDO:
 * cp config.example.js config.js
 */

// ============================================
// CONFIGURACIÓN DEL PERFIL
// ============================================

/**
 * Configuración de tu perfil personal
 * @type {Object}
 */
const profileConfig = {
    /**
     * Tu nombre completo o nombre de marca
     * @type {string}
     * @example "María García"
     */
    name: "Tu Nombre Aquí",

    /**
     * Tu biografía o descripción profesional
     * Máximo 300 caracteres recomendado
     * @type {string}
     * @example "Diseñadora UX/UI | Ilustradora Digital | Amante del café ☕"
     */
    bio: "Desarrollador | Creador de contenido | Entusiasta de la tecnología",

    /**
     * URL de tu imagen de perfil
     * Recomendado: 300x300px, formato WebP o JPG, < 200KB
     * @type {string}
     * @example "https://tudominio.com/images/perfil.jpg"
     */
    image: "https://via.placeholder.com/150"
};

// ============================================
// REDES SOCIALES
// ============================================

/**
 * Enlaces a tus redes sociales
 * Se mostrarán como iconos circulares en la parte superior
 * @type {Array<Object>}
 */
const socialLinks = [
    {
        /**
         * Nombre de la red social (para aria-label)
         * @type {string}
         */
        name: "GitHub",

        /**
         * URL completa de tu perfil
         * @type {string}
         */
        url: "https://github.com/tuusuario",

        /**
         * Clase de icono de Font Awesome
         * Ver: https://fontawesome.com/icons
         * @type {string}
         */
        icon: "fab fa-github"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tuusuario",
        icon: "fab fa-linkedin"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/tuusuario",
        icon: "fab fa-x-twitter"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/tuusuario",
        icon: "fab fa-instagram"
    },
    {
        name: "YouTube",
        url: "https://youtube.com/@tucanal",
        icon: "fab fa-youtube"
    },
    {
        name: "Email",
        url: "mailto:tu@email.com",
        icon: "fas fa-envelope"
    }
];

// ============================================
// ENLACES PERSONALIZADOS
// ============================================

/**
 * Tus enlaces personalizados
 * Se mostrarán como botones grandes en el centro
 * @type {Array<Object>}
 */
const customLinks = [
    {
        /**
         * Título del enlace (se muestra en el botón)
         * @type {string}
         */
        title: "Mi Portfolio",

        /**
         * URL de destino
         * @type {string}
         */
        url: "https://tu-portfolio.com",

        /**
         * Icono de Font Awesome
         * @type {string}
         */
        icon: "fas fa-briefcase",

        /**
         * Si es true, el enlace se mostrará destacado con estilo especial
         * @type {boolean}
         */
        featured: true
    },
    {
        title: "Blog Personal",
        url: "https://tu-blog.com",
        icon: "fas fa-blog",
        featured: false
    },
    {
        title: "Mi Último Proyecto",
        url: "https://tu-proyecto.com",
        icon: "fas fa-rocket",
        featured: false
    },
    {
        title: "Descargar CV",
        url: "#",
        icon: "fas fa-file-download",
        featured: false
    },
    {
        title: "Agenda una Reunión",
        url: "https://calendly.com/tuusuario",
        icon: "fas fa-calendar",
        featured: false
    },
    {
        title: "Tienda Online",
        url: "https://tu-tienda.com",
        icon: "fas fa-shopping-cart",
        featured: false
    }
];

// ============================================
// CONFIGURACIÓN AVANZADA (OPCIONAL)
// ============================================

/**
 * Configuración de tracking y analytics
 * @type {Object}
 */
const trackingConfig = {
    /**
     * Habilitar tracking de clicks
     * @type {boolean}
     */
    enabled: true,

    /**
     * Google Analytics ID (opcional)
     * @type {string|null}
     * @example "G-XXXXXXXXXX"
     */
    googleAnalyticsId: null,

    /**
     * Facebook Pixel ID (opcional)
     * @type {string|null}
     */
    facebookPixelId: null
};

/**
 * Configuración de características
 * @type {Object}
 */
const featuresConfig = {
    /**
     * Mostrar botón de compartir
     * @type {boolean}
     */
    showShareButton: true,

    /**
     * Habilitar efecto parallax
     * @type {boolean}
     */
    enableParallax: true,

    /**
     * Habilitar efecto ripple en botones
     * @type {boolean}
     */
    enableRipple: true,

    /**
     * Tema por defecto ('light' o 'dark')
     * @type {string}
     */
    defaultTheme: 'dark'
};

// ============================================
// ICONOS DISPONIBLES DE FONT AWESOME
// ============================================

/*
REDES SOCIALES POPULARES:
- GitHub: fab fa-github
- LinkedIn: fab fa-linkedin
- Twitter/X: fab fa-x-twitter
- Instagram: fab fa-instagram
- Facebook: fab fa-facebook
- YouTube: fab fa-youtube
- TikTok: fab fa-tiktok
- Twitch: fab fa-twitch
- Discord: fab fa-discord
- Spotify: fab fa-spotify
- SoundCloud: fab fa-soundcloud
- Medium: fab fa-medium
- Behance: fab fa-behance
- Dribbble: fab fa-dribbble
- Pinterest: fab fa-pinterest
- Reddit: fab fa-reddit
- Telegram: fab fa-telegram
- WhatsApp: fab fa-whatsapp

OTROS ICONOS ÚTILES:
- Email: fas fa-envelope
- Teléfono: fas fa-phone
- Sitio Web: fas fa-globe
- Blog: fas fa-blog
- Portfolio: fas fa-briefcase
- Descarga: fas fa-download
- Calendario: fas fa-calendar
- Tienda: fas fa-shopping-cart
- Música: fas fa-music
- Video: fas fa-video
- Libro: fas fa-book
- Corazón: fas fa-heart
- Estrella: fas fa-star
- Cohete: fas fa-rocket

Ver más iconos en: https://fontawesome.com/icons
*/
