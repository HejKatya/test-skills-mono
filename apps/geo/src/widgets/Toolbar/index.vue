<script setup lang="ts">
import { toggleTheme } from 'src/app/providers/theme';
import { useTheme } from 'src/shared/lib/theme/useTheme';

import { getToolbarItems } from './toolbar.config';

const theme = useTheme();
</script>

<template>
  <div
    class="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 flex gap-2.5 px-3 py-2 rounded-xl backdrop-blur bg-[var(--toolbar-bg)] text-[var(--text)]"
  >
    <button
      v-for="item in getToolbarItems(theme)"
      :key="item.id"
      class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800"
      @click="item.onClick()"
    >
      <div :class="[item.icon, 'text-2xl text-dark-600 dark:text-white']" />
    </button>
  </div>
</template>
