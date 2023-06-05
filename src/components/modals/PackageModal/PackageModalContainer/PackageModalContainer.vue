<script setup lang="ts">
import { onMounted, reactive } from 'vue';

const props = defineProps<{
  name?: string;
}>();

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
  console.log(form.package);
};

onMounted(() => {
  if (props.name) {
    form.package = props.name;
  }
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

      <v-btn height="55px" width="120px" type="submit" color="primary"
        >Search</v-btn
      >
    </v-form>
    <div></div>
  </div>
</template>

<style lang="scss">
.form {
  display: flex;
  column-gap: 5px;
}
</style>
