#!/usr/bin/env python
# Author: jim60105@gmail.com
# Version: v18.06.08.0

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
    print("MQTT Connected with result code "+str(rc), flush=True)

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
        tempDict['app'] = None
    else:
        tempDict['app'] = tempDict['app']

    if 'device' not in tempDict or tempDict['device']=='':
        tempDict['device'] = None
    else:
        tempDict['device'] = tempDict['device']

    try:
        if 'date' not in tempDict or 'time' not in tempDict:
            tempDict['time'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        elif datetime.datetime.strptime(tempDict['date'],'%Y-%m-%d')<datetime.datetime(1970, 1, 1):
            tempDict['time'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        else:
            tempDict['time'] = datetime.datetime.strptime(tempDict['date'] + ' ' +tempDict['time'],'%Y-%m-%d %H:%M:%S')

        if re.match('^FT2', tempDict['device_id']) is not None:
            tempDict['time'] = tempDict['time'] + datetime.timedelta(days=1)
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
        tempDict['temp'] = None

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
        tempDict['humid'] = None

    if 'tick' not in tempDict:
        tempDict['tick'] = None
    if 's_d2' not in tempDict:
        tempDict['s_d2'] = None
    if 's_d1' not in tempDict:
        tempDict['s_d1'] = None
    if 's_d0' not in tempDict:
        tempDict['s_d0'] = None
    if 's_g8' not in tempDict:
        tempDict['s_g8'] = None

    if 'gps_lat' not in tempDict or tempDict['gps_lat']=='' or tempDict['gps_lat']=='null':
        tempDict['gps_lat'] = None
    if 'gps_lon' not in tempDict or tempDict['gps_lon']=='' or tempDict['gps_lon']=='null':
        tempDict['gps_lon'] = None
    if 'gps_alt' not in tempDict or tempDict['gps_alt']=='' or tempDict['gps_alt']=='null':
        tempDict['gps_alt'] = None

    try:
        query = ('SELECT * FROM `lassdataqueue` WHERE `device_id` = %(device_id)s AND `time` = %(time)s')
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

            def calcAQI(pm25,pm10):
                temp25 = 0;
                temp10 = 0;

                # 顏色及數值依照政府標準
                # https://taqm.epa.gov.tw/taqm/tw/b0201.aspx
                if pm25<=15.4:                        # green
                    temp25 = 1
                elif pm25<=35.4:    # yellow
                    temp25 = 2
                elif pm25<=54.4:    # orange
                    temp25 = 3
                elif pm25<=150.4:   # red
                    temp25 = 4
                elif pm25<=250.4:  # purple
                    temp25 = 5
                else:                       # maroon
                    temp25 = 6

                if pm10<=54:
                    temp10 = 1
                elif pm10<=125:
                    temp10 = 2
                elif pm10<=254:
                    temp10 = 3
                elif pm10<=354:
                    temp10 = 4
                elif pm10<=424:
                    temp10 = 5
                else:
                    temp10 = 6
                return max(temp10, temp25)
            # Flush以後檢查iftttDeviceList，並做通知
            def sendIFTTT(iftttDevice,avgData):
                if iftttDevice['air_type'] == 'AQI':
                    select = {
                        0:'(離線)',
                        1:'良好',
                        2:'普通',
                        3:'對敏感族群不健康',
                        4:'對所有族群不健康',
                        5:'非常不健康',
                        6:'危害'
                    }
                    avgData['AQI'] = select[avgData['AQI']]
                    # print (avgData['AQI'], sep='\n', flush=True)
                try:
                    # print ('URL: ' + 'https://maker.ifttt.com/trigger/AirAlert/with/key/' + iftttDevice['iftttKey'], sep='\n', flush=True)
                    r = requests.post('https://maker.ifttt.com/trigger/AirAlert/with/key/' + iftttDevice['iftttKey'], json = {'value1':avgData['device_id'],'value2':iftttDevice['air_type'],'value3':avgData[iftttDevice['air_type']]})
                    # print ('IFTTT sended.', sep='\n', flush=True)
                except requests.exceptions.RequestException as e:  # This is the correct syntax
                    print ('Post IFTTT error: '+e, sep='\n', flush=True)

            def checkIFTTTDevice(avgData):
                query = ('SELECT `a`.*,`b`.`iftttKey` FROM `useriftttdevice` as `a`,`user` as `b` '
                    'WHERE `type` = "LASS" '
                    'AND `device_id` = %(device_id)s '
                    'AND `a`.`user_no` = `b`.`no`')
                cur.execute(query,avgData)
                rows = cur.fetchall()
                conn.commit()
                for row in rows:
                    if row['air_type'] == 'AQI':
                        # print ('calcAQI'+ str(calcAQI(avgData['pm25'],avgData['pm10'])), sep='\n', flush=True)
                        avgData['AQI'] = calcAQI(avgData['pm25'],avgData['pm10'])
                    if row['monitor_value'] <= avgData[row['air_type']]:
                        sendIFTTT(row,avgData)

            # Flush: 每次檢查時間排序頭尾的差距，如果大於10分鐘，則丟一筆平均進資料庫，然後把queue裡的砍掉
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
                        row[k] = None

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
