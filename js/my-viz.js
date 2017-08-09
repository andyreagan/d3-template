// Shorthand for $( document ).ready()
$(function() {
    // let's get started
    var mysvg = d3.select("#myfigure").append("svg");

    mysvg.append("rect")
        .attr("height",600)
        .attr("width",600)
        .attr("fill","black");

    console.log("Finished drawing rectangle.");

    d3.text("data/my-data.txt",function(e,d) {
        console.log("Data loaded. Data:");
        console.log(d);
    });
});

