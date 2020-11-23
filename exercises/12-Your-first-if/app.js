var total = prompt('How many km are left to go?');

if (total > 100) {
    console.log ("We still have a bit of driving left to go");
}
else if (total <= 100 && total > 50 ) {
    console.log ("We'll be there in 5 minutes");
}
else if (total < 50) {
    console.log ("I'm parking. I'll see you right now");
}
else {
    console.log ("I don't know what to say. \nPlease ask me again... " );
}

// Your code below:
