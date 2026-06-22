// Modern, fully local build: d3 is imported from node_modules and bundled
// by Vite. No CDN, no script tags, no jQuery.
import * as d3 from "d3";

// Styles come in through the bundler too.
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap 5's JS components (Popper-powered, no jQuery). Pulled in for a
// batteries-included template; drop this line if you only need the CSS.
import "bootstrap";
import "./style.css";

// Replaces jQuery's $( document ).ready()
window.addEventListener("DOMContentLoaded", () => {
    // let's get started
    var mysvg = d3.select("#myfigure").append("svg");

    mysvg.append("rect")
        .attr("height", 600)
        .attr("width", 600)
        .attr("fill", "black");

    console.log("Finished drawing rectangle.");

    // Intentionally left on the old d3 v4 callback API. Modern d3 (v5+)
    // returns a Promise here and ignores the callback, so this never logs
    // anything -- that's the broken file reference we fix live in the demo.
    // The fix: d3.text("data/myfile.txt").then(d => { ... });
    d3.text("data/myfile.txt", function(e, d) {
        console.log("Data loaded. Data:");
        console.log(d);
    });
});
