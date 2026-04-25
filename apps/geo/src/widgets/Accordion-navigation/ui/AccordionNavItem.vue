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
    <div v-if="item.children?.length" class="flex flex-col gap-1.5 pl-4">
      <div v-for="child in item.children" :key="child.label">
        <AccordionNavItem v-if="child.children?.length" :item="child" />
        <Button
          v-else
          :label="child.label"
          root-class="!w-full !justify-start !bg-white !px-2.5 !py-1.5 !text-sm !rounded-lg !text-[#0f172b] hover:!bg-slate-100 [&_*]:!bg-transparent"
        />
      </div>
    </div>
  </AccordionPanel>
</template>
