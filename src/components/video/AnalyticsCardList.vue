<template>
  <v-sheet class="videos-container" tile elevation="0">
    <v-row>
      <template v-for="(item, index) in getVideos">
        <v-col cols="12" xs="12" sm="12" md="4" lg="3" :key="index">
          <video-analytics-card
            :item-data="item"
            :item-index="index"
          ></video-analytics-card>
        </v-col>
      </template>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Getter } from '@/lib/VuePropertyDecorator';

@Component({
  components: {
    VideoAnalyticsCard: () => import('@/components/video/AnalyticsCard.vue'),
  },
})
export default class VideoAnalyticsCardList extends Vue {
  @Getter('getVideos', { namespace: 'videos' })
  getVideos!: Api.VideoItem[];
}
</script>

<style lang="scss" scoped></style>
