<template>
  <v-sheet class="bar-chart"></v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from '@/lib/VuePropertyDecorator';
import HighchartsMixin from '@/mixins/Highcharts';

@Component({ components: {} })
export default class BarChart extends Mixins(HighchartsMixin) {
  @Prop({ type: Array, required: true }) categories!: string[];

  mounted() {
    this.$nextTick(() => {
      this.defaultOptions.chart = {
        type: 'bar',
      };
      this.defaultOptions.xAxis = {
        categories: this.categories,
      };
      this.createChart();
    });
  }
}
</script>

<style lang="scss" scoped></style>
