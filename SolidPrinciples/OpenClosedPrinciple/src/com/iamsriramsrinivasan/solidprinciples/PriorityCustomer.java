package com.iamsriramsrinivasan.solidprinciples;
//This class is for a classification priority customer. By doing this way, we are allowing our
//classes to extend but not changing the class with all features added to it.
//This way you have implemented open closed principle.

public class PriorityCustomer extends Customer{
    public PriorityCustomer(long id, String firstName, String lastName) {
        super(id, firstName, lastName);
    }

}
