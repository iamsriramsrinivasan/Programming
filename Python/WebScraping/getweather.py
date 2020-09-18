# Get Wether Beautiful Soup Python Sample
# Author: Sriram Srinivasan
# Written On: 08/09/2019

import pandas as pd
import requests
from bs4 import BeautifulSoup

page = requests.get(
    'https://forecast.weather.gov/MapClick.php?lat=40.7146&lon=-74.0071#.XXTG5igzZPY')
soup = BeautifulSoup(page.content, 'html.parser')
week = soup.find(id='seven-day-forecast-body')
items = week.find_all(class_='tombstone-container')

periodNames = [item.find(class_='period-name').getText() for item in items]
weatherDesc = [item.find(class_='short-desc').getText() for item in items]
tempValue = [item.find(class_='temp').getText() for item in items]

saveWeatherData = pd.DataFrame({
    'Period': periodNames,
    'Description': weatherDesc,
    'Temperature': tempValue
})

print("Creating a CSV...")
saveWeatherData.to_csv("NewYork7DaysWeatherData.csv")
print("Creating an Excel...")
saveWeatherData.to_excel("NewYork7DaysWeatherData.xls")

