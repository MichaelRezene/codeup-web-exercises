
 var number = 1;

 while(number < 65536){
        number = number * 2;
      console.log(number);
}



//=========== 4 do while loop ======
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5
// var cones = Math.floor(Math.random() * 5) + 1;

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - cones;
    console.log(cones + " cones are sold");
    if (allCones<cones) {
        console.log(" Cannot sell you " + cones + " cones I only have " + allCones + "...")
    }
} while (allCones > 0);





