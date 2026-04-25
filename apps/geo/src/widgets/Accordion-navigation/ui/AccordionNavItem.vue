<script setup lang="ts">
import type { NavItem } from 'src/pages/Tasks/Task3/ui/NewNavigation/types';
import AccordionPanel from 'src/shared/ui/accordionpanel';
import Button from 'src/shared/ui/button';

defineProps<{
  item: NavItem;
}>();
</script>

<template>
  <AccordionPanel :title="item.label" hoverable>
    <div v-if="item.children?.length" class="children">
      <div v-for="child in item.children" :key="child.label">
        <AccordionNavItem v-if="child.children?.length" :item="child" />
        <Button
          v-else
          :label="child.label"
          root-class="nav-button"
          class="root-btn"
          :style="{ color: '#0f172b' }"
        />
      </div>
    </div>
  </AccordionPanel>
</template>

<style scoped>
.children {
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.nav-button {
  background-color: #fff;
  width: 100%;
  justify-content: flex-start;
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 8px;
}

.nav-button .text-inherit {
  color: #0f172b;
}
</style>
