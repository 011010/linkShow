# Guía de Deployment de LinkShow

Esta guía te ayudará a desplegar LinkShow en diferentes plataformas de hosting con la configuración de seguridad óptima.

## 📋 Preparación Previa

Antes de desplegar, asegúrate de:

1. **Personalizar tu configuración** en `script.js`:
   ```javascript
   const profileConfig = {
       name: "Tu Nombre Real",
       bio: "Tu descripción profesional",
       image: "URL de tu imagen"
   };
   ```

2. **Actualizar tus enlaces** en `socialLinks` y `customLinks`

3. **Probar localmente**:
   - Abre `index.html` en tu navegador
   - Verifica que todos los enlaces funcionen
   - Prueba en modo responsive (F12 → Toggle device toolbar)

## 🚀 Opción 1: Netlify (Recomendado ⭐)

### ¿Por qué Netlify?
- ✅ Deploy en segundos
- ✅ SSL automático
- ✅ CDN global incluido
- ✅ Headers de seguridad preconfigurados
- ✅ Deploy automático desde Git
- ✅ 100GB bandwidth gratis/mes

### Pasos para Deploy:

#### Método A: Deploy desde GitHub

1. **Sube tu proyecto a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/linkShow.git
   git push -u origin main
   ```

2. **Conecta con Netlify**:
   - Ve a [app.netlify.com](https://app.netlify.com)
   - Click en "Add new site" → "Import an existing project"
   - Selecciona GitHub y autoriza
   - Elige tu repositorio `linkShow`

3. **Configuración de build**:
   - Build command: (dejar vacío)
   - Publish directory: `.` (punto)
   - Click en "Deploy site"

4. **Configuración post-deploy**:
   - Ve a Site settings → Domain management
   - Cambia el nombre del sitio o agrega dominio personalizado
   - SSL se activa automáticamente

#### Método B: Deploy Manual (Drag & Drop)

1. Ve a [app.netlify.com](https://app.netlify.com)
2. Arrastra la carpeta del proyecto a la zona de drop
3. ¡Listo! Tu sitio está en línea

### Configuración Incluida:
- ✅ `netlify.toml` - Configuración de build y redirects
- ✅ `_headers` - Headers de seguridad HTTP

### Verificar Deployment:
```bash
# Netlify CLI (opcional)
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 🔷 Opción 2: Vercel (Recomendado ⭐)

### ¿Por qué Vercel?
- ✅ Ultrarrápido
- ✅ Edge Network global
- ✅ Analytics integrado
- ✅ Preview deployments automáticos
- ✅ 100GB bandwidth gratis/mes

### Pasos para Deploy:

1. **Sube a GitHub** (mismo proceso que Netlify)

2. **Importa en Vercel**:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Selecciona tu repositorio
   - Click "Import"

3. **Configuración**:
   - Framework Preset: Other
   - Build Command: (dejar vacío)
   - Output Directory: `.`
   - Click "Deploy"

4. **Dominio personalizado**:
   - Ve a Settings → Domains
   - Agrega tu dominio
   - Configura DNS según instrucciones

### Configuración Incluida:
- ✅ `vercel.json` - Headers de seguridad y rewrites

### Verificar con CLI:
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🐙 Opción 3: GitHub Pages

### ¿Por qué GitHub Pages?
- ✅ Totalmente gratuito
- ✅ Integración perfecta con GitHub
- ✅ SSL automático
- ✅ Ideal para proyectos open source

### Limitaciones:
- ⚠️ No soporta headers HTTP personalizados
- ⚠️ Solo CSP via meta tags (ya implementado)

### Pasos para Deploy:

1. **Sube tu proyecto a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/linkShow.git
   git push -u origin main
   ```

2. **Activa GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Click "Save"

3. **Espera unos minutos** y visita:
   ```
   https://tu-usuario.github.io/linkShow/
   ```

### Configuración de dominio personalizado:

1. En Settings → Pages → Custom domain
2. Ingresa tu dominio (ej: `links.tudominio.com`)
3. Configura DNS:
   ```
   CNAME: links.tudominio.com → tu-usuario.github.io
   ```

4. Marca "Enforce HTTPS"

---

## ☁️ Opción 4: Cloudflare Pages

### ¿Por qué Cloudflare Pages?
- ✅ CDN más rápido del mundo
- ✅ Bandwidth ilimitado
- ✅ DDoS protection incluido
- ✅ Analytics gratis
- ✅ Headers personalizables

### Pasos para Deploy:

1. **Conecta GitHub**:
   - Ve a [pages.cloudflare.com](https://pages.cloudflare.com)
   - "Create a project" → "Connect to Git"
   - Autoriza GitHub
   - Selecciona repositorio

2. **Configuración de build**:
   - Build command: (vacío)
   - Build output directory: `/`
   - Click "Save and Deploy"

3. **Headers de seguridad**:
   - Los headers en `_headers` se aplican automáticamente

### Dominio personalizado:

1. Ve a Custom domains
2. Agrega tu dominio
3. Cloudflare configura DNS automáticamente

---

## 🌐 Opción 5: Hosting Compartido / Apache

### Para cPanel, Plesk u otros:

1. **Accede a tu hosting** via FTP o File Manager

2. **Sube archivos**:
   - Sube todos los archivos a `public_html` o `www`
   - Asegúrate de incluir `.htaccess`

3. **Verifica `.htaccess`**:
   ```bash
   # Confirma que mod_rewrite y mod_headers están activos
   # Contacta a tu proveedor si no funcionan
   ```

4. **Configura SSL**:
   - La mayoría de hosts ofrecen SSL gratuito (Let's Encrypt)
   - Actívalo desde el panel de control
   - Fuerza HTTPS (ya configurado en `.htaccess`)

### Verificar Headers:
```bash
curl -I https://tudominio.com
```

---

## 🔍 Verificación Post-Deploy

Después de desplegar en cualquier plataforma, verifica:

### 1. Test de Seguridad
```bash
# Security Headers
https://securityheaders.com/?q=tudominio.com

