import Vue from 'vue';
import draggable from 'vuedraggable';
import MomentPlugin from './Moment';
import UtilsPlugin from './Utils';

Vue.component('vue-draggable', draggable);
Vue.use(MomentPlugin);
Vue.use(UtilsPlugin);

//char componet add
import BarChart from '@/components/chart/BarChart.vue';
import ColumnChart from '@/components/chart/ColumnChart.vue';
import LineChart from '@/components/chart/LineChart.vue';
import PieChart from '@/components/chart/PieChart.vue';
Vue.component('BarChart', BarChart);
Vue.component('ColumnChart', ColumnChart);
Vue.component('LineChart', LineChart);
Vue.component('PieChart', PieChart);
