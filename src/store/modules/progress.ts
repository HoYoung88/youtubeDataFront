import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '..';

export interface ProgressState {
  active: boolean;
}

const state: ProgressState = {
  active: false,
};

const getters: GetterTree<ProgressState, RootState> = {
  getActive: (state) => state.active,
};

const mutations: MutationTree<ProgressState> = {
  setActive: (state, isActive: boolean) => (state.active = isActive),
};

const actions: ActionTree<ProgressState, RootState> = {
  onShowProgress: (context, isActive: boolean) => {
    context.commit('setActive', isActive);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
} as Module<ProgressState, RootState>;
