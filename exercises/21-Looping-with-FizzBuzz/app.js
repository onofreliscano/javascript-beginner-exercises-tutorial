

function fizzBuzz(){
    var i;
    
    for (i=1; i<=100; i++) {
        var multiplo3 = i%3;
        var multiplo5 = i%5;
        if (multiplo3 == 0 &&  multiplo5 != 0){
            console.log("Fizz");
        } 
        else if (multiplo3 != 0 && multiplo5 == 0){
            console.log("Buzz");
        } 
        else if (multiplo3 == 0 || multiplo5 == 0){
            console.log("FizzBuzz");
        } 
        else {
            console.log(i);
        }
    }

}



fizzBuzz();