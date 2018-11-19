/*
 This example demonstrate how to read pm2.5 value on PMS 3003 air condition sensor

 PMS 3003 pin map is as follow:
    PIN1  :VCC, connect to 5V
    PIN2  :GND
    PIN3  :SET, 0:Standby mode, 1:operating mode
    PIN4  :RXD :Serial RX
    PIN5  :TXD :Serial TX
    PIN6  :RESET
    PIN7  :NC
    PIN8  :NC

 In this example, we only use Serial to get PM 2.5 value.

 The circuit: (BOARD RTL8195A)
 * RX is digital pin 0 (connect to TX of PMS 3003)
 * TX is digital pin 1 (connect to RX of PMS 3003)
 
pm25/pmtest.ino at master · x99wang/pm25 · GitHub
https://github.com/x99wang/pm25/blob/master/pmtest.ino

 */
#include <WiFi.h>
#include <SoftwareSerial.h>
#include <PubSubClient.h>
#include <WiFiUdp.h>
//#if defined(BOARD_RTL8195A)
//SoftwareSerial mySerial(0, 1); // RX, TX
//#elif defined(BOARD_RTL8710)
SoftwareSerial PMS5003Serial(17, 5); // RX, TX
//#else
//SoftwareSerial mySerial(0, 1); // RX, TX
//#endif

//******************************************************************************************
//WIFI設定
char ssid[] = "jim60105"; //  your network SSID (name)
char pass[] = "000000000";    // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;            // your network key Index number (needed only for WEP)

//終端編號
int clientNum = 1;

//server設定
bool enableSend2Server = true;
char server[] = "air.asakihime.com";    // server address
int port = 81;                    // server port, use 80 for defult

//間隔時間
int delayTime = 60000;              // interval for every http request (ms)

//Fake GPS
char gps_lat[] = "24.181598";   // device's gps latitude
char gps_lon[] = "120.589623"; // device's gps longitude
char gps_alt[] = "256";  // device's altitude above the sea level

//LASS MQTT
bool enableMQTT = false;
char mqttServer[] = "gpssensor.ddns.net";      // the MQTT server of LASS
char clientId[17] = "THU_000";                    // client id for MQTT
char outTopic[20] = "LASS/Test/PM25/live"; // MQTT publish topic
//******************************************************************************************

//送出校時計數
int count = 0;

WiFiClient client, client2;
PubSubClient mqttClient(client2);
WiFiUDP Udp;
int status = WL_IDLE_STATUS;

const char ntpServer[] = "pool.ntp.org";
const int NTP_PACKET_SIZE = 48; // NTP time stamp is in the first 48 bytes of the message
const byte nptSendPacket[ NTP_PACKET_SIZE] = {
  0xE3, 0x00, 0x06, 0xEC, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x31, 0x4E, 0x31, 0x34,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
};
byte ntpRecvBuffer[ NTP_PACKET_SIZE ];

#define LEAP_YEAR(Y)     ( ((Y)>0) && !((Y)%4) && ( ((Y)%100) || !((Y)%400) ) )
static  const uint8_t monthDays[]={31,28,31,30,31,30,31,31,30,31,30,31}; // API starts months from 1, this array starts from 0
uint32_t epochSystem = 0; // timestamp of system boot up

//Sensor資料格式宣告
struct SensorValuesBar {
  float temp;
  float humid;
  float pm1;
  float pm25;
  float pm10;
};

struct SensorValuesBar PMS5003Value;
long pmcf10, pmcf25, pmcf100, pmat10, pmat25, pmat100;
long sch2o,stemp,shumid;

