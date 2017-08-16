"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];

// console.log(color);
// TODO: create a case statement that will handle every color except indigo and violet
// TODO: when a color is encountered log a message that tells the color, and an object of that color
//       example: Blue is the color of the sky.

switch (color) {
    case "red":
        console.log("The color is red!");
        break;
    case "orange":
        console.log("The color is Orange");
        break;
    case "yellow":
        console.log("The color is Yellow");
        break;
    case "green":
        console.log("The color is Green");
        break;
    case "blue":
        console.log("Blue is the color of the sky.");
        break;
    default:
        console.log("I do not know anything by that color!");
        break;
// TODO: create a default case that will catch indigo and violet
// TODO: for the default case, log: I do not know anything by that color.
}
var minSale = 200;
/// input ->  procedure -> output
// input -> how much each person bought?
var cameronTotal = 180;
var ryanTotal = 250;
var georgeTotal = 320;


// Cameron case
var minSale = 200;
var discountCameron;
var discountRyan;
var discountGeorge;
// ===========
if (comeronTotal > minSale) {
    discountCameron = .9 * cameronTotal;
} else {
    discountCameron = cameronTotal;
}
//===========
if (ryanTotal > minSale) {
    discountRyan = .9 * ryanTotal;
} else {
    discountRyan = ryanTotal;
}
// =============
if (georgeTotal > minSale) {
    discountGeorge = .9 * georgeTotal;
} else {
    discountGeorge = georgeTotal;
}


// Input
