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

#include <SoftwareSerial.h>
//#if defined(BOARD_RTL8195A)
//SoftwareSerial mySerial(0, 1); // RX, TX
//#elif defined(BOARD_RTL8710)
SoftwareSerial mySerial(17, 5); // RX, TX
//#else
//SoftwareSerial mySerial(0, 1); // RX, TX
//#endif
struct SensorValuesBar {
  float temp;
  float humid;
  float pm1;
  float pm25;
  float pm10;
};

struct SensorValuesBar PMS5003Value;
// 传感器数值定义
long pmcf10, pmcf25, pmcf100, pmat10, pmat25, pmat100;
long sch2o,stemp,shumid;

void setup() {
  Serial.begin(57600);
  PMS5003Serial.begin(9600); // PMS 3003 UART has baud rate 9600
}

void loop() { // run over and over

  while (idx != pmsDataLen) {
    while(!PMS5003Serial.available());
    buf[idx++] = PMS5003Serial.read();
  }

  pm10 = ( buf[10] << 8 ) | buf[11];
  pm25 = ( buf[12] << 8 ) | buf[13];
  pm100 = ( buf[14] << 8 ) | buf[15];

  Serial.print("pm2.5: ");
  Serial.print(pm25);
  Serial.println(" ug/m3");
  Serial.print("pm10: ");
  Serial.print(pm10);
  Serial.println(" ug/m3");
  Serial.print("pm100: ");
  Serial.print(pm100);
  Serial.println(" ug/m3");
  */
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
  delay(1000);
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
