<template>
  <v-container class="px-5">
    <v-skeleton-loader
      :loading="loading"
      type="list-item-avatar-two-line, button"
    >
      <channel-info :channel-id="channelId">
        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="item in menus" :key="item.title">
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-tab>
          </v-tabs>
        </template>
      </channel-info>
    </v-skeleton-loader>
    <v-spacer class="py-1"></v-spacer>
    <v-row v-if="loading">
      <v-col cols="12" xs="12" sm="12" md="4" lg="3" v-for="n in 8" :key="n">
        <v-skeleton-loader :loading="loading" type="text, card" />
      </v-col>
    </v-row>
    <v-tabs-items v-model="tab" v-if="!loading">
      <v-tab-item v-for="(item, index) in menus" :key="index">
        <component :is="item.component" :channel-id="channelId"></component>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Action } from '@/lib/VuePropertyDecorator';
import ChannelInfo from '@/components/channel/ChannelInfo.vue';
import ChannelAnalyticsCardList from '@/components/channel/AnalyticsCardList.vue';
import PlaylistAnalyticsCardList from '@/components/playlist/AnalyticsCardList.vue';
import VideoAnalyticsCardList from '@/components/video/AnalyticsCardList.vue';
import { SnackbarOpt } from '../../store/modules/snackbar';

@Component({
  components: {
    ChannelInfo,
    ChannelAnalyticsCardList,
    PlaylistAnalyticsCardList,
    VideoAnalyticsCardList,
  },
})
export default class AnalyticsIndex extends Vue {
  @Prop({ type: String, required: true }) channelId!: string;
  tab = null;
  menus = [
    {
      title: '채널',
      component: 'channel-analytics-card-list',
      icon: 'fas fa-chart-line',
    },
    {
      title: '플레이리스트',
      icon: 'fas fa-list',
      component: 'playlist-analytics-card-list',
    },
    {
      title: '비디오',
      icon: 'fas fa-video',
      component: 'video-analytics-card-list',
    },
  ];
  loading = true;

  @Action('asyncChannelData', { namespace: 'channel' })
  asyncChannelData!: (channelId: string) => Promise<void>;

  @Action('asyncPlaylistData', { namespace: 'playlist' })
  asyncPlaylistData!: (channelId: string) => Promise<void>;

  @Action('asyncVideoData', { namespace: 'videos' })
  asyncVideoData!: (channelId: string) => Promise<void>;

  @Action('showSnackbar', { namespace: 'snackbar' })
  showSnackbar!: (option: SnackbarOpt) => void;

  async beforeMount() {
    try {
      await this.asyncChannelData(this.channelId);
      await this.asyncPlaylistData(this.channelId);
      await this.asyncVideoData(this.channelId);
    } catch (e) {
      this.showSnackbar({
        color: 'error',
        text: 'Axios Error',
      });
    }
    this.loading = false;
  }
}
</script>

<style lang="scss" scoped></style>
