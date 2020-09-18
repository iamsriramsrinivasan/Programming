// Type Assertions in Typescript code written by Sriram Srinivasan on 02/09/2019

/* 
Type assertions are needed when a variable is not specifically declared as a particular
type but want to be used in a specific way. So in this case you need to tell the compiler 
that this variable is of a specific type. This assertion does not change anything 
at runtime, but strictly tells compiler about a variables type thats all. 
Let's see this in code below*/

/* To compile this code use the following options. endsWith is an ES6 method so compile this way
tsc --target ES6 typeassertions.ts */

let someMessage; // this variable is not given any default value hence, compiler treats this as of "any" type.
someMessage = "sriram"; // now we have decided to give this variable a string type

let result = someMessage.endsWith("m"); // compiler treats this as any variable hence intellisense will not work.

//to make compiler take notice that this variable is a string, we need to tell it.

let value = (<string>someMessage).endsWith("m"); //this is the commonly used way, but there is another way
let value1 = (someMessage as string).endsWith("m");
