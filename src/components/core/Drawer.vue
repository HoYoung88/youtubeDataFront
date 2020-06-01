<template>
  <v-navigation-drawer app v-model="drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> </v-list-item-title>
        <v-list-item-subtitle> </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        link
        exact
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Getter, Mutation } from '@/lib/VuePropertyDecorator';

@Component({ components: {} })
export default class CoreDrawer extends Vue {
  @Getter('getDrawer', { namespace: 'drawer' })
  getDrawer!: boolean;

  @Mutation('setDrawer', { namespace: 'drawer' })
  setDrawer!: (value: boolean) => void;

  get drawer() {
    return this.getDrawer;
  }

  set drawer(value: boolean) {
    this.setDrawer(value);
  }
  items = [
    {
      icon: 'fas fa-chart-line',
      title: 'channel',
      to: '/channel/UCYP2aGg8h_9JHqNQBHNKp7w/',
    },
    {
      icon: 'fas fa-list',
      title: 'playlist',
      to: '/channel/UCYP2aGg8h_9JHqNQBHNKp7w/playlist',
    },
    {
      icon: 'fas fa-video',
      title: 'videos',
      to: '/channel/UCYP2aGg8h_9JHqNQBHNKp7w/videos',
    },
    // {
    //   title: 'rtables',
    //   icon: 'mdi-clipboard-outline',
    //   to: '/tables/regular-tables',
    // },
    // {
    //   title: 'typography',
    //   icon: 'mdi-format-font',
    //   to: '/components/typography',
    // },
    // {
    //   title: 'icons',
    //   icon: 'mdi-chart-bubble',
    //   to: '/components/icons',
    // },
    // {
    //   title: 'google',
    //   icon: 'mdi-map-marker',
    //   to: '/maps/google-maps',
    // },
    // {
    //   title: 'notifications',
    //   icon: 'mdi-bell',
    //   to: '/components/notifications',
    // },
  ];
}
</script>

<style lang="scss" scoped></style>
