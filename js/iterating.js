(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Micky", "Mercy","Geni","Freta"];


    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.
    // console.log('The first name is: ' + names[0] + "!");
    // console.log('The first name is: ' + names[1] + "!");
    // console.log('The first name is: ' + names[2] + "!");
    // console.log('The first name is: ' + names[3] + "!");
    for (var i = 0; i < names.length; i++) {
        console.log( names[i]);
    }

    // loop through the array and log the values
    names.forEach(function (element, index) {

        // element is the name
        // index is the iterator

        console.log('The first name is: '  + element);
    });
})();
