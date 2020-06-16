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
          <v-list-item-subtitle class="pb-1">
            <v-row align="center" justify="start" no-gutters>
              <div class="title-1 text--black">
                {{ $t('label.common.views') }}: {{ getViews | comma }}
              </div>
              <div class="title-1 text--black px-2">
                {{ $t('label.common.estimatedMinutesWatched') }}:
                {{ getEstimatedMinutesWatched | comma }}
              </div>
              <div class="title-1 text--black">
                {{ $t('label.common.subscribers') }}:
                {{ getSubscribers | comma }}
              </div>
            </v-row>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-toolbar-title>

    <!--
  <v-list-item>
          <v-list-item-title>{{
            $t('label.common.estimatedMinutesWatched')
          }}</v-list-item-title>
          <v-list-item-title class="text-right">
            {{ getEstimatedMinutesWatched | comma }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>{{
            $t('label.common.subscribers')
          }}</v-list-item-title>
          <v-list-item-title class="text-right">
            {{ getSubscribers | comma }}
          </v-list-item-title>
        </v-list-item>
  -->

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

  @Getter('getViews', { namespace: 'channel' })
  getViews!: number;
  @Getter('getEstimatedMinutesWatched', { namespace: 'channel' })
  getEstimatedMinutesWatched!: number;
  @Getter('getSubscribers', { namespace: 'channel' })
  getSubscribers!: number;

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
