package com.iamsriramsrinivasan.solidprinciples;

//CustomerDetails class has only one responsibility that is to share customer details in various formats.
public class CustomerDetails {

    public void printCustomerDetails(){
        Customer printCustomer = new Customer(1, "Sriram", "Srinivasan");
        String message = "Customer Details : "
                + printCustomer.getId()
                + " "
                + printCustomer.getFirstName()
                + " "
                + printCustomer.getLastName();

        System.out.println(message);
    }
}
