# my-app — Tienda de ejemplo con React

Proyecto didáctico para entender cómo funciona **React**. Es una pequeña tienda
online con catálogo de productos, página de detalle y un carrito de compras que
se guarda en la sesión del navegador.

Construido con:

- **React 19** — librería para construir interfaces a base de componentes.
- **Vite** — servidor de desarrollo y empaquetador (build) muy rápido.
- **React Router 7** — navegación entre pantallas por URL sin recargar la página.

## Cómo ejecutarlo

```bash
npm install      # instala las dependencias
npm run dev      # arranca el servidor de desarrollo (con recarga en caliente)
npm run build    # genera la versión optimizada para producción en /dist
npm run preview  # sirve localmente lo generado por build
npm run lint     # revisa el código con ESLint
```

## Cómo está organizado el código

El flujo de la app es: **`main.jsx` → `Router` → `Layout` → pantalla**. El estado
del carrito vive en un **Context** que cualquier componente consume con el hook
`useAppContext()`.

```text
src/
├── main.jsx                  Punto de entrada: monta React y anida los providers
├── router/Router.jsx         Mapea cada URL a su pantalla
├── layout/Layout.jsx         Estructura común (navbar + <Outlet/> de la ruta activa)
│
├── contexts/
│   ├── AppContext.js         Crea el objeto Context (estado global)
│   └── AppProvider.jsx       Provider: guarda el carrito y expone sus acciones
├── hooks/
│   └── useAppContext.jsx     Hook para leer el contexto de forma segura
│
├── screens/                  Pantallas (una por ruta)
│   ├── HomePage.jsx          Inicio: hero + demo de useState/useRef + catálogo
│   ├── ProductsPage.jsx      Listado de productos
│   ├── ProductDetailPage.jsx Detalle de un producto (lee el id de la URL)
│   └── CartPage.jsx          Carrito: total, eliminar y vaciar
│
├── components/               Piezas reutilizables de UI
│   ├── Navbar.jsx            Barra de navegación + contador del carrito
│   ├── ProductList.jsx       Recorre los productos y renderiza una tarjeta por cada uno
│   └── ProductCard.jsx       Tarjeta de un producto + botón "agregar al carrito"
│
├── data/products.json        Datos de ejemplo (catálogo)
├── styles/                   Hojas de estilo CSS
└── assets/                   Imágenes y logos
```

## Archivos de configuración

Estos archivos no contienen lógica de la app, sino que **configuran las
herramientas** que la hacen funcionar.

### `package.json`

El "carnet de identidad" del proyecto. Define:
- **`scripts`** — los atajos que ejecutas con `npm run ...` (`dev`, `build`, `lint`, `preview`).
- **`dependencies`** — librerías necesarias en producción: `react`, `react-dom` y `react-router`.
- **`devDependencies`** — herramientas solo de desarrollo: Vite, ESLint y sus plugins.
- **`type: "module"`** — indica que el proyecto usa la sintaxis moderna `import/export`.

### `package-lock.json`

Registro automático con las **versiones exactas** de cada dependencia (y sus
dependencias). Garantiza que todos instalen lo mismo. No se edita a mano.

### `vite.config.js`

Configura **Vite** (el servidor de desarrollo y el build). Aquí se activa el
plugin de React, que habilita JSX y la recarga en caliente (HMR).

### `eslint.config.js`

Configura **ESLint**, el analizador que detecta errores y malas prácticas. Incluye
las reglas recomendadas de JavaScript, las de los Hooks de React (para usarlos
correctamente) y las de Fast Refresh. Ignora la carpeta `dist`.

### `index.html`

La única página HTML. Contiene el `<div id="root">` donde React monta toda la app
y carga `src/main.jsx`. Vite usa este archivo como punto de partida.

### `.gitignore`

Lista de archivos y carpetas que Git **no** debe versionar, como `node_modules`
(se reinstala con `npm install`), `dist` (se regenera con el build) y `.env`
(variables secretas).
