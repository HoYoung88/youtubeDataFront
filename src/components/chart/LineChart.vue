<template>
  <v-sheet class="line-chart"></v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from '@/lib/VuePropertyDecorator';
import HighchartsMixin from '@/mixins/Highcharts';

@Component({ components: {} })
export default class LineChart extends Mixins(HighchartsMixin) {
  mounted() {
    this.$nextTick(() => {
      this.defaultOptions.chart = { type: 'line' };

      this.defaultOptions.xAxis = {
        type: 'datetime',
        labels: {
          formatter: function () {
            return Vue.moment(this.value).format(
              Vue.MOMENT_FORMATTING_DATE_TIME_PATTERNS.MONTH_DAY_FULL
            );
          },
        },
      };
      this.defaultOptions.tooltip = {
        formatter: function () {
          return (
            Vue.moment(this.x).format(
              Vue.MOMENT_FORMATTING_DATE_TIME_PATTERNS.YEAR_MONTH_DAY_FULL
            ) +
            '<br/>' +
            this.y +
            '  <br/>'
          );
        },
      };

      this.createChart();
    });
  }
}
</script>

<style lang="scss" scoped></style>
