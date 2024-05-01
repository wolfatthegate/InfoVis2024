//EUI graph

var  margin = {top: 20, right: 20, bottom: 40, left: 50},
  width = 1500 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var xmin = 0.12,
    xmax = 0.50,
    ymin = 25,
    ymax = 30;

var x = d3.scale.ordinal().rangePoints([0, width], 1),
    y = {},
    dragging = {};

var line = d3.svg.line(),
	axis = d3.svg.axis().orient("left"),
	background,
	foreground;
	
var euiSvg = d3.select("#EUIChartDiv").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = d3.csv.parse(d3.select(parametric_data).text());

var data_rows = d3.csv.parseRows(d3.select(parametric_data).text());

  x.domain(dimensions = d3.keys(data[0]).filter(function(d) {
    return d != "name" && (y[d] = d3.scale.linear()
        .domain(d3.extent(data, function(p) { return +p[d]; }))
        .range([height, 0]));
  }));


background = euiSvg.append("g")
.attr("class", "background")
.selectAll("path")
.data(data)
.enter().append("path")
.attr("d", path); 

//add blue foreground lines
foreground = euiSvg.append("g")
.attr("class", "foreground")
.selectAll("path")
.data(data)
.enter().append("path")
.attr("d", path);

//add a group element for each dimension
var g = euiSvg.selectAll(".dimension")
.data(dimensions)
.enter().append("g")
.attr("class","dimension")
.attr("transform",function(d){return "translate(" + x(d) + ")";})
.call(d3.behavior.drag()
.origin(function(d){return{x:x(d)};})
.on("dragstart",function(d){
dragging[d] = x(d);
background.attr("visibility","hidden");
})
.on("drag",function(d){
dragging[d] = Math.min(width, Max.max(0, de.event.x));
foreground.attr("d",path);
dimensions.sort(function(a,b){return position(a)-position(b);});
x.domain(dimensions);
g.attr("transform",function(d){return "translate(" + position(d) +")"});
})
.on("dragend",function(d){
delete draggin[d];
transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
transition(foreground).attr("d",path);
background
.attr("d",path)
.transition()
.delay(500)
.duration(0)
.attr("visibility",null);
}));

//add an axis and title
g.append("g")
.attr("class","axis")
.each(function(d){d3.select(this).call(axis.scale(y[d]));})
.append("text")
.style("text-anchor","middle")
.style("font-size", "14px")
.attr("y",-9)
.text(function(d){return d;});

//add and store a brush
  g.append("g")
      .attr("class", "brush")
      .each(function(d) {
        d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
      })
    .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);

$(document).ready( function () {

  var columnDefs = [{
    title: "Name"
  }, {
    title: "YTD"
  }, {
    title: "3MO"
  }, {
    title: "1YR"
  }, {
    title: "3YR"
  }, {
    title: "5YR"
  }, {
	title: "Yield"
  }, {
	title:"Expense ratio"
  }, {
	title: "Mgr tenure"
  }, {
	title: "Fans EUI (kBtu/sf)"
  }, {
	title: "Total EUI (kBtu/sf)"
  }
  
  ];
 
var myTable;
  
 myTable = $('#myTable').DataTable({
	data: data_rows.slice(1,data_rows.length),
	columns: columnDefs,
	"lengthMenu": [[50, 100, -1], [50, 100, "All"]]
	});
} );

	  
function position(d){
	var v = dragging[d];
	return v == null ?x(d):v;
}

function transition(g) {
  return g.transition().duration(500);
}

// Returns the path for a given data point
function path(d) {
  return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
}

function brushstart() {
  d3.event.sourceEvent.stopPropagation();
}

// Handles a brush event, toggling the display of foreground lines
function brush() {
  var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
      extents = actives.map(function(p) { return y[p].brush.extent(); });
  foreground.style("display", function(d) {
    return actives.every(function(p, i) {
      return extents[i][0] <= d[p] && d[p] <= extents[i][1];
    }) ? null : "none";
  });
}