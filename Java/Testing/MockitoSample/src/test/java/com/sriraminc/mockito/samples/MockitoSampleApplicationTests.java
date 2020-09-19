package com.sriraminc.mockito.samples;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import com.sriraminc.mockito.samples.record.dao.DatabaseDAO;
import com.sriraminc.mockito.samples.record.dao.NetworkDAO;
import com.sriraminc.mockito.samples.service.RecordService;

@RunWith(org.mockito.runners.MockitoJUnitRunner.class)
public class MockitoSampleApplicationTests {

	@InjectMocks
	RecordService recordService;

	@Mock
	DatabaseDAO databaseMock;

	@Mock
	NetworkDAO networkMock;
	
	@Test
	public void saveTest() {
		boolean saved = recordService.save("temp.txt");
        assertEquals(true, saved);
         
        verify(databaseMock, times(1)).save("temp.txt");
        verify(networkMock, times(1)).save("temp.txt");
	}

}
