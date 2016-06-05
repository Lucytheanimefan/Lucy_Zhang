var s = skrollr.init();

var main_svg = d3.select("#gears")
	.attr("width", 250)
	.attr("height", 250)
	.attr("transform", "rotate(150)");

d3.xml("http://people.duke.edu/~lz107/Lucy_Zhang/css/img/gear.svg", function(error, documentFragment) {
	if (error) {
		console.log(error);
		return;
	}

	var svgNode = documentFragment.getElementsByTagName("svg")[0];

	main_svg.node().appendChild(svgNode);

});

