<script setup lang="ts">
import Modal from '../Modal/Modal.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ModalNameEnum } from '../modalNameEnum';
import PackageModalContainer from './PackageModalContainer/PackageModalContainer.vue';

const store = useStore();
const modal = computed(() => {
  return store.getters.getModalByName(ModalNameEnum.PackageDetails);
});
const handleCloseModal = () => {
  store.commit('removeModal', ModalNameEnum.PackageDetails);
};
</script>

<template>
  <Modal
    max-width="800px"
    min-width="300px"
    :is-open="!!modal?.isOpen"
    :on-close="handleCloseModal"
  >
    <PackageModalContainer :name="modal?.props.name as string" />
  </Modal>
</template>
