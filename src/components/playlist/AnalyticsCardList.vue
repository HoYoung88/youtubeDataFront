<template>
  <v-sheet class="playlist-container" tile elevation="0">
    <v-row>
      <template v-for="(item, index) in getPlaylist">
        <v-col cols="12" xs="12" sm="12" md="4" lg="3" :key="index">
          <playlist-analytics-card
            :item-data="item"
            :item-index="index"
            v-intersect.once="
              getPlaylist.length - 1 == index
                ? {
                    handler: onIntersect,
                    options: {
                      threshold: [0.5],
                    },
                  }
                : {}
            "
          ></playlist-analytics-card>
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
    PlaylistAnalyticsCard: () =>
      import('@/components/playlist/AnalyticsCard.vue'),
  },
})
export default class PlaylistAnalyticsCardList extends Vue {
  @Prop({ type: String }) readonly channelId!: string;

  @Getter('getPlaylist', { namespace: 'playlist' })
  getPlaylist!: Api.PlaylistItem[];

  @Action('asyncPlaylistData', { namespace: 'playlist' })
  asyncPlaylistData!: (params: {
    channelId: string;
    page: number;
  }) => Promise<void>;

  isIntersecting = false;
  page = 2;

  async onIntersect(entries: any, observer: any) {
    // More information about these options
    // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    this.isIntersecting = entries[0].intersectionRatio >= 0.4;
    if (this.isIntersecting) {
      // await this.asyncPlaylistData({
      //   channelId: this.channelId,
      //   page: this.page,
      // });
      // this.page += 1;
      console.log(11);
    }
  }
}
</script>

<style lang="scss" scoped></style>
