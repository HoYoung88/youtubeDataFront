import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '..';

export interface DrawerState {
  drawer: boolean | null;
}

const state: DrawerState = {
  drawer: null,
};

const getters: GetterTree<DrawerState, RootState> = {
  getDrawer: (state: DrawerState) => state.drawer,
};

const mutations: MutationTree<DrawerState> = {
  setDrawer: (state: DrawerState, drawer: boolean) => (state.drawer = drawer),
};

const actions: ActionTree<DrawerState, RootState> = {
  onActionDrawer: (context) => {
    context.commit('setDrawer', !context.getters['getDrawer']);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
} as Module<DrawerState, RootState>;
