var dataset = [5, 10, 15, 20, 25, 30];

d3.select("div")
    .data(dataset)
    .style("height", function(d) {
        var barHeight = d * 5;
        return barHeight + "px";
    });

var w = 1500;
var h = 50;

var svg = d3.select("body")
    .attr("width", w)
    .attr("height", h)

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("fill", "orange")
    .attr("cx", function(d, i) {
        return (i * 50) + 25;
    })
    .attr("cy", h / 2)
    .attr("r", function(d) {
        return d / 2;
    });