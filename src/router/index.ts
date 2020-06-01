import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home/Index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/analytics/:channelId',
    name: 'analytics',
    component: () =>
      import(
        /* webpackChunkName: "yt-analytics" */ '@/views/analytics/Index.vue'
      ),
    props: true,
  },
  // {
  //   path: '/channel/:channelId',
  //   name: 'channel',
  //   component: () =>
  //     import(/* webpackChunkName: "channel" */ '@/views/channel/Index.vue'),
  //   props: true,
  // },
  // {
  //   path: '/channel/:channelId/playlist',
  //   name: 'playlist',
  //   component: () =>
  //     import(/* webpackChunkName: "playlist" */ '@/views/playlist/Index.vue'),
  //   props: true,
  // },
  // {
  //   path: '/channel/:channelId/videos',
  //   name: 'videos',
  //   component: () =>
  //     import(/* webpackChunkName: "videos" */ '@/views/videos/Index.vue'),
  //   props: true,
  // },
  // {
  //   path: '/sample/Chart',
  //   name: 'Chart',
  //   component: () =>
  //     import(/* webpackChunkName: "videos" */ '@/views/sample/Chart.vue'),
  //   props: true,
  // },
  // {
  //   path: '/sample',
  //   name: 'Char2t',
  //   component: () =>
  //     import(/* webpackChunkName: "videos" */ '@/views/sample/TabSample.vue'),
  //   props: true,
  // },
  {
    path: '*',
    name: 'error',
    component: () => import('@/views/error/Index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
