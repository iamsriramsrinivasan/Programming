# A very simple web browser Python Sample
# Author: Sriram Srinivasan
# Written On: 08/09/2019

import socket

mySocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mySocket.connect(("www.sriraminc.com", 80))
cmd = 'GET http://www.sriraminc.com HTTP/1.0\n\n'.encode()
mySocket.send(cmd)

while True:
    data = mySocket.recv(512)
    if(len(data) < 1):
        break
    print(data.decode())
mySocket.close()
