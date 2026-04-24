<template>
  <Toast />
  <Routing />
</template>

<script setup lang="ts">
// TODO: изменение темы отслеживать здесь
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
// );
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
