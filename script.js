/**
 * @fileoverview LinkShow - Script principal
 * @version 2.0.0
 * @author LinkShow Team
 * @license MIT
 *
 * Este archivo contiene la lógica principal de la aplicación LinkShow.
 * Depende de:
 * - constants.js (constantes globales)
 * - config.js (configuración del usuario)
 */

// ============================================
// UTILIDADES DE SEGURIDAD
// ============================================

/**
 * Sanitiza texto para prevenir ataques XSS
 * @param {string} text - Texto a sanitizar
 * @returns {string} Texto sanitizado y seguro para mostrar
 */
function sanitizeText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Valida si una URL es segura según los protocolos permitidos
 * @param {string} url - URL a validar
 * @returns {boolean} true si la URL es válida y segura
 */
function isValidURL(url) {
    try {
        const urlObj = new URL(url);
        const { ALLOWED_PROTOCOLS, BLOCKED_PROTOCOLS } = LINKSHOW_CONSTANTS;

        // Verificar que esté en la lista de permitidos
        if (!ALLOWED_PROTOCOLS.includes(urlObj.protocol)) {
            return false;
        }

        // Doble verificación: asegurar que NO esté en bloqueados
        if (BLOCKED_PROTOCOLS.includes(urlObj.protocol)) {
            return false;
        }

        return true;
    } catch (e) {
        // Si no es una URL absoluta, verificar si es relativa válida
        return url.startsWith('#') || url.startsWith('/');
    }
}

/**
 * Sanitiza nombres de clases CSS para prevenir inyección
 * @param {string} className - Nombre de clase a sanitizar
 * @returns {string} Nombre de clase sanitizado
 */
function sanitizeClassName(className) {
    const { CSS_CLASS_REGEX } = LINKSHOW_CONSTANTS;
    return className.replace(CSS_CLASS_REGEX, '');
}

/**
 * Valida y sanitiza la configuración del perfil
 * @param {Object} config - Configuración del perfil
 * @param {string} config.name - Nombre del perfil
 * @param {string} config.bio - Biografía
 * @param {string} config.image - URL de la imagen
 * @returns {Object} Configuración sanitizada
 */
function validateConfig(config) {
    const { DEFAULT_PROFILE_IMAGE } = LINKSHOW_CONSTANTS;

    return {
        name: sanitizeText(config.name || ''),
        bio: sanitizeText(config.bio || ''),
        image: isValidURL(config.image) ? config.image : DEFAULT_PROFILE_IMAGE
    };
}

/**
 * Valida y sanitiza un enlace individual
 * @param {Object} link - Enlace a validar
 * @param {string} link.name - Nombre del enlace
 * @param {string} link.title - Título del enlace
 * @param {string} link.url - URL del enlace
 * @param {string} link.icon - Clase de icono
 * @param {boolean} link.featured - Si el enlace es destacado
 * @returns {Object|null} Enlace sanitizado o null si es inválido
 */
function validateLink(link) {
    if (!link || typeof link !== 'object') {
        return null;
    }

    if (!link.url || !isValidURL(link.url)) {
        return null;
    }

    return {
        name: sanitizeText(link.name || ''),
        title: sanitizeText(link.title || ''),
        url: link.url,
        icon: sanitizeClassName(link.icon || ''),
        featured: Boolean(link.featured)
    };
}

// ============================================
// INICIALIZACIÓN DEL PERFIL
// ============================================

/**
 * Inicializa y renderiza la información del perfil
 * @throws {Error} Si los elementos DOM no existen
 */
function initializeProfile() {
    const { SELECTORS, DEFAULT_PROFILE_IMAGE, DEFAULT_PROFILE_ALT } = LINKSHOW_CONSTANTS;
    const validatedConfig = validateConfig(profileConfig);

    // Obtener elementos del DOM
    const profileNameEl = document.getElementById(SELECTORS.PROFILE_NAME);
    const profileBioEl = document.getElementById(SELECTORS.PROFILE_BIO);
    const profileImgEl = document.getElementById(SELECTORS.PROFILE_IMG);

    // Validar que los elementos existan
    if (!profileNameEl || !profileBioEl || !profileImgEl) {
        console.error('Error: Elementos del perfil no encontrados en el DOM');
        return;
    }

    // Establecer valores
    profileNameEl.textContent = validatedConfig.name;
    profileBioEl.textContent = validatedConfig.bio;
    profileImgEl.src = validatedConfig.image;
    profileImgEl.alt = validatedConfig.name;

    // Manejar errores de carga de imagen
    profileImgEl.onerror = function() {
        this.src = DEFAULT_PROFILE_IMAGE;
        this.alt = DEFAULT_PROFILE_ALT;
    };
}

