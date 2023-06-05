<script setup lang="ts">
import Modal from '../Modal/Modal.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ModalName } from '../modalName';
import PackageModalContainer from './PackageModalContainer/PackageModalContainer.vue';
const store = useStore();

const modal = computed(() => {
  return store.getters.getModalByName(ModalName.PackageDetails);
});
const handleCloseModal = () => {
  store.commit('removeModal', ModalName.PackageDetails);
};

console.log(modal);
</script>

<template>
  <Modal :is-open="!!modal?.isOpen" :on-close="handleCloseModal">
    <PackageModalContainer :name="modal?.props.name as string" />
  </Modal>
</template>
