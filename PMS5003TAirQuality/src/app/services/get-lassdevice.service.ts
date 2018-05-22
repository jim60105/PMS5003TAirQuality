import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

import * as LatLon from 'geodesy/latlon-vincenty';

import * as moment from 'moment';
import {Cookie} from 'ng2-cookies';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";

@Injectable()
export class GetLassDeviceService {
  constructor(private http: Http) {
  }

  //資料
  public data: Array<any> = [];
  //php位置
  private dbURL = "assets/php/getLASSDevices.php";

  public LASSDeviceList: any[] = [];
  private nearestAmount = 3;

  public setLASSDeviceList(amount: number = this.nearestAmount, callback: Function) {
    this.nearestAmount = amount;

    if (Cookie.get('displayNearest') == '1' || this.LASSDeviceList.length<amount) {
      if (Cookie.check('lat') && Cookie.check('lon')) {
        this.getNearestLassDevice(callback);
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          Cookie.set('lat', String(position.coords.latitude));
          Cookie.set('lon', String(position.coords.longitude));
          console.log(position.coords.latitude + "," + position.coords.longitude);
          this.getNearestLassDevice(callback);
        }, (err) => {
          console.warn('ERROR getting location(' + err.code + '): ' + err.message);
          if (!Cookie.check('lat') || !Cookie.check('lon')) {
            this.setLocToTHU();
          }
          this.getNearestLassDevice(callback);
        }, {
          enableHighAccuracy: false,
          maximumAge: 60000,
          timeout: Infinity
        });
      } else {
        console.warn("Geolocation is not supported by this browser.");
        if (!Cookie.check('lat') && !Cookie.check('lon')) {
          this.setLocToTHU();
        }
        this.getNearestLassDevice(callback);
      }

    }else{
      (callback && typeof(callback) === "function") && callback(this.LASSDeviceList);
    }
  }

  private setLocToTHU() {
    console.warn('Set default location to THU.');
    Cookie.set('lat', '24.1824695');
    Cookie.set('lon', '120.6025716');
    console.log('24.1824695,120.6025716');
  }

  //Calc Nearest points
  public getNearestLassDevice(callback: Function) {
    let lat: Number = Number(Cookie.get("lat"));
    let lon: Number = Number(Cookie.get("lon"));

    let here = new LatLon(lat, lon);

    this.getLassDeviceWithPromise().then((res: any[]) => {
      //排除三點狀況
      if (res.length == 0) {
        console.error("LASS Devices Empty! Please make sure python script is running.");
        alert('Server Error! Please reload or contact server admin!');
      } else {
        //建立LatLon物件，並計算距離
        res.forEach((value, index, array) => {
          //noinspection TypeScriptUnresolvedVariable
          array[index].latlon = new LatLon(value.gps_lat, value.gps_lon);
          //noinspection TypeScriptUnresolvedVariable
          array[index].distance = here.distanceTo(value.latlon);
        });

        //進行排序
        res.sort((a, b) => {
          return a.distance - b.distance;
        });

        this.LASSDeviceList = [];

        //從第一個物件開始push到LASSDeviceList
        for (let i = 0; i < this.nearestAmount; i++) {
          this.LASSDeviceList.push([res[i].device_id, 'LASS']);
          console.log(res[i].distance);
        }

        //unique
        this.LASSDeviceList = this.LASSDeviceList.filter((value, index, self) => {
          return self.map(mapObj => mapObj[0]).indexOf(value[0]) === index;
        });
        (callback && typeof(callback) === "function") && callback(this.LASSDeviceList);
      }
      console.log(JSON.stringify(this.LASSDeviceList));
    });
  }

  //獲取LASS測站資料
  public getLassDeviceWithPromise() {
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(this.dbURL).toPromise().then((res: Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn: any[]) => {
      //成功取得資料
      //轉換UTC時間為本地時間
      dataIn.forEach((value, index, array) => {
        //noinspection TypeScriptUnresolvedVariable
        let tt = moment.utc(value.time);
        //noinspection TypeScriptUnresolvedVariable
        array[index].time = tt.local().format('YYYY-MM-DD HH:mm:ss');
      });

      this.data = _.cloneDeep(dataIn);
      return Promise.resolve(dataIn);
    }).catch((err) => {
      //失敗取得資料
      console.warn("Warn: Cannot get Lass Devices.");
      this.LASSDeviceList = [];
      return Promise.resolve([]);
    });
  }

  public getLassDeviceById(id: String, callback?: Function) {
    if (this.data.length == 0) {
      this.getLassDeviceWithPromise().then((res) => {
        for (let key in this.data) {
          if (this.data[key]['device_id'] == id) {
            (callback && typeof(callback) === "function") && callback(this.data[key]);
            return;
          }
        }
        (callback && typeof(callback) === "function") && callback(undefined);
      });
    } else {
      for (let key in this.data) {
        if (this.data[key]['device_id'] == id) {
          (callback && typeof(callback) === "function") && callback(this.data[key]);
          return;
        }
      }
      (callback && typeof(callback) === "function") && callback(undefined);
    }
  }
}
