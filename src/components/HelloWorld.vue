<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { ModalName } from './modals/modalName';

const store = useStore();

const state = reactive({ page: 1 });

const packagesData = computed(() => {
  return store.getters.getPackages;
});

const packagesLoading = computed(() => {
  return store.getters.loadingStatus;
});

onMounted(() => {
  store.dispatch('fetchCount', { limit: 10, page: 1 });
});

const handleLoadMore = (type: 'more' | 'prev') => {
  const statePage = state.page;
  const page = type === 'more' ? statePage + 1 : statePage - 1;
  state.page = page;

  store.dispatch('fetchCount', {
    limit: 10,
    page,
  });
};

function handleOpenModal(name: string) {
  console.log(1);
  store.commit('addModal', {
    isOpen: true,
    name: ModalName.PackageDetails,
    props: {
      name,
    },
  });
}
</script>

<template>
  <v-card>
    <v-table>
      <thead>
        <tr>
          <th class="text-left text-subtitle-1">#</th>
          <th class="text-left text-subtitle-1">Name</th>
          <th class="text-left text-subtitle-1">Hits</th>
          <th class="text-left text-subtitle-1">Bandwidth</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="item"
          v-for="(item, index) in packagesData"
          :key="item.name"
          @click="handleOpenModal(item.name)"
        >
          <td>
            {{
              state.page >= 2
                ? index + 1 + state.page * 10
                : index + 1
            }}
          </td>
          <td class="text-body-1">{{ item.name }}</td>
          <td class="text-body-1">{{ item.hits }}</td>
          <td class="text-body-1">{{ item.bandwidth }}</td>
        </tr>
      </tbody>
    </v-table>
    <div class="d-flex flex-row align-center justify-center">
      <v-btn
        :disabled="state.page === 1"
        size="small"
        :loading="packagesLoading"
        @click="handleLoadMore('prev')"
        color="primary"
        icon="mdi-arrow-left"
      ></v-btn>
      <div class="text-subtitle-2 pa-5">page: {{ state.page }}</div>

      <v-btn
        @click="handleLoadMore('more')"
        size="small"
        :loading="packagesLoading"
        icon="mdi-arrow-right"
        color="primary"
      ></v-btn>
    </div>
  </v-card>
</template>

<style lang="scss">
.item {
  &:hover {
    opacity: 0.7;
  }
  td {
    cursor: pointer;
  }
}
</style>
