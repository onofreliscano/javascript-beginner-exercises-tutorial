
//var age = prompt('What is your age?');

/*
var age =10;
console.log(age);
console.log(typeof age);
*/

const prompt = require('prompt');
prompt.start();

var schema = {
    properties: {
      age: {
        pattern: /^(0|[1-9][0-9]*)$/,
        message: 'Please imput only numbers!',
        required: true
      }
    }
  };
  prompt.start();

  prompt.get(schema, function (err, result) {
    
    console.log('Your age was received. Thanks!');
    console.log('You are ' + result.age + ' years old!');
  });