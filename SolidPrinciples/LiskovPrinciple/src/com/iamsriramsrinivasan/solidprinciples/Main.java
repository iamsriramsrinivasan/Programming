package com.iamsriramsrinivasan.solidprinciples;

// Liskov Principle states, If class A is a subtype of class B, then we should be able to replace B with A without disrupting
// the behavior of our program.
public class Main {

    public static void main(String[] args) {
	// write your code here
        Car car = new MotorCar();
        car.hasEngine();
        car.start();
        car.accelerate();
        car.applyBrake();

        Car eCar = new ElectricCar();
        eCar.hasEngine();
        eCar.start();
        eCar.accelerate();
        eCar.applyBrake();
    }
}
