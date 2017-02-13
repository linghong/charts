import * as d3 from 'd3';
import { scalepoint, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { zoom } from 'd3-zoom';
import "./style.css"

var margin={top:40, right:50, bottom:50, left:70}
var width = $("#stock-charts").width()-margin.left-margin.right;
var height = 740-margin.left-margin.right;
	
//scale
var x =d3.scalePoint()
		  .domain(["9:30", "10AM", "10:30", "11AM", "11:30", "12AM", "12:30", "1PM","1:30", "2PM","2:30", "3PM","3:30", "4PM"])
		  .range([0, width]);

var xScale = d3.scaleLinear()
    	.range([0, width])
      .domain([9.5, 16.0]);

var yScale = d3.scaleLinear()
		  .range([height, 0])      
      .domain([22.75, 24.0]);
	
var svg = d3.select("#stock-charts").append("svg")	
		  .attr("width", width+margin.left+margin.right)
		  .attr("height", height+margin.top+margin.bottom)
		  .append("g")
		  .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
		  .call(d3.zoom().on("zoom", () => svg.attr("transform", d3.event.transform)
		  ));

// Add the x Axis
svg.append("g")
      .attr("class", "axis")
      .attr("transform",
            "translate(0 ," + (height) + ")")
      .call(d3.axisBottom(x));

svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + (height+margin.bottom*3/4) + ")")
      .style("text-anchor", "bottom")
      .text("Time");

// Add the y Axis
svg.append("g")
  		.attr("class", "axis")
      .call(d3.axisLeft(yScale));

svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 -margin.left*0.9 )
      .attr("x", 0 - margin.top)
      .attr("dy", "1em")
      .style("text-anchor", "left")
      .text("Price ($)");      

d3.json("stock.json", (error, data) => {
  if(error) throw error;
	
	//for trading circles and tooltips
	var circles =svg.selectAll("circle")
		    .data(data.tradeList)

	circles.enter()
		.append('circle')
		.attr('r', (d) => Math.sqrt(d.shares)/3)
		.attr('cx', (d, i) => xScale(d.time/1000000000/60/60))
		.attr('cy', (d) => yScale(d.price/10000))
		.attr('class', (d) => {
			if(d.tradeType==="E"){
				return "e-node";
			} else {
				return "p-node";
			}
		});
});