struct SensorValuesBar getPMS5003(){
  struct SensorValuesBar result;
  int count = 0;
  unsigned char readBuff;
  unsigned char highBits;
  while (PMS5003Serial.available()) {
    readBuff = PMS5003Serial.read();
  
    if((count==0 && readBuff!=0x42) || (count==1 && readBuff!=0x4d)){
       break;
    }
    if(count > 36){
       break;  // have read all data, read ends
    }
    else if(count == 4 || count == 6 || count == 8 || count == 10 || count == 12 || count == 14 || count == 24 || count == 26) highBits = readBuff;
    else if(count == 5){
      pmcf10 = 256*highBits + readBuff;
    }
    else if(count == 7){
      pmcf25 = 256*highBits + readBuff;
      //Serial.print("CF=1, PM2.5=");Serial.print(pmcf25);Serial.println(" ug/m3");
    }
    else if(count == 9){
      pmcf100 = 256*highBits + readBuff;
      //Serial.print("CF=1, PM10=");Serial.print(pmcf100);Serial.println(" ug/m3");
    }
    else if(count == 11){
      pmat10 = 256*highBits + readBuff; 
      result.pm1 = pmat10;  // pm1.0
      //Serial.print("atmosphere, PM1.0=");Serial.print(pmat10);Serial.println(" ug/m3");
    }
    else if(count == 13){
      pmat25 = 256*highBits + readBuff;
      result.pm25 = pmat25; // pm2.5
      //Serial.print("atmosphere, PM2.5=");Serial.print(pmat25);Serial.println(" ug/m3");
    }
    else if(count == 15){
      pmat100 = 256*highBits + readBuff;
      result.pm10 = pmat100;  // pm10.0
      //Serial.print("atmosphere, PM10=");Serial.print(pmat100);Serial.println(" ug/m3");
    }
  else if(count == 25){
      stemp = 256*highBits + readBuff;
    result.temp = stemp/10.0;
      //Serial.print("atmosphere, TEMP=");Serial.print(temp);Serial.println(" `C");
    }
  else if(count == 27){
      shumid = 256*highBits + readBuff;
    result.humid = shumid/10.0;
      //Serial.print("atmosphere, HUMID=");Serial.print(humid);Serial.println(" %");
    }
    count++; 
  }
  Serial.println();
  while(PMS5003Serial.available()) 
    PMS5003Serial.read();
  return result;
}

void connectToWifi() {
  // attempt to connect to Wifi network:
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);

    // wait 10 seconds for connection:
    delay(10000);
  }
  Serial.println();
  Serial.println("Connected to wifi.");
  
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");

  // local port to listen for UDP packets
  Udp.begin(2390);
}


// send an NTP request to the time server at the given address
void retrieveNtpTime() {
  for (int retry = 0; retry < 5; retry ++) {
    Serial.println("Send NTP packet");
    Udp.beginPacket(ntpServer, 123); //NTP requests are to port 123
    Udp.write(nptSendPacket, NTP_PACKET_SIZE);
    Udp.endPacket();
  
    delay(3000);
    if(Udp.parsePacket()) {
      Serial.println("NTP packet received");
      Udp.read(ntpRecvBuffer, NTP_PACKET_SIZE); // read the packet into the buffer
      
      unsigned long highWord = word(ntpRecvBuffer[40], ntpRecvBuffer[41]);
      unsigned long lowWord = word(ntpRecvBuffer[42], ntpRecvBuffer[43]);
      unsigned long secsSince1900 = highWord << 16 | lowWord;
      const unsigned long seventyYears = 2208988800UL;
      unsigned long epoch = secsSince1900 - seventyYears;
  
      epochSystem = epoch - millis() / 1000;
      break;
    }
  }
}

void getCurrentTime(unsigned long epoch, int *year, int *month, int *day, int *hour, int *minute, int *second) {
  int tempDay = 0;

  *hour = (epoch  % 86400L) / 3600;
  *minute = (epoch  % 3600) / 60;
  *second = epoch % 60;

  *year = 1970; // epoch starts from 1970
  *month = 0;
  *day = epoch / 86400;

  for (*year = 1970; ; (*year)++) {
    tempDay += (LEAP_YEAR(*year) ? 366 : 365);
    if (tempDay > *day) {
      tempDay -= (LEAP_YEAR(*year) ? 366 : 365);
      break;
    }
  }
  tempDay = *day - tempDay; // the days left in a year
  for ((*month) = 0; (*month) < 12; (*month)++) {
    if ((*month) == 1) {
      tempDay -= (LEAP_YEAR(*year) ? 29 : 28);
      if (tempDay < 0) {
        tempDay += (LEAP_YEAR(*year) ? 29 : 28);
        break;
      }
    } else {
      tempDay -= monthDays[(*month)];
      if (tempDay < 0) {
        tempDay += monthDays[(*month)];
        break;
      }
    }
  }
  *day = tempDay+1; // one for base 1, one for current day
  (*month)++;
}

void initializeMQTT() {
  //byte mac[6];

  //WiFi.macAddress(mac);
  //RTL-00 MAC addresses are all the same.
  //sprintf(clientId, "THU_%02X%02X%02X%02X", mac[2], mac[3], mac[4], mac[5]);

  Serial.print("MQTT client id:");
  Serial.println(clientId);
  Serial.print("MQTT topic:");
  Serial.println(outTopic);

  mqttClient.setServer(mqttServer, 1883);
}

