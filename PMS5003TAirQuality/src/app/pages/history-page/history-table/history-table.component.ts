import { Component, Input } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent {
  @Input() datas:any;

  ngOnInit() {
    let interval = setInterval(()=> {
      if(Array.isArray(this.datas)) {
        clearInterval(interval);
        this.itemResource = new DataTableResource(this.datas);
        this.itemResource.count().then(count => this.itemCount = count);
        this.datasIsReady = true;
      }
    },500);
  }

  itemResource = new DataTableResource(this.datas);
  items = [];
  itemCount = 0;
  datasIsReady = false;

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

}
