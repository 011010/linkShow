# Guía de Personalización de LinkShow

Esta guía te ayudará a personalizar completamente tu página de LinkShow.

## 📝 Personalización Básica

### 1. Información de Perfil

En `script.js`, edita el objeto `profileConfig`:

```javascript
const profileConfig = {
    name: "María García",
    bio: "Diseñadora UX/UI | Ilustradora Digital | Amante del café ☕",
    image: "https://tu-servidor.com/mi-foto.jpg"
};
```

**Opciones para la imagen:**
- URL externa: `https://ejemplo.com/imagen.jpg`
- Imagen local: `./images/perfil.jpg` (crea una carpeta `images` primero)
- Servicio de avatares: `https://ui-avatars.com/api/?name=Maria+Garcia&size=150`
- Gravatar: `https://www.gravatar.com/avatar/tu-hash`

### 2. Redes Sociales

Edita el array `socialLinks` para incluir tus redes:

```javascript
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/mariag",
        icon: "fab fa-github"
    },
    {
        name: "Behance",
        url: "https://behance.net/mariag",
        icon: "fab fa-behance"
    },
    {
        name: "Dribbble",
        url: "https://dribbble.com/mariag",
        icon: "fab fa-dribbble"
    }
];
```

**Redes Sociales Populares y sus Iconos:**

| Red Social | Icono | URL Ejemplo |
|------------|-------|-------------|
| GitHub | `fab fa-github` | `https://github.com/usuario` |
| LinkedIn | `fab fa-linkedin` | `https://linkedin.com/in/usuario` |
| Twitter/X | `fab fa-x-twitter` | `https://twitter.com/usuario` |
| Instagram | `fab fa-instagram` | `https://instagram.com/usuario` |
| Facebook | `fab fa-facebook` | `https://facebook.com/usuario` |
| YouTube | `fab fa-youtube` | `https://youtube.com/@usuario` |
| TikTok | `fab fa-tiktok` | `https://tiktok.com/@usuario` |
| Twitch | `fab fa-twitch` | `https://twitch.tv/usuario` |
| Discord | `fab fa-discord` | `https://discord.gg/codigo` |
| Spotify | `fab fa-spotify` | `https://open.spotify.com/artist/id` |
| SoundCloud | `fab fa-soundcloud` | `https://soundcloud.com/usuario` |
| Medium | `fab fa-medium` | `https://medium.com/@usuario` |
| Behance | `fab fa-behance` | `https://behance.net/usuario` |
| Dribbble | `fab fa-dribbble` | `https://dribbble.com/usuario` |
| Pinterest | `fab fa-pinterest` | `https://pinterest.com/usuario` |
| Reddit | `fab fa-reddit` | `https://reddit.com/u/usuario` |
| Telegram | `fab fa-telegram` | `https://t.me/usuario` |
| WhatsApp | `fab fa-whatsapp` | `https://wa.me/telefono` |
| Email | `fas fa-envelope` | `mailto:email@ejemplo.com` |
| Teléfono | `fas fa-phone` | `tel:+1234567890` |

### 3. Enlaces Personalizados

Edita el array `customLinks`:

```javascript
const customLinks = [
    {
        title: "Mi Portfolio 2024",
        url: "https://mariagarcia.com",
        icon: "fas fa-briefcase",
        featured: true // Este será destacado
    },
    {
        title: "Compra mis diseños",
        url: "https://gumroad.com/mariagarcia",
        icon: "fas fa-shopping-bag",
        featured: false
    },
    {
        title: "Agenda una consulta",
        url: "https://calendly.com/mariagarcia",
        icon: "fas fa-calendar-check",
        featured: false
    }
];
```

**Iconos Útiles para Enlaces Personalizados:**

| Tipo de Enlace | Icono Sugerido |
|----------------|----------------|
| Portfolio | `fas fa-briefcase` |
| Blog | `fas fa-blog` |
| Tienda | `fas fa-shopping-cart` |
| Descargar CV | `fas fa-file-download` |
| Newsletter | `fas fa-envelope-open-text` |
| Podcast | `fas fa-podcast` |
| Curso Online | `fas fa-graduation-cap` |
| Donaciones | `fas fa-heart` |
| Calendario | `fas fa-calendar` |
| Libro/eBook | `fas fa-book` |
| Música | `fas fa-music` |
| Video | `fas fa-video` |
| Artículo | `fas fa-newspaper` |
| Galería | `fas fa-images` |
| Contacto | `fas fa-envelope` |

## 🎨 Personalización de Diseño

### Cambiar Esquema de Colores

En `styles.css`, busca `:root` y modifica:

```css
:root {
    --bg-primary: #0f0f0f;        /* Fondo principal */
    --bg-secondary: #1a1a1a;      /* Fondo de botones */
    --text-primary: #ffffff;       /* Texto principal */
    --text-secondary: #b3b3b3;    /* Texto secundario */
    --accent-color: #8b5cf6;      /* Color de acento */
    --accent-hover: #7c3aed;      /* Color al hover */
}
```

**Esquemas de Color Predefinidos:**

#### Oceano Azul
```css
--accent-color: #0ea5e9;
--accent-hover: #0284c7;
```

#### Verde Natura
```css
--accent-color: #10b981;
--accent-hover: #059669;
```

