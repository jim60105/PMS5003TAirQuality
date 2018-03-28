import * as moment from 'moment';
import { Cookie } from 'ng2-cookies';
import { Daterangepicker } from 'ng2-daterangepicker';

export class DaterangepickerComponent {
  constructor(
      minDate = (Cookie.check('minDate'))?(moment(Cookie.get('minDate'))):(moment().subtract(7, 'day')),
      maxDate = (Cookie.check('maxDate'))?(moment(Cookie.get('maxDate'))):(moment().endOf('day'))
  ) {
    this.rangeValue = [moment(minDate),moment(maxDate)];

    this.settings['startDate'] =  (Cookie.check('minDate'))?(moment(Cookie.get('minDate'))):(moment(minDate));
    this.settings['endDate'] =  (Cookie.check('maxDate'))?(moment(Cookie.get('maxDate'))):(moment(maxDate));
  }
  public settings: Object = {
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
    endDate: moment(),
    minDate: moment('2017/10/02','YYYY/MM/DD'),
    maxDate: moment(),
    autoApply: true
  };
  public rangeValue:any;

  public setTimeByDate(minDate = moment().startOf('day').toDate(),maxDate = moment().endOf('day').toDate()){
    this.rangeValue[0] = moment(minDate);
    this.rangeValue[1] = moment(maxDate);
    Cookie.set('minDate',String(moment(minDate).format()));
    Cookie.set('maxDate',String(moment(maxDate).format()));
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
