// ============================================
// UTILIDADES DE SEGURIDAD
// ============================================

/**
 * Sanitiza texto para prevenir XSS
 * @param {string} text - Texto a sanitizar
 * @returns {string} - Texto sanitizado
 */
function sanitizeText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Valida si una URL es segura
 * @param {string} url - URL a validar
 * @returns {boolean} - true si la URL es válida
 */
function isValidURL(url) {
    try {
        const urlObj = new URL(url);
        // Solo permitir protocolos seguros
        const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
        if (!allowedProtocols.includes(urlObj.protocol)) {
            return false;
        }
        // Prevenir javascript: y data: URLs maliciosas
        if (urlObj.protocol === 'javascript:' || urlObj.protocol === 'data:') {
            return false;
        }
        return true;
    } catch (e) {
        // Si no es una URL absoluta, verificar si es un hash válido
        return url.startsWith('#') || url.startsWith('/');
    }
}

/**
 * Sanitiza clases CSS para prevenir inyección
 * @param {string} className - Nombre de clase a sanitizar
 * @returns {string} - Clase sanitizada
 */
function sanitizeClassName(className) {
    // Solo permitir caracteres alfanuméricos, guiones y guiones bajos
    return className.replace(/[^a-zA-Z0-9\-_ ]/g, '');
}

/**
 * Valida y sanitiza configuración de usuario
 * @param {Object} config - Configuración a validar
 * @returns {Object} - Configuración sanitizada
 */
function validateConfig(config) {
    return {
        name: sanitizeText(config.name || ''),
        bio: sanitizeText(config.bio || ''),
        image: isValidURL(config.image) ? config.image : 'https://via.placeholder.com/150'
    };
}

/**
 * Valida y sanitiza un enlace
 * @param {Object} link - Enlace a validar
 * @returns {Object|null} - Enlace sanitizado o null si es inválido
 */
function validateLink(link) {
    if (!link || typeof link !== 'object') return null;
    if (!link.url || !isValidURL(link.url)) return null;

    return {
        name: sanitizeText(link.name || ''),
        title: sanitizeText(link.title || ''),
        url: link.url, // Ya validada
        icon: sanitizeClassName(link.icon || ''),
        featured: Boolean(link.featured)
    };
}

// ============================================
// CONFIGURACIÓN DEL PERFIL
// ============================================

const profileConfig = {
    name: "Tu Nombre Aquí",
    bio: "Desarrollador | Creador de contenido | Entusiasta de la tecnología",
    image: "https://via.placeholder.com/150", // Reemplaza con tu imagen
};

// Configuración de redes sociales
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/tuusuario",
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
        icon: "fab fa-twitter"
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