#### Rosa Vibrante
```css
--accent-color: #ec4899;
--accent-hover: #db2777;
```

#### Naranja Energético
```css
--accent-color: #f97316;
--accent-hover: #ea580c;
```

#### Rojo Pasión
```css
--accent-color: #ef4444;
--accent-hover: #dc2626;
```

### Cambiar Fuentes

En `styles.css`, modifica la propiedad `font-family`:

```css
body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

Para usar Google Fonts, agrega en `index.html` dentro de `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

**Fuentes Populares:**
- Poppins (moderna y limpia)
- Montserrat (elegante y profesional)
- Roboto (simple y legible)
- Inter (diseño de sistemas)
- Playfair Display (elegante y clásica)

### Ajustar Animaciones

Para desactivar animaciones (mejor rendimiento):

En `styles.css`, comenta o elimina las `@keyframes` y propiedades `animation`.

Para hacer las animaciones más rápidas:

```css
:root {
    --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🔧 Personalización Avanzada

### Agregar Secciones Personalizadas

Puedes agregar nuevas secciones en `index.html`:

```html
<!-- Después de customLinks y antes del footer -->
<div class="testimonials-section">
    <h2>Lo que dicen de mí</h2>
    <blockquote>
        "María es una diseñadora increíble"
    </blockquote>
</div>
```

### Agregar Contador de Visitas

En `script.js`, agrega al final:

```javascript
// Contador de visitas simple
let visits = localStorage.getItem('visits') || 0;
visits++;
localStorage.setItem('visits', visits);
console.log(`Visitas: ${visits}`);
```

### Integrar con Google Analytics

En `index.html`, antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Agregar Video de Fondo

En `styles.css`:

```css
.background-animation {
    background: none;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.3;
    background: url('tu-video-o-gif.gif') center/cover;
}
```

### Modo Festivo (Nieve, Confetti, etc.)

Agrega en `script.js`:

```javascript
// Efecto de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄️';
    snowflake.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 20 + 10}px;
        animation: fall ${Math.random() * 3 + 2}s linear forwards;
        pointer-events: none;
        z-index: 9999;
    `;
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
}

// Crear copos de nieve cada 300ms
setInterval(createSnowflake, 300);
```

Y en `styles.css`:

```css
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
```

## 📱 Meta Tags para Redes Sociales

En `index.html`, dentro de `<head>`:

```html
<!-- Primary Meta Tags -->
<meta name="title" content="María García - Diseñadora UX/UI">
<meta name="description" content="Portfolio, proyectos y contacto">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://tudominio.com/">
<meta property="og:title" content="María García - Diseñadora UX/UI">
<meta property="og:description" content="Portfolio, proyectos y contacto">
<meta property="og:image" content="https://tudominio.com/preview.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://tudominio.com/">
<meta property="twitter:title" content="María García - Diseñadora UX/UI">
<meta property="twitter:description" content="Portfolio, proyectos y contacto">
<meta property="twitter:image" content="https://tudominio.com/preview.jpg">
```

## 🎯 Casos de Uso Específicos

### Para Músicos

```javascript
const customLinks = [
    {
        title: "🎵 Escucha mi nuevo álbum",
        url: "https://spotify.com/...",
        icon: "fas fa-compact-disc",
        featured: true
    },
    {
        title: "🎟️ Compra tickets para el concierto",
        url: "https://eventbrite.com/...",
        icon: "fas fa-ticket-alt",
        featured: false
    },
    {
        title: "👕 Merchandising oficial",
        url: "https://tienda.com",
        icon: "fas fa-tshirt",
        featured: false
    }
];
```

### Para Educadores

```javascript
const customLinks = [
    {
        title: "📚 Mi curso online",
        url: "https://udemy.com/...",
        icon: "fas fa-graduation-cap",
        featured: true
    },
    {
        title: "📖 Recursos gratuitos",
        url: "https://notion.so/...",
        icon: "fas fa-book-open",
        featured: false
    },
    {
        title: "💬 Únete a la comunidad",
        url: "https://discord.gg/...",
        icon: "fas fa-users",
        featured: false
    }
];
```

### Para Emprendedores

```javascript
const customLinks = [
    {
        title: "🚀 Nuestro producto",
        url: "https://producto.com",
        icon: "fas fa-rocket",
        featured: true
    },
    {
        title: "📊 Caso de estudio",
        url: "https://blog.com/caso",
        icon: "fas fa-chart-line",
        featured: false
    },
    {
        title: "📅 Solicitar demo",
        url: "https://calendly.com/...",
        icon: "fas fa-calendar-check",
        featured: false
    }
];
```

## 🐛 Solución de Problemas

### Los cambios no se reflejan
1. Limpia el caché del navegador (Ctrl+F5 o Cmd+Shift+R)
2. Verifica que guardaste los archivos
3. Revisa la consola del navegador (F12) para errores

### Las animaciones van lentas
1. Reduce la cantidad de animaciones en `styles.css`
2. Aumenta el valor de `--transition` a `0.5s` o más
3. Desactiva `initializeParallax()` en dispositivos móviles

### Los enlaces no funcionan
1. Asegúrate de incluir `https://` en las URLs
2. Verifica que no haya errores de sintaxis en `script.js`
3. Revisa la consola del navegador

---

¿Necesitas más ayuda? Abre un issue en el repositorio o consulta la documentación completa.
