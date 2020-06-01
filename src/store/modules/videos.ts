import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '..';
import api from '@/apis';

export interface VideosState {
  videos: Api.VideoItem[];
}

const state: VideosState = {
  videos: [],
};

const getters: GetterTree<VideosState, RootState> = {
  getVideos: (state) => state.videos,
};

const mutations: MutationTree<VideosState> = {
  setVideoItem: (state, video: Api.VideoItem) => state.videos.push(video),
  setVideo: (state, videos: Api.VideoItem[]) => (state.videos = videos),
  removeVideos: (state) => state.videos.splice(0, state.videos.length),
};

const actions: ActionTree<VideosState, RootState> = {
  asyncVideoData: async (context, channelId) => {
    context.dispatch('progress/onShowProgress', true, { root: true });
    context.commit('removeVideos');
    const { data } = await api.vidoes(channelId);
    // context.commit('setVideo', data);
    data.forEach((item, index) => {
      // if (index <= 8) context.commit('setVideoItem', item);
      context.commit('setVideoItem', item);
    });
    context.dispatch('progress/onShowProgress', false, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
} as Module<VideosState, RootState>;
