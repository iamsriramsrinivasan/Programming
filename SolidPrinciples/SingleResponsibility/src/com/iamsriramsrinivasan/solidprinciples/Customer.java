package com.iamsriramsrinivasan.solidprinciples;

//Customer class has only one responsibility that is to create and store customer objects.
//In single responsibility principle, a class should have only one responsibility.
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
