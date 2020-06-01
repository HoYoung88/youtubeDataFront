<template>
  <v-toolbar prominent :src="getBanner" elevation="1">
    <v-toolbar-title>
      <v-list-item>
        <v-list-item-avatar size="80" tile>
          <img :src="channelThumnails" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold channel-title-font-size">
            {{ getTitle }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ getDescription }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-toolbar-title>

    <template v-slot:extension v-if="$slots['extension']">
      <slot name="extension"> </slot>
    </template>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Getter } from '@/lib/VuePropertyDecorator';

@Component({ components: {} })
export default class ChannelInfo extends Vue {
  @Getter('getTitle', { namespace: 'channel' })
  getTitle!: string;

  @Getter('getDescription', { namespace: 'channel' })
  getDescription!: string;

  @Getter('getBanner', { namespace: 'channel' })
  getBanner!: string;

  @Getter('getThumbnails', { namespace: 'channel' })
  getThumbnails!: Api.Thumbnails;

  get channelThumnails() {
    if (this.getThumbnails) {
      return this.getThumbnails.medium.url;
    } else {
      return '';
    }
  }
}
</script>

<style lang="scss">
.v-toolbar__image {
  opacity: 0.5;
}

.channel-title-font-size {
  font-size: 20px;
}
</style>
