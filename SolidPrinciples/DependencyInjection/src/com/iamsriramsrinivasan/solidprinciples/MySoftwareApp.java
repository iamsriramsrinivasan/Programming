package com.iamsriramsrinivasan.solidprinciples;

public class MySoftwareApp {
    private Logger log;

    public MySoftwareApp(Logger log) {
        this.log = log;
    }
    public void appStarted(){
        log.printLog("Application Started");
    }
    public void appStopped(){
        log.printLog("Application Stopped");
    }

}
