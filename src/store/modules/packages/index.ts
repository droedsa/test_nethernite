import { Module } from 'vuex';
import { RootState } from '../../index';
import api from '../../../service/api';

export type Package = {
  type: string;
  name: string;
  hits: number;
  bandwidth: number;
  prev: {
    hits: number;
    bandwidth: number;
  };
  links: {
    self: string;
    versions: string;
  };
};

export type PackagesModuleType = {
  data: null | Package[];
  loading: boolean;
};

const packagesModule: Module<PackagesModuleType, RootState> = {
  state: () => ({
    data: null,
    loading: false,
  }),
  mutations: {
    setPackages(state, payload: { data: Package[] }) {
      const { data } = payload;
      state.data = data;
    },
    setLoading(state, payload: boolean) {
      state.loading = payload;
    },
  },
  actions: {
    async fetchCount(
      context,
      payload: { limit: number; page: number },
    ) {
      const { page, limit } = payload;
      try {
        context.commit('setLoading', true);
        const res = await api.packages.getList(page, limit);
        context.commit('setPackages', {
          data: res.data,
          page: page,
        });
      } catch (e) {
        console.error(e);
      } finally {
        context.commit('setLoading', false);
      }
    },
  },
  getters: {
    getPackages(state) {
      return state.data;
    },
    loadingStatus(state) {
      return state.loading;
    },
  },
};

export default packagesModule;
