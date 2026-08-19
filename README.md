# ZIGTEC - Web CNC

Sitio web de **ZIGTEC**: venta de maquinas CNC, mantenimiento, reparacion y capacitacion.

Construido con **Astro + Tailwind CSS v4** (estatico, sin servidor).

## Estructura

- `src/pages/` - Paginas del sitio (index, servicios, productos, cursos, mantenimiento, contacto)
- `src/components/` - Componentes reutilizables (Header, Footer, ContactForm, grids...)
- `src/layouts/Layout.astro` - Layout base (head, fuentes, SEO)
- `src/styles/global.css` - Design tokens y utilidades de Tailwind v4
- `src/data/content.js` - **Todo el contenido editable** (telefonos, servicios, precios...)
- `public/images/` - Imagenes SVG de maquinas, favicon y logo

## Comandos

| Comando        | Accion                               |
| :------------- | :----------------------------------- |
| `npm install` | Instala dependencias                 |
| `npm run dev` | Servidor local con hot-reload        |
| `npm run build` | Genera el sitio estatico en `dist/` |
| `npm run preview` | Previsualiza el build localmente   |

## Como editar

Casi todo el contenido se cambia en `src/data/content.js` (telefonos, whatsapp, email, direccion, productos, cursos, planes de mantenimiento...).

## Publicar cambios en linea

1. `git add .`
2. `git commit -m "Descripcion del cambio"`
3. `git push origin main`

La web se actualiza automaticamente en 1-2 minutos.