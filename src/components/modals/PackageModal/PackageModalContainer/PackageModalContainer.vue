<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive } from 'vue';
import { useStore } from 'vuex';
import PackageInfo from './components/PackageInfo.vue';

const store = useStore();
const props = defineProps<{
  name?: string;
}>();

const packageData = computed(() => {
  return store.getters.getPackageInfo;
});

const loading = computed(() => {
  return store.getters.getPackagesLoadingStatus;
});

const form = reactive({
  package: '',
  rules: [
    (value) => {
      if (value) return true;
      return 'You must enter a package.';
    },
  ],
});

const handleSubmit = () => {
  if (!form.package) return;
  store.dispatch('getPackage', form.package);
};

onMounted(() => {
  if (props.name) {
    form.package = props.name;

    store.dispatch('getPackage', props.name);
  }
});

onUnmounted(() => {
  store.commit('clearPackage');
});
</script>

<template>
  <div>
    <v-form
      class="d-flex form"
      validate-on="submit lazy"
      @submit.prevent="handleSubmit"
    >
      <v-text-field
        v-model="form.package"
        variant="outlined"
        :rules="form.rules"
        color="primary"
        clearable="true"
        label="Search"
      ></v-text-field>

      <v-btn
        :loading="loading"
        height="55px"
        width="120px"
        type="submit"
        color="primary"
        >Search</v-btn
      >
    </v-form>

    <div class="package-container">
      <div v-if="packageData !== null">
        <PackageInfo
          :package-info="packageData"
          :name="form.package || ''"
        />
      </div>
      <div v-else class="d-flex align-center justify-center h-100">
        <v-progress-circular
          size="60"
          indeterminate
          color="primary"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.form {
  display: flex;
  column-gap: 5px;
}
.package-container {
  height: 200px;
}
</style>
