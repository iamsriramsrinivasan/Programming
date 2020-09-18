package com.iamsriramsrinivasan.solidprinciples;

public class MotorCar implements Car{

    private boolean hasEngine;

    @Override
    public void hasEngine() {
        hasEngine =  true;
        System.out.println("Motor Car has Engine");
    }

    @Override
    public void start() {
        System.out.println("Motor Car has Started");
    }

    @Override
    public void accelerate() {
        System.out.println("Motor Car has Accelerated");
    }

    @Override
    public void applyBrake() {
        System.out.println("Motor Car has applied brake");
    }
}
