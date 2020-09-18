//Arrow Functions sample in ES6.
//Written by Sriram Srinivasan on 20/04/2020

/*Arrow Functions in ES6. Arrow functions comes without its own this, super, arguments or new.target 
and also makes code much less verbose and simple*/
function printName(name) {
  console.log("My name is : " + name);
}

//ReWrite this with arrow function
var printName = name => {
  console.log("My name is : " + name);
};

printName("sriram");
