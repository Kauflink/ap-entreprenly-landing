# Landing Page - Entreprenly

Landing page de Entreprenly: smart retail para pequeños negocios. Sitio estático
construido con HTML, JavaScript y Tailwind CSS v4.

## Características

- **Responsive**: adaptada de móvil (desde ~320px) a escritorio.
- **Modo claro / oscuro**: alternable y persistido en `localStorage`.
- **Multilenguaje (ES / EN)**: traducciones vía `data-i18n` y archivos en `i18n/`,
  con el idioma persistido en `localStorage`.
- **Sin framework de build pesado**: solo la CLI de Tailwind compila `input.css`.

## Instalación

Instala las dependencias:

```bash
npm install
```

## Desarrollo

Compila los estilos en modo watch:

```bash
npm run dev
```

Luego abre `index.html` en el navegador (o sírvelo con cualquier servidor
estático, por ejemplo `python -m http.server`).

## Compilación

Genera los estilos minificados para producción:

```bash
npm run build
```

> `styles.css` es el CSS ya compilado y está versionado en el repo, porque
> GitHub Pages lo sirve directamente desde la rama. Si modificas `input.css`,
> regénéralo con `npm run build` y commitea el `styles.css` resultante.

## Estructura del Proyecto

```
.
├── index.html          # Página principal (marcado + clases de Tailwind)
├── app.js              # Tema, idioma e interacciones (menús, toggles, FAQ…)
├── input.css           # Estilos fuente de Tailwind (tema, componentes, dark mode)
├── styles.css          # CSS compilado por Tailwind (versionado en el repo)
├── package.json        # Scripts y dependencias
├── .gitignore          # Archivos ignorados
├── i18n/               # Traducciones
│   ├── en.json
│   └── es.json
└── assets/             # Logos, iconos del personaje y capturas
```

## Despliegue

El sitio se publica con **GitHub Pages** sirviendo directamente la rama `main`
(sin paso de build en CI). Cada push a `main` actualiza el sitio en vivo:

- URL: https://landing.entreprenly.online
- El dominio personalizado se define en el archivo `CNAME` de la raíz.

## Licencia

MIT
