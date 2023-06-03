import { Module } from 'vuex';
import { RootState } from '../../index';

export type PackagesModuleType = {
  count: number;
};

const packagesModule: Module<PackagesModuleType, RootState> = {
  state: () => ({
    count: 1,
  }),
  mutations: {
    increment(state) {
      // `state` is the local module state
      state.count++;
    },
    updateCount(state, count) {
      console.log(count);
      return (state.count += count);
    },
  },
  actions: {
    async fetchCount(context) {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      ).then((res) => res.json());

      console.log(res);
      context.commit('updateCount', 10);
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
};

export default packagesModule;
