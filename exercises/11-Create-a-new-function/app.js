/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here



function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
    //return Math.floor(Math.random(max) * 10);
}

console.log("Btween 0 and 9 I get: " + random(9));