import d3 from "d3";
import { TreeUtils } from "../utils/TreeUtils";

export class Tree {
    
    public createTree(treeData: JSON) {
        this.draw(treeData);
    }

    private draw(treeData: JSON) {
        var margin = { top: 40, right: 45, bottom: 150, left: 45 }, width = window.innerWidth - margin.left - margin.right, height = window.innerHeight - margin.top - margin.bottom;

        var treemap = d3
            .tree()
            .size([width, height])
            .separation(function (a, b) {
                return 1.75;
            })
            .nodeSize([200, 200]);

        var nodes = d3.hierarchy(treeData);

        nodes = treemap(nodes);

        var svg = d3
            .select("#map")
            .append("div")
            .attr("width", width)
            .attr("height", height)
            .attr("id", "container")
            .append("svg")
            .on("click", TreeUtils.createDateNowString)
            .attr("class", "graph-svg-component")
            .attr("id", "board")
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom), g = svg
                .append("g")
                .attr(
                    "transform",
                    "translate(" + width / 2 + "," + height / 2 + ")"
                );

        const handleZoom = (e) => g.attr("transform", e.transform);
        const zoom = d3.zoom().scaleExtent([0, 10]).on("zoom", handleZoom);

        d3.select("svg").call(zoom);

        var link = g
            .selectAll(".link")
            .data(nodes.descendants().slice(1))
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("d", function (d) {
                return (
                    "M" +
                    d.x +
                    "," +
                    d.y +
                    "C" +
                    d.x +
                    "," +
                    (d.y + d.parent.y) / 2 +
                    " " +
                    d.parent.x +
                    "," +
                    (d.y + d.parent.y) / 2 +
                    " " +
                    d.parent.x +
                    "," +
                    d.parent.y
                );
            });

        var textWrap = 250;

        var node = g
            .selectAll(".node")
            .data(nodes.descendants())
            .enter()
            .append("g")
            .attr("class", function (d) {
                return (
                    "node" + (d.children ? " node--internal" : " node--leaf")
                );
            })
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.append("circle")
            .attr("cx", 0)
            .attr("cy", 30)
            .attr("r", 30)
            .attr("fill", "#fff")
            .attr("stroke", "steelblue")
            .attr("stroke-width", "3px")
            .attr("visibility", (d) => {
                return d.data.question === "" && d.data.id !== 0
                    ? "visible"
                    : "hidden";
            });

        node.append("line")
            .style("stroke", "steelblue")
            .style("stroke-width", 3)
            .attr("x1", -30)
            .attr("y1", 60)
            .attr("x2", 30)
            .attr("y2", 0)
            .attr("visibility", (d) => {
                return d.data.question === "" && d.data.id !== 0
                    ? "visible"
                    : "hidden";
            });

        node.append("rect")
            .attr("x", -textWrap / 2)
            .attr("width", textWrap)
            .attr("fill", "#fff")
            .attr("stroke", "steelblue")
            .attr("stroke-width", "3px")
            .attr("visibility", (d) => {
                if (d.data.level === 0 || d.data.question === "")
                    return "hidden";
            })
            .attr("height", function (d) {
                return Math.ceil(d.data.question.length / textWrap) * 100;
            })
            .on("click", function () {
                var sel = d3.select("svg");
                var coordinates;
                sel.on("click", function (event, d) {
                    coordinates = d3.pointer(event, node);
                    console.log(coordinates[0]);
                    var x = coordinates[0];
                    var y = coordinates[1];
                });
            });

        node.append("text")
            .attr("id", "node-text")
            .attr("dy", ".35em")
            .attr("y", 20)
            .style("font-size", "12px")
            .style("font-family", "Ubuntu")
            .style("font-weight", "bold")
            .style("text-anchor", "middle")
            .style("fill", "#3E4042")
            .text(function (d) {
                return d.data.question;
            })
            .call(wrap, textWrap);

        node.append("text")
            .attr("id", "node-question")
            .style("font-family", "Ubuntu")
            .style("font-weight", "bold")
            .style("fill", "#0084FF")
            .attr("dy", ".35em")
            .attr("y", (d) => {
                return d.data.level == 0 ? -80 : -50;
            })
            .style("font-size", (d) => {
                return d.data.level == 0 ? 14 + "px" : 12 + "px";
            })
            .text((d) => {
                return d.data.level == 1 ? null : d.data.sentence;
            })
            .call(wrap, textWrap);

        node.append("text")
            .attr("dy", ".34em")
            .attr("y", 80)
            .style("font-family", "Ubuntu")
            .attr("x", -3)
            .text((d) => {
                return d.data.id;
            });

        node.append("image")
            .attr("id", "image-foreign")
            .attr("x", -textWrap / 2 + 115.5)
            .attr("y", (d) => {
                return d.data.question === "" ? 20 : 40;
            })
            .attr("width", 20)
            .attr("height", 24)
            .attr("xlink:href", (d) => {
                if (d.data.question !== "" &&
                    d.data.id !== 0 &&
                    d.data.children.length == 0) {
                    return "/static/icons/question.png";
                }
            });

        d3.select("#file").on("click", function () {
            TreeUtils.displayLoading();
            let filename = TreeUtils.createDateNowString("map");
            //Correct the scale if its necessary
            saveSvgAsPng(document.getElementsByTagName("svg")[0], filename, {
                scale: 5,
                backgroundColor: "#FFFFFF",
            });
            alert(
                "Zapisano plansze jako plik .png. Następuje przekierowanie do strony głównej..."
            );
            TreeUtils.hideLoading();
            TreeUtils.redirect(API.main, 2000);
        });
    }

    private wrap(text: string, width: number) {
        text.each(function () {
          var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1,
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
          while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
          }
        });
      }
      
      private updateTree(treeData: JSON) {
        d3.selectAll("foreignObject").remove()
        d3.selectAll("#container").remove();
        this.draw(treeData);
      }

}
