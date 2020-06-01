<script lang="ts">
import { Component } from '@/lib/VuePropertyDecorator';
import LineChart from '../chart/LineChart.vue';

@Component({ components: {} })
export default class VideoLineChart extends LineChart {
  created() {
    this.options.chart = {
      animation: false,
      height: 300,
      plotBackgroundColor: '',
      plotBorderWidth: undefined,
      plotShadow: false,
    };
    this.options.title = {
      align: 'center',
    };

    this.options.xAxis = {
      title: {
        text: null,
      },
      labels: {
        // enabled: false,
      },
    };

    this.options.yAxis = {
      title: {
        text: null,
      },
      labels: {
        // enabled: false,
      },
    };

    this.options.plotOptions = {
      line: {
        lineWidth: 2,
        // marker: {
        //   enabled: false,
        // },
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
