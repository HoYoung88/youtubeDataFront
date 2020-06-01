import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '..';

export interface SnackbarOpt {
  text: string;
  color?: string;
}
export interface SnackbarState {
  snackbar: boolean;
  options: SnackbarOpt;
}

const state: SnackbarState = {
  snackbar: false,
  options: {
    text: '',
    color: 'success',
  },
};

const getters: GetterTree<SnackbarState, RootState> = {
  getSnackbar: (state: SnackbarState) => state.snackbar,
  getText: (state: SnackbarState) => state.options.text,
  getColor: (state: SnackbarState) => state.options.color,
};

const mutations: MutationTree<SnackbarState> = {
  setSnackbar: (state: SnackbarState, snackbar: boolean) =>
    (state.snackbar = snackbar),
  setText: (state: SnackbarState, text: string) => (state.options.text = text),
  setColor: (state: SnackbarState, color: string) =>
    (state.options.color = color),
};

const actions: ActionTree<SnackbarState, RootState> = {
  showSnackbar: (context, payload: SnackbarOpt) => {
    context.commit('setSnackbar', true);
    context.commit('setText', payload.text);
    context.commit('setColor', payload.color);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
} as Module<SnackbarState, RootState>;
