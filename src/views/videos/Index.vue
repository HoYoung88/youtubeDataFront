<template>
  <v-container fluid>
    <video-analytics-card-list></video-analytics-card-list>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Action } from '@/lib/VuePropertyDecorator';
import VideoAnalyticsCardList from '@/components/video/AnalyticsCardList.vue';
@Component({
  components: {
    VideoAnalyticsCardList,
  },
})
export default class VideosIndex extends Vue {
  @Prop({ type: String, required: true }) channelId!: string;

  @Action('asyncVideoData', { namespace: 'videos' })
  asyncVideoData!: (channelId: string) => Promise<void>;

  created() {
    this.asyncVideoData(this.channelId);
  }
}
</script>

<style lang="scss" scoped></style>
