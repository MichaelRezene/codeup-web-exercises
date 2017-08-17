var random = Math.floor(Math.random() * 50) + 1;

var number = prompt("Enter number here!");
console.log("Number to skip is: " + number);
for (var i = 1; i < 50; i++) {

    if (i % 2 === 0) {
        continue;
    }
    if (random === i) {
        console.log("Yikes! Skipping number: " + i)
    } else {
        console.log("Here is an odd number: " + i);
    }
}
