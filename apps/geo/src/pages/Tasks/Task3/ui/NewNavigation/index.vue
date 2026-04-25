<script setup lang="ts">
// import AccordionNavigation from 'src/widgets/Accordion-navigation/ui/AccordionNavigation.vue';
import Button from 'src/shared/ui/button';
import AccordionNavItem from 'src/widgets/Accordion-navigation/ui/AccordionNavItem.vue';

import items from './consts';

console.log(items);
</script>

<template>
  <h2 class="text-xl font-bold">Задание 3</h2>
  <div class="flex jc-sb gap-20 min-h-[calc(100vh-120px)] items-stretch">
    <div class="w-150">
      Написать компонент навигации используя раскрывающийся список <br />
      использовать компоненты shared/ui/accordionpanel и shared/ui/button<br /><br />
      Пример пропсов, которые должен принимать компонент в файле consts.ts<br /><br />
      <a
        href="https://www.figma.com/design/JRrVNBIw4c7fufsZGJwU6a/test-skills?m=auto&t=i7q88bKCQMLhuT1e-6"
        class="text-blue"
      >
        Фигма с компонентом навигации.
      </a>
      Точь в точь стиль можно не повторять, главное показать отсупы у дочерних элементов<br />
      и чтобы функционально компонент удовлетворял, т.е. открывались подпункты
    </div>
    <div
      class="nav w-350px h-[calc(100vh-120px)] flex items-center overflow-hidden py-5 px-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-lg bg-white"
    >
      <div class="nav-content w-full max-h-full overflow-y-auto overflow-y-auto scrollbar-thin">
        <div v-for="item in items" :key="item.label">
          <AccordionNavItem
            v-if="item.children?.length"
            :key="item.label"
            :item="item"
            class="w-300px"
          />
          <Button
            v-else
            :label="item.label"
            root-class="nav-button"
            class="root-btn bg-white w-full flex justify-start py-1.5 px-2.5 text-[14px] rounded-lg hover:bg-slate-100 text-[#0f172b]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
