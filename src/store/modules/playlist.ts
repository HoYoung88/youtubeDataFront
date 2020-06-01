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
  asyncPlaylistData: async (context, channelId: string) => {
    context.dispatch('progress/onShowProgress', true, { root: true });
    context.commit('removePlaylist');
    const { data } = await api.playlist(channelId);
    context.commit('setPlaylist', data);
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
