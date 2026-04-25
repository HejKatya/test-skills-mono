<script setup lang="ts">
import AddUserForm from 'src/widgets/AddUser/ui/AddUserForm.vue';
</script>

<template>
  <h2 class="text-xl font-bold">Задание 4</h2>
  <div class="w-150">
    1. Стек: vee-validate, zod <br />
    2. Валидировать форму для запроса /users/add<br />
    3. Вывести ошибки под инпутниками, если не ввели поле<br />
    4. Отправить запрос, если форма валидна<br />
    5. Можно использовать любые удобные инпутники, например из primevue<br />
  </div>
  <AddUserForm class="mt-5" />
</template>
