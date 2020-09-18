// Classes & Properties in Typescript code written by Sriram Srinivasan on 03/09/2019

/* All related concepts should be in one unit and in programming parlance it is called as
COHESION. How we can implement the same in Typescript? Classes is the answer.
We can also use Properties feature in Typescript to give clean implementation for 
the class properties */

//First declare Customer class
class Customer {
  private _customerName: string;
  private _customerAge: number;
  private _customerEmail: string;

  set customerName(name) {
    if (name === " ") throw new Error("Customer Name should not be empty");

    this._customerName = name;
  }

  set customerAge(age) {
    if (age === 0) throw new Error("Customer Age cannot be 0");

    this._customerAge = age;
  }
  set customerEmail(email) {
    if (email === " ") throw new Error("Customer Email should not be empty");

    this._customerEmail = email;
  }

  get customerName() {
    return this._customerName;
  }
  get customerAge() {
    return this._customerAge;
  }
  get customerEmail() {
    return this._customerEmail;
  }
}

//Now we can use Customer class

let cust = new Customer();
cust.customerName = "Sriram";
cust.customerAge = 46;
cust.customerEmail = "sriram@sriraminc.com";

console.log(cust.customerName, cust.customerAge, cust.customerEmail);
