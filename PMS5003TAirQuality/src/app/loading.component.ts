import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template:`
    <div id="over" class="over" *ngIf="loading">
        <div id="layout" class="layout"><img src="../assets/pic/loading.png" /></div>
    </div>
  `,
  styles: [`
.over {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    opacity:0.5;
    z-index: 1000;
}

.layout {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    z-index: 1001;
    text-align: center;
}

.layout img{
    -webkit-animation: loading 2s infinite linear;
    -moz-animation: loading 2s infinite linear;
    -o-animation: loading 2s infinite linear;
    animation: loading 2s infinite linear;
    width: 25vh;
}
@-webkit-keyframes loading {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}
@-moz-keyframes loading {
    from {
        -moz-transform: rotate(0deg);
    }
    to {
        -moz-transform: rotate(360deg);
    }
}
@-o-keyframes loading {
    from {
        -o-transform: rotate(0deg);
    }
    to {
        -o-transform: rotate(360deg);
    }
}
@keyframes loading {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
  `]
})
export class LoadingComponent{

  constructor() { }
  @Input() loading;

}
