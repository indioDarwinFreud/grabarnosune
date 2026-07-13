# Documentación Técnica — Grabar Nos Une

**Fecha de Última Actualización:** 06/07/2026
**Versión del Proyecto:** 3.0 (Rebranding Grabar Nos Une)

---

## Visión General

Este documento detalla la arquitectura técnica, estructura de carpetas y propósito de los archivos del proyecto **Grabar Nos Une** (antes PlantillaProducto). El sitio es una landing page comercial con catálogo de productos, construida sobre **Next.js 15** (App Router) con una arquitectura **Config-Driven**: los colores, textos, imágenes y datos se centralizan en `config.ts` y `data.tsx`, permitiendo adaptar el sitio a cualquier cliente sin tocar componentes.

### Tech Stack

| Tecnología | Uso |
|---|---|
| **Next.js 15** (App Router) | Framework principal |
| **TypeScript** | Tipado estático |
| **Tailwind CSS 3** | Estilos utility-first |
| **Framer Motion** | Animaciones de entrada (FadeIn) |
| **Lucide React** | Iconos vectoriales |
| **clsx + tailwind-merge** | Utilidad `cn()` para clases condicionales |

---

## Estructura del Proyecto

```
/
├── app/                           # App Router (rutas y páginas)
│   ├── layout.tsx                 # Layout raíz (Navbar, Header, Footer, fondos)
│   ├── page.tsx                   # Home (8 secciones: Hero → Testimonios)
│   ├── globals.css               # @tailwind, @font-face Brizel, CSS variables
│   ├── about/page.tsx            # Quiénes Somos
│   ├── contact/page.tsx          # Contacto (WhatsApp-First)
│   └── products/page.tsx         # Catálogo de productos
│
├── components/                    # Componentes React
│   ├── cards/
│   │   └── ProductCard.tsx       # Tarjeta de producto (usa <Image> de Next.js)
│   ├── layout/
│   │   ├── Navbar.tsx            # Barra inferior "Nucleus Design" (pastilla flotante)
│   │   ├── Header.tsx            # Logo superior (aparece al scrollear)
│   │   └── Footer.tsx            # Pie premium con glassmorphism + glow dorado
│   ├── providers/
│   │   └── ImperiaEditorProvider.tsx  # SDK de Imperia Visual Editor
│   ├── sections/
│   │   ├── HeroStatic.tsx        # Hero estático con logo + botones CTA
│   │   ├── MainCategories.tsx    # Grilla "Lo Más Buscado"
│   │   ├── AboutPreview.tsx      # Preview de Quiénes Somos
│   │   ├── CategoryBanners.tsx   # Banners de líneas de trabajo
│   │   ├── BestSellers.tsx       # Catálogo destacado (productos)
│   │   ├── CommercialInfo.tsx    # Info comercial + cupones
│   │   ├── BlogPreview.tsx       # Blog / tutoriales
│   │   └── Testimonials.tsx      # Reseñas de clientes
│   └── ui/
│       ├── button.tsx            # Botón reutilizable (4 variantes)
│       ├── card.tsx              # Card base reutilizable
│       ├── FadeIn.tsx            # Wrapper de animación (framer-motion)
│       └── separador.tsx         # Línea decorativa entre secciones
│
├── public/                        # Archivos estáticos
│   ├── logo con nombre.png       # Logo corporativo (header, footer, og:image)
│   ├── textura para fondo.png    # Textura de rodillo (fondo del tema activo)
│   ├── grabar nos une palabra repetida textura.png  # Textura para tarjetas (Hero)
│   ├── fonts/Brizel.ttf          # Tipografía de marca artesanal
│   ├── product/                  # 9 imágenes de productos (unificado)
│   └── assets/
│       ├── grabar_about.png
│       ├── banner_papeles.png
│       └── banner_sustratos.png
│
├── config.ts                     # [CRÍTICO] Configuración global del sitio
├── data.tsx                      # [CRÍTICO] Datos del sitio (productos, testimonios, menú)
├── types/
│   └── index.ts                  # Interfaces TypeScript (Product, Testimonial, NavItem, etc.)
├── tailwind.config.ts            # Extensión de Tailwind (colores, fuentes)
├── next.config.ts                # Configuración de Next.js
├── tsconfig.json                 # Configuración de TypeScript
└── MEMORIA_IA.md                 # Bitácora de cambios histórica
```

---

## Arquitectura Clave

