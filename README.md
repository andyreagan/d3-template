# D3 Template — Vite edition

A minimal template for jump starting D3 vis projects, with a modern,
fully local toolchain: [Vite](https://vitejs.dev/) + ES modules, with
[D3](https://d3js.org/) v7 imported from `node_modules` (no CDN, no
hand-vendored `<script>` tags).

> Looking for the build-free, vendored version? It lives on the `master`
> branch — just static files and a web server.

## Getting Started

First, clone the repo or download the zip where you want it, then change
into the folder:

```
git clone git@github.com:andyreagan/d3-template.git
mv d3-template my-new-project
cd my-new-project
# get rid of the template
\rm -rf .git
```

Install dependencies and start the dev server (hot module reloading):

```
npm install
npm run dev
```

navigate a browser to the URL it prints (typically
[http://localhost:5173/](http://localhost:5173/)), and hack away!

To make a production build into `dist/` and preview it:

```
npm run build
npm run preview
```

## Where things live

- `index.html` — the page; it loads the app as an ES module.
- `src/my-viz.js` — the D3 code (start here). It imports d3, Bootstrap's
  CSS, and `src/style.css`.
- `src/style.css` — your styles.
- `public/data/` — static assets served at the site root (e.g.
  `public/data/myfile.txt` is fetched as `data/myfile.txt`).

For a basic tutorial, I highly recommend the introductory tutorials by
[Scott Murray](http://alignedleft.com/tutorials/d3/adding-elements) and
his online book.
