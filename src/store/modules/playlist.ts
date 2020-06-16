import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '..';

// import type { PlaylistItem } from '@/apis';
import api from '@/apis';

export interface PlaylistState {
  playlist: Api.PlaylistItem[];
}

const state: PlaylistState = {
  playlist: [],
};

const getters: GetterTree<PlaylistState, RootState> = {
  getPlaylist: (state) => state.playlist,
};

const mutations: MutationTree<PlaylistState> = {
  setPlaylistItem: (state, playlistItem: Api.PlaylistItem) =>
    state.playlist.push(playlistItem),
  setPlaylist: (state, playlist: Api.PlaylistItem[]) =>
    (state.playlist = playlist),
  removePlaylist: (state) => state.playlist.splice(0, state.playlist.length),
};

const actions: ActionTree<PlaylistState, RootState> = {
  asyncPlaylistData: async (
    context,
    params: { channelId: string; page: number }
  ) => {
    const { channelId, page } = params;
    context.dispatch('progress/onShowProgress', true, { root: true });
    if (page == 1) context.commit('removePlaylist');
    const { data } = await api.playlist(channelId, { page });
    data.data.forEach((item, index) => {
      context.commit('setPlaylistItem', item);
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
} as Module<PlaylistState, RootState>;
