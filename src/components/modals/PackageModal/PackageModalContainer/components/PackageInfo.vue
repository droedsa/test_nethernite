<template>
  <v-container>
    <div class="title-container mb-4">
      <span class="text-h4">{{ name }}</span>
    </div>

    <div>
      <PackageInfoItem
        title="Hits rank"
        :value="packageInfo.hits.rank"
      />
      <PackageInfoItem
        title="Bandwidth rank"
        :value="packageInfo.bandwidth.rank"
      />
      <PackageInfoItem
        title="Bandwidth total"
        :value="packageInfo.bandwidth.total"
      />
      <PackageInfoItem
        title="Hits total"
        :value="packageInfo.hits.total"
      />
    </div>
  </v-container>
</template>
<script setup lang="ts">
import PackageInfoItem from '@/components/modals/PackageModal/PackageModalContainer/components/PackageInfoItem.vue';
import { PackageModel } from '../../../../../store/modules/packages';

defineProps<{
  packageInfo: PackageModel;
  name: string;
}>();
</script>

<style lang="scss">
.title-container {
  text-align: center;
}
</style>
