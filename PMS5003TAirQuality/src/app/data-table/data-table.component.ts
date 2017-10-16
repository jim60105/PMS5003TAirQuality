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
  @Input() datas:any;
  @Input() clientInfo:any;
  @Input() timeDisable:boolean = false;
  @Input() limit:number = 10;
  private dataTemp = _.cloneDeep(this.datas);

  itemResource = new DataTableResource(this.datas);
  items = [];
  itemCount = 0;
  datasIsReady = false;

  ngDoCheck() {
    if(this.datas!==undefined && !_.isEqual(this.dataTemp,this.datas)) {
      this.datasIsReady = false;
      this.itemResource = new DataTableResource(this.datas);
      this.itemResource.count().then(count => this.itemCount = count);
      this.reloadItems({offset: 0, limit: this.limit});
      this.dataTemp = _.cloneDeep(this.datas);
      this.datasIsReady = true;
    }
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

}
