<template>
  <v-container fluid>
    <channel-info></channel-info>
    <channel-analytics-card-list></channel-analytics-card-list>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Action } from '@/lib/VuePropertyDecorator';
import ChannelInfo from '@/components/channel/ChannelInfo.vue';
import ChannelAnalyticsCardList from '@/components/channel/AnalyticsCardList.vue';

@Component({ components: { ChannelInfo, ChannelAnalyticsCardList } })
export default class ChannelIndex extends Vue {
  @Prop({ type: String, required: true }) channelId!: string;

  @Action('asyncChannelData', { namespace: 'channel' })
  asyncChannelData!: (channelId: string) => Promise<void>;

  beforeMount() {
    this.asyncChannelData(this.channelId);
  }
}
</script>

<style lang="scss"></style>