// ============================================
// RENDERIZADO DE ENLACES
// ============================================

/**
 * Renderiza los enlaces de redes sociales
 */
function renderSocialLinks() {
    const { SELECTORS, CSS_CLASSES, EXTERNAL_LINK_REL, MESSAGES } = LINKSHOW_CONSTANTS;
    const container = document.getElementById(SELECTORS.SOCIAL_LINKS);

    if (!container) {
        console.error('Error: Contenedor de enlaces sociales no encontrado');
        return;
    }

    container.innerHTML = '';

    socialLinks.forEach(link => {
        const validatedLink = validateLink(link);

        if (!validatedLink) {
            console.warn(MESSAGES.INVALID_LINK, link);
            return;
        }

        const linkElement = document.createElement('a');
        linkElement.href = validatedLink.url;
        linkElement.className = CSS_CLASSES.SOCIAL_LINK;
        linkElement.target = '_blank';
        linkElement.rel = EXTERNAL_LINK_REL;
        linkElement.setAttribute('aria-label', validatedLink.name);

        // Crear icono de forma segura
        const icon = document.createElement('i');
        icon.className = validatedLink.icon;
        linkElement.appendChild(icon);

        // Event listener para tracking
        linkElement.addEventListener('click', () => {
            trackLinkClick(LINKSHOW_CONSTANTS.TRACKING_TYPES.SOCIAL, validatedLink.name);
        });

        container.appendChild(linkElement);
    });
}

/**
 * Renderiza los enlaces personalizados
 */
function renderCustomLinks() {
    const { SELECTORS, CSS_CLASSES, EXTERNAL_LINK_REL, MESSAGES } = LINKSHOW_CONSTANTS;
    const container = document.getElementById(SELECTORS.CUSTOM_LINKS);

    if (!container) {
        console.error('Error: Contenedor de enlaces personalizados no encontrado');
        return;
    }

    container.innerHTML = '';

    customLinks.forEach(link => {
        const validatedLink = validateLink(link);

        if (!validatedLink) {
            console.warn(MESSAGES.INVALID_LINK, link);
            return;
        }

        const linkElement = document.createElement('a');
        linkElement.href = validatedLink.url;
        linkElement.className = validatedLink.featured
            ? CSS_CLASSES.LINK_BUTTON_FEATURED
            : CSS_CLASSES.LINK_BUTTON;
        linkElement.target = '_blank';
        linkElement.rel = EXTERNAL_LINK_REL;

        // Crear icono y título de forma segura
        const icon = document.createElement('i');
        icon.className = validatedLink.icon;

        const span = document.createElement('span');
        span.textContent = validatedLink.title;

        linkElement.appendChild(icon);
        linkElement.appendChild(span);

        // Event listener para tracking
        linkElement.addEventListener('click', () => {
            trackLinkClick(LINKSHOW_CONSTANTS.TRACKING_TYPES.CUSTOM, validatedLink.title);
        });

        container.appendChild(linkElement);
    });
}

// ============================================
// SISTEMA DE TRACKING
// ============================================

/**
 * Registra eventos de click en enlaces
 * @param {string} type - Tipo de evento
 * @param {string} name - Nombre del enlace
 */
