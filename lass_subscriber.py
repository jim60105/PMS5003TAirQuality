#!/usr/bin/env python
#

import paho.mqtt.client as mqtt
import re

MQTT_SERVER = "gpssensor.ddns.net"
MQTT_PORT = 1883
MQTT_ALIVE = 60
MQTT_TOPIC = "LASS/Test/#"

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("MQTT Connected with result code "+str(rc) , flush=True)

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe(MQTT_TOPIC, 0)

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    value_device = ""
    items = re.split('\|',str(msg.payload))
    for item in items:
        if item == '':
            continue 
        pairs = re.split('=',item)
        if (len(pairs)==1):
            continue
        if (pairs[0] == "device_id"):
            value_device = pairs[1]
        elif (pairs[0] == "s_d0"):
            value_dust = pairs[1]
        elif (pairs[0] == "s_t0"):
            value_temperature = pairs[1]
        elif (pairs[0] == "s_h0"):
            value_humidity = pairs[1]
        elif (pairs[0] == "s_1"):
            value_battery = pairs[1]
    if (value_device == "THU_000" or value_device == "THU_001" or DEVvalue_deviceICE == "THU_002"):
        print ("Got the data from %s: %s" % (value_device, msg.payload) , flush=True)
        value_device = ""

def on_disconnect(client, userdata,rc=0):
    print("DisConnected result code "+str(rc))
    client.loop_stop()

mqtt_client = mqtt.Client()
mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message

mqtt_client.connect(MQTT_SERVER, MQTT_PORT, MQTT_ALIVE)

mqtt_client.loop_forever()
