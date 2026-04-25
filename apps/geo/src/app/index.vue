<template>
  <Toast
    position="top-right"
    :pt="{
      message: {
        class: 'rounded-xl border border-green-200 bg-green-50 shadow-lg',
      },
      content: {
        class: 'p-5',
      },
      text: {
        class: 'm-0',
      },
      summary: {
        class: 'text-sm font-semibold text-green-900',
      },
      detail: {
        class: 'text-sm text-green-700',
      },
      closeButton: {
        class: 'hidden',
      },
    }"
  />
  <Routing />
</template>

<script setup lang="ts">
import { watch } from 'vue';
import Toast from 'primevue/toast';
import { Routing } from 'src/pages';
import { useTheme } from 'src/shared/lib/theme/useTheme';

const theme = useTheme();

watch(
  theme,
  (newTheme) => {
    if (newTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  },
  { immediate: true },
);
</script>

<!-- // TODO: изменение темы отслеживать здесь
// watch(
//   theme,
//   (newTheme) => {
//     if (newTheme === 'dark') {
//       document.body.classList.add('dark');
//     } else {
//       document.body.classList.remove('dark');
//     }
//   },
//   { immediate: true },
// ); -->
