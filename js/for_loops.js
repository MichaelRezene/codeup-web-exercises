
  var number = prompt("Enter number here!");

for (var i = 1; i <= 10; i++){
     console.log(number + "X" + i + "=" + i * number);
 }


//============ forloop 3 oddNumber and evenNumber ============



for (var i = 20; i<= 200;i++){
    var num = Math.floor(Math.random() * 180) + 20;

    if (i % 2 === 0) {
        console.log(i + " is even number");

    }else{
        console.log(i + " is odd number");

    }
}

//=========Create a for loop that uses console.log to create the output shown below.======
  for(var i = 100; i >= 5; i = i -5){
    console.log(i);
  }