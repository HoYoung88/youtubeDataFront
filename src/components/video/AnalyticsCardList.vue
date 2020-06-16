<template>
  <v-sheet class="videos-container" tile elevation="0">
    <v-row>
      <template v-for="(item, index) in getVideos">
        <v-col cols="12" xs="12" sm="12" md="4" lg="3" :key="index">
          <video-analytics-card
            :item-data="item"
            :item-index="index"
            v-intersect.once="
              getVideos.length - 1 == index
                ? {
                    handler: onIntersect,
                    options: {
                      threshold: [0.5],
                    },
                  }
                : {}
            "
          ></video-analytics-card>
        </v-col>
      </template>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Getter,
  Action,
  Prop,
} from '@/lib/VuePropertyDecorator';

@Component({
  components: {
    VideoAnalyticsCard: () => import('@/components/video/AnalyticsCard.vue'),
  },
})
export default class VideoAnalyticsCardList extends Vue {
  @Prop({ type: String }) readonly channelId!: string;

  @Getter('getVideos', { namespace: 'videos' })
  getVideos!: Api.VideoItem[];

  @Action('asyncVideoData', { namespace: 'videos' })
  asyncVideoData!: (params: {
    channelId: string;
    page: number;
  }) => Promise<void>;

  isIntersecting = false;
  page = 2;

  async onIntersect(entries: any, observer: any) {
    // More information about these options
    // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    this.isIntersecting = entries[0].intersectionRatio >= 0.5;
    if (this.isIntersecting) {
      await this.asyncVideoData({
        channelId: this.channelId,
        page: this.page,
      });
      this.page += 1;
    }
  }
}
</script>

<style lang="scss" scoped></style>
