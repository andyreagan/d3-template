# D3 Template

> ⚠️ **This repository is archived and no longer maintained.**
> It has been superseded by **[cookiecutter-d3](https://github.com/andyreagan/cookiecutter-d3)**, which is the template I actually use — please start new projects there.
>
> This branch is the build-free, vendored setup with current libraries (d3 v7, jQuery 3.7.1, Bootstrap 5.3). For a fully local [Vite](https://vitejs.dev/) + ES modules build (d3 imported from `node_modules`, no jQuery), see the [`vite-local`](../../tree/vite-local) branch.

A minimal template for jump starting D3 Vis projects.

## Getting Started

First, clone the repo or download the zip where you want it.
Then change into the cloned or unzipped folder.
Here's an example cloning the repo:

```
git clone git@github.com:andyreagan/d3-template.git
mv d3-template my-new-project
cd my-new-project
# get rid of the template
\rm -rf .git
```

Start by launching the webserver with

```
python3 -m http.server 8000
```
navigate a browser to [http://localhost:8000/](http://localhost:8000/),
and hack away!
The file you'll be seeing right away is `index.html`,
so start there,
and the JS code that is referenced is `js/my-viz.js` (you could start there next, or right away).

For a basic tutorial, I highly recommend the introductory tutorials by [Scott Murray](http://alignedleft.com/tutorials/d3/adding-elements) and his online book.

Or if you have `node` installed, their `http-server` is more stable under many requests in my experience (but generally, not necessary).

## Dependencies

Everything is vendored locally (no build step, no CDN) so the template "just works" off a static server:

- [D3](https://d3js.org/) v7 (`js/d3.v7.js`)
- [jQuery](https://jquery.com/) 3.7.1 (`js/jquery-3.7.1.min.js`)
- [Bootstrap](https://getbootstrap.com/) 5.3 (`css/bootstrap.min.css`, `js/bootstrap.bundle.min.js`)

For a modern, fully local build-tooling version (npm + [Vite](https://vitejs.dev/), ES modules, d3 imported from `node_modules`), see the `vite-local` branch.

