//undefined sample created by Sriram Srinivasan on 21/04/2020

//In JavaScript "undefined" is a special value which takes some memory as it is the
//default value assigned variables before initializing it with some value.
//In this sample, we see two cases.
//1. We will declare a variable and not initialise it
//2. We will declare a variable and initialize it with a value
//3. We will not declare a variable and use it anyways.
//4. We will assign "undefined" to a variable to see whether we can do this.

//1. Create a variable but not initialise it. Output will be "undefined"
//as JavaScript execution context on it's creation phase will see this
//variable and by default assign "undefined"
var someVar;
console.log(someVar);

//2. This is simple, create a variable and assign it to a value
var assignVar = "Hello Sriram";
console.log(assignVar);

//3. We will not create a variable but will use it. This will throw an error
//that the so called variable is not defined. When JavaScript execution engine
//looked at the console.log statement, it also sees, on it's execution context
//no such variable is there, so throw an error. Lets keep this code commented
//as execution will stop as the execution context will say I give up as there
//is no variable called "throwerror"
//console.log(throwError);

//4. We will create a variable, assign a value to it and print the same and then assign it
//the special value "undefined". Yes, if you have guessedit, now the variables value will be
//undefiend.
var testVar = "Test Value";
console.log(testVar);

testVar = undefined;
console.log(testVar);
