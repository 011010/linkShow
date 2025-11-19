# LinkShow 🔗

Una página estilo Linktree moderna, segura y personalizable para mostrar todos tus enlaces de redes sociales y URLs en un solo lugar.

![LinkShow](https://img.shields.io/badge/version-2.0.0-purple)
![License](https://img.shields.io/badge/license-MIT-blue)
![Security](https://img.shields.io/badge/security-A+-green)

## ✨ Características

### Diseño y UX
- 🎨 **Diseño Moderno**: Interfaz limpia y atractiva con animaciones suaves
- 🌓 **Tema Claro/Oscuro**: Cambia entre modos con un solo click
- 📱 **Totalmente Responsivo**: Se adapta perfectamente a cualquier dispositivo
- 💫 **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- 🎭 **Enlaces Destacados**: Resalta tus enlaces más importantes

### Rendimiento
- ⚡ **Carga Ultrarrápida**: Sin dependencias pesadas, solo HTML, CSS y JavaScript vanilla
- 🚀 **CDN Optimizado**: Font Awesome con Subresource Integrity (SRI)
- 📦 **Lightweight**: Menos de 50KB total

### Funcionalidades
- 🎯 **Fácil Personalización**: Configura todo desde un solo archivo
- 🔗 **Enlaces Ilimitados**: Agrega tantos enlaces como necesites
- 📊 **Tracking de Clicks**: Rastrea qué enlaces son más populares (opcional)
- 🔄 **Botón de Compartir**: Comparte tu página fácilmente

### 🔒 Seguridad (NUEVO v2.0)
- ✅ **Protección XSS**: Sanitización completa de inputs
- ✅ **Content Security Policy**: CSP estricto implementado
- ✅ **Headers de Seguridad**: X-Frame-Options, HSTS, CSP, etc.
- ✅ **Validación de URLs**: Prevención de enlaces maliciosos
- ✅ **SRI para CDN**: Subresource Integrity en Font Awesome
- ✅ **Sin innerHTML**: Prevención de inyección de código
- ✅ **HTTPS Enforced**: Configuración incluida para todas las plataformas

## 🚀 Inicio Rápido

### 1. Descarga o Clona el Repositorio

```bash
git clone https://github.com/tuusuario/linkShow.git
cd linkShow
```

### 2. Personaliza tu Información

**IMPORTANTE**: Ahora la configuración está separada del código.

```bash
# Copia el archivo de ejemplo
cp config.example.js config.js

# Edita config.js con tu información
# (No edites script.js - solo contiene lógica)
```

Abre `config.js` y personaliza:

#### Configuración del Perfil

```javascript
const profileConfig = {
    name: "Tu Nombre Aquí",
    bio: "Tu descripción profesional",
    image: "url-de-tu-imagen.jpg"
};
```

#### Redes Sociales

```javascript
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/tuusuario",
        icon: "fab fa-github"
    },
    // Agrega más redes sociales...
];
```

#### Enlaces Personalizados

```javascript
const customLinks = [
    {
        title: "Mi Portfolio",
        url: "https://tu-portfolio.com",
        icon: "fas fa-briefcase",
        featured: true // Link destacado
    },
    // Agrega más enlaces...
];
```

### 3. Abre en tu Navegador

Simplemente abre `index.html` en tu navegador favorito o despliega en tu plataforma preferida.

## 🎨 Personalización Avanzada

### Cambiar Colores

En `styles.css`, modifica las variables CSS en `:root`:

```css
:root {
    --accent-color: #8b5cf6;  /* Color principal */
    --accent-hover: #7c3aed;   /* Color al pasar el mouse */
    --border-radius: 12px;     /* Redondeo de bordes */
}
```

### Iconos Disponibles

Este proyecto usa [Font Awesome 6](https://fontawesome.com/icons). Algunos iconos populares:

**Redes Sociales:**
- GitHub: `fab fa-github`
- LinkedIn: `fab fa-linkedin`
- Twitter: `fab fa-twitter`
- Instagram: `fab fa-instagram`
- YouTube: `fab fa-youtube`
- Facebook: `fab fa-facebook`
- TikTok: `fab fa-tiktok`
- Discord: `fab fa-discord`
- Twitch: `fab fa-twitch`

**Otros:**
- Email: `fas fa-envelope`
- Sitio Web: `fas fa-globe`
- Blog: `fas fa-blog`
- Portafolio: `fas fa-briefcase`
- Descarga: `fas fa-download`
- Calendario: `fas fa-calendar`
- Tienda: `fas fa-shopping-cart`

## 📱 Despliegue

LinkShow incluye configuración optimizada para múltiples plataformas. **Ver [DEPLOYMENT.md](DEPLOYMENT.md) para guía completa**.

### ⭐ Netlify (Recomendado)
```bash
# Configuración incluida: netlify.toml + _headers
```
- ✅ SSL automático + Headers de seguridad
- ✅ CDN global + 100GB bandwidth gratis
- ✅ Deploy en < 1 minuto

### ⭐ Vercel (Recomendado)
```bash
# Configuración incluida: vercel.json
```
- ✅ Edge Network ultrarrápido
- ✅ Analytics integrado
- ✅ Preview deployments automáticos

### GitHub Pages
```bash
# Headers de seguridad vía meta tags
```
- ✅ Totalmente gratuito
- ✅ SSL automático
- ✅ Perfecto para proyectos open source

### Cloudflare Pages
```bash
# Configuración incluida: _headers
```
- ✅ CDN más rápido del mundo
- ✅ Bandwidth ilimitado
- ✅ DDoS protection incluido

### Apache/cPanel
```bash
# Configuración incluida: .htaccess
```
- ✅ Headers de seguridad configurados
- ✅ Compresión GZIP
- ✅ SSL con Let's Encrypt

**📚 Guía completa:** Ver [DEPLOYMENT.md](DEPLOYMENT.md)

## 🔧 Características Técnicas

### Estructura de Archivos (v2.0 - Nueva Arquitectura)

```
linkShow/
├── index.html          # Estructura HTML
├── styles.css          # Estilos y animaciones
├── constants.js        # 🆕 Constantes globales (200+)
├── config.js           # 🆕 Tu configuración personal (gitignored)
├── config.example.js   # 🆕 Plantilla de configuración
├── script.js           # 🔄 Solo lógica (refactorizado)
├── CHANGELOG.md        # 🆕 Historial de cambios
├── REFACTORING.md      # 🆕 Guía de refactorización
└── README.md           # Documentación
```

**Mejora clave v2.0**: Separación completa entre configuración y lógica.
- ✅ **config.js**: Tu información personal (no se sube a Git)
- ✅ **constants.js**: Constantes reutilizables
- ✅ **script.js**: Solo lógica de la aplicación

### Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Flexbox, Animaciones)
- JavaScript ES6+ (Vanilla JS)
- Font Awesome 6 (Iconos)

### Funcionalidades JavaScript

- **Renderizado Dinámico**: Los enlaces se generan automáticamente desde la configuración
- **LocalStorage**: El tema seleccionado se guarda entre sesiones
- **Event Tracking**: Registra clicks en cada enlace (consola)
- **Web Share API**: Comparte tu página nativamente en dispositivos compatibles
- **Clipboard API**: Copia el enlace al portapapeles como fallback
- **Efecto Ripple**: Animación material design en los botones
- **Paralaje Sutil**: Fondo animado que sigue el cursor

## 🎯 Casos de Uso

- **Creadores de Contenido**: Centraliza todos tus enlaces de redes sociales
- **Freelancers**: Muestra tu portfolio, servicios y formas de contacto
- **Empresas**: Link en bio para Instagram, TikTok, etc.
- **Eventos**: Comparte enlaces de registro, agenda y materiales
- **Educadores**: Recursos, cursos y materiales educativos
- **Músicos/Artistas**: Enlaces a plataformas de música, merch, eventos

## 🔒 Seguridad y Privacidad

### Medidas de Seguridad Implementadas

LinkShow v2.0 incluye protecciones de nivel empresarial:

#### Protección contra XSS
```javascript
// Sanitización automática de todos los inputs
function sanitizeText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
```

#### Content Security Policy (CSP)
```html
<!-- CSP estricto configurado en HTML y headers -->
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'...
```

#### Validación de URLs
```javascript
// Solo URLs seguras permitidas (https, mailto, tel)
// Bloquea javascript: y data: URLs maliciosas
```

#### Headers de Seguridad HTTP
- ✅ `X-Frame-Options: DENY` (anti-clickjacking)
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-XSS-Protection: 1; mode=block`
- ✅ `Strict-Transport-Security` (HSTS)
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`

#### Subresource Integrity (SRI)
```html
<!-- Font Awesome con hash de verificación -->
<link ... integrity="sha512-iecdLmaskl7CVk..." crossorigin="anonymous">
```

### Privacidad

- 🚫 Sin cookies de terceros
- 🚫 Sin tracking externo por defecto
- ✅ Todos los datos son estáticos
- ✅ 100% control de tu información
- ✅ Código abierto y auditable

**📖 Más información:** Ver [SECURITY.md](SECURITY.md) para detalles completos

### Test de Seguridad

Verifica la seguridad de tu deployment:
```bash
# Security Headers
https://securityheaders.com/?q=tudominio.com

# SSL Test
https://www.ssllabs.com/ssltest/analyze.html?d=tudominio.com

# CSP Evaluator
https://csp-evaluator.withgoogle.com
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📚 Documentación

- **[README.md](README.md)** - Este archivo (introducción y inicio rápido)
- **[CHANGELOG.md](CHANGELOG.md)** - 🆕 Historial de cambios y versiones
- **[REFACTORING.md](REFACTORING.md)** - 🆕 Guía de refactorización v2.0
- **[SECURITY.md](SECURITY.md)** - Guía completa de seguridad y mejores prácticas
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Guía de despliegue para todas las plataformas
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - Guía de personalización avanzada
- **[LICENSE](LICENSE)** - Licencia MIT

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 🔐 Reportar Vulnerabilidades

Si encuentras una vulnerabilidad de seguridad:
1. **NO** la publiques en issues públicos
2. Lee [SECURITY.md](SECURITY.md) para instrucciones
3. Los reportes se toman muy en serio y se responden rápidamente

## 💡 Inspiración

Inspirado por Linktree, pero con la libertad de personalización total y sin costos.

## 📧 Contacto

¿Preguntas o sugerencias? Abre un issue o contáctame directamente.

---

**Hecho con ❤️ y código**

## 🎓 Aprende Más

### Recursos para Personalización

- [Font Awesome Icons](https://fontawesome.com/icons) - Encuentra más iconos
- [CSS Variables MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Aprende sobre variables CSS
- [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) - Documentación de la API de compartir

### Tips Avanzados

**1. Agregar Google Analytics:**

En `index.html`, antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

**2. Agregar Favicon:**

En `index.html`, dentro de `<head>`:

```html
<link rel="icon" type="image/png" href="tu-favicon.png">
```

**3. Meta Tags para Redes Sociales:**

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="Tu Nombre - Links">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="url-de-imagen-preview.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="Tu Nombre - Links">
<meta property="twitter:description" content="Tu descripción">
<meta property="twitter:image" content="url-de-imagen-preview.jpg">
```

## 🐛 Solución de Problemas

### Los iconos no se muestran
- Verifica tu conexión a internet (Font Awesome se carga desde CDN)
- Revisa que las clases de los iconos estén correctas

### El tema no se guarda
- Asegúrate de que el navegador permita localStorage
- Prueba en una ventana normal (no privada/incógnito)

### Los enlaces no funcionan
- Verifica que las URLs incluyan `https://` o `http://`
- Revisa que no haya errores en la consola del navegador

---

¡Disfruta de tu nueva página de enlaces! 🚀
