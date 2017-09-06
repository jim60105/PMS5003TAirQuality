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
int clientNum = 0;

//server設定
int status = WL_IDLE_STATUS;
char server[] = "121.254.84.35";    // server address
int port = 8008;                    // server port, use 80 for defult

//間隔時間
int delayTime = 60000;              // interval for every http request
//******************************************************************************************

WiFiClient client;

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

void setup() {
//Initialize serial and wait for port to open:
  Serial.begin(38400);
  while (!Serial) {
    ;
  }
  // check for the presence of the shield:
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");
    // don't continue:
    while (true);
  }
  String fv = WiFi.firmwareVersion();
  if (fv != "1.1.0") {
    Serial.println("Please upgrade the firmware");
  }
  // attempt to connect to Wifi network:
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);

    // wait 10 seconds for connection:
    delay(10000);
  }
  Serial.println("Connected to wifi");
  printWifiStatus();
  
  //Serial.begin(57600);
  PMS5003Serial.begin(9600); // PMS 3003 UART has baud rate 9600
}

void loop() { // run over and over
    client.stop();
    Serial.println("disconnecting from server.");
    Serial.println("Interval...");
    delay(delayTime);
    
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
    
    connect2server(jsonStr);
}

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

void printWifiStatus() {
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
}

String serverStr = String(server);
void connect2server(String jsonStr) {
  //送出資料到伺服器
  Serial.println("\nStarting connection to server...");
  // if you get a connection, report back via serial:
  if (client.connect(server, port)) {
    client.print("GET /php/addData.php?");
    client.print(jsonStr);
    client.println(" HTTP/1.1");
    client.println("Host: "+serverStr+":"+port);
    client.println("User-Agent: Arduino/1.0");
    client.println();
  }
}
