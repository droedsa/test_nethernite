<script setup lang="ts">
import { reactive, watch } from 'vue';

const props = defineProps<{
  isOpen: boolean;
  onClose: () => void;
  minWidth?: string;
  maxWidth?: string;
}>();

const state = reactive({ dialog: false });

const handleClose = () => {
  state.dialog = false;
};

watch(
  () => props.isOpen,
  (val) => {
    state.dialog = val;
  },
);

watch(
  () => state.dialog,
  () => {
    {
      if (!state.dialog) {
        props.onClose();
      }
    }
  },
);
</script>

<template>
  <v-dialog
    class="w-100"
    :min-width="minWidth || '500px'"
    :max-width="maxWidth || '800px'"
    @close="props.onClose"
    v-model="state.dialog"
    @on-update:model-value="props.onClose"
    width="100%"
  >
    <v-card>
      <div class="pa-4">
        <slot />
      </div>

      <v-card-actions>
        <div class="d-flex flex-row-reverse w-100">
          <div class="w-25">
            <v-btn
              variant="text"
              class="w-25"
              color="gray"
              block="true"
              @click="handleClose"
            >
              Close
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
