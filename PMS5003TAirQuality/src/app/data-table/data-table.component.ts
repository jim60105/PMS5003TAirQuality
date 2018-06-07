import { Component, Input,ViewChild } from '@angular/core';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  // @ViewChild(DataTableModule) public _DataTableModule:DataTableModule;
  //資料
  @Input() data:any;
  private dataTemp = _.cloneDeep(this.data);
  @Input() title = ['Time','位置','PM1','PM2.5','PM10','溫度','濕度'];
  @Input() titleClass = ['','','','','','',''];
  private titleClassTemp = _.cloneDeep(this.titleClass);
  @Input() column =
    [
      {data:'time',editor: false},
      {data:'device_id',editor: false},
      {data:'pm1',editor: false},
      {data:'pm25',editor: false},
      {data:'pm10',editor: false},
      {data:'temp',editor: false},
      {data:'humid',editor: false}
    ];
  @Input() options = {
    stretchH: 'all',
    columnSorting: true,
    sortIndicator: true,
    contextMenu: true
  };

  dataIsReady = false;

  ngDoCheck() {
    //如果資料有更改就重新載入
    if(this.data!==undefined && !_.isEqual(this.dataTemp,this.data)) {
      this.dataIsReady = false;
      // this.reloadItems({offset: 0, limit: this.limit});
      if(!_.isEqual(this.titleClass,this.titleClassTemp)) {
        let title = [];
        this.title.forEach((value,index,array)=>{
          title.push(`<span class="${this.titleClass[index]}">${value}</span>`);
        });
        this.title = _.cloneDeep(title);
        this.titleClassTemp = _.cloneDeep(this.title);
      }

      this.column.forEach((value,index,array)=>{
        value.editor = false;
      });
      this.dataTemp = _.cloneDeep(this.data);
      this.dataIsReady = true;
    }
  }
}