void sendMQTT(SensorValuesBar PMS5003Value) {
  String payload;
  char timeStr[30];
  unsigned long epoch = epochSystem + millis() / 1000;
  int year, month, day, hour, minute, second;
  getCurrentTime(epoch, &year, &month, &day, &hour, &minute, &second);

  sprintf(timeStr,"Current time: date=%4d-%02d-%02d time=%02d:%02d:%02d", year, month, day, hour, minute, second);
  Serial.println(timeStr);
  
  if (!mqttClient.connected()) {
    Serial.println("Attempting MQTT connection");
    mqttClient.connect(clientId);
  }

  if (mqttClient.connected()) {
    payload = "|ver_format=3|Fake_GPS=1|app=PM25|ver_app=live|device_id="+String(clientId)+"|tick="+millis()+"|date="+year+"-"+month+"-"+day+"|time="+hour+":"+minute+":"+second
      +"|device=Ameba|s_d0="+PMS5003Value.pm25
      +"|s_d1="+PMS5003Value.pm10
      +"|s_d2="+PMS5003Value.pm1
      +"|s_h0="+PMS5003Value.humid
      +"|s_t0="+PMS5003Value.temp
      +"|gps_lat="+gps_lat
      +"|gps_lon="+gps_lon
      +"|gps_fix=1|gps_alt="+gps_alt;
    Serial.println(payload);

    // Once connected, publish an announcement...
    char companionchannel[50]="";
    strcat(companionchannel,outTopic);
    strcat(companionchannel,"/");
    strcat(companionchannel,clientId);
   
    mqttClient.publish((char*)outTopic, payload.c_str());
    mqttClient.publish((char*)companionchannel, payload.c_str());
    mqttClient.disconnect();
  }

}

String serverStr = String(server);
void connect2server(String jsonStr) {
  //送出資料到伺服器
  Serial.println("\nStarting connection to server...");
  // if you get a connection, report back via serial:
  if (client.connect(server, port)) {
    client.print("GET /assets/php/addData.php?");
    client.print(jsonStr);
    client.println(" HTTP/1.1");
    client.println("Host: "+serverStr+":"+port);
    client.println("User-Agent: Arduino/1.0");
    client.println();
  }else{
    Serial.println("\nFailed to connect to the server.");
  }
}

void setup() {
//Initialize serial and wait for port to open:
  Serial.begin(38400);
  while (!Serial) {
    ;
  }
  
  status = WiFi.status();
  // check for the presence of the shield:
  if (status == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");
    // don't continue:
    while (true);
  }
  String fv = WiFi.firmwareVersion();
  if (fv != "1.1.0") {
    Serial.println("Please upgrade the firmware");
  }
  if(status != WL_CONNECTED) {
    connectToWifi();
  }
  
  PMS5003Serial.begin(9600); // PMS 3003 UART has baud rate 9600

  retrieveNtpTime();
  if(enableMQTT){initializeMQTT();}
}

void loop() { // run over and over
    Serial.println("v18.11.19.1");
    //斷線重連
    if(WiFi.status()!= WL_CONNECTED) {
      connectToWifi();
      retrieveNtpTime();
    }

    //每60次送出校時一次
    if((count%60)==0){
      retrieveNtpTime();
    }
    
    //硬件初始化
    PMS5003Value = getPMS5003();
  
    Serial.print("pm1:");
    Serial.println(PMS5003Value.pm1);
    Serial.print("pm10:");
    Serial.println(PMS5003Value.pm10);
    Serial.print("pm25:");
    Serial.println(PMS5003Value.pm25);
    Serial.print("temp:");
    Serial.println(PMS5003Value.temp);
    Serial.print("humid:");
    Serial.println(PMS5003Value.humid);
      
    //組合資料
    String jsonStr = (String)"pm1="+PMS5003Value.pm1+"&pm10="+PMS5003Value.pm10+"&pm25="+PMS5003Value.pm25+"&temp="+PMS5003Value.temp+"&humid="+PMS5003Value.humid+"&clientNum="+clientNum;

    if(enableSend2Server){
      connect2server(jsonStr);
    }

    if(enableMQTT){
      sendMQTT(PMS5003Value);
      mqttClient.loop();
    }
    
    Serial.println("Disconnecting from server...");
    client.stop();
    Serial.print("Interval ");
    Serial.print(delayTime);
    Serial.println(" ms...");
    count++;
    delay(delayTime);
}
