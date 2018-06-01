import * as moment from 'moment';

export class CalcAQIComponent{
  public calcAQI(data:Array<any>,callback:Function){
    if(data!==undefined) {
      data.forEach((value, index, array)=> {
        //noinspection TypeScriptUnresolvedVariable
        let AQI = this.calc(value.pm25, value.pm10);

        if((moment().valueOf()-moment(value.time).valueOf())>1000*60*60*24){
          AQI = 0;
        }

        if (AQI >= 0 && AQI <= 6) {
          value.AQI = AQI;
          value.class = (typeof value.class==="undefined")?`AQI${AQI}`:`${value.class} AQI${AQI}`;
          if (AQI >= 3) {
            //震動特效
            value.class += ` a-ring`;
          }

          switch (AQI) {
            case 0:
              value.airQuality = "(離線)";
              break;
            case 1:
              value.airQuality = "良好";
              break;
            case 2:
              value.airQuality = "普通";
              break;
            case 3:
              value.airQuality = "對敏感族群不健康";
              break;
            case 4:
              value.airQuality = "對所有族群不健康";
              break;
            case 5:
              value.airQuality = "非常不健康";
              break;
            case 6:
              value.airQuality = "危害";
              break;
          }
        } else {
          //noinspection TypeScriptUnresolvedVariable
          console.log(`Calc AQI Level Error. PM2.5: ${value.pm25}, PM10: ${value.pm10}`);
        }
      });
      (callback && typeof(callback) === "function") && callback(data);
    }
  }

  public calc(pm25,pm10){
    let temp25 = 0;
    let temp10 = 0;

    pm25 = Number(pm25);
    pm10 = Number(pm10);
    //顏色及數值依照政府標準
    //https://taqm.epa.gov.tw/taqm/tw/b0201.aspx
    switch (true){
      case (pm25<=15.4):                        //green
        temp25 = 1;
        break;
      case (pm25>=15.5 && pm25<=35.4):    //yellow
        temp25 = 2;
        break;
      case (pm25>=35.5 && pm25<=54.4):    //orange
        temp25 = 3;
        break;
      case (pm25>=54.5 && pm25<=150.4):   //red
        temp25 = 4;
        break;
      case (pm25>=150.5 && pm25<=250.4):  //purple
        temp25 = 5;
        break;
      case (pm25>=250.5):                       //maroon
        temp25 = 6;
        break;
    }
    switch (true){
      case (pm10<=54):
        temp10 = 1;
        break;
      case (pm10>=55 && pm10<=125):
        temp10 = 2;
        break;
      case (pm10>=126 && pm10<=254):
        temp10 = 3;
        break;
      case (pm10>=255 && pm10<=354):
        temp10 = 4;
        break;
      case (pm10>=355 && pm10<=424):
        temp10 = 5;
        break;
      case (pm10>=425):
        temp10 = 6;
        break;
    }

    return Math.max(temp10, temp25);
  }
}
