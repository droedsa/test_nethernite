// vuex.d.ts
import { Store } from 'vuex';
import { RootState } from './index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
