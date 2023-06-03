<template>
  <v-container>
    <p>{{ getCount }}</p>
    <v-btn @click="test" color="primary">test</v-btn>
  </v-container>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['getCount']),
  methods: {
    async test() {
      await this.$store.dispatch('fetchCount');
    },
  },
  // async mounted() {
  //   await this.$store.dispatch('fetchCount');
  // },
};
</script>