# SSL Test
https://www.ssllabs.com/ssltest/analyze.html?d=tudominio.com

# CSP Evaluator
https://csp-evaluator.withgoogle.com
```

### 2. Test de Rendimiento
```bash
# Google PageSpeed
https://pagespeed.web.dev/analysis?url=tudominio.com

# Lighthouse (Chrome DevTools)
F12 → Lighthouse → Generate report
```

### 3. Test de Accesibilidad
```bash
# WAVE
https://wave.webaim.org/report#/tudominio.com
```

### 4. Pruebas Funcionales
- [ ] Todos los enlaces funcionan
- [ ] Imágenes cargan correctamente
- [ ] Tema claro/oscuro funciona
- [ ] Botón de compartir funciona
- [ ] Responsive en móvil
- [ ] Funciona en Safari, Chrome, Firefox
- [ ] No hay errores en consola

---

## 📊 Comparativa Rápida

| Característica | Netlify | Vercel | GitHub Pages | Cloudflare | Apache |
|----------------|---------|---------|--------------|------------|--------|
| **Configuración** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Velocidad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Seguridad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Gratis** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SSL** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto | Manual |
| **CDN** | ✅ | ✅ | Básico | ✅ Mejor | ❌ |
| **Tiempo Deploy** | < 1 min | < 1 min | 2-5 min | < 1 min | Manual |

**Recomendación:**
- **Principiantes**: Netlify (drag & drop más fácil)
- **Desarrolladores**: Vercel (mejor DX)
- **Open Source**: GitHub Pages (integración perfecta)
- **Rendimiento**: Cloudflare Pages (CDN más rápido)
- **Control total**: Apache (si ya tienes hosting)

---

## 🔧 Troubleshooting

### Problema: Headers de seguridad no aparecen

**GitHub Pages:**
- Es normal, no soporta headers HTTP personalizados
- CSP ya está en meta tags del HTML

**Netlify/Vercel:**
- Verifica que `_headers` o configuración esté en el root
- Espera 2-3 minutos para propagación
- Limpia caché del navegador (Ctrl+Shift+R)

**Apache:**
- Verifica que mod_headers esté activo
- Contacta a soporte de hosting
- Algunos hosts compartidos lo deshabilitan

### Problema: CSS no carga

1. Verifica la ruta en `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

2. Asegúrate que `styles.css` está en el mismo directorio

3. Verifica CSP en consola (F12)

### Problema: Imágenes no cargan

1. Verifica que la URL use HTTPS
2. Comprueba que img-src permite el dominio en CSP
3. Prueba con otra URL de imagen

### Problema: "Mixed Content" error

- Todas las URLs deben usar HTTPS
- Cambia `http://` por `https://` en todas las URLs
- Especialmente en `profileConfig.image`

### Problema: Sitio muy lento

1. Optimiza imágenes:
   ```bash
   # Usar servicios como:
   - TinyPNG
   - ImageOptim
   - Squoosh.app
   ```

2. Usa CDN para imágenes:
   - Cloudinary
   - imgix
   - Cloudflare Images

3. Verifica el tamaño:
   ```bash
   # La imagen de perfil debería ser < 200KB
   # Resolución recomendada: 300x300px
   ```

---

## 🎯 Mejores Prácticas

### Antes de Deploy:

1. **Optimiza imágenes**:
   - Usa WebP si es posible
   - Máximo 300x300px para perfil
   - Compresión 80-90%

2. **Minimiza archivos** (opcional):
   ```bash
   # CSS
   cssnano styles.css -o styles.min.css

   # JS
   terser script.js -o script.min.js
   ```

3. **Prueba localmente**:
   ```bash
   # Servidor local simple
   python3 -m http.server 8000
   # o
   npx serve .
   ```

### Después de Deploy:

1. **Configura Analytics**:
   - Google Analytics
   - Cloudflare Analytics
   - Plausible (privacy-friendly)

2. **Configura Monitoring**:
   - UptimeRobot (verifica disponibilidad)
   - Google Search Console
   - StatusCake

3. **Backups automáticos**:
   - Git es tu backup (si usas GitHub)
   - Netlify/Vercel mantienen historial
   - Para Apache, configura backups

4. **SEO Básico**:
   - Agrega `sitemap.xml`
   - Configura `robots.txt`
   - Registra en Google Search Console

---

## 📱 Deploy para Instagram, TikTok, etc.

1. **Elige una URL corta**:
   - Netlify: `tu-nombre.netlify.app`
   - Personalizado: `links.tudominio.com`

2. **Acorta la URL** (opcional):
   - bit.ly
   - tinyurl.com
   - Dominio personalizado corto

3. **Agrega a tu bio**:
   ```
   Instagram: 🔗 links.tudominio.com
   TikTok: 🌐 All my links
   Twitter: 📎 Find all my content
   ```

---

## 🆘 Soporte

¿Problemas con el deployment?

1. **Revisa la documentación** de la plataforma:
   - [Netlify Docs](https://docs.netlify.com)
   - [Vercel Docs](https://vercel.com/docs)
   - [GitHub Pages Docs](https://docs.github.com/pages)

2. **Revisa SECURITY.md** para problemas de headers

3. **Abre un issue** en el repositorio de LinkShow

---

**¡Tu LinkShow está listo para el mundo! 🚀**
