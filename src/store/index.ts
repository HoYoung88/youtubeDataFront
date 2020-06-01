import Vue from 'vue';
import Vuex from 'vuex';
import drawer from './modules/drawer';
import channel from './modules/channel';
import playlist from './modules/playlist';
import progress from './modules/progress';
import videos from './modules/videos';
import draggable from './modules/draggable';
import snackbar from './modules/snackbar';

Vue.use(Vuex);

export interface RootState {
  [elem: string]: any;
}

export default new Vuex.Store<RootState>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    drawer,
    channel,
    playlist,
    progress,
    videos,
    draggable,
    snackbar,
  },
});
