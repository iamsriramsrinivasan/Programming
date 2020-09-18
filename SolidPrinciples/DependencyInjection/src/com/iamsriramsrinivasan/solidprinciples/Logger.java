package com.iamsriramsrinivasan.solidprinciples;

public class Logger implements Log{
    @Override
    public void printLog(String message) {
        System.out.println("MySoftwareApp Log: " + message);
    }
}
