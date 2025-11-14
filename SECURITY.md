# Guía de Seguridad de LinkShow

Esta guía documenta las medidas de seguridad implementadas en LinkShow y las mejores prácticas para mantener tu página segura.

## 🔒 Medidas de Seguridad Implementadas

### 1. Content Security Policy (CSP)

El proyecto implementa una política de seguridad de contenido estricta que:

- **default-src 'self'**: Solo permite recursos del mismo origen
- **script-src 'self' 'unsafe-inline'**: Scripts solo desde el mismo origen (inline necesario para funcionalidad)
- **style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com**: Estilos desde origen propio y CDN de Font Awesome
- **font-src 'self' https://cdnjs.cloudflare.com**: Fuentes desde origen y CDN
- **img-src 'self' https: data:**: Imágenes desde origen propio, HTTPS y data URIs
- **frame-ancestors 'none'**: Previene clickjacking
- **base-uri 'self'**: Restringe URLs base
- **form-action 'self'**: Previene envío de formularios a orígenes externos

### 2. Headers de Seguridad HTTP

#### X-Frame-Options: DENY
Previene que tu página sea embebida en iframes, protegiendo contra ataques de clickjacking.

#### X-Content-Type-Options: nosniff
Previene que el navegador "adivine" el tipo MIME, forzando el uso del Content-Type declarado.

#### X-XSS-Protection: 1; mode=block
Activa la protección XSS del navegador y bloquea la página si detecta un ataque.

#### Referrer-Policy: strict-origin-when-cross-origin
Controla qué información de referencia se envía con las solicitudes.

#### Permissions-Policy
Deshabilita APIs peligrosas:
- Geolocalización
- Micrófono
- Cámara

#### Strict-Transport-Security (HSTS)
Fuerza el uso de HTTPS durante 1 año e incluye subdominios.

### 3. Subresource Integrity (SRI)

Font Awesome se carga con hash de integridad SRI que:
- Verifica que el archivo no ha sido modificado
- Previene ataques de CDN comprometidos
- Garantiza que solo se carga la versión exacta especificada

```html
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous"
>
```

### 4. Sanitización de Datos

#### Función sanitizeText()
Previene inyección XSS en texto:
```javascript
function sanitizeText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
```

#### Función isValidURL()
Valida URLs para prevenir inyección de código:
- Solo permite protocolos seguros (http, https, mailto, tel)
- Bloquea javascript: y data: URLs maliciosas
- Valida formato de URL correcto

#### Función sanitizeClassName()
Previene inyección en clases CSS:
- Solo permite caracteres alfanuméricos, guiones y guiones bajos
- Elimina caracteres potencialmente peligrosos

### 5. Protección Contra XSS

**NO usamos innerHTML** para contenido dinámico. En su lugar:

```javascript
// ❌ INSEGURO - Vulnerable a XSS
linkElement.innerHTML = `<span>${link.title}</span>`;

// ✅ SEGURO - Usa textContent y createElement
const span = document.createElement('span');
span.textContent = link.title;
linkElement.appendChild(span);
```

### 6. Validación de localStorage

Validamos datos antes de usarlos:

```javascript
let savedTheme = 'dark';
try {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
        savedTheme = storedTheme;
    }
} catch (e) {
    console.warn('Error al acceder a localStorage:', e);
}
```

### 7. Enlaces Seguros

Todos los enlaces externos incluyen:
- `target="_blank"`: Abre en nueva pestaña
- `rel="noopener noreferrer nofollow"`:
  - **noopener**: Previene acceso a window.opener
  - **noreferrer**: No envía información de referencia
  - **nofollow**: Indica a motores de búsqueda que no sigan el enlace

## 🚀 Mejores Plataformas de Deployment

### 1. ⭐ **Netlify** (Recomendado)

**Ventajas:**
- ✅ Headers de seguridad automáticos
- ✅ SSL/TLS gratuito con Let's Encrypt
- ✅ CDN global incluido
- ✅ Deploy automático desde Git
- ✅ Dominio personalizado gratuito
- ✅ Rollback instantáneo
- ✅ Formularios y funciones serverless

