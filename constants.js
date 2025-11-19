/**
 * @fileoverview Constantes globales de la aplicación LinkShow
 * @version 2.0.0
 *
 * Este archivo contiene todas las constantes utilizadas en la aplicación
 * para evitar "magic numbers" y valores hardcodeados.
 *
 * Todas las constantes están en el objeto global LINKSHOW_CONSTANTS
 */

const LINKSHOW_CONSTANTS = {
    // ============================================
    // CONSTANTES DE SEGURIDAD
    // ============================================

    /**
     * Protocolos permitidos para URLs
     */
    ALLOWED_PROTOCOLS: ['http:', 'https:', 'mailto:', 'tel:'],

    /**
     * Protocolos bloqueados por seguridad
     */
    BLOCKED_PROTOCOLS: ['javascript:', 'data:', 'file:'],

    /**
     * Atributos de seguridad para enlaces externos
     */
    EXTERNAL_LINK_REL: 'noopener noreferrer nofollow',

    // ============================================
    // CONSTANTES DE CONFIGURACIÓN
    // ============================================

    /**
     * Temas disponibles
     */
    THEMES: {
        LIGHT: 'light',
        DARK: 'dark',
        DEFAULT: 'dark'
    },

    /**
     * Clave de localStorage para el tema
     */
    THEME_STORAGE_KEY: 'linkshow_theme',

    /**
     * Imagen por defecto para perfiles
     */
    DEFAULT_PROFILE_IMAGE: 'https://via.placeholder.com/150',

    /**
     * Texto alternativo por defecto para imagen de perfil
     */
    DEFAULT_PROFILE_ALT: 'Imagen de perfil no disponible',

    // ============================================
    // CONSTANTES DE UI
    // ============================================

    /**
     * Duración de notificaciones en milisegundos
     */
    NOTIFICATION_DURATION: 3000,

    /**
     * Duración de animación de notificación en milisegundos
     */
    NOTIFICATION_ANIMATION_DURATION: 300,

    /**
     * Duración de animación del botón de tema
     */
    THEME_TOGGLE_ANIMATION_DURATION: 300,

    /**
     * Duración de efecto ripple en milisegundos
     */
    RIPPLE_DURATION: 600,

    // ============================================
    // CONSTANTES DE TRACKING
    // ============================================

    /**
     * Tipos de eventos de tracking
     */
    TRACKING_TYPES: {
        SOCIAL: 'social',
        CUSTOM: 'custom',
        SHARE: 'share',
        THEME_TOGGLE: 'theme_toggle'
    },

    // ============================================
    // CONSTANTES DE VALIDACIÓN
    // ============================================

    /**
     * Expresión regular para validar clases CSS
     */
    CSS_CLASS_REGEX: /[^a-zA-Z0-9\-_ ]/g,

    /**
     * Longitud máxima para nombre de perfil
     */
    MAX_PROFILE_NAME_LENGTH: 100,

    /**
     * Longitud máxima para biografía
     */
    MAX_BIO_LENGTH: 300,

    /**
     * Longitud máxima para título de enlace
     */
    MAX_LINK_TITLE_LENGTH: 100,

    // ============================================
    // CONSTANTES DE ICONOS
    // ============================================

    /**
     * Iconos de tema
     */
    THEME_ICONS: {
        LIGHT: 'fas fa-sun',
        DARK: 'fas fa-moon'
    },

    /**
     * Icono del botón de compartir
     */
    SHARE_ICON: 'fas fa-share-alt',

    // ============================================
    // CONSTANTES DE MENSAJES
    // ============================================

    /**
     * Mensajes de la aplicación
     */
    MESSAGES: {
        COPY_SUCCESS: '¡Enlace copiado al portapapeles!',
        COPY_ERROR: 'No se pudo copiar el enlace',
        INVALID_LINK: 'Link inválido detectado y omitido',
        STORAGE_ERROR: 'Error al acceder a localStorage',
        THEME_SAVE_ERROR: 'No se pudo guardar el tema en localStorage'
    },

    // ============================================
    // CONSTANTES DE ESTILOS
    // ============================================

    /**
     * Posiciones del botón de compartir
     */
    SHARE_BUTTON_POSITION: {
        BOTTOM: '20px',
        RIGHT: '20px',
        WIDTH: '50px',
        HEIGHT: '50px',
        Z_INDEX: '1000'
    },

    /**
     * Posiciones de notificaciones
     */
    NOTIFICATION_POSITION: {
        BOTTOM: '80px',
        RIGHT: '20px',
        Z_INDEX: '10000'
    },

    // ============================================
    // CONSTANTES DE CLASES CSS
    // ============================================

    /**
     * Clases CSS utilizadas en la aplicación
     */
    CSS_CLASSES: {
        SOCIAL_LINK: 'social-link',
        LINK_BUTTON: 'link-button',
        LINK_BUTTON_FEATURED: 'link-button featured',
        NOTIFICATION: 'notification',
        SHARE_BUTTON: 'share-button'
    },

    // ============================================
    // CONSTANTES DE SELECTORES
    // ============================================

    /**
     * Selectores de elementos DOM
     */
    SELECTORS: {
        PROFILE_NAME: 'profileName',
        PROFILE_BIO: 'profileBio',
        PROFILE_IMG: 'profileImg',
        SOCIAL_LINKS: 'socialLinks',
        CUSTOM_LINKS: 'customLinks',
        THEME_TOGGLE: 'themeToggle',
        BACKGROUND_ANIMATION: '.background-animation'
    },

    // ============================================
    // CONFIGURACIÓN DE ANIMACIONES
    // ============================================

    /**
     * Factor de movimiento del parallax
     */
    PARALLAX_MOVEMENT_FACTOR: 0.01,

    /**
     * Configuración de transiciones de opacidad
     */
    OPACITY_TRANSITION: 'opacity 0.5s ease-in'
};

// Congelar el objeto para prevenir modificaciones accidentales
if (Object.freeze) {
    Object.freeze(LINKSHOW_CONSTANTS);
    Object.freeze(LINKSHOW_CONSTANTS.THEMES);
    Object.freeze(LINKSHOW_CONSTANTS.TRACKING_TYPES);
    Object.freeze(LINKSHOW_CONSTANTS.THEME_ICONS);
    Object.freeze(LINKSHOW_CONSTANTS.MESSAGES);
    Object.freeze(LINKSHOW_CONSTANTS.SHARE_BUTTON_POSITION);
    Object.freeze(LINKSHOW_CONSTANTS.NOTIFICATION_POSITION);
    Object.freeze(LINKSHOW_CONSTANTS.CSS_CLASSES);
    Object.freeze(LINKSHOW_CONSTANTS.SELECTORS);
}
