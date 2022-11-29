import "./styles.css";
import Vector from "./functions/Vector.js";
import $ from "jquery";

function ControlPanel() {
  this.commands = [
    "select point", //selects a point so that other operations can be performed
    "add control point", //adds control point to curve, placed in points array based on selected point
    // [(start), end] => [start, 1, end]
    //[start, (1), end] => [start, 1, 2, end]
    //[start, 1, (2), end] => [start, 1, 2, 3, end] //so basically always to the middle
    "continue path", //creates a curve that starts where the last one ended and ends on click position
    "new path" //creates starting point of a new curve
  ];
  this.activeCommand = "addPoint";
}

function CanvasPainter() {
  this.canvas = $("canvas")[0];
  this.ctx = this.canvas.getContext("2d");
  this.paths = []; //path is colletion of bezier curves
  this.canvas.addEventListener("click", (e) => {
    this.handleClick(e);
  });
}

CanvasPainter.prototype.handleClick = function (e) {
  console.log("I've been clicked");
};
