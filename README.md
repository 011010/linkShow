# LinkShow 🔗

Una página estilo Linktree moderna y personalizable para mostrar todos tus enlaces de redes sociales y URLs en un solo lugar.

![LinkShow](https://img.shields.io/badge/version-1.0.0-purple)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y atractiva con animaciones suaves
- 🌓 **Tema Claro/Oscuro**: Cambia entre modos con un solo click
- 📱 **Totalmente Responsivo**: Se adapta perfectamente a cualquier dispositivo
- ⚡ **Carga Rápida**: Sin dependencias pesadas, solo HTML, CSS y JavaScript vanilla
- 🎯 **Fácil Personalización**: Configura todo desde un solo archivo
- 🔗 **Enlaces Ilimitados**: Agrega tantos enlaces como necesites
- 💫 **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- 📊 **Tracking de Clicks**: Rastrea qué enlaces son más populares (opcional)
- 🚀 **Botón de Compartir**: Comparte tu página fácilmente
- 🎭 **Enlaces Destacados**: Resalta tus enlaces más importantes

## 🚀 Inicio Rápido

### 1. Descarga o Clona el Repositorio

```bash
git clone https://github.com/tuusuario/linkShow.git
cd linkShow
```

### 2. Personaliza tu Información

Abre `script.js` y edita la configuración:

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

### GitHub Pages

1. Sube el proyecto a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama principal
4. Tu sitio estará en `https://tuusuario.github.io/linkShow`

### Netlify

1. Conecta tu repositorio
2. Deploy automático en cada commit
3. Dominio personalizado gratis

### Vercel

1. Importa tu proyecto
2. Deploy instantáneo
3. Dominio personalizado incluido

## 🔧 Características Técnicas

### Estructura de Archivos

```
linkShow/
├── index.html      # Estructura HTML
├── styles.css      # Estilos y animaciones
├── script.js       # Lógica y configuración
└── README.md       # Documentación
```

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

## 🔒 Privacidad y Seguridad

- Sin cookies de terceros
- Sin tracking externo por defecto
- Todos los datos son estáticos
- 100% control de tu información
- Código abierto y transparente

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

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
