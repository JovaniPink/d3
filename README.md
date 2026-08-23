# D3 and Plotly learning archive

This repository preserves exploratory data-visualization work from 2019-2021.
It is a learning archive, not a production application or a single finished
analysis.

The current tree combines two historical threads:

- NBA regression source files and instructions under `data/raw/`
- an unfinished NBA-branded page shell whose active D3 and Plotly code renders
  the Belly Button Biodiversity sample dataset

That mixed state is intentional to preserve the work's history, but it should
not be presented as a coherent NBA product or as a completed scientific study.
For the maintained and published biodiversity dashboard, use
[`JovaniPink/belly-graphs`](https://github.com/JovaniPink/belly-graphs) and its
[live GitHub Pages build](https://jovanipink.github.io/belly-graphs/).

## What this archive demonstrates

- loading a structured sample dataset into a browser application
- coordinating D3 selection and event handling with Plotly charts
- rendering bar, indicator-gauge, and scatter visualizations
- isolating sample lookup behavior behind a small tested module
- modernizing an older Parcel and node-sass build to Vite and Dart Sass

It does not establish data provenance, analytical validity, user adoption, or a
production deployment. A successful build proves only that the retained source
compiles; it does not resolve the page's placeholder copy, mixed NBA and
biodiversity identity, or incomplete assets.

## Run the archive locally

Node.js 22.12 or newer is required.

```bash
npm ci
npm run dev
```

Run the maintained gates with:

```bash
npm test
npm run format:check
npm run build
npm audit --audit-level=high
```

The production build is written to ignored `dist/`; this repository does not
publish that directory.

## Repository map

- `static/js/app.js` builds the retained biodiversity dashboard.
- `static/js/sample.json` contains the dashboard's sample data.
- `static/js/samples.js` defines the tested sample-selection contract.
- `data/raw/` contains separate 2017 NBA regression materials.
- `test/` contains the small Node test suite.
- `vite.config.js` defines the current build boundary.

## Data and evidence boundary

The source-data directories do not contain a complete provenance ledger or a
current research protocol. Treat their contents as course-era learning
materials, not as an authoritative NBA or microbiome dataset. Do not infer
medical, commercial, or statistical conclusions from this archive.

## License

The repository is available under the [MIT License](LICENSE). Third-party data,
fonts, images, and libraries retain their own terms and attribution requirements.
