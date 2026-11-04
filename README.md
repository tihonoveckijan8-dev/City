# METROPOLIS — City Builder

A standalone browser city-building game. The project is split into separate static files and can be published with GitHub Pages.

## Project structure

- `index.html` — page markup and app shell
- `style.css` — all visual styles and responsive layout
- `app.js` — game logic, map rendering, construction and simulation
- `manifest.webmanifest` — installable web app metadata
- `icon.svg` — application icon
- `.nojekyll` — static hosting support for GitHub Pages

## Run locally

Open `index.html` in a modern browser. No build tools or server are required.

## Publish as a website with GitHub Pages

1. Open the repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`, then click **Save**.
4. Wait for the Pages deployment to finish. GitHub will show the published website address in the same Pages section.

## Current prototype

- Isometric 12×12 city map.
- Place roads, homes, shops, factories, parks, schools, clinics and power stations.
- Monthly budget simulation with taxes, building income and maintenance.
- Population, housing capacity, happiness, jobs and electricity indicators.
- Upgrade and demolish buildings; rename the city.
- Automatic browser save using `localStorage`.

Saves are local to the browser/device and are not synchronized between devices yet. Deeper zoning demand, transport networks, water, waste and citizen simulation are planned for future updates.
