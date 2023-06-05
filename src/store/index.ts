import { createStore } from 'vuex';

import packages, { PackagesModuleType } from './modules/packages';
import modals from './modules/modals';

export type RootState = {
  packages: PackagesModuleType;
};

// Create a new store instance.
export const store = createStore({
  modules: { packages, modals },
});
