import * as moment from 'moment';
import { Cookie } from 'ng2-cookies';

export class DaterangepickerComponent {
  constructor(
      minDate = (Cookie.check('minDate'))?(moment(Cookie.get('minDate'))):(moment().subtract(7, 'day').startOf('day')),
      maxDate = (Cookie.check('maxDate'))?(moment(Cookie.get('maxDate'))):(moment().endOf('day')),
      option?
  ) {
    this.rangeValue = [moment(minDate),moment(maxDate)];
    if(option){
      this.options = option;
    }
  }
  public rangeValue:any;

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

  public setTimeByDate(minDate = moment().startOf('day').toDate(),maxDate = moment().endOf('day').toDate()){
    this.rangeValue[0] = moment(minDate);
    this.rangeValue[1] = moment(maxDate);
    Cookie.set('minDate',minDate.toString());
    Cookie.set('maxDate',maxDate.toString());
  }
  public getTimeByDate(){
    return [this.rangeValue[0].toDate(),this.rangeValue[1].toDate()];
  }

  public getSQLString(): string[]{
    return [
      this.rangeValue[0].startOf('day').format('YYYY-MM-DD HH:mm:ss'),
      this.rangeValue[1].endOf('day').format('YYYY-MM-DD HH:mm:ss')
    ];
    //new Date((new Date(this.rangeValue[0])).getTime() - ((new Date()).getTimezoneOffset()*60000)).toISOString().slice(0, 19).replace('T', ' '),
    //new Date(new Date(new Date((new Date(this.rangeValue[1]).setHours(23,59,59,999))).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ')

  }
}
