import * as moment from 'moment';

export class DaterangepickerComponent {
  constructor(minDate = moment().subtract(7, 'day').startOf('day'),maxDate = moment().endOf('day')) {
    this.rangeValue = [minDate,maxDate];
  }
  private rangeValue:any;

  public options: Object = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    ranges: {
      'Today': [moment(), moment()],
      'Last 2 Days': [moment().subtract(2, 'day'), moment()],
      'Last Week': [moment().subtract(7, 'day'), moment()],
      'Last 2 Weeks': [moment().subtract(14, 'day'), moment()],
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
      moment(this.rangeValue[0]).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
      moment(this.rangeValue[1]).endOf('day').format('YYYY-MM-DD HH:mm:ss')
    ];
    //new Date((new Date(this.rangeValue[0])).getTime() - ((new Date()).getTimezoneOffset()*60000)).toISOString().slice(0, 19).replace('T', ' '),
    //new Date(new Date(new Date((new Date(this.rangeValue[1]).setHours(23,59,59,999))).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ')

  }
}
