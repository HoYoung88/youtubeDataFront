<template>
  <v-sheet class="playlist-container" tile elevation="0">
    <v-row>
      <template v-for="(item, index) in getPlaylist">
        <v-col cols="12" xs="12" sm="12" md="4" lg="3" :key="index">
          <playlist-analytics-card
            :item-data="item"
            :item-index="index"
          ></playlist-analytics-card>
        </v-col>
      </template>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Getter } from '@/lib/VuePropertyDecorator';

@Component({
  components: {
    PlaylistAnalyticsCard: () =>
      import('@/components/playlist/AnalyticsCard.vue'),
  },
})
export default class PlaylistAnalyticsCardList extends Vue {
  @Getter('getPlaylist', { namespace: 'playlist' })
  getPlaylist!: Api.PlaylistItem[];
}
</script>

<style lang="scss" scoped></style>