### Sistema de Temas (Config-Driven)

Todo el aspecto visual del sitio se controla desde `config.ts` mediante una biblioteca de 3 temas:

| Tema | Estilo | Fondo |
|---|---|---|
| `PURPLE_CRAFT` (activo) | Púrpura artesanal / claro | `#FAF9FB` + textura de rodillo |
| `SILVER_PREMIUM` | Plateado metálico / oscuro | Gradiente gris + textura técnica |
| `ELECTRIC_BLUE` | Cyan tecnológico / oscuro | Gradiente azul profundo + rejilla |

**Para cambiar de tema**, basta con modificar una línea en `config.ts`:

```typescript
activeTheme: "PURPLE_CRAFT"  // → "SILVER_PREMIUM" o "ELECTRIC_BLUE"
```

Cada tema define: colores primarios, fondos (sólido, gradiente, imagen), colores de tarjeta y texto, border-radius, y texturas SVG. El getter `siteConfig.theme` resuelve automáticamente el objeto activo, y `layout.tsx` lo inyecta como CSS variables en el `<body>`.

### Layout Raíz (`app/layout.tsx`)

```
<html lang="es">
  <body>
    <!-- Capa 1: Fondo sólido (color del tema) -->
    <div class="fixed inset-0 -z-50" />

    <!-- Capa 2: Textura/imagen (opacidad 7% para PURPLE_CRAFT, 15% otros) -->
    <div class="fixed inset-0 -z-40" />

    <ImperiaEditorProvider>
      <Header />       ← Logo superior flotante
      <Navbar />       ← Barra inferior "Nucleus" flotante
      {children}       ← Contenido de cada ruta
      <Footer />       ← Pie premium con glassmorphism
    </ImperiaEditorProvider>
  </body>
</html>
```

### Data Flow

1. **`config.ts`** → define identidad, tema activo, logos, contacto, redes, horarios, SEO
2. **`data.tsx`** → importa `config.ts`, define productos, testimonios, menú, blog
3. **Componentes** → importan `config.ts` y `data.tsx` para renderizar
4. **Cambiar un texto o precio** → se modifica en `data.tsx`
5. **Cambiar un color o logo** → se modifica en `config.ts`

---

## Detalle de Páginas

### Home (`/`)

La landing page se compone de 8 secciones en este orden:

1. **HeroStatic** → Logo grande + botones "Hace tu consulta" y "Ver productos"
2. **MainCategories** → Grilla de "Lo Más Buscado" (4 tarjetas con íconos)
3. **AboutPreview** → Tarjeta glassmorphism con imagen + descripción de la marca
4. **CategoryBanners** → Dos banners grandes que enlazan a colecciones
5. **BestSellers** → Grid de `ProductCard` con botón WhatsApp por producto
6. **CommercialInfo** → Info comercial + código de descuento
7. **BlogPreview** → Cards de artículos del blog
8. **Testimonials** → Reseñas de clientes con estrellas y avatares de iniciales

Entre cada sección se intercala un `<Separador />` decorativo.

### Productos (`/products`)

Catálogo completo que renderiza `ProductCard` para cada entrada de `productsData` en `data.tsx`. Cada tarjeta tiene un botón que genera un link dinámico a WhatsApp con el mensaje _"Hola, me interesa el producto: [Nombre]"_.

### Quiénes Somos (`/about`)

Página informativa con imagen de la marca + texto de historia y pilares.

### Contacto (`/contact`)

Página **WhatsApp-First**: el formulario redirige directamente a WhatsApp con el mensaje predefinido. Incluye cards de contacto (email, teléfono, ubicación, redes) generados desde `config.ts`.

---

## Componentes por Categoría

### `components/layout/` (Estructurales)
| Componente | Descripción |
|---|---|
| `Navbar.tsx` | Barra inferior flotante "The Nucleus Design" con efecto de anillo y centrado absoluto |
| `Header.tsx` | Logo superior que aparece al scrollear hacia arriba |
| `Footer.tsx` | Pie de página con glassmorphism oscuro, glow dorado radial, datos de contacto y horarios |

