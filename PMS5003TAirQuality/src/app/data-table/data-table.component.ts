import { Component, Input,ViewChild } from '@angular/core';
import { DataTableModule } from '../../../node_modules/angular-4-data-table/src/index';
import { DataTableResource } from '../../../node_modules/angular-4-data-table/src/tools/data-table-resource';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @ViewChild(DataTableModule) public _DataTableModule:DataTableModule;
  //資料
  @Input() data:any;
  private dataTemp = _.cloneDeep(this.data);
  @Input() clientInfo:any;
  //顯示列數
  @Input() limit:number = 10;
  @Input() title = ['Time','位置','PM1','PM2.5','PM10','溫度','濕度'];
  @Input() property = ['time','clientNum','pm1','pm25','pm10','temp','humid'];
  @Input() sortable = ['true','true','true','true','true','true','true'];
  @Input() titleClass = ['','','','','','',''];

  itemResource = new DataTableResource(this.data);
  items = [];
  itemCount = 0;
  dataIsReady = false;

  ngDoCheck() {
    //如果資料有更改就重新載入
    if(this.data!==undefined && !_.isEqual(this.dataTemp,this.data)) {
      this.dataIsReady = false;
      this.itemResource = new DataTableResource(this.data);
      this.itemResource.count().then(count => this.itemCount = count);
      this.reloadItems({offset: 0, limit: this.limit});
      this.dataTemp = _.cloneDeep(this.data);
      this.dataIsReady = true;
    }
  }

  //重新整理版面
  reloadItems(params) {
    //params: {offset: 0, limit: 10}
    this.itemResource.query(params).then(items => this.items = items);
  }

}
