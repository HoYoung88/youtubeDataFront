<template>
  <v-sheet class="pie-chart"></v-sheet>
</template>

<script lang="ts">
import { Component, Mixins } from '@/lib/VuePropertyDecorator';
import HighchartsMixin from '@/mixins/Highcharts';

@Component({ components: {} })
export default class PieChart extends Mixins(HighchartsMixin) {
  mounted() {
    this.$nextTick(() => {
      this.defaultOptions.chart = {
        type: 'pie',
        plotBackgroundColor: '',
        plotBorderWidth: undefined,
        plotShadow: false,
      };
      this.createChart();
    });
  }
}
</script>

<style lang="scss" scoped></style>
