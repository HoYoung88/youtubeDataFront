import Vue from 'vue';

type MOMENT_FORMATTING_DATE_TIME_PATTERNS = {
  DAY_ABBR: string;
  MONTH_DAY_FULL: string;
  YEAR_MONTH_DAY_FULL: string;
};

declare module 'vue/types/vue' {
  interface Vue {
    $moment: typeof import('moment');
  }

  // `VueConstructor` 인터페이스에서
  // 전역 속성을 선언할 수 있습니다
  interface VueConstructor {
    MOMENT_FORMATTING_DATE_TIME_PATTERNS: MOMENT_FORMATTING_DATE_TIME_PATTERNS;
    moment: typeof import('moment');
    sleep: (timeout: number) => Promise<void>;
    estimatedMinutesWatchedTimeFormat: (
      views: number,
      estimatedMinutesWatched: number
    ) => string;
    minuteTimeFormat: (minute: number) => string;
  }
}

// ComponentOptions는 types/options.d.ts에 선언되어 있습니다.
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {}
}

declare module '*.json';
