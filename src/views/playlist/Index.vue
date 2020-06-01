<template>
  <v-container fluid>
    <playlist-analytics-card-list></playlist-analytics-card-list>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Action } from '@/lib/VuePropertyDecorator';
import PlaylistAnalyticsCardList from '@/components/playlist/AnalyticsCardList.vue';

@Component({
  components: {
    PlaylistAnalyticsCardList,
  },
})
export default class PlaylistIndex extends Vue {
  @Prop({ type: String, required: true }) channelId!: string;

  @Action('asyncPlaylistData', { namespace: 'playlist' })
  asyncPlaylistData!: (channelId: string) => Promise<void>;

  created() {
    this.asyncPlaylistData(this.channelId);
  }
}
</script>

<style lang="scss" scoped>
.playlist-container {
}
</style>
