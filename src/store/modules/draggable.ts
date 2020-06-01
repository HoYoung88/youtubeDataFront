import type { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
import type { RootState } from '..';

export interface DraggableState<T> {
  list: T[];
}

const state: DraggableState<any> = {
  list: [],
};

const getters: GetterTree<DraggableState<any>, RootState> = {
  getDraggableList: <T>(state: DraggableState<T>) => state.list,
};

const mutations: MutationTree<DraggableState<any>> = {
  setDraggableList: <T>(state: DraggableState<T>, payload: T[]) =>
    (state.list = payload),
};

const actions: ActionTree<DraggableState<any>, RootState> = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
} as Module<DraggableState<any>, RootState>;
