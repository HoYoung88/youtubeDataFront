<script lang="ts">
import { Component } from '@/lib/VuePropertyDecorator';
import BarChart from '../chart/BarChart.vue';

@Component({ components: {} })
export default class PlaylistChart extends BarChart {
  created() {
    this.options.chart = {
      height: 80,
      animation: false,
      plotBackgroundColor: '',
      plotBorderWidth: undefined,
      plotShadow: false,
    };
    // this.options.xAxis = {
    //   categories: this.categories
    // }
    this.options.xAxis = [
      {
        categories: this.categories,
        reversed: false,
        labels: {
          step: 1,
          enabled: false,
        },
      },
      {
        // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: this.categories,
        linkedTo: 0,
        labels: {
          step: 1,
          enabled: false,
        },
      },
    ];
    this.options.yAxis = {
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
    };
    this.options.plotOptions = {
      series: {
        stacking: 'normal',
        animation: false,
      },
    };
    this.options.legend = {
      enabled: false,
    };
  }
}
</script>

<style lang="scss" scoped></style>
