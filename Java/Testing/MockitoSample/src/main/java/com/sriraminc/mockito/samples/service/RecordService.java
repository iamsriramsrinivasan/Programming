package com.sriraminc.mockito.samples.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.sriraminc.mockito.samples.record.dao.DatabaseDAO;
import com.sriraminc.mockito.samples.record.dao.NetworkDAO;

public class RecordService {

	@Autowired
	DatabaseDAO database;
	
	@Autowired
	NetworkDAO network;


	public boolean save(String fileName) {
		database.save(fileName);
		System.out.println("Saved in database in Main class");

		network.save(fileName);
		System.out.println("Saved in network in Main class");

		return true;
	}

}
