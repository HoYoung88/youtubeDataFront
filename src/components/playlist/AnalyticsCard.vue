<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
  >
    <v-card>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-img
            :src="itemData.thumbnails.medium.url"
            :min-height="itemData.thumbnails.medium.height"
          >
            <v-fade-transition>
              <v-overlay v-if="hover" absolute>
                <v-btn
                  :href="`https://www.youtube.com/playlist?list=${itemData.playlistId}`"
                  target="_blank"
                  ref="noreferrer"
                  icon
                >
                  <v-icon>fas fa-external-link-alt</v-icon>
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-img>
        </template>
      </v-hover>
      <v-card-title
        class="d-inline-block text-truncate pb-0"
        style="max-width: 100%;"
        :title="itemData.title"
      >
        {{ itemData.title }}
      </v-card-title>

      <v-list class="transparent">
        <v-list-item>
          <v-list-item-title>
            {{ $t('label.common.views') }}
          </v-list-item-title>
          <v-list-item-title class="text-right">
            {{ itemData.views | comma }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>{{
            $t('label.common.estimatedMinutesWatched')
          }}</v-list-item-title>
          <v-list-item-title class="text-right">
            {{ itemData.estimatedMinutesWatched | comma }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>{{
            $t('label.common.subscribers')
          }}</v-list-item-title>
          <v-list-item-title class="text-right">
            {{ itemData.subscribersGained | comma }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- <v-list-item>
      <v-list-item-title>
        {{ $moment().add(-1, 'month').format('M월') }} vs
        {{ $moment().format('M월') }} 증감율
      </v-list-item-title>
    </v-list-item> -->
      <!-- <v-sheet min-height="240"> -->
      <!-- <playlist-chart
        :series="createChartData(itemData.stat.views)"
        :categories="categories"
        title="조회수"
      >
      </playlist-chart> -->
      <!-- <template v-if="isChartGroupShow">
        <playlist-chart
          :series="createChartData(itemData.stat.views)"
          :categories="categories"
          title="조회수"
        >
        </playlist-chart>
        <playlist-chart
          :series="createChartData(itemData.stat.estimatedMinutesWatched)"
          :categories="categories"
          title="시청시간"
        >
        </playlist-chart>
        <playlist-chart
          :series="createChartData(itemData.stat.subscribers)"
          :categories="categories"
          title="구독"
        >
        </playlist-chart> 
      </template>-->
      <!-- </v-sheet> -->
    </v-card>
  </v-lazy>
</template>

<script lang="ts">
import { Vue, Component, Prop } from '@/lib/VuePropertyDecorator';
import { SeriesOptionsType } from 'highcharts';

@Component({
  components: {
    PlaylistChart: () => import('@/components/playlist/PlaylistChart.vue'),
  },
})
export default class PlaylistAnalyticsCard extends Vue {
  @Prop({ type: Object, required: true }) itemData!: Api.PlaylistItem;
  @Prop({ type: Number, required: true }) itemIndex!: number;
  isActive = false;
  categories = [''];
  isChartGroupShow = false;
  mounted() {
    this.$nextTick(async () => {
      await Vue.sleep(500);

      this.isChartGroupShow = true;
    });
  }

  createChartData(data: Api.chartDataType[]): SeriesOptionsType[] {
    const datas: SeriesOptionsType[] = [];
    //index === 0 ? -1 * increasPercent : increasPercent
    data.forEach(({ month, value, increasPercent }, index) => {
      datas.push({
        name: month,
        data: [increasPercent],
        type: 'bar',
      });
    });

    return datas;
  }
}
</script>

<style lang="scss" scoped></style>
