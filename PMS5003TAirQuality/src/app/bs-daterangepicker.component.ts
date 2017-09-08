import { bsDatepickerReducer } from "ngx-bootstrap/datepicker/reducer/bs-datepicker.reducer";

export class BsDaterangepickerComponent {
  private bsRangeValue:any;
  constructor(minDate: Date = (new Date(new Date(new Date((new Date()).setMonth((new Date()).getMonth() - 2))).setHours(0,0,0,0))),maxDate:Date = new Date((new Date()).setHours(23,59,59))) {
    this.bsRangeValue = [minDate,maxDate];
  }

  public setTimeByDate(minDate:Date,maxDate:Date){
    this.bsRangeValue[0] = minDate;
    this.bsRangeValue[1] = maxDate;
  }
  public getTimeByDate(): Date[]{
    return this.bsRangeValue;
  }

  public getSQLString(): string[]{
    return [ (new Date ((new Date((new Date(new Date(this.bsRangeValue[0]))).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' '),
        (new Date ((new Date((new Date(new Date(this.bsRangeValue[1]))).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ')
    ];
  }
}