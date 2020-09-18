package com.iamsriramsrinivasan.solidprinciples;

//This is a generic customer object that captures key details about a customer
//Open Closed principle states that a class should be open for extension and closed for modification
//Now you decide to seggregate customers based on a classification. Instead of doing that change here
//Let's keep this class pure and start extending customer class to add according to classifications.

public class Customer {
    private long id;
    private String firstName;
    private String lastName;

    public Customer(long id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