// Configuración de links personalizados
const customLinks = [
    {
        title: "Mi Portfolio",
        url: "https://tu-portfolio.com",
        icon: "fas fa-briefcase",
        featured: true // Link destacado con estilo especial
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

// Función para inicializar el perfil
function initializeProfile() {
    const validatedConfig = validateConfig(profileConfig);
    document.getElementById('profileName').textContent = validatedConfig.name;
    document.getElementById('profileBio').textContent = validatedConfig.bio;

    const profileImg = document.getElementById('profileImg');
    profileImg.src = validatedConfig.image;
    profileImg.alt = validatedConfig.name;

    // Prevenir errores si la imagen no carga
    profileImg.onerror = function() {
        this.src = 'https://via.placeholder.com/150';
        this.alt = 'Imagen de perfil no disponible';
    };
}

// Función para renderizar links de redes sociales
function renderSocialLinks() {
    const socialLinksContainer = document.getElementById('socialLinks');
    socialLinksContainer.innerHTML = '';

    socialLinks.forEach(link => {
        const validatedLink = validateLink(link);
        if (!validatedLink) {
            console.warn('Link inválido detectado y omitido:', link);
            return;
        }

        const linkElement = document.createElement('a');
        linkElement.href = validatedLink.url;
        linkElement.className = 'social-link';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer nofollow';
        linkElement.setAttribute('aria-label', validatedLink.name);

        // Crear icono de forma segura (sin innerHTML)
        const icon = document.createElement('i');
        icon.className = validatedLink.icon;
        linkElement.appendChild(icon);

        // Event listener para tracking (opcional)
        linkElement.addEventListener('click', () => {
            trackLinkClick('social', validatedLink.name);
        });

        socialLinksContainer.appendChild(linkElement);
    });
}

// Función para renderizar links personalizados
function renderCustomLinks() {
    const customLinksContainer = document.getElementById('customLinks');
    customLinksContainer.innerHTML = '';

    customLinks.forEach(link => {
        const validatedLink = validateLink(link);
        if (!validatedLink) {
            console.warn('Link inválido detectado y omitido:', link);
            return;
        }

        const linkElement = document.createElement('a');
        linkElement.href = validatedLink.url;
        linkElement.className = validatedLink.featured ? 'link-button featured' : 'link-button';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer nofollow';

        // Crear icono y título de forma segura (sin innerHTML)
        const icon = document.createElement('i');
        icon.className = validatedLink.icon;

        const span = document.createElement('span');
        span.textContent = validatedLink.title;

        linkElement.appendChild(icon);
        linkElement.appendChild(span);

        // Event listener para tracking (opcional)
        linkElement.addEventListener('click', () => {
            trackLinkClick('custom', validatedLink.title);
        });

        customLinksContainer.appendChild(linkElement);
    });
}

// Función de tracking de clicks (puedes integrar con Google Analytics, etc.)
function trackLinkClick(type, name) {
    console.log(`Click en ${type}: ${name}`);
    // Aquí puedes añadir código para Google Analytics, Facebook Pixel, etc.
    // Ejemplo: gtag('event', 'click', { 'event_category': type, 'event_label': name });
}

// Función para el toggle de tema
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Cargar tema guardado con validación
    let savedTheme = 'dark';
    try {
        const storedTheme = localStorage.getItem('theme');
        // Validar que el tema sea uno de los permitidos
        if (storedTheme === 'light' || storedTheme === 'dark') {
            savedTheme = storedTheme;
        }
    } catch (e) {
        console.warn('Error al acceder a localStorage:', e);
    }

    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Event listener para cambiar tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);

        try {
            localStorage.setItem('theme', newTheme);
        } catch (e) {
            console.warn('No se pudo guardar el tema en localStorage:', e);
        }

        updateThemeIcon(newTheme);

        // Añadir animación al botón
        themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
}

// Función para actualizar el icono del tema
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');

    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// Función para añadir efecto de paralaje sutil
function initializeParallax() {
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        document.querySelector('.background-animation').style.transform =
            `translate(${moveX}px, ${moveY}px)`;
    });
}

// Función para añadir animación de carga
function addLoadingAnimation() {
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in';
            document.body.style.opacity = '1';
        }, 100);
    });
}

// Función para copiar enlace de la página
function addShareFunctionality() {
    // Puedes añadir un botón de compartir si lo deseas
    const shareButton = document.createElement('button');
    shareButton.className = 'share-button';
    shareButton.innerHTML = '<i class="fas fa-share-alt"></i>';
    shareButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
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
        z-index: 1000;
    `;

    shareButton.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: profileConfig.name,
                    text: profileConfig.bio,
                    url: window.location.href
                });
            } catch (err) {
                copyToClipboard(window.location.href);
            }
        } else {
            copyToClipboard(window.location.href);
        }
    });

    shareButton.addEventListener('mouseenter', () => {
        shareButton.style.transform = 'scale(1.1)';
    });

    shareButton.addEventListener('mouseleave', () => {
        shareButton.style.transform = 'scale(1)';
    });

    document.body.appendChild(shareButton);
}

// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('¡Enlace copiado al portapapeles!');
    }).catch(() => {
        showNotification('No se pudo copiar el enlace');
    });
}

// Función para mostrar notificaciones
function showNotification(message) {
    // Sanitizar el mensaje
    const sanitizedMessage = sanitizeText(message);

    const notification = document.createElement('div');
    notification.textContent = sanitizedMessage;
    notification.className = 'notification';
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background-color: var(--accent-color);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: var(--shadow);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Añadir estilos para las animaciones de notificación
const style = document.createElement('style');
style.textContent = `
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
`;
document.head.appendChild(style);

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initializeProfile();
    renderSocialLinks();
    renderCustomLinks();
    initializeThemeToggle();
    initializeParallax();
    addLoadingAnimation();
    addShareFunctionality();
});

// Añadir efecto de ripple en los botones
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('link-button') ||
        e.target.closest('.link-button')) {
        const button = e.target.classList.contains('link-button') ?
            e.target : e.target.closest('.link-button');

        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: rippleEffect 0.6s ease-out;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }
});

// Añadir animación de ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
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
`;
document.head.appendChild(rippleStyle);
