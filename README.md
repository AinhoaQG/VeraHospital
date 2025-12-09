# VeraHospital
Ainhoa Quintero González
2º DAW Tarde

## ÍNDICE:
- [Presentación](#presentación-del-proyecto)
- [Estructura](#estructura-del-proyecto)

## PRESENTACIÓN DEL PROYECTO
El objetivo es diseñar y programar una página web estática que tiene como fin administrar el funcionamiento de un hospital. 

Para ello plantee los objetivos, páginas necesarias y componentes que se necesitan.

### Link a GitHub Pages
https://ainhoaqg.github.io/VeraHospital/

## ESTRUCTURA DEL PROYECTO
El proyecto esta estructurado en 3 grupos:
 - Prescipciones médicas: (Css)
    - login: (el index.html) la primera pagina que sale.
    - main: el router desde donde puedes ir al resto de paginas
    - lista de citas:
 - Unidad de enfermería: (Sass)
    - Mapa de camas
    - Hoja de medicación
 - Urgencias: (Tailwind)
    - Registro en urgencias
    - Triaje


```
VeraHospital/
├── /images/
├── /prescipciones/
│   ├── listaCitas.html
│   ├── detalleCitas.html
│   └── listaCitas.html
├── /enfermeria/
│   └── /enfermeria-sass-vite/
│       ├── /dist/ 
│       ├── /src/ 
│       │   ├── /images/
│       │   ├── /styles/
│       │   │   ├── /components/
│       │   │   ├── /pages/
│       │   │   └── main.scss
│       │   └── main.js
│       ├── vite.config.js
│       ├── hojaMedicacion.html
│       └── index.html
├── /urgencias/
│   └── /urgencias-tailwind-vite/
│       ├── /dist/ 
│       ├── /src/ 
│       │   ├── /images/
│       │   ├── /styles/
│       │   │   ├── variables.css
│       │   │   └── /components/
│       │   └── main.css
│       ├── tailwind.config.js
│       ├── vite.config.js
│       ├── triaje.html
│       └── index.html
├── /styles/
│   ├── /components/
│   │   ├── btn.css
│   │   └── resert
│   ├── /pages/
│   │   ├── index.css
│   │   └── resert
│   ├── main.css
│   ├── variables
│   └── resert
├── index.html
├── main.html
└── README.md
```