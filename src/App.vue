<template>
  <v-app>
    <v-main class="pa-10">
      <HelloWorld />
      <PackageModal />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import PackageModal from './components/modals/PackageModal/PackageModal.vue';
</script>
