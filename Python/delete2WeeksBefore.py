#!/usr/bin/env python
# Author: jim60105@gmail.com
# Version: v19.03.25.0

import paho.mqtt.client as mqtt
import mysql.connector
            
f = open("dbpassword.pas","r") 
dbPas = str(f.readline())[0:-1]
f.close()

conn = mysql.connector.connect(
         user='air',
         password=dbPas,
         host='127.0.0.1',
         database='air')
 
cur = conn.cursor(dictionary=True)

query = ('DELETE FROM lassdata WHERE `time` < (NOW() - INTERVAL 2 WEEK)')
cur.execute(query)
conn.commit()

query = ('DELETE FROM lassdataqueue WHERE `time` < (NOW() - INTERVAL 2 WEEK)')
cur.execute(query)
conn.commit()

query = ('DELETE FROM lassdata WHERE `time` > (NOW() + INTERVAL 1 DAY)')
cur.execute(query)
conn.commit()

query = ('DELETE FROM lassdataqueue WHERE `time` > (NOW() + INTERVAL 1 DAY)')
cur.execute(query)
conn.commit()