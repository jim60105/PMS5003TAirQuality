#!/usr/bin/env python
#

import paho.mqtt.client as mqtt
import re
import mysql.connector

MQTT_SERVER = "gpssensor.ddns.net"
MQTT_PORT = 1883
MQTT_ALIVE = 60
MQTT_TOPIC = "LASS/Test/#"

f = open("dbpassword.pas","r") 
dbPas = str(f.readline())[0:-1]
f.close()

conn = mysql.connector.connect(
         user='air',
         password=dbPas,
         host='127.0.0.1',
         database='air')
 
cur = conn.cursor()

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("MQTT Connected with result code "+str(rc) , flush=True)

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe(MQTT_TOPIC, 0)

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    tempDict = {}
    # print(str(msg.payload))
    input = re.split('\'',str(msg.payload))
    items = re.split('\|',input[1])
    for item in items:
        if item == '':
            continue 
        pairs = re.split('=',item)
        if (len(pairs)==1):
            continue
        tempDict[pairs[0]] = pairs[1]
        # if (pairs[0] == "device_id"):
            # value_device = pairs[1]
    #if (value_device == "THU_000" or value_device == "THU_001" or value_device == "THU_002"):
        #print ("Got the data from %s: %s" % (value_device, msg.payload) , flush=True)
    
    if 'device_id' not in tempDict:
        return
    
    tempDict['time'] = '"' + tempDict['date'] + ' ' +tempDict['time'] + '"'
    tempDict['device_id'] = '"' +tempDict['device_id'] + '"'
    
    if 's_t0' in tempDict:
        tempDict['temp'] = tempDict['s_t0']
    elif 's_t1' in tempDict:
        tempDict['temp'] = tempDict['s_t1']
    elif 's_t2' in tempDict:
        tempDict['temp'] = tempDict['s_t2']
    elif 's_t3' in tempDict:
        tempDict['temp'] = tempDict['s_t3']
    elif 's_t4' in tempDict:
        tempDict['temp'] = tempDict['s_t4']
    elif 's_t5' in tempDict:
        tempDict['temp'] = tempDict['s_t5']
    else:
        tempDict['temp'] = 'NULL'
        
    if 's_h0' in tempDict:
        tempDict['humid'] = tempDict['s_h0']
    elif 's_h1' in tempDict:
        tempDict['humid'] = tempDict['s_h1']
    elif 's_h2' in tempDict:
        tempDict['humid'] = tempDict['s_h2']
    elif 's_h3' in tempDict:
        tempDict['humid'] = tempDict['s_h3']
    elif 's_h4' in tempDict:
        tempDict['humid'] = tempDict['s_h4']
    elif 's_h5' in tempDict:
        tempDict['humid'] = tempDict['s_h5']
    else:
        tempDict['humid'] = 'NULL'
    
    if 'tick' not in tempDict:
        tempDict['tick'] = 'NULL'
    if 's_d2' not in tempDict:
        tempDict['s_d2'] = 'NULL'
    if 's_d1' not in tempDict:
        tempDict['s_d1'] = 'NULL'
    if 's_d0' not in tempDict:
        tempDict['s_d0'] = 'NULL'
    if 's_g8' not in tempDict:
        tempDict['s_g8'] = 'NULL'
    
    # print (str(tempDict), flush=True)
    
    query = ('SELECT * FROM `lass` WHERE `device_id` = {device_id} AND `time` = {time}').format(**tempDict)
    cur.execute(query)
    rows = cur.fetchall()
    conn.commit()
    if len(rows) == 0:
        query = ('INSERT INTO `lass` '
            '(`no`, `device_id`, `time`, `pm1`, `pm10`, `pm25`, `temp`, `humid`, `co2`) '
            'VALUES (NULL, {device_id}, {time}, {s_d2}, {s_d1}, {s_d0}, {temp}, {humid}, {s_g8})').format(**tempDict)
        # print (query)
        cur.execute(query)
        conn.commit()
    tempDict = {}

def on_disconnect(client, userdata,rc=0):
    print("DisConnected result code "+str(rc))
    client.loop_stop()
    cur.close()
    conn.close()

mqtt_client = mqtt.Client()
mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message

mqtt_client.connect(MQTT_SERVER, MQTT_PORT, MQTT_ALIVE)

mqtt_client.loop_forever()
