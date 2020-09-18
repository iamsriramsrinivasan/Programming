package com.iamsriramsrinivasan.solidprinciples;

public class ElectricCar implements Car {

    private boolean hasEngine;

    @Override
    public void hasEngine() {
        hasEngine = false;
        System.out.println("Electric Car does not have an Engine");
    }

    @Override
    public void start() {
        System.out.println("ElectricCar Started");
    }

    @Override
    public void accelerate() {
        System.out.println("ElectricCar Accelerated");
    }

    @Override
    public void applyBrake() {
        System.out.println("ElectricCar Brake Applied");
    }
}
