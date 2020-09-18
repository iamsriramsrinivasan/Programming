// Type Assertions in Typescript code written by Sriram Srinivasan on 03/09/2019

/* 
Arrow functions as it called in Typescript makes your code concise and readable. In other languages
this is called lambda expression*/

let logMessage = function sayHello(message) {
  console.log(message);
};

//this function can be written in a concise manner using arrow function.
// no need for curly braces if there is only one line inside that function

let anotherMessage = message => console.log(message);
