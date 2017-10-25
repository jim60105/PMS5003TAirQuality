import * as moment from 'moment';

export class DaterangepickerComponent {
  constructor(minDate: Date = (new Date(new Date(new Date((new Date()).setDate((new Date()).getDate() - 7))).setHours(0,0,0,0))),maxDate:Date = new Date((new Date()).setHours(23,59,59))) {
    this.rangeValue = [minDate,maxDate];
  }
  private rangeValue:any;

  public options: Object = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    ranges: {
      'Last Week': [moment().subtract(7, 'day'), moment()],
      'Last 2 Weeks': [moment().subtract(14, 'day'), moment()],
      'Last 3 Weeks': [moment().subtract(21, 'day'), moment()],
      'Last Month': [moment().subtract(1, 'month'), moment()],
    },
    startDate: moment().subtract(7, 'day'),
    autoApply: true
  };

  public setTimeByDate(minDate:Date,maxDate:Date){
    this.rangeValue[0] = minDate;
    this.rangeValue[1] = maxDate;
  }
  public getTimeByDate(): Date[]{
    return this.rangeValue;
  }

  public getSQLString(): string[]{
    return [
      new Date((new Date(this.rangeValue[0])).getTime() - ((new Date()).getTimezoneOffset()*60000)).toISOString().slice(0, 19).replace('T', ' '),
      new Date(new Date(new Date((new Date(this.rangeValue[1]).setHours(23,59,59,999))).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ')
    ];
  }
}
