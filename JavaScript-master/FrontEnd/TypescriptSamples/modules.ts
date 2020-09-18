// Modules in Typescript code written by Sriram Srinivasan on 03/09/2019

/* We now use our Customer class to learn about how to export and import a module. */

//Export this class to be imported where it is getting used.
export class Customer {
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
