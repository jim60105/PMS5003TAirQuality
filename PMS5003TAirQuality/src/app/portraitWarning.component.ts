import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portraitWarn',
  template:`
  <span (window:resize)="onResize($event.target)">
    <div id="over" class="over" *ngIf="display">
        <div class="layout">請將裝置打橫</div>
    </div>
  </span>
  `,
  styles: [`
.over {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #494949;
    opacity:0.7;
    z-index: 1000;
}

.layout {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    z-index: 1001;
    text-align: center;
    font-size: 50px;
    color: white;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
}
  `]
})
export class PortraitWarningComponent{
  constructor() { }
  public display = false;

  ngOnInit(){
    this.onResize(window);
  }

  public onResize(event) {
    if(event.innerWidth<event.innerHeight && event.innerWidth<768){
      this.display = true;
    }else{
      this.display = false;
    }
  }
}
