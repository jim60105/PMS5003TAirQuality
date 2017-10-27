export class CalcAQIComponent{
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