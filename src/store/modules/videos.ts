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
  asyncVideoData: async (
    context,
    params: { channelId: string; page: number }
  ) => {
    const { channelId, page } = params;
    context.dispatch('progress/onShowProgress', true, { root: true });

    if (page == 1) context.commit('removeVideos');

    const { data } = await api.vidoes(channelId, { page });
    data.data.forEach((item, index) => {
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
