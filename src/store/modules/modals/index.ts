import { Module } from 'vuex';
import { RootState } from '../../index';

export type ModalProps = {
  name: string;
  isOpen?: boolean;
  props?: { [key: string]: any };
};

export interface ModalsState {
  modals: ModalProps[];
}

const modalsModule: Module<ModalsState, RootState> = {
  state: () => ({
    modals: [],
  }),
  mutations: {
    addModal(state, payload: ModalProps) {
      state.modals = [{ ...payload, isOpen: true }, ...state.modals];
    },
    removeModal(state, payload: string) {
      state.modals = state.modals.filter(
        (modal) => modal.name !== payload,
      );
    },
    removeAllModals(state) {
      state.modals = [];
    },
    closeAllModals(state) {
      state.modals = state.modals.map((modal) => ({
        ...modal,
        isOpen: false,
      }));
    },
    closeModal(state, payload: string) {
      state.modals = state.modals.map((modal) => {
        if (modal.name === payload) {
          return { ...modal, isOpen: false };
        }
        return modal;
      });
    },
    updateModalProps(
      state,
      payload: { name: string; props: { [key: string]: any } },
    ) {
      state.modals = state.modals.map((modal) => {
        if (modal.name === payload.name) {
          return {
            ...modal,
            props: { ...modal.props, ...payload.props },
          };
        }
        return modal;
      });
    },
    replaceModalProps(
      state,
      payload: { name: string; props: { [key: string]: any } },
    ) {
      state.modals = state.modals.map((modal) => {
        if (modal.name === payload.name) {
          return { ...modal, props: payload.props };
        }
        return modal;
      });
    },
  },
  actions: {},
  getters: {
    getModalByName: (state) => (name: string) => {
      return state.modals.find((modal) => modal.name === name);
    },
  },
};

export default modalsModule;
