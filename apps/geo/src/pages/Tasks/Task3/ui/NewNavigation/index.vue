<script setup lang="ts">
// import AccordionNavigation from 'src/widgets/Accordion-navigation/ui/AccordionNavigation.vue';
import Button from 'src/shared/ui/button';
import AccordionNavItem from 'src/widgets/Accordion-navigation/ui/AccordionNavItem.vue';

import items from './consts';

console.log(items);
</script>

<template>
  <h2 class="text-xl font-bold">Задание 3</h2>
  <div class="flex jc-sb gap-20">
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
      <!-- <AccordionNavigation :items="items" /> -->
    </div>
    <div class="nav">
      <div v-for="item in items" :key="item.label">
        <AccordionNavItem
          v-if="item.children?.length"
          :key="item.label"
          :item="item"
          class="w-300px"
        />
        <Button v-else :label="item.label" root-class="nav-button" class="root-btn" />
      </div>
    </div>
  </div>
</template>
.
<style scoped>
.nav {
  padding: 20px 16px;
  box-shadow: 4px 4px 8px 4px rgba(34, 60, 80, 0.2);
  border-radius: 8px;
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
