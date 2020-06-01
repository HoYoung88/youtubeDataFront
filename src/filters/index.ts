import Vue from 'vue';

export function comma(value: string | number) {
  return new Intl.NumberFormat('ko-KR').format(
    value === undefined ? 0 : Number(value)
  );
}

export function isEmptyValue(value: string, emptyValue: string) {
  return !value ? emptyValue : value;
}

export function timeFormat(value: Date) {
  return Vue.moment(value).format('HH:mm:ss');
}

export function dateFormat(value: Date) {
  return Vue.moment(value).format('YYYY-MM-DD');
}

export function fromNow(value: Date) {
  return Vue.moment(value).fromNow(true);
}
