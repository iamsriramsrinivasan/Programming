# HTML Parser Beautiful Soup Python Sample
# Author: Sriram Srinivasan
# Written On: 08/09/2019

import urllib.request
import urllib.parse
import urllib.error
from bs4 import BeautifulSoup

url = input('Enter URL :')
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')

tags = soup('a')
for tag in tags:
    print(tag.get('href', None))
