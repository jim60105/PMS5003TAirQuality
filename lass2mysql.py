#!/usr/bin/env python
# Author: jim60105@gmail.com
# Version: v18.05.30.2

import paho.mqtt.client as mqtt
import re
import mysql.connector
import ast
import traceback
import datetime
import requests
import json as json

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
 
cur = conn.cursor(dictionary=True)

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
    else:
        tempDict['device_id'] = tempDict['device_id']
    
    if 'app' not in tempDict or tempDict['app']=='':
        tempDict['app'] = 'NULL'
    else:
        tempDict['app'] = tempDict['app']
        
    if 'device' not in tempDict or tempDict['device']=='':
        tempDict['device'] = 'NULL'
    else:
        tempDict['device'] = tempDict['device']
    
    try:
        if 'date' not in tempDict or 'time' not in tempDict:
            tempDict['time'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        elif datetime.datetime.strptime(tempDict['date'],'%Y-%m-%d')<datetime.datetime(1970, 1, 1):
            tempDict['time'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        else:
            tempDict['time'] = datetime.datetime.strptime(tempDict['date'] + ' ' +tempDict['time'],'%Y-%m-%d %H:%M:%S')
    except:
        tempDict['time'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
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
        
    if 'gps_lat' not in tempDict or tempDict['gps_lat']=='':
        tempDict['gps_lat'] = 'NULL'
    if 'gps_lon' not in tempDict or tempDict['gps_lon']=='':
        tempDict['gps_lon'] = 'NULL'
    if 'gps_alt' not in tempDict or tempDict['gps_alt']=='':
        tempDict['gps_alt'] = 'NULL'
    
    try:
        query = ('SELECT * FROM `lassdata` WHERE `device_id` = %(device_id)s AND `time` = %(time)s')
        cur.execute(query,tempDict)
        rows = cur.fetchall()
        conn.commit()
        if len(rows) == 0:
            # 插入佇列
            query = ('INSERT INTO `lassdataqueue` '
                '(`no`, `device_id`, `time`, `pm1`, `pm10`, `pm25`, `temp`, `humid`, `co2`) '
                'VALUES (NULL, %(device_id)s, %(time)s, %(s_d2)s, %(s_d1)s, %(s_d0)s, %(temp)s, %(humid)s, %(s_g8)s)')
            cur.execute(query,tempDict)
            conn.commit()
                
            # flush以後檢查iftttDeviceList，並做通知
            # SELECT `a`.*,`b`.`iftttKey` FROM `useriftttdevice` as `a`,`user` as `b` WHERE `type` = 'LASS' AND `device_id` = 'FT1_005' AND `air_type` = 'AQI' AND `monitor_value` <= 6 AND `a`.`user_no` = `b`.`no`
            def sendIFTTT(iftttDevice,avgData):
                try:
                    # print ('URL: ' + 'https://maker.ifttt.com/trigger/AirAlert/with/key/' + iftttDevice['iftttKey'], sep='\n', flush=True)
                    r = requests.post('https://maker.ifttt.com/trigger/AirAlert/with/key/' + iftttDevice['iftttKey'], json = {'value1':avgData['device_id'],'value2':iftttDevice['air_type'],'value3':avgData[iftttDevice['air_type']]})
                    # print ('IFTTT sended.', sep='\n', flush=True)
                except Exception as e:  # This is the correct syntax
                    print ('ERR: '+e, sep='\n', flush=True)
            
            def checkIFTTTDevice(avgData):
                query = ('SELECT `a`.*,`b`.`iftttKey` FROM `useriftttdevice` as `a`,`user` as `b` '
                    'WHERE `type` = "LASS" '
                    'AND `device_id` = %(device_id)s '
                    'AND `a`.`user_no` = `b`.`no`')
                cur.execute(query,avgData)
                rows = cur.fetchall()
                conn.commit()
                for row in rows:
                    if row['monitor_value'] <= avgData[row['air_type']]:
                        sendIFTTT(row,avgData)
                
            # flush: 每次檢查時間排序頭尾的差距，如果大於10分鐘，則丟一筆平均進資料庫，然後把queue裡的砍掉
            def checkFlush():
                query = ('SELECT TIMESTAMPDIFF(MINUTE,'
                    '(SELECT time FROM lassdataqueue WHERE device_id = %(device_id)s ORDER BY time ASC LIMIT 1),'
                    '(SELECT time FROM lassdataqueue WHERE device_id = %(device_id)s ORDER BY time DESC LIMIT 1)'
                    ') AS timediff;')
                cur.execute(query,tempDict)
                row = cur.fetchone()
                conn.commit()
                if row['timediff'] is not None:
                    tempDict['timediff'] = row['timediff'] / 2
                    return row['timediff']
                else:
                    return 0
                
            def doFlush():
                query = ('SELECT time FROM lassdataqueue WHERE device_id = %(device_id)s ORDER BY time ASC LIMIT 1;')
                cur.execute(query,tempDict)
                row = cur.fetchone()
                conn.commit()
                tempDict['startTime'] = row['time']
                
                query = ('SELECT AVG(pm1) AS pm1, AVG(pm10) AS pm10, AVG(pm25) AS pm25, AVG(temp) AS temp, AVG(humid) AS humid, AVG(co2) AS co2 FROM lassdataqueue WHERE device_id = %(device_id)s;')
                cur.execute(query,tempDict)
                rows = cur.fetchall()
                conn.commit()
                
                row = rows[0]
            
                for k,v in row.items():
                    if v == None:
                        row[k] = 'Null'
                        
                row['device_id'] = tempDict['device_id']
                row['timediff'] = tempDict['timediff']
                row['startTime'] = tempDict['startTime']
                        
                query = ('INSERT INTO lassdata (`no`, `device_id`, `time`, `pm1`, `pm10`, `pm25`, `temp`, `humid`, `co2`) '
                'VALUES (NULL, %(device_id)s, (SELECT TIMESTAMPADD(MINUTE, %(timediff)s, %(startTime)s)), %(pm1)s, %(pm10)s, %(pm25)s, %(temp)s, %(humid)s, %(co2)s)')
                cur.execute(query,row)
                conn.commit()
                
                query = ('DELETE FROM lassdataqueue WHERE device_id = %(device_id)s;')
                cur.execute(query,tempDict)
                conn.commit()
                
                checkIFTTTDevice(row)
                
            while checkFlush()>10:
                doFlush()
                
            # 寫入測站資料    
            query = ('SELECT `device_id` FROM `lassdevice` WHERE `device_id` = %(device_id)s')
            cur.execute(query,tempDict)
            rows = cur.fetchall()
            conn.commit()
            if len(rows) == 0:
                query = ('INSERT INTO `lassdevice` '
                '(`device_id`, `app`, `device`, `gps_lat`, `gps_lon`, `gps_alt`, `time`, `pm1`, `pm10`, `pm25`, `temp`, `humid`, `co2`) '
                'VALUES (%(device_id)s, %(app)s, %(device)s, %(gps_lat)s, %(gps_lon)s, %(gps_alt)s, %(time)s, %(s_d2)s, %(s_d1)s, %(s_d0)s, %(temp)s, %(humid)s, %(s_g8)s)')
                # print(query, sep='\n', flush=True)
                # print(query, sep='\n', flush=True)
            else:
                # tempDict['no'] = rows[0]['no']
                query = ('UPDATE `lassdevice` '
                'SET `app` = %(app)s, `device` = %(device)s, `gps_lat` = %(gps_lat)s, `gps_lon` = %(gps_lon)s, `gps_alt` = %(gps_alt)s, `time` = %(time)s, `pm1` = %(s_d2)s, `pm10` = %(s_d1)s, `pm25` = %(s_d0)s, `temp` = %(temp)s, `humid` = %(humid)s, `co2` = %(s_g8)s '
                'WHERE `lassdevice`.`device_id` = %(device_id)s')
                # print(query, sep='\n', flush=True)
                # print(query, sep='\n', flush=True)
            cur.execute(query,tempDict)
            conn.commit()
        tempDict = {}
    except:
        traceback.print_exc()
        # mqtt_client.disconnect()
        # return

def on_disconnect(client, userdata,rc=0):
    print("DisConnected result code "+str(rc))
    client.loop_stop()
    cur.close()
    conn.close()
    mqtt_client.connect(MQTT_SERVER, MQTT_PORT, MQTT_ALIVE)

mqtt_client = mqtt.Client()
mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message

mqtt_client.connect(MQTT_SERVER, MQTT_PORT, MQTT_ALIVE)

mqtt_client.loop_forever()