**Pasos:**
1. Sube tu proyecto a GitHub
2. Conecta en [netlify.com](https://www.netlify.com)
3. Selecciona el repositorio
4. Deploy automático (usa `netlify.toml` y `_headers`)

**Configuración de seguridad:**
- Archivo `netlify.toml` incluido ✅
- Archivo `_headers` incluido ✅
- HTTPS forzado automáticamente

### 2. ⭐ **Vercel** (Recomendado)

**Ventajas:**
- ✅ Rendimiento excepcional
- ✅ SSL automático
- ✅ Edge Network global
- ✅ Previews automáticos de PRs
- ✅ Análisis de rendimiento
- ✅ Dominio personalizado gratuito

**Pasos:**
1. Importa desde GitHub en [vercel.com](https://vercel.com)
2. Deploy automático
3. Usa `vercel.json` incluido

**Configuración de seguridad:**
- Archivo `vercel.json` incluido ✅
- Headers de seguridad configurados

### 3. **GitHub Pages**

**Ventajas:**
- ✅ Totalmente gratuito
- ✅ Integración perfecta con GitHub
- ✅ SSL automático
- ✅ Ideal para proyectos open source

**Desventajas:**
- ⚠️ No soporta headers personalizados
- ⚠️ Sin CDN avanzado

**Pasos:**
1. Ve a Settings → Pages
2. Selecciona branch (main)
3. Guarda

**Limitaciones de seguridad:**
- No puedes configurar headers HTTP personalizados
- Solo CSP en meta tags (ya implementado)

### 4. **Cloudflare Pages**

**Ventajas:**
- ✅ CDN ultrarrápido de Cloudflare
- ✅ SSL gratuito
- ✅ Headers personalizables
- ✅ Analytics incluido
- ✅ DDoS protection

**Pasos:**
1. Conecta GitHub en [pages.cloudflare.com](https://pages.cloudflare.com)
2. Crea `_headers` (ya incluido)
3. Deploy

### 5. **Hosting Apache/Compartido**

**Para hosting tradicional:**
- Usa `.htaccess` incluido
- Asegúrate de tener mod_headers habilitado
- Configura SSL (Let's Encrypt recomendado)

## 🛡️ Checklist de Seguridad

### Antes del Deployment

- [ ] Revisar todas las URLs en `script.js`
- [ ] Asegurar que todas las URLs usan HTTPS
- [ ] Verificar que no hay datos sensibles en el código
- [ ] Cambiar imagen de perfil placeholder
- [ ] Actualizar meta tags con tu información
- [ ] Probar todos los enlaces

### Después del Deployment

- [ ] Verificar que HTTPS está activo
- [ ] Probar headers de seguridad con [securityheaders.com](https://securityheaders.com)
- [ ] Verificar CSP con [csp-evaluator.withgoogle.com](https://csp-evaluator.withgoogle.com)
- [ ] Hacer test de SSL con [ssllabs.com](https://www.ssllabs.com/ssltest/)
- [ ] Verificar accesibilidad con Lighthouse
- [ ] Probar en múltiples navegadores
- [ ] Verificar responsive design en móviles

### Mantenimiento Continuo

- [ ] Actualizar Font Awesome regularmente
- [ ] Revisar y actualizar hash SRI cuando actualices dependencias
- [ ] Monitorear console para errores de CSP
- [ ] Mantener backups del sitio
- [ ] Revisar logs de acceso (si están disponibles)

## 🔧 Herramientas de Testing

### 1. Security Headers
```bash
curl -I https://tu-sitio.com
```
O visita: https://securityheaders.com/?q=tu-sitio.com

### 2. SSL Test
https://www.ssllabs.com/ssltest/analyze.html?d=tu-sitio.com

### 3. CSP Evaluator
https://csp-evaluator.withgoogle.com

### 4. Observatory by Mozilla
https://observatory.mozilla.org

### 5. Lighthouse (en Chrome DevTools)
```bash
# O usa CLI
npm install -g lighthouse
lighthouse https://tu-sitio.com --view
```

## 🚨 Vulnerabilidades Comunes a Evitar

### 1. ❌ NO uses URLs de terceros no confiables
```javascript
// MAL
const link = { url: userInput }; // Peligroso!

// BIEN
const link = { url: "https://tudominio.com/verificado" };
```

### 2. ❌ NO deshabilites validaciones
```javascript
// MAL
linkElement.innerHTML = link.title; // XSS!

// BIEN
linkElement.textContent = link.title;
```

### 3. ❌ NO uses HTTP para recursos
```javascript
// MAL
image: "http://unsecure.com/image.jpg"

// BIEN
image: "https://secure.com/image.jpg"
```

### 4. ❌ NO expongas datos sensibles
```javascript
// MAL - En archivo público
const apiKey = "sk_live_1234567890";

// BIEN - Usa variables de entorno o backend
```

### 5. ❌ NO confíes en datos de localStorage sin validar
```javascript
// MAL
const theme = localStorage.getItem('theme');
document.body.className = theme; // Inyección posible!

// BIEN
const allowedThemes = ['light', 'dark'];
const theme = localStorage.getItem('theme');
if (allowedThemes.includes(theme)) {
    document.body.className = theme;
}
```

## 📊 Comparativa de Plataformas

| Característica | Netlify | Vercel | GitHub Pages | Cloudflare Pages |
|----------------|---------|---------|--------------|------------------|
| SSL Gratis | ✅ | ✅ | ✅ | ✅ |
| Headers Personalizados | ✅ | ✅ | ❌ | ✅ |
| CDN Global | ✅ | ✅ | ⚠️ | ✅ |
| Deploy Automático | ✅ | ✅ | ✅ | ✅ |
| Dominio Personalizado | ✅ | ✅ | ✅ | ✅ |
| Funciones Serverless | ✅ | ✅ | ❌ | ✅ |
| Analytics | ✅ ($) | ✅ | ❌ | ✅ |
| Build Time | Gratis ilimitado | 6000 min/mes | N/A | 500 builds/mes |
| Bandwidth | 100GB/mes | 100GB/mes | 100GB/mes | Ilimitado |

## 🔐 Configuración Avanzada

### Agregar Subresource Integrity a tus propios archivos

```bash
# Generar hash SRI
cat styles.css | openssl dgst -sha384 -binary | openssl base64 -A
```

Luego en HTML:
```html
<link rel="stylesheet" href="styles.css" integrity="sha384-HASH_AQUI">
```

### Configurar HSTS Preload

1. Implementa HSTS con max-age de al menos 1 año
2. Incluye subdominios
3. Registra en: https://hstspreload.org

## 📞 Reportar Vulnerabilidades

Si encuentras una vulnerabilidad de seguridad:

1. **NO** la publiques en issues públicos
2. Envía un email a: [tu-email-de-seguridad]
3. Incluye:
   - Descripción de la vulnerabilidad
   - Pasos para reproducirla
   - Impacto potencial
   - Sugerencia de fix (opcional)

## 📚 Recursos Adicionales

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy Guide](https://content-security-policy.com/)
- [Web.dev Security](https://web.dev/secure/)

---

**Última actualización:** 2024
**Versión de seguridad:** 2.0

Recuerda: La seguridad es un proceso continuo, no un destino. Mantén siempre actualizado tu código y dependencias.
