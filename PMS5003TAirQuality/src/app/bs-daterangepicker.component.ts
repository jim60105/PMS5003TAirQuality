import { bsDatepickerReducer } from "ngx-bootstrap/datepicker/reducer/bs-datepicker.reducer";

export class BsDaterangepickerComponent {
  constructor(minDate: Date = (new Date(new Date(new Date((new Date()).setDate((new Date()).getDate() - 7))).setHours(0,0,0,0))),maxDate:Date = new Date((new Date()).setHours(23,59,59))) {
    this.bsRangeValue = [minDate,maxDate];
  }
  private bsRangeValue:any;

  public setTimeByDate(minDate:Date,maxDate:Date){
    this.bsRangeValue[0] = minDate;
    this.bsRangeValue[1] = maxDate;
  }
  public getTimeByDate(): Date[]{
    return this.bsRangeValue;
  }

  public getSQLString(): string[]{
    return [
      new Date((new Date(this.bsRangeValue[0])).getTime() - ((new Date()).getTimezoneOffset()*60000)).toISOString().slice(0, 19).replace('T', ' '),
      new Date(new Date(new Date((new Date(this.bsRangeValue[1]).setHours(23,59,59,999))).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ')
    ];
  }
}
