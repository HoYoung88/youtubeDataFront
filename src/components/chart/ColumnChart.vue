<template>
  <v-sheet class="column-chart"></v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from '@/lib/VuePropertyDecorator';
import HighchartsMixin from '@/mixins/Highcharts';

@Component({ components: {} })
export default class ColumnChart extends Mixins(HighchartsMixin) {
  @Prop({ type: Array, required: true }) categories!: string[];

  mounted() {
    this.$nextTick(() => {
      this.defaultOptions.chart = {
        type: 'column',
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
