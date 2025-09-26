# Calculadora de Intereses

## Descripción

Aplicación web simple para calcular la cuota fija de un préstamo (amortización + interés). Recibe Capital, Número de cuotas y Tasa de interés (%) y muestra la cuota periódica y la tabla de amortización.

#Puedes visitar la cálculadora en funcioamiento acá: [Calculadora](https://vedgarcia.github.io/calculador_intereses/)

## Funcionalidades

- Entradas: Capital, Tasa de interés (%) y Número de cuotas.
- Cálculo de cuota fija mediante la fórmula financiera.
- Generación y visualización de la tabla de amortización (saldo, interés, amortización por cuota).
- Reinicio/limpieza de resultados en la UI.

## Fórmula usada

La cuota fija A se calcula como:

A = (C \* i) / (1 - (1 + i)^-n)

donde:

- C: capital
- i: tasa por período en decimal (ej. 5% → 0.05)
- n: número de cuotas

## Archivos principales

- `index.html` — página base.
- `style.css` — estilos.
- `main.js` — montaje de la UI y manejo de eventos.
- `constant.js` — funciones de cálculo (`calcCuote`, `calcAmort`, `generarLista`, `cleanForm`).
- `counter.js` — utilitarios (si aplica).
- `package.json`, `vite.config.js` — configuración del proyecto y scripts.

## Requisitos

- Node.js instalado. También funciona con yarn.
  PD: Funciona con cualquier versión por lo sencilla de la app.

## Dependencias

- Dev:
  - vite
  - gh-pages (opcional, para deploy)
- Para versiones exactas, ver `package.json`.

## Cómo levantar el servidor de desarrollo

Desde la raíz del proyecto:

```sh
npm install
npm run dev
```

Por defecto Vite sirve la app en http://localhost:5173 (o la URL que Vite muestre en consola).

## Scripts útiles (ejemplos)

- `npm run dev` — inicia servidor de desarrollo.
- `npm run build` — construye para producción.
- `npm run deploy` — (si está configurado) publica en GitHub Pages.

## Notas rápidas sobre el flujo de código

- `main.js` crea la UI y conecta eventos con las funciones de `constant.js`.
- `constant.js` contiene `calcCuote`, `calcAmort`, `generarLista` y `cleanForm`.
- Revisar `vite.config.js` y `package.json` para ajustes de build/deploy.

Si se desea, se puede ajustar la UI o los cálculos revisando los archivos mencionados.
