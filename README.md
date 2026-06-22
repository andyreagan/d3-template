# D3 Template

> ⚠️ **This repository is archived and no longer maintained.**
> It has been superseded by **[cookiecutter-d3](https://github.com/andyreagan/cookiecutter-d3)**, which is the template I actually use — please start new projects there.
>
> If you still want this standalone template, modernized variants live on two branches:
> - [`modernize`](../../tree/modernize) — same build-free, vendored setup with current libraries (d3 v7, jQuery 3.7.1, Bootstrap 5.3).
> - [`vite-local`](../../tree/vite-local) — a fully local [Vite](https://vitejs.dev/) + ES modules build (d3 imported from `node_modules`, no jQuery).

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
python -m SimpleHTTPServer 8000
```
navigate a browser to [http://localhost:8000/](http://localhost:8000/),
and hack away!
The file you'll be seeing right away is `index.html`,
so start there,
and the JS code that is referenced is `js/my-viz.js` (you could start there next, or right away).

For a basic tutorial, I highly recommend the introductory tutorials by [Scott Murray](http://alignedleft.com/tutorials/d3/adding-elements) and his online book.


If you're doing the right thing and running `python3`, starting the server will look more like `python3 -m http.server`.
Or if you have `node` installed, their `http-server` is more stable under many requests in my experience (but generally, not necessary).