function trackLinkClick(type, name) {
    console.log(\`[LinkShow] Click en \${type}: \${name}\`);

    // Integración con Google Analytics (opcional)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': type,
            'event_label': name
        });
    }

    // Integración con otras plataformas de analytics
    // Ejemplo: Facebook Pixel, Plausible, etc.
}

// ============================================
// GESTIÓN DE TEMAS
// ============================================

/**
 * Inicializa el sistema de cambio de tema
 */
function initializeThemeToggle() {
    const { SELECTORS, THEMES, THEME_STORAGE_KEY, MESSAGES, THEME_TOGGLE_ANIMATION_DURATION } = LINKSHOW_CONSTANTS;
    const themeToggle = document.getElementById(SELECTORS.THEME_TOGGLE);
    const htmlElement = document.documentElement;

    if (!themeToggle) {
        console.error('Error: Botón de tema no encontrado');
        return;
    }

    // Cargar tema guardado con validación
    let savedTheme = THEMES.DEFAULT;

    try {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        // Validar que el tema sea uno de los permitidos
        if (storedTheme === THEMES.LIGHT || storedTheme === THEMES.DARK) {
            savedTheme = storedTheme;
        }
    } catch (e) {
        console.warn(MESSAGES.STORAGE_ERROR, e);
    }

    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Event listener para cambiar tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;

        htmlElement.setAttribute('data-theme', newTheme);

        try {
            localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        } catch (e) {
            console.warn(MESSAGES.THEME_SAVE_ERROR, e);
        }

        updateThemeIcon(newTheme);

        // Animación del botón
        themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, THEME_TOGGLE_ANIMATION_DURATION);
    });
}

/**
 * Actualiza el icono del botón de tema
 * @param {string} theme - Tema actual ('light' o 'dark')
 */
function updateThemeIcon(theme) {
    const { SELECTORS, THEMES, THEME_ICONS } = LINKSHOW_CONSTANTS;
    const themeToggle = document.getElementById(SELECTORS.THEME_TOGGLE);

    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');
    if (!icon) return;

    icon.className = theme === THEMES.DARK ? THEME_ICONS.DARK : THEME_ICONS.LIGHT;
}

// ============================================
// EFECTOS VISUALES
// ============================================

/**
 * Inicializa el efecto parallax en el fondo
 */
function initializeParallax() {
    const { SELECTORS, PARALLAX_MOVEMENT_FACTOR } = LINKSHOW_CONSTANTS;
    const backgroundEl = document.querySelector(SELECTORS.BACKGROUND_ANIMATION);

    if (!backgroundEl) return;

    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * PARALLAX_MOVEMENT_FACTOR;
        const moveY = (e.clientY - window.innerHeight / 2) * PARALLAX_MOVEMENT_FACTOR;

        backgroundEl.style.transform = \`translate(\${moveX}px, \${moveY}px)\`;
    });
}

/**
 * Añade animación de carga fade-in
 */
function addLoadingAnimation() {
    const { OPACITY_TRANSITION } = LINKSHOW_CONSTANTS;

    document.body.style.opacity = '0';
    document.body.style.transition = OPACITY_TRANSITION;

    // Usar requestAnimationFrame para asegurar que la transición se aplique
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            document.body.style.opacity = '1';
        });
    });
}

// ============================================
// FUNCIONALIDAD DE COMPARTIR
// ============================================

/**
 * Añade el botón de compartir a la página
 */
function addShareFunctionality() {
    const { CSS_CLASSES, SHARE_ICON, SHARE_BUTTON_POSITION } = LINKSHOW_CONSTANTS;

    const shareButton = document.createElement('button');
    shareButton.className = CSS_CLASSES.SHARE_BUTTON;
    shareButton.setAttribute('aria-label', 'Compartir página');

    // Crear icono de forma segura
    const icon = document.createElement('i');
    icon.className = SHARE_ICON;
    shareButton.appendChild(icon);

    // Estilos del botón
    const { BOTTOM, RIGHT, WIDTH, HEIGHT, Z_INDEX } = SHARE_BUTTON_POSITION;
    shareButton.style.cssText = \`
        position: fixed;
        bottom: \${BOTTOM};
        right: \${RIGHT};
        width: \${WIDTH};
        height: \${HEIGHT};
        border-radius: 50%;
        background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: var(--shadow);
        transition: var(--transition);
        z-index: \${Z_INDEX};
    \`;

    // Evento de click
    shareButton.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: profileConfig.name,
                    text: profileConfig.bio,
                    url: window.location.href
                });
                trackLinkClick(LINKSHOW_CONSTANTS.TRACKING_TYPES.SHARE, 'web_share_api');
            } catch (err) {
                // Usuario canceló o error - intentar copiar al portapapeles
                copyToClipboard(window.location.href);
            }
        } else {
            copyToClipboard(window.location.href);
        }
    });

    // Efectos hover
    shareButton.addEventListener('mouseenter', () => {
        shareButton.style.transform = 'scale(1.1)';
    });

    shareButton.addEventListener('mouseleave', () => {
        shareButton.style.transform = 'scale(1)';
    });

    document.body.appendChild(shareButton);
}

/**
 * Copia texto al portapapeles
 * @param {string} text - Texto a copiar
 */
function copyToClipboard(text) {
    const { MESSAGES } = LINKSHOW_CONSTANTS;

    navigator.clipboard.writeText(text)
        .then(() => {
            showNotification(MESSAGES.COPY_SUCCESS);
            trackLinkClick(LINKSHOW_CONSTANTS.TRACKING_TYPES.SHARE, 'clipboard');
        })
        .catch(() => {
            showNotification(MESSAGES.COPY_ERROR);
        });
}

/**
 * Muestra una notificación temporal
 * @param {string} message - Mensaje a mostrar
 */
function showNotification(message) {
    const {
        CSS_CLASSES,
        NOTIFICATION_POSITION,
        NOTIFICATION_DURATION,
        NOTIFICATION_ANIMATION_DURATION
    } = LINKSHOW_CONSTANTS;

    const sanitizedMessage = sanitizeText(message);
    const notification = document.createElement('div');

    notification.textContent = sanitizedMessage;
    notification.className = CSS_CLASSES.NOTIFICATION;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');

    // Estilos de la notificación
    const { BOTTOM, RIGHT, Z_INDEX } = NOTIFICATION_POSITION;
    notification.style.cssText = \`
        position: fixed;
        bottom: \${BOTTOM};
        right: \${RIGHT};
        background-color: var(--accent-color);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: var(--shadow);
        z-index: \${Z_INDEX};
        animation: slideInRight 0.3s ease-out;
    \`;

    document.body.appendChild(notification);

    // Remover después de la duración especificada
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, NOTIFICATION_ANIMATION_DURATION);
    }, NOTIFICATION_DURATION);
}

// ============================================
// ESTILOS DINÁMICOS
// ============================================

/**
 * Añade estilos CSS dinámicos para animaciones
 */
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }

        @keyframes rippleEffect {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    \`;
    document.head.appendChild(style);
}

// ============================================
// EFECTO RIPPLE
// ============================================

/**
 * Añade efecto ripple a los botones
 */
function initializeRippleEffect() {
    const { CSS_CLASSES, RIPPLE_DURATION } = LINKSHOW_CONSTANTS;

    document.addEventListener('click', (e) => {
        const target = e.target;
        const button = target.classList.contains(CSS_CLASSES.LINK_BUTTON)
            ? target
            : target.closest(\`.\${CSS_CLASSES.LINK_BUTTON}\`);

        if (!button) return;

        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = \`
            position: absolute;
            width: \${size}px;
            height: \${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            left: \${x}px;
            top: \${y}px;
            pointer-events: none;
            animation: rippleEffect 0.6s ease-out;
        \`;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), RIPPLE_DURATION);
    });
}

// ============================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================

/**
 * Inicializa todos los componentes cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('[LinkShow] Inicializando aplicación v2.0.0');

    try {
        // Inicializar componentes principales
        initializeProfile();
        renderSocialLinks();
        renderCustomLinks();
        initializeThemeToggle();

        // Inicializar efectos visuales
        initializeParallax();
        initializeRippleEffect();

        // Añadir funcionalidades extras
        addShareFunctionality();
        addDynamicStyles();

        // Nota: addLoadingAnimation() está deshabilitada por defecto
        // Descomenta la siguiente línea si quieres activarla:
        // addLoadingAnimation();

        console.log('[LinkShow] Aplicación inicializada correctamente');
    } catch (error) {
        console.error('[LinkShow] Error durante la inicialización:', error);
    }
});
