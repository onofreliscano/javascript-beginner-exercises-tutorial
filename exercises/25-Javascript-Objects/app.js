var person = {
    name: "John",                             //String
    lastname: "Doe",
    age: 35,                                  //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17],          //Array
    significant_other: person2                //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var person3 = {
        name: "Jimmy",                           
        lastname: "Doe",
        age: 13,                                 
        gender: "male",
        lucky_numbers: [ 1, 2, 3, 4],          
        significant_other: null               
    };

var family = {
    lastname: "Doe",
    members: [person, person2, person3]                //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0;              //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:

//console.log(family.members[1].name);
//console.log( family.members[1].significant_other.lucky_numbers[3]);


function changeFourthLuckyNumber_JohnDoe (){
    family.members[0].lucky_numbers[3] = 33;
    console.log (family.members[0].lucky_numbers[3]);
}

function createNewFamilyMember (){ 
   console.log('New Family member: ', person3);
}

function sumDoeLuckyNumbers () {
    console.log (family.members[0].lucky_numbers[1])
}

console.log("-----------------Change 4th lucky number for Jhon Doe--------------------------")

changeFourthLuckyNumber_JohnDoe();


console.log("-----------------------Create new family member---------------------------------")

createNewFamilyMember();

console.log("---------------------Sum of Doe family lucky numbers----------------------------")

sumDoeLuckyNumbers();

console.log("-------------------------------- END -------------------------------------------")



//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 