### `components/sections/` (Secciones de página)
| Componente | Descripción | Usado en |
|---|---|---|
| `HeroStatic.tsx` | Hero estático con logo, descripción y botones CTA | Home |
| `MainCategories.tsx` | Grilla de categorías populares | Home |
| `AboutPreview.tsx` | Preview de Quiénes Somos con imagen | Home |
| `CategoryBanners.tsx` | Banners de líneas de trabajo | Home |
| `BestSellers.tsx` | Grid de productos destacados con WhatsApp | Home |
| `CommercialInfo.tsx` | Info comercial y cupones | Home |
| `BlogPreview.tsx` | Cards de blog/tutoriales | Home |
| `Testimonials.tsx` | Reseñas de clientes | Home |

### `components/cards/` (Tarjetas)
| Componente | Descripción |
|---|---|
| `ProductCard.tsx` | Tarjeta de producto con imagen, título, precio, stock y botón WhatsApp |

### `components/ui/` (Atómicos)
| Componente | Descripción |
|---|---|
| `button.tsx` | Botón reutilizable con 4 variantes (primary, secondary, outline, ghost) |
| `card.tsx` | Card base reutilizable con estilo consistente |
| `FadeIn.tsx` | Wrapper de animación fade-in con framer-motion |
| `separador.tsx` | Línea decorativa con gradiente entre secciones |

### `components/providers/`
| Componente | Descripción |
|---|---|
| `ImperiaEditorProvider.tsx` | SDK de Imperia Visual Editor para edición in-situ desde iframe |

---

## Tipografía

| Rol | Fuente | Clase Tailwind |
|---|---|---|
| Cuerpo general | **Urbanist** (Google Fonts) | `font-body` |
| Títulos de alto impacto | **Outfit** (Google Fonts) | `font-display` |
| Títulos modernos/geométricos | **Montserrat** (Google Fonts) | `font-alt` |
| Tipografía de marca artesanal | **Brizel** (cargada localmente) | `font-brizel` |

Las fuentes de Google se cargan mediante `next/font/google` en `layout.tsx` y se inyectan como CSS variables (`--font-urbanist`, `--font-outfit`, `--font-montserrat`). La fuente Brizel se carga via `@font-face` en `globals.css`.

---

## Archivos Clave

### `config.ts` — Identidad y Temas
Define: nombre del sitio, tipografía, 3 temas visuales, logos, SEO, contacto (email, WhatsApp), redes sociales y horarios. **Es el único archivo que necesitás tocar para cambiar la identidad completa del sitio.**

### `data.tsx` — Contenido
Define: menú de navegación, productos del catálogo, testimonios, datos de contacto (generados desde `config.ts`), horarios y artículos del blog.

### `tailwind.config.ts` — Sistema de Diseño
Extiende Tailwind con: fuentes personalizadas (`font-body`, `font-display`, `font-alt`, `font-brizel`), paleta de colores (`primary`, `gold`, `darkBg`, `glass`) y gradientes predefinidos.

---

## Convenciones de Desarrollo

1. **Componentes**: `PascalCase.tsx`. Páginas: `page.tsx` (convención de Next.js App Router).
2. **Estilos**: Utility-first con Tailwind CSS. No usar CSS modules ni archivos `.css` adicionales.
3. **Imágenes**: Usar siempre `<Image />` de `next/image` con rutas relativas a `/public/`.
4. **Iconos**: Importar desde `lucide-react`.
5. **Animaciones**: Usar `<FadeIn />` para efectos de entrada. Evitar framer-motion directo.
6. **Imperia Editor**: Todos los componentes llevan atributos `data-imperia-id` y `data-imperia-path` para el SDK de edición visual.
7. **Idioma**: Código y comentarios en español.
8. **Tema**: No hardcodear colores. Usar siempre `siteConfig.theme.*` o las CSS variables (`--primary-color`).

---

## Flujo de Despliegue

El proyecto está configurado para desplegarse en **Vercel** o **Render** desde la rama `main`.

**Comandos útiles:**

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo local |
| `npm run build` | Compilación para producción |
| `npm run start` | Servir build local de producción |
| `npm run lint` | Verificar errores de código |

---

## Issues Conocidos

- **Backgrounds de temas inactivos no existen en disco**: Las rutas `"/assets/backgrounds/silver_bg.png"` y `"/assets/backgrounds/blue_bg.png"` están definidas en `config.ts` para SILVER_PREMIUM y ELECTRIC_BLUE, pero los archivos no existen. Si se activa alguno de esos temas, se intentará cargar una imagen inexistente.
- **Nombres de archivos con espacios**: Varios PNGs en `public/` tienen espacios en sus nombres (ej: `logo con nombre.png`). Funciona pero puede causar issues en algunos servidores web o herramientas de build.
