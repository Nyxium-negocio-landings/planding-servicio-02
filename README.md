# EcoPlagas - Web Landing Page

Plantilla web para servicios de **Control de Plagas** y **Fumigaciones**, construida con Vite + React 18 + Tailwind CSS.

- **Vite** — Build tool ultrarrápido
- **React 18** — UI con hooks
- **TailwindCSS v4** — `@tailwindcss/vite` plugin (sin postcss, sin `tailwind.config.js`)
- **Google Fonts** — Poppins

## Instalación

```bash
npm install
npm run dev
```

La app corre en `http://localhost:5173`

## Estructura

```
src/
├── assets/images/          # Imágenes y recursos
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx      # Barra de navegación sticky con hamburguesa
│   │   └── Footer.jsx      # Pie de página + botón flotante WhatsApp
│   └── ui/
│       ├── Button.jsx      # Botón reutilizable (primary/outline/accent)
│       └── SectionDivider  # Línea decorativa verde
├── sections/
│   ├── HeroSection.jsx         # Fumigaciones - hero principal
│   ├── ControlDePlagasSection  # Control De Plagas
│   ├── PlagaSection.jsx        # Plaga + lista de insectos
│   ├── BlogSection.jsx         # Blog con artículos
│   ├── ServiciosSection.jsx    # Servicios
│   ├── TestimoniosSection.jsx  # Testimonios de clientes
│   └── ContactoSection.jsx     # Contacto + formulario
├── constants/data.js       # Todos los textos y datos centralizados
├── styles/index.css        # TailwindCSS v4 @theme + animaciones
├── App.jsx                 # Ensamblaje de secciones
└── main.jsx                # Entry point
```

## WhatsApp

El botón flotante inferior-derecho conecta con `+51 982132639`.

## TailwindCSS v4 - Notas

- Sin `tailwind.config.js` ni `postcss.config.js`
- Config via `@theme {}` en `styles/index.css`
- Colores de tema: `bg-(--color-primary)`, `text-(--color-accent)`, etc.
