<script setup lang="ts">
const props = defineProps<{
  title: string;
  value: string | number;
}>();
</script>

<template>
  <div class="d-flex align-center">
    <p class="text-subtitle-1">{{ props.title }}:</p>
    <p class="text-body-1 ml-2">{{ props.value }}</p>
  </div>
</template>
