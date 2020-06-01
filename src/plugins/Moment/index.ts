import Vue from 'vue';
import * as moment from 'moment';
import 'moment/locale/ko';

export default function MomentPlugin(_vue: typeof Vue, options: any) {
  Vue.prototype.$moment = moment.default;
  Vue.moment = moment.default;
  Vue.MOMENT_FORMATTING_DATE_TIME_PATTERNS = {
    DAY_ABBR: 'DD',
    MONTH_DAY_FULL: 'MM.DD',
    YEAR_MONTH_DAY_FULL: 'l',
  };
}
