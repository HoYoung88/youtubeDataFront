<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
  >
    <v-card :min-width="itemData.thumbnails.medium.width">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-img
            :src="itemData.thumbnails.medium.url"
            :min-height="itemData.thumbnails.medium.height"
          >
            <v-fade-transition>
              <v-overlay v-if="hover" absolute>
                <v-btn
                  :href="`https://youtu.be/${itemData.videoId}`"
                  target="_blank"
                  ref="noreferrer"
                  icon
                >
                  <v-icon>fas fa-external-link-alt</v-icon>
                </v-btn>
              </v-overlay>
            </v-fade-transition>
            <v-sheet
              style="position: absolute; bottom: 0; right: 0;"
              tile
              dark
              color="black"
              class="px-1 pt-1"
            >
              <span class="body-1 font-weight-bold">{{
                itemData.duration
              }}</span>
            </v-sheet>
          </v-img>
        </template>
      </v-hover>

      <v-card-title
        class="d-inline-block text-truncate pb-0"
        style="max-width: 100%;"
      >
        {{ itemData.title }}
      </v-card-title>

      <v-list class="transparent">
        <v-list-item>
          <v-list-item-title>{{ $t('label.common.views') }}</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ itemData.views | comma }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>{{
            $t('label.common.estimatedMinutesWatched')
          }}</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ itemData.estimatedMinutesWatched | comma }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>{{
            $t('label.common.subscribers')
          }}</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ itemData.subscribers | comma }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <video-line-chart
        :series="createChartData(itemData.stat.views, '조회수')"
        title="조회수"
      ></video-line-chart>

      <!-- <v-card-subtitle class="text-right">
      {{ itemData.duration }}
    </v-card-subtitle> -->
      <!-- <v-sheet min-height="400"> -->
      <!-- <template v-if="isChartGroupShow">
        
        <video-line-chart
          :series="
            createChartData(itemData.stat.estimatedMinutesWatched, '시청시간')
          "
          title="시청시간"
        ></video-line-chart>
        <video-line-chart
          :series="createChartData(itemData.stat.subscribers, '구독자')"
          title="구독자"
        ></video-line-chart>
        <video-line-chart
          :series="createChartData(itemData.stat.likes, '좋아요')"
          title="좋아요"
        ></video-line-chart>
      </template> -->
      <!-- </v-sheet> -->
    </v-card>
  </v-lazy>
</template>

<script lang="ts">
import { Vue, Component, Prop } from '@/lib/VuePropertyDecorator';

@Component({
  components: {
    VideoLineChart: () => import('@/components/video/VideoLineChart.vue'),
  },
})
export default class VideoAnalyticsCard extends Vue {
  @Prop({ type: Object, required: true }) itemData!: Api.VideoItem;
  @Prop({ type: Number, required: true }) itemIndex!: number;
  isActive = false;
  mounted() {
    this.$nextTick(async () => {
      // await Vue.sleep(300);
      // this.isChartGroupShow = true;
    });
  }

  createChartData(datas: { date: string; value: number }[], chartName: string) {
    const chartData = datas.map((item) => [Date.parse(item.date), item.value]);
    return [{ type: 'line', name: chartName, data: chartData }];
  }
}
</script>

<style lang="scss" scoped></style>
