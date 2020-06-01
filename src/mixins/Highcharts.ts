import { Vue, Component, Prop, Watch } from '@/lib/VuePropertyDecorator';
import lodash from 'lodash';
import * as Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';
accessibility(Highcharts);

@Component({})
export default class HighchartsMixin extends Vue {
  @Prop({ type: Array, required: true })
  series!: Highcharts.SeriesOptionsType[];

  @Prop({
    type: Object,
    default: () => {
      return {};
    },
  })
  options!: Highcharts.Options;

  @Prop({ type: String, default: '' })
  title!: string;

  @Prop({ type: String, default: '' })
  subtitle!: string;

  chart!: Highcharts.Chart;
  readonly defaultOptions: Highcharts.Options = {
    chart: {
      height: 300,
    },
    yAxis: {
      title: {
        text: null,
      },
    },
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  @Watch('series', { deep: true })
  watchSeries(newValue: Highcharts.Series[]) {
    console.log('==== update series ====');
    if (newValue.length > 0) this.updateChart(newValue);
  }

  createChart() {
    this.defaultOptions.title = { text: this.title };
    this.defaultOptions.subtitle = { text: this.subtitle };
    this.defaultOptions.series = this.series;

    this.chart = Highcharts.chart(
      this.$el as Highcharts.HTMLDOMElement,
      lodash.merge({}, this.defaultOptions, this.options)
    );
  }

  updateChart(series: Highcharts.Series[]) {
    Promise.resolve()
      .then(() => {
        this.chart.series.forEach((item) => {
          item.remove(true);
        });

        return Promise.resolve();
      })
      .then(() => {
        this.series.forEach((series) => {
          this.chart.addSeries(series);
        });
        return Promise.resolve();
      })
      .then(() => {
        const _options = lodash.merge(this.defaultOptions, this.options);
        this.chart.update(_options);
        return Promise.resolve();
      });
  }
}
