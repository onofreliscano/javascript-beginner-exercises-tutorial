function isOdd(myNumber)
{
	return !(myNumber % 2 == 0);
}

function getTime (){
	return new Date();
}

// Your code below:

console.clear();
console.log ("isOdd function: " + isOdd(45345));
console.log("getTime function: " + getTime());