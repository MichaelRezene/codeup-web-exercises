"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];


var favorite = 'Blue'; // TODO: change this to your favorite color from the list
// TODO: Create a block of if/else statements to check for every color except indigo and violet.

//       Example: Blue is the color of the sky.
if (color === 'red') {
    console.log("The color is red!")
} else if (color === 'blue') {
    console.log("The color is blue!");
} else if (color === 'green'){
    console.log("The color is green!");
}else if (color === "orange"){
    console.log(favorite + " is my forite color!");
}else if (color === "yellow"){
    console.log("The color is yellow!");
}else{
    console.log("The color is indigo!");
    console.log("The color is violet!");
}
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
    var message = (color === favorite)? " the fav muches": "the fav doesn't much";
 console.log(message);