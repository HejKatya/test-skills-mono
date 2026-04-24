<script setup lang="ts">
import { toggleTheme } from 'src/app/providers/theme';
import { useTheme } from 'src/shared/lib/theme/useTheme';

import { getToolbarItems } from './toolbar.config';

const theme = useTheme();
</script>

<template>
  <div class="toolbar">
    <button
      v-for="item in getToolbarItems(theme)"
      :key="item.id"
      class="toolbar-btn"
      @click="item.id === 'theme' && toggleTheme()"
    >
      <component :is="item.icon" class="w-6 h-6" />
    </button>
  </div>
</template>

<style scoped>
.toolbar {
  z-index: 10;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 10px;

  padding: 8px 12px;
  border-radius: 12px;

  backdrop-filter: blur(8px);
  background: var(--toolbar-bg);
  color: var(--text);
}

.toolbar-btn {
  border-radius: 12px;
  padding: 4px;
}
.toolbar-btn:hover {
  background-color: var(--hover-bg);
}
</style>
