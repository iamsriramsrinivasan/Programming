package com.iamsriramsrinivasan.solidprinciples;

//The principle of Dependency Inversion refers to the decoupling of software modules.
// This way, instead of high-level modules depending on low-level modules, both will
// depend on abstractions.
//In this app "Log" is a dependency that is passed to MySofwareApp via it's constructor. 
public class Main {

    public static void main(String[] args) {

    	 Logger log = new Logger();
		 MySoftwareApp app = new MySoftwareApp(log);
		 app.appStarted();
		 app.appStopped();
    }
}
