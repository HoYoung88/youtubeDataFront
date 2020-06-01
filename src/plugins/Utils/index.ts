import Vue from 'vue';

const convartMinuteTimeFormat = (minute: number) => {
  const millisecond = minute * 60 * 60 * 1000;

  const sec = Math.round((millisecond / 1000) % 60);
  const min = Math.round(millisecond / 1000 / 60);
  const hour = Math.round(millisecond / 1000 / 60 / 60);

  return `${hour.toString().padStart(2, '0')}:${min
    .toString()
    .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
};

const averageEstimatedMinutesWatchedTime = (
  views: number,
  estimatedMinutesWatched: number
) => {
  const time = isNaN(estimatedMinutesWatched / views)
    ? 0
    : estimatedMinutesWatched / views;
  const averageEstimatedMinutesWatchedTime = parseFloat(time.toFixed(2));
  return convartMinuteTimeFormat(averageEstimatedMinutesWatchedTime);
};

export default function (_vue: typeof Vue, options: any) {
  Vue.sleep = (timeout: number) =>
    new Promise((reslove) => {
      setTimeout(() => {
        reslove();
      }, timeout);
    });

  Vue.estimatedMinutesWatchedTimeFormat = (
    view: number,
    estimatedMinutesWatched: number
  ) => averageEstimatedMinutesWatchedTime(view, estimatedMinutesWatched);

  Vue.minuteTimeFormat = (minute: number) => convartMinuteTimeFormat(minute);
}
