import { Customer } from "./modules";

//Now we can use Customer class

let cust = new Customer();
cust.customerName = "Sriram";
cust.customerAge = 46;
cust.customerEmail = "sriram@sriraminc.com";

console.log(cust.customerName, cust.customerAge, cust.customerEmail);
