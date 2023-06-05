import { Module } from 'vuex';
import { RootState } from '../../index';
import api from '../../../service/api';
import { Package, PackageModel } from './packagesType';

export type PackagesModuleType = {
  packages: null | Package[];
  package: null | PackageModel;
  packageLoading: boolean;
  packagesLoading: boolean;
};

const packagesModule: Module<PackagesModuleType, RootState> = {
  state: () => ({
    packages: null,
    packagesLoading: false,
    package: null,
    packageLoading: false,
  }),
  mutations: {
    setPackages(state, payload: { data: Package[] }) {
      const { data } = payload;
      state.packages = data;
    },
    setPackagesLoading(state, payload: boolean) {
      state.packagesLoading = payload;
    },
    setPackageLoading(state, payload: boolean) {
      state.packageLoading = payload;
    },
    setPackage(state, payload: PackageModel) {
      state.package = payload;
    },
    clearPackage(state) {
      state.package = null;
      state.packageLoading = false;
    },
  },
  actions: {
    async fetchCount(
      context,
      payload: { limit: number; page: number },
    ) {
      const { page, limit } = payload;
      try {
        context.commit('setPackagesLoading', true);
        const res = await api.packages.getList(page, limit);
        context.commit('setPackages', {
          data: res.data,
          page: page,
        });
      } catch (e) {
        console.error(e);
      } finally {
        context.commit('setPackagesLoading', false);
      }
    },
    async getPackage(context, payload: string) {
      try {
        context.commit('setPackageLoading', true);
        const res = await api.packages.getPackageInfo(
          payload || 'test',
        );
        context.commit('setPackage', res.data);
      } catch (e) {
        console.error(e);
      } finally {
        context.commit('setPackageLoading', false);
      }
    },
  },
  getters: {
    getPackages(state) {
      return state.packages;
    },
    loadingStatus(state) {
      return state.packagesLoading;
    },
    getPackageInfo(state) {
      return state.package;
    },
    getPackagesLoadingStatus(state) {
      return state.packageLoading;
    },
  },
};

export default packagesModule;
