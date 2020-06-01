import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '..';
import api from '@/apis';
import ChannelData from '@/assets/data/channel.json';

interface ChannelState {
  channelInfo?: Api.ChannelInfo;
}

const state: ChannelState = {
  channelInfo: undefined,
};

const getters: GetterTree<ChannelState, RootState> = {
  getTitle: (state: ChannelState) => state.channelInfo?.title,
  getBanner: (state: ChannelState) => state.channelInfo?.banner,
  getDescription: (state: ChannelState) => state.channelInfo?.description,
  getThumbnails: (state: ChannelState) => state.channelInfo?.thumbnails,
  getCards: (state: ChannelState) => state.channelInfo?.cards,
};

const mutations: MutationTree<ChannelState> = {
  setChannelInfo: (state: ChannelState, channelInfo: Api.ChannelInfo) =>
    (state.channelInfo = channelInfo),
};
const actions: ActionTree<ChannelState, RootState> = {
  asyncChannelData: async (context, channelId: string) => {
    context.dispatch('progress/onShowProgress', true, { root: true });
    const { data } = await api.channel(channelId);
    const { cards } = ChannelData;
    data.cards = cards;

    context.commit('setChannelInfo', data);
    context.dispatch('progress/onShowProgress', false, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
} as Module<ChannelState, RootState>;
