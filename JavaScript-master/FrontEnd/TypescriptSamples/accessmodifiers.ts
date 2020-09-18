// Access Modifiers & Constructors in Typescript code written by Sriram Srinivasan on 03/09/2019

/*Typescript has three access modifiers. They are 1. public, 2. private and 3. protected. The first 
two being most commonly used. By default all class members are public. */

//See how this verbose code is getting simplified by using a Constructor and also see how we
//can restrict access to class members by using access modifiers.

class Customer {
  /*See the constructor implementation. By declaring our class members on a constructor like this 
    Typescript generates class property variables and also assigns them the values we supply. We can also
    provide an option for a class variable to be optional by marking it with a question mark, like 
    the one you see on customerEmail variable. */
  constructor(
    private customerName: string,
    private customerAge: number,
    private customerEmail?: string
  ) {}

  getCustomer() {
    return this;
  }
}

//Now we can use Customer class

let cust = new Customer("Sriram", 46, "sriram@sriraminc.com");

console.log(cust.getCustomer());
