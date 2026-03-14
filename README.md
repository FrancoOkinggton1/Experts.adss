# 🚀 EXPERT.ADS - Landing Page

[cite_start]Este repositorio contiene el código fuente de la landing page para **EXPERT.ADS**, una agencia de marketing digital especializada en sistemas de crecimiento rentable y Paid Media[cite: 2, 9, 10]. 

El proyecto pasó de ser un archivo monolítico en HTML puro a una arquitectura moderna y escalable basada en componentes.

## 🛠️ Tecnologías Utilizadas

* **Framework:** [Astro](https://astro.build/) (v4+)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v3)
* **Plugins de Tailwind:** `@tailwindcss/forms`, `@tailwindcss/container-queries`
* **Iconos:** Material Symbols Outlined (Google Fonts)
* **Tipografía:** Inter (Google Fonts)

## 📂 Estructura del Proyecto

El código fue refactorizado y dividido por funcionalidades para facilitar su escalabilidad y mantenimiento:

```text
/src
├── /components
│   ├── Claves.astro       # Sección de las 3 claves de crecimiento
│   ├── Equipo.astro       # Perfiles de las fundadoras (Caro y Dai)
│   ├── Estrategias.astro  # Tarjetas de modelos de negocio
│   ├── Formulario.astro   # Formulario de captura para diagnóstico
│   ├── Footer.astro       # Pie de página y legal
│   ├── Header.astro       # Barra de navegación superior fija
│   └── Hero.astro         # Sección principal de impacto
├── /layouts
│   └── Layout.astro       # Envoltorio principal (HTML boilerplate y estilos globales)
└── /pages
    └── index.astro        # Página principal que ensambla todos los componentes