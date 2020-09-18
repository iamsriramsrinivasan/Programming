// Variables in Typescript code written by Sriram Srinivasan on 02/09/2019

/* Typescript has strict type checking during compile time, this means
you cant create a variable like a = 10 and then assign a = "sriram" which 
is very much possible in Javascript. The benefit is when you do such thing in your code
your IDE will warn and Typescript will give you compiler error. Even in this case you will 
get a working Javascript as a result of this compilation. So that should not encourage 
you to write such assignemnts in your code */

let a: number; //integer, floating point number and so on....
let b: boolean;
let c: string;
let d: any; // d can be anything you put into not attached to a specific type
let e: number[] = [1, 2, 3]; //an integer array
let f: any[] = [1, "true", 2, "sriram"]; //an array that can contain any type

/*
enum creates a new type with unique values
It's better to give it's ranking values 0,1,2 
if not then dynamic ranking assignment wokuld 
break the code in the future. enums are not there
in javascript but when you compile this code, you 
will learn how in javascript you can implement the
same. 
*/
enum Color {
  red = 0,
  blue = 1,
  yellow = 2
}

let myColor = Color.red;